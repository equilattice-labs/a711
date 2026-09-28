# QUIVANTA — launch and operating runbook

**Updated:** 18 September 2026.  
**Release type:** Robinhood Chain Testnet prototype.  
**Public identity:** QUIVANTA · ticker `QVNT` · `quivanta.xyz` · `@quivanta`. Availability evidence is time-sensitive; naming checks are not completed registrations.

## 1. What this release is

QUIVANTA demonstrates a 32-benchmark global-market interface and an onchain settlement loop with 1–20x simulated leverage using worthless dUSD on Robinhood Chain Testnet. It is not a licensed real-money exchange, live benchmark feed or production perpetual engine. A website deployment should retain the testnet and simulated-data disclosures.

The website is in `website/`. Contract source, executable scripts and authoritative contract behavior are in `contracts/`. Research, business assumptions and launch operations are in `docs/`. Brand and social assets are in `brand/` and `twitter/`.

### Verified testnet handoff

The final version 2 deployment and onchain smoke-test records dated 18 September 2026 show:

| Artifact | Verified result |
|---|---|
| dUSD | [`0x6bfcF1343F7c1631cb5aD61513ae07Ab09f2F1ea`](https://explorer.testnet.chain.robinhood.com/address/0x6bfcF1343F7c1631cb5aD61513ae07Ab09f2F1ea?tab=contract) — deployed and source-verified; immutable on-chain name is `LATQOR Demo USD`, while current source uses `QUIVANTA Demo USD` for any future deployment |
| Engine | [`0xaa790F4610a38e925f19fB054E2ADf68cD8de38d`](https://explorer.testnet.chain.robinhood.com/address/0xaa790F4610a38e925f19fB054E2ADf68cD8de38d?tab=contract) — deployed and source-verified |
| Round trip | Faucet, exact 100 dUSD approval, deposit 100 dUSD, open 25 dUSD margin at 20x, close at unchanged demo price, withdraw 100 dUSD — passed |
| Final withdrawal | [Transaction receipt](https://explorer.testnet.chain.robinhood.com/tx/0x599c0d291f4fd5d5567109cccce9bdbf90eb9cd91cd787fbd2adc7354bf673b8) |
| End state | Position 1 closed; user available collateral 0; engine token balance and accounted balance both 500,000 dUSD |
| Market scope | All 32 synthetic markets enabled with positive demonstration quotes; contract maximum leverage 20x |
| Local validation | 13 compiled-contract EVM tests passed; record in `contracts/deployments/local-validation.json` |
| Quote keeper | Optional five-minute local keeper supplied; one-cycle test passed, then stopped; no hosted daemon |

The seeded 500,000 dUSD is freely created demo-token inventory, not dollars, monetary TVL or committed real LP capital. Explorer source verification is not a contract audit. Contract scripts exercised this public-chain round trip; frontend wallet QA remains a separate check on the final hosted build. Prior version 1 records are archived under `contracts/deployments/v1/` and must not be used as current frontend configuration.

Never serve the repository root: it contains the private development key. Publish **only the built `website/dist/` directory** or an equivalently scoped static deployment. Domain DNS and an X account do not exist merely because their names appear in the code.

## 2. Release evidence and owner checklist

| Area | Evidence to inspect | Completion standard |
|---|---|---|
| Selected name | Delivered brand/availability research | Exact matching `quivanta.xyz` and `@quivanta`; timestamp and method preserved |
| Domain | Owner's registrar account | Registered to the correct legal owner; renewal and account recovery configured |
| X identity | Owner's authenticated X account | Handle actually assigned; profile art/bio uploaded; recovery under owner control |
| Website build | `website/package.json`, build output and QA results | Build succeeds; mobile/desktop routes and key failure states work |
| Testnet deployment | `contracts/deployments/robinhood-testnet.json` | Correct chain, nonempty bytecode, successful deployment receipts |
| Real chain round trip | `contracts/deployments/smoke-test.json` | Faucet/approval/deposit/open/close/withdraw records verified |
| Source verification | `contracts/deployments/source-verification.json` and `contracts/deployments/historical/latqor-demo-usd/` | Read actual verification status; the historical dUSD source is kept separately from the current QUIVANTA source |
| Contract tests | `npm test` output in `contracts/` | Required suite passes on the current source |
| Frontend contract configuration | Generated public `frontend.json` and frontend integration | Addresses and ABIs match the verified deployment |
| Hosting | Provider deployment record and live URL | HTTPS, correct routes, no secret files, and rollback ready |

Absence of an artifact means that step remains incomplete. A local source file or a pending transaction is not completion evidence. Re-run the relevant verification after a material source or configuration change.

## 3. Local website setup

Use a current supported Node.js version compatible with the project's package engines; Node.js 22+ is the intended baseline. From the project root in PowerShell:

```powershell
Set-Location -LiteralPath 'E:\workspace\chuangye\711\website'
npm ci
npm run dev
```

Use the local URL printed by Vite. For a production build and local preview:

```powershell
npm run build
npm run preview
```

The development and preview commands bind to localhost by default. They are not durable public hosting. Stop an existing server before starting an unnecessary duplicate. Do not put a private key in `VITE_*` variables: those values can be bundled into public JavaScript.

## 4. Contract workflow and public network identity

| Field | Required value |
|---|---|
| Network | Robinhood Chain Testnet |
| Chain ID | `46630` / `0xb626` |
| Native gas | Test ETH |
| Public RPC | `https://rpc.testnet.chain.robinhood.com` |
| Explorer | `https://explorer.testnet.chain.robinhood.com` |
| Official network source | `https://docs.robinhood.com/chain/connecting` |

Mainnet chain ID `4663` is not interchangeable with testnet. The scripts in this release check chain identity before signing. Public endpoints are rate-limited; a reliable hosted demo may eventually need a suitable provider, without changing the intended chain.

The contract README is authoritative for script flags and generated output. From the project root:

```powershell
Set-Location -LiteralPath 'E:\workspace\chuangye\711\contracts'
npm ci
npm test
npm run preflight
```

Only if a deployment does not already exist and the preflight confirms the intended funded testnet wallet:

```powershell
npm run deploy
npm run smoke
npm run verify
```

The deployment script refuses a second deployment when its existing deployment file is present. Do not delete a valid receipt simply to rerun a script. A deliberate redeployment requires a new release record, matching frontend configuration and clear retirement of the old testnet instance.

`preflight`, deployment and signing utilities read the development key from the private file in process. Do not print it, copy it into documentation, paste it into a website, export it into public configuration or include it in a support request. A public wallet address, contract address and transaction hash are appropriate evidence; a private key is not.

### Quote freshness during a demonstration

The sandbox uses owner-published sample values with a 15-minute freshness window. There is no live financial-data connection or continuously hosted quote updater in this delivery. Before a supervised demo:

```powershell
npm run refresh-prices
```

This republishes fixed demonstration values in one batch and spends test ETH. It must not be described as refreshing a licensed real-world index feed. For a supervised longer demonstration, the supplied optional local process publishes the fixed sample set every five minutes:

```powershell
npm run keeper
```

Stop it with Ctrl+C. The keeper rechecks testnet identity and publisher ownership on every publication and stops after three consecutive failures. It is not started automatically by deployment or the website and is not a hosted service. Running it depends on keeping the operator process available and funded with test ETH. For durable public hosting, use a narrowly controlled testnet key, process supervision, monitoring and gas alerts. Do not add the key to static hosting or expose a public arbitrary-price endpoint.

If the publisher stops, stale-quote rejection is expected behavior. Fix or resume the publisher; do not remove freshness checks to make the interface appear live.

## 5. Wallet and end-to-end acceptance procedure

Use a fresh test wallet with a small amount of test ETH. The operator may use the supplied key for the authorized testnet deployment scripts; the ordinary tester should control their own wallet.

1. Open the local or hosted site and confirm visible testnet and demo-price labels.
2. Open a market without connecting. Check that market descriptions and demo prices are understandable.
3. Connect a compatible injected EVM wallet. If the wallet is absent, verify that the interface gives usable installation/recovery instructions.
4. Switch or add Robinhood Chain Testnet through the wallet. Verify chain ID 46630.
5. Claim dUSD from the faucet, then inspect the explorer receipt and wallet balance. A per-address cooldown is expected.
6. Approve only the intended token spender and amount required by the interface. Verify the contract address shown in the wallet.
7. Deposit a small test amount, for example 100 dUSD. Confirm available balance after the mined transaction.
8. Open a small 1–2x position, for example 10 dUSD margin. Inspect direction, margin, notional, sample price and settlement cap before signing.
9. Confirm the position appears after receipt and survives a page refresh if it is reconstructed from chain state.
10. Close while the quote is fresh. Verify the settlement and available collateral. With the fixed sample quote unchanged, the expected PnL is zero.
11. Withdraw available collateral to the wallet. Confirm the actual token transfer and the account balance.
12. Disconnect or change accounts. Verify that account-specific state updates without showing the previous wallet's balances as current.

Record chain ID, public address, contract versions and transaction hashes. Do not collect seed phrases or ask testers to send keys. A changed demo quote can test positive/negative PnL under operator supervision; it must remain visibly simulated.

### Required failure-state checks

| State | Expected outcome |
|---|---|
| No injected wallet | Helpful connection guidance; no fake connected state |
| User rejects signature | Action stops cleanly; no claimed onchain success |
| Wrong chain | Signing blocked or chain-switch prompted |
| Insufficient test ETH | Explain gas requirement; no balance mutation assumed |
| Faucet cooldown | Explain the limitation; no repeated automated attempts |
| Insufficient dUSD / allowance | Deposit/open prevented or appropriate approval requested |
| Price older than 15 minutes | Price-sensitive action rejects; indicate stale demo data |
| Slippage exceeded | Transaction fails under contract bounds; no fabricated fill |
| Application reload | Recover public account and position state from chain |
| RPC unavailable / rate-limited | Clear retry state; preserve unsigned user input where appropriate |
| Operator pauses new risk | Deposits/opening stop as specified; available balance withdrawal remains possible |

## 6. Sandbox economic rules users must see

- dUSD is a faucet-created token with no cash value or redemption; it is not official USDG.
- All 32 benchmark markets use operator-supplied synthetic values; featured labels include NIKKEI, DAX and FTSE100. JCI represents Indonesia; regional STOXX50 means the universe must not be described as 32 countries.
- Leverage is limited to 1–20x; initial margin is bounded to 1–10,000 dUSD by the contract. This testnet leverage ceiling is not a production-risk recommendation.
- PnL is clamped to ±the position's initial margin. Maximum payout is twice initial margin, before any future rules that would require a separate release.
- Opening reserves maximum payout capacity. The operator controls demo quotes and therefore can influence demo PnL.
- Liquidation becomes eligible at 90% initial-margin loss, requires valid data and has no production keeper incentive system.
- After 24 hours without a demo quote, the trader can cancel a stale position for its original margin at zero PnL under the contract's recovery rule. This is a demonstration liveness policy, not a fair-value guarantee.
- No production funding, order book, licensed oracle, exchange-calendar queue, index licensing, independent audit, insurance mechanism or regional eligibility system is included.

Read [the contract README](../contracts/README.md) and deployed code before relying on a function. The public site and support replies must not imply that planned production mechanics already operate in the sandbox.

## 7. Register and configure the selected identity

### Domain

Recheck `quivanta.xyz` immediately before purchase through a reputable registrar. The owner should complete purchase under their own account and desired legal registrant details, with renewal, recovery and registrar security configured. A “not found” registry result only means unregistered at check time; it does not reserve the name or settle trademark rights.

Once a hosting deployment exists, enter the DNS records supplied by that hosting provider for the apex and, if desired, `www`. Use the provider's exact targets instead of copying generic IP addresses. Enable HTTPS, select one canonical hostname and configure redirects. Verify the live site from a second network and check that HTTPS certificates cover the published hostnames.

The repository does not itself purchase a domain, host DNS or provision public hosting. Those actions require an owner account and any applicable payment/terms steps.

### X account

The owner should create or rename an authenticated account to `@quivanta`, using the prepared QUIVANTA display name, bio, avatar and banner. A public missing-profile response alone is not proof of assignability; preserve the stronger naming-check evidence where provided and verify the handle during actual account setup. The final assignment and platform terms are completed by the owner.

Use the prepared English launch posts only after the linked website works publicly. Preserve testnet/simulation language. Do not use partner logos, copied competitor media, fictitious adoption numbers or airdrop promises. Check image crops on both mobile and desktop; publish the JPEG artwork supplied in `twitter/` with accessible alt text.

Before posting, verify that links lead to the owned domain and correct account. No external post or direct message is sent by this runbook.

## 8. Static hosting and deployment

The Vue frontend can be deployed to a mainstream static host. Select the project root `website`, build command `npm ci && npm run build`, and publish directory `dist`. This command is host configuration text; run local PowerShell steps separately when needed.

If the application uses history routing, configure a fallback to `index.html` for application routes and test direct navigation/refresh. If it uses hash routing, confirm the published URLs retain the expected hash path. Match the actual router implementation; do not assume a host infers it.

The public artifact should contain compiled frontend files and intentionally public documents/assets only. Check deployment output for `key.txt`, `.env`, private configuration, raw signing scripts and debug dumps. Public contract addresses and ABIs are expected; signing material is not.

Configure HTTPS, a sensible content security policy compatible with chosen assets/wallet connections, and appropriate cache headers. Keep HTML revalidation short enough to deliver upgrades; fingerprinted assets can be cached longer. Link the correct testnet explorer and provide an operator-controlled support/status channel before admitting public testers.

### Release validation

Validate home, market workspace, learning/risk content and every navigation CTA. Check desktop and narrow mobile widths, keyboard focus, text contrast, reduced motion and transaction status readability. Confirm no horizontal overflow hides the ticket or wallet controls. Run the wallet acceptance procedure on the actual host, not just localhost.

Publish a release record with version, build identifier, chain ID, contract addresses, changes, known limitations and rollback instructions. Avoid presenting local QA as independent auditing.

## 9. Day-to-day testnet operations

| Frequency | Action | Responsible role |
|---|---|---|
| Before each scheduled demo | Confirm RPC identity/health, test ETH balance, deployment bytecode, fresh sample quotes and faucet/withdrawal path | Protocol operator |
| During active demos | Watch transaction failure patterns, stale quotes, gas balance and user confusion | Protocol + product |
| Daily during public testing | Review incomplete round trips and support; reconcile visible balances against chain events | Product/operator |
| Weekly | Review cohort return, risk comprehension, bugs and next experiment; update truthful status notes | Founder + product + risk |
| Monthly | Update operating budget, data/legal dependencies and go/no-go status | Founder + counsel/risk |

If no staff will monitor the demo, describe it as an experimental sandbox and expect stale periods. Do not promise 24/7 operational uptime.

### Incident procedure

1. Identify whether the issue is frontend, RPC, quote publisher, token approval or contract behavior. Preserve public transaction evidence without collecting secrets.
2. Stop new exposure if necessary using the documented operator control; do not obstruct allowed withdrawals merely to hide a problem.
3. Show a plain status notice stating affected actions, start time and next update time.
4. For stale data, resume authorized sample publication only after verifying chain and owner identity. Never publish invented “real” market prices.
5. For a contract defect, preserve receipts, document affected balances and deploy a reviewed replacement only through a versioned migration plan.
6. Verify recovery through a small independent round trip; publish a factual postmortem for material incidents.

A lost or compromised testnet operator key should trigger retirement of that authority/deployment and updated frontend configuration as appropriate. Production key procedures require a separate reviewed multisig and incident plan.

## 10. Business validation cadence

Use the [business plan](business-plan.md) targets as hypotheses. Maintain a single weekly dashboard for qualified visitors, independently completed round trips, D7/D30 cohort return, failed transactions, comprehension errors and unresolved defects. Do not publish faucet volume as customer revenue.

Every experiment should have an owner, cost limit, duration, success threshold and decision. For example: recruit 15 experienced testers over one week, spend no more than the approved research allocation, observe completion without coaching, and prioritize fixes if fewer than 70% complete the round trip.

No paid acquisition scale-up, additional benchmark launch or mainnet promotion is automatic. Reconcile actual results into [financial-model.csv](financial-model.csv) and update the financial assumptions explicitly rather than relabeling forecasts as historical results.

## 11. Mainnet release remains a separate project

The production gates in the business plan are mandatory: legal permissions, benchmark/data rights, reliable real oracles, audited contracts, economically valid uncapped settlement and funding, market-session rules, LP/risk capital, production collateral, regional controls, monitored keepers and an accountable release decision.

The testnet key, dUSD token, fixed sample quotes, ±margin PnL cap and zero-PnL stale recovery must never be carried into real-money deployment as if they were a finished exchange design. Replacing the RPC URL and removing the testnet banner is not a mainnet launch process.

The owner can review a complete local demonstration, commercial plan and launch-material package now. Public domain ownership, X account assignment, hosting activation, external agreements and production authorization remain evidenced operational steps, not assumptions hidden in the interface.
