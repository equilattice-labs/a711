# QUIVANTA validation record

**Checked:** 27 September 2026 (UTC)  
**Scope:** Robinhood Chain testnet prototype and rebranded public materials.

## Automated checks

| Check | Result |
| --- | --- |
| `npm run check:format` | Passed after formatting the updated Vue and CSS files. |
| `npm run build` | Passed; Vite generated the static website in `website/dist/`. |
| `npm --prefix contracts test` | Passed; 13 local EVM tests. |
| `python scripts/render-docs.py` | Passed; rendered the business plan HTML and synchronized website document copies. |
| `python brand/generate_assets.py` | Passed; regenerated the QUIVANTA artwork and social assets. |

The contract test runner emitted a Ganache µWS compatibility warning and used its JavaScript fallback. It did not affect test results.

## Browser review

The local website was reviewed at desktop (1440 px) and mobile (390 px) widths. The home market workspace rendered at both sizes, the market search and region filters were exercised, and `/trade?market=NIKKEI` retained the expected market selection and testnet disclosures. The wallet dialog behavior was reviewed for Escape dismissal and focus restoration. No real wallet transaction was signed as part of this UI review.

Screenshots from the review are stored under `output/playwright/`.

## Deployment and product boundaries

- The displayed network is Robinhood Chain Testnet, chain ID `46630`.
- Quotes shown in the website and launch artwork are synthetic demonstration data, not live market prices.
- Testnet dUSD has no monetary value. The deployed token's immutable on-chain name remains `LATQOR Demo USD`; the rebrand does not rename that deployment.
- Contract addresses, transaction receipts and source-verification evidence remain tied to their original deployments.
- The X posts are prepared copy and images only. No account or domain was registered and no post was published in this workflow.
- The public materials do not claim Robinhood affiliation, an audit, production readiness, customer traction, or real-money trading.

## Availability evidence

The selected `quivanta.xyz` domain and `@quivanta` X username returned available responses during the read-only checks recorded in [name-availability.md](name-availability.md). Availability is time-sensitive and is not a registration or trademark clearance.
