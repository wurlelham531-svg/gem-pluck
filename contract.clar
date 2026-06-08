;; gem-pluck -- pluck a gem from one of six chambers (Clarity 4)

(define-data-var total-plucks uint u0)
(define-map gem-counts uint uint)
(define-map user-last-gem principal uint)
(define-map user-plucks principal uint)

(define-public (pluck (gem-id uint))
  (begin
    (asserts! (and (>= gem-id u1) (<= gem-id u6)) (err u100))
    (let ((cur (default-to u0 (map-get? gem-counts gem-id)))
          (mine (default-to u0 (map-get? user-plucks tx-sender))))
      (map-set gem-counts gem-id (+ cur u1))
      (map-set user-last-gem tx-sender gem-id)
      (map-set user-plucks tx-sender (+ mine u1))
      (var-set total-plucks (+ (var-get total-plucks) u1))
      (print { event: "pluck", gem: gem-id, user: tx-sender, count: (+ cur u1) })
      (ok (+ cur u1)))))

(define-read-only (get-gem-count (gem-id uint))
  (default-to u0 (map-get? gem-counts gem-id)))

(define-read-only (get-user-last-gem (user principal))
  (map-get? user-last-gem user))

(define-read-only (get-user-plucks (user principal))
  (default-to u0 (map-get? user-plucks user)))

(define-read-only (total)
  (var-get total-plucks))
