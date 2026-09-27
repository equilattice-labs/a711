# ORVECTA delivery validation

Checked on 27 September 2026. This report describes the delivered **experimental testnet**, not a production financial service.

## Build and deployment

- `npm run build`: passed. Vue 3/Vite production output is in `website/dist/`.
- `npm run check:format`: passed for Vue components, JavaScript, CSS and website configuration.
- Production preview at `http://127.0.0.1:4173`: homepage, direct `/trade?market=NIKKEI`, and `/learn` all rendered successfully. Page titles and headings were checked; no horizontal overflow at the 1280px preview check.
- `/docs/business-plan.pdf` returned HTTP 200 with a PDF content type. Its SHA-256 content matches the delivery copy in `docs/`.
- The documented dUSD address was read directly on Robinhood Chain Testnet: its immutable on-chain name is `LATQOR Demo USD`; this historical value is preserved rather than relabeled as a new deployment. The ORVECTA source and UI use the `dUSD` symbol and make no claim that the token name changed.
- The explorer's verified source response for that address is preserved verbatim in [`output/latqor-contract-details.json`](../output/latqor-contract-details.json). A reviewable source-only snapshot, checksum manifest and lineage note are in [`contracts/deployments/historical/latqor-demo-usd/`](../contracts/deployments/historical/latqor-demo-usd/). The snapshot is the historical `LATQOR Demo USD` constructor; [`contracts/src/DemoUSD.sol`](../contracts/src/DemoUSD.sol) is the current `ORVECTA Demo USD` source for a future deployment and is not being represented as the source of the existing address.
- The final business plan has **15 pages**. Cover, body/table pages and final pagination were visually reviewed.

## Real testnet evidence

| Check | Result |
|---|---|
| Network | Official Robinhood Chain Testnet, 46630; no mainnet transaction |
| Market count | 32 enabled markets with nonzero operator demo quotes |
| Maximum leverage | 20x, enforced by the contract |
| Local contract tests | 13 passing EVM tests |
| Actual transaction cycle | Faucet → approval → deposit → 20x open → close → withdrawal passed |
| Collateral accounting | Final test collateral reconciled; bounded profit reserve preserved |
| Explorer source verification | Both final contract sources returned `Pass - Verified` |
| Operator updater | Optional five-minute keeper tested once and stopped; not a hosted service |

Machine-readable records:

- [Final deployment](../contracts/deployments/robinhood-testnet.json)
- [Local test validation](../contracts/deployments/local-validation.json)
- [Mined round-trip receipts](../contracts/deployments/smoke-test.json)
- [Explorer verification results](../contracts/deployments/source-verification.json)
- [Historical dUSD source snapshot](../contracts/deployments/historical/latqor-demo-usd/README.md)

The contract tests cover bounds, leverage, authorization, stale quotes, slippage, faucet cooldown, both position directions, loss/profit caps, liquidation, pause-safe exits, 24-hour recovery and batch initialization. A verified source and passing tests do not constitute an independent security audit.

## Browser behavior

Playwright used isolated browser sessions. The source key was never installed in a browser.

- Home at 1440px and 390px: region filters, FAQ expansion/collapse, navigation, mobile menu and wallet dialog passed.
- Learn at 1440px and 390px: rendered without horizontal overflow; mobile navigation into the terminal passed.
- Wallet without an installed provider: useful installation/mobile-browser guidance; initial focus, Shift+Tab/Tab wrap, Escape and focus restoration passed.
- Terminal: all 32 markets visible; Indonesia search selected **JCI**; the onchain quote loaded as **7,180.40 synthetic points**; region selection returned the correct two Middle East/Africa markets; unmatched search displayed an empty result message.
- Order input: seven decimal places were rejected; 250 dUSD margin at 20x displayed 5,000 dUSD notional; long/short controls changed state. These are interface calculations, not live-market performance.
- Production deep links and downloadable plan were tested independently of the development server.
- Final production responsive sweep: Home, Trade and Learn at **360, 768, 1024, 1280 and 1440px** all had zero horizontal overflow. The entrance illustration was constrained so its animation cannot temporarily enlarge the document.

