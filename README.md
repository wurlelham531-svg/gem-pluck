# Gem Pluck

Pluck one of six gems on-chain. Each gem has its own running count, plus per-user totals — all on Stacks (Clarity 4).

## Contract

- **Address:** `SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.gem-pluck`
- **Network:** Stacks Mainnet
- **Clarity Version:** 4
- **Explorer:** [view on Hiro Explorer](https://explorer.hiro.so/SP16F6839630K5XX06KE7KVNSNMYBK89912NH6N4C.gem-pluck?chain=mainnet)

## Functions

- `(pluck gem-id)` — pluck a gem with id 1-6. Increments the global counter, the gem-specific counter, and the caller's personal count.
- `(get-gem-count gem-id)` — read-only, number of times gem `gem-id` has been plucked.
- `(get-user-last-gem user)` — read-only, last gem id a user plucked (or none).
- `(get-user-plucks user)` — read-only, total plucks by `user`.
- `(total)` — read-only, total plucks across all gems.

## Frontend

Static HTML in `frontend/`. Connect a Stacks wallet, pick a gem (1-6), pluck.

## License

MIT

---

_Last updated: 2026-06-25_