Evidence scripts and screenshots are in `output/playwright/`, including `terminal-check.js`, `production-check.js`, and the `final-home-*` / `final-trade-*` screenshots.

### Injected wallet integration

The production build passed **nine additional wallet checks** using a synthetic EIP-1193 provider and random, unfunded ephemeral keys: connection rejection/retry, successful connection, valid local ownership signature, account-change proof reset, normal network switch, unknown-chain add-and-switch, transaction cancellation messaging, empty-account portfolio reset, and absence of mainnet/broadcast activity. The mock rejected its single transaction request, which targeted the final dUSD token with chain ID `0xb626`. No real transaction was sent by these browser tests, and the supplied key was never used in the browser. See [walletqa-report.json](../output/playwright/walletqa-report.json).

## Accessibility and visual checks

- Final automated axe WCAG 2 A/AA and 2.1 AA checks reported **zero violations** for Home and Learn at 1440px and 390px, and for the mobile wallet dialog.
- Keyboard behavior was exercised explicitly for the wallet dialog and FAQ controls.
- Muted text contrast was darkened after the first scan; small disclosures were increased. A 1280px globe overflow was fixed and the production check repeated successfully.
- Motion respects `prefers-reduced-motion`. The illustration and charts are identified as decorative/illustrative; prices are not represented as historical feeds.
- Some image/gradient contrast and link-in-text checks remain categorized by axe as requiring manual review. No complete accessibility certification is claimed.

Detailed evidence: [QA summary](../output/playwright/qa-summary.md), [final axe results](../output/playwright/qa-final-audit.json), [wallet dialog audit](../output/playwright/qa-wallet-audit.json).

## Asset and identity validation

- Exactly three active post illustrations: `01-vision.jpg`, `02-build-deploy.jpg`, `03-build-loop.jpg`, each actual **1600 x 900 JPEG**, not renamed PNG files. Earlier CA-launch/build exports are retained only as historical/archive material.
- Avatar: 800 × 800 JPG and PNG. Banner: 1500 × 500 JPG. Website social preview: 1200 × 675 JPG.
- Editable SVG sources and the artwork generator are included. Logo wordmarks have outlined letters for portability.
- All three tweets fit the 280-character limit with standard URL adjustment; the bio fits 160 characters. Copy and alt text are English.
- Final registry/X availability check at **12:25 UTC / 20:25 Asia/Shanghai on 26 September 2026** returned `404 Object not found` for `orvecta.xyz` and `valid:true, reason:available` for `@orvecta`. Neither was registered during the task.
- Secret scan across **248 delivery files**, excluding installed dependencies, found **zero occurrences of the supplied private key**. Root `key.txt` is ignored and excluded from frontend output.

## Reference parity and deliberate prototype limits

| Reference workflow | Delivered behavior |
|---|---|
| Discover international benchmarks | Final observed 32-symbol catalog, countries, region filters and search |
| Wallet-based account | Injected EVM wallet discovery/connect, official network configuration, optional local signature proof |
| Shared collateral balance | Free test dUSD faucet, exact-amount approval, collateral deposit/withdrawal |
| Long/short at up to 20x | Real onchain test positions, previewed exposure and liquidation threshold |
| Position management | Onchain balances, open positions, capped PnL preview, close and stale recovery |
| USDG and live benchmark reference data | **Not claimed:** custom worthless dUSD and operator synthetic values |
| Closed-session queued execution | Specified in the business/production plan; not implemented as a live exchange calendar or order queue |
| Uncapped perpetual settlement and funding | **Not implemented:** sandbox settlement is bounded to ±100% of initial margin and has no funding |

The result is a complete, inspectable **testnet transaction loop with an original brand**, not a 1:1 production-equivalent exchange. Real-money deployment requires the legal, data, security, liquidity, operational and economic gates described in the business plan.
