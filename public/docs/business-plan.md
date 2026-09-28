# QUIVANTA

## Global market conviction. One onchain workspace.

**Business plan · 18 September 2026 · Version 1.0**  
**Audience:** prospective founders, investors, operators, liquidity providers and technical reviewers.  
**Selected identity:** QUIVANTA · `quivanta.xyz` · `@quivanta`  
**Name:** quote + vantage; pronounced “ki-VAN-ta.” The selected domain and handle are a naming recommendation until the owner completes registration. See the naming evidence delivered with the project for the time and limits of availability checks.

### Executive investment thesis

QUIVANTA is an independent project developing an onchain venue for global stock-benchmark perpetual futures on Robinhood Chain. Its wedge is a clear, session-aware trading experience: understand the market, see whether its reference session is open, inspect the execution and liquidation rules, and manage exposure through a single wallet interface. The current dUSD contract at the documented testnet address is immutable historical infrastructure whose on-chain name remains `LATQOR Demo USD`; the current source and interface use QUIVANTA presentation copy without claiming that the deployed token was renamed.

The long-term ambition is a programmable global macro trading layer. The testnet product covers **32 synthetic benchmark markets with up to 20x leverage**, giving users the reference project's breadth of market discovery and simulated exposure. A future licensed real-money launch has a separate, deliberately staged scope: prove that a small group of eligible, experienced traders repeatedly uses three well-specified benchmark markets, with reliable data, controlled leverage and solvent settlement. Production expansion follows evidence about demand, execution quality and risk capacity.

The delivered product is a **deployed version 2 testnet prototype**, not a live financial service. Its two contracts are source-verified on the testnet explorer, 13 local EVM tests passed, all 32 synthetic markets were confirmed enabled onchain, and a real faucet → approval → deposit → 20x open → close → withdrawal smoke test passed on 18 September 2026. It uses a custom faucet token, operator-published demonstration prices and bounded settlement. This demonstrates the transaction loop; it does not establish production security, licensing, market liquidity or business demand. Testnet balances have no monetary value. The project has no verified customers, booked revenue, signed partners or committed liquidity providers at the date of this plan.

The proposed commercial model is a 6 basis point execution fee per filled notional, with 2.6 basis points remaining after modeled variable allocations. At $90,000 of monthly fixed operating expense, this model requires approximately **$346.2 million of monthly executed volume** to break even before tax and exceptional costs. The base case does not reach monthly operating break-even in its first modeled year. This is a venture hypothesis requiring disciplined validation, not a return forecast.

An illustrative **$2.5 million operating capital raise** would fund $450,000 of prelaunch work, 18 months of $90,000 fixed operating expense, and $430,000 of contingency, before revenue. Production trading collateral, an initial insurance reserve and liquidity-provider capital are separate funding requirements. No token sale is assumed.

## 1. The problem and the customer

### A specific job to be done

An experienced onchain trader develops a view on Japanese equities after an earnings cycle, or wants to compare Japanese, German and UK equity risk. Today that trader may face fragmented accounts, inconsistent collateral, unfamiliar market schedules and uncertainty about what an onchain quote actually represents outside the underlying exchange's session.

QUIVANTA's proposed job is: **“Let me express and manage a transparent benchmark view from my wallet, with clear market hours, execution conditions and collateral accounting.”** Convenience matters, but knowing when a price can be trusted is the defining product requirement.

The product offers derivative exposure to a benchmark. It does not confer ownership of underlying shares, voting rights, dividends or a claim on an ETF. Benchmark names and index values may be subject to licensing. Local index points are a quotation convention; settlement currency and the return calculation must be stated separately.

### Initial customer profile

| Segment | Relevant behavior | Initial service | Exclusion or qualification |
|---|---|---|---|
| Experienced onchain macro traders | Already understand wallet custody, margin and liquidation | 32-market testnet; three licensed markets proposed for initial real-money service | Only regions and customer categories approved by counsel |
| Small professional trading teams | Need programmatic access and observable risk | Documented API and risk reports after the consumer workflow is stable | Identity, entity and contractual review before production access |
| Market commentators and educators | Explain markets and send high-intent traffic | Public session atlas, educational scenario tools, disclosed referral terms | No undisclosed sponsorship or misleading performance claims |
| Liquidity providers and market makers | Allocate risk capital against measurable execution flow | Independently reviewed risk terms and reporting | Sophisticated counterparties; no retail yield promise |

The initial audience excludes users seeking passive guaranteed income, beginners who do not understand leverage, and users in unsupported jurisdictions. Country availability is a launch decision made with qualified counsel, not an implication of a permissionless blockchain.

### Evidence to obtain before claiming product-market fit

Conduct 30 structured interviews across the first two segments. Ask about the last actual global-equity trade, current venue, spread, collateral friction, market-hour surprises and willingness to change behavior. Record demonstrated behavior separately from enthusiasm. Recruit 50 supervised testnet participants; require at least 20 to return independently in a later week and at least 10 to explain the closed-session execution policy correctly. No incentive should depend on notional volume or aggressive leverage.

## 2. Market opportunity and positioning

### Bottom-up opportunity model

The addressable market cannot be inferred from total equity capitalization. Equity ownership is not perpetual trading demand, and trading volume is not revenue.

For a first operating target, suppose QUIVANTA could eventually serve **10,000 eligible active traders**, each executing **$80,000 per month**. That would produce $800 million in monthly notional, $480,000 in monthly gross execution fees at 6 basis points, and $208,000 in monthly contribution at 2.6 basis points. These are planning assumptions; neither audience size nor trading frequency has been validated. Revenue remains sensitive to fee competition, concentration in a few traders, and the cost of servicing volatile flow.

The base first-year exit target of 3,300 active traders represents 33% of this deliberately small serviceable target, not a share of the global stock market. It is still ambitious. A more credible near-term milestone is 100 independently retained eligible traders with positive contribution and no material operational incidents.

### Competitive reference points

| Reference | Observed strength | Implication for QUIVANTA |
|---|---|---|
| Perpdex / PerpIndex | Latest 18 September snapshot lists 32 benchmarks, one USDG balance, local index points and orders executed at the next live reference price | Category validation and an interaction reference; breadth alone is not defensible |
| Hyperliquid | Broad asset coverage, strong trading destination, developer distribution and execution-focused product story | Competing on generic “trade anything” is weak; QUIVANTA needs a specific workflow and transparent market policy |
| Jupiter | Product-first navigation and direct wallet-to-trade experience | Minimize friction between discovery and a comprehensible ticket |
| Aave | Clear product segmentation, visible risk information and developer tools | Explain product maturity and risk with the same care as benefits |
| Ethena | Product mechanism, transparency dashboards and methodology disclosures | Back important assertions with inspectable data and definitions |

This is a focused public-site review, not a comprehensive market-share study or an audit of competitor contracts. The precise observed facts, sources and limitations are in [research.md](research.md).

### What can become defensible

1. **Session and execution intelligence:** licensed calendars, opening-auction rules, holiday coverage, data quality and predictable execution around gaps.
2. **A verified distribution channel:** educators and trading tools that send retained, eligible users rather than incentive-driven volume.
3. **Risk and execution history:** measurable slippage, oracle uptime, independently reviewed reserves and disciplined market expansion.
4. **Integration quality:** a stable interface for trading tools, reporting and account abstraction after core execution is proven.

No defensibility is created merely by deploying to Robinhood Chain or by reproducing another interface. All QUIVANTA branding, copy, illustrations and code should be original; competitor trademarks and proprietary assets are not part of the product.

## 3. Product scope: delivered, next and production

### The delivered prototype

| Capability | Current scope | Material limitation |
|---|---|---|
| Public website | Vue-based English landing page and trading workspace | A product demonstration, not a production exchange |
| Wallet connection | Compatible injected EVM wallet, chain selection and transaction prompts | Wallet connection proves account control; it is not KYC or a persistent authenticated server session |
| Network | Robinhood Chain Testnet, chain ID 46630 | Mainnet chain ID 4663 is a separate network and is outside this deployment |
| Collateral | Custom six-decimal dUSD faucet token | No value; not USDG, USDC, a redeemable stablecoin or an official Robinhood token |
| Markets | 32 synthetic benchmarks across the Americas, Europe, Asia/Pacific and Middle East/Africa; featured NIKKEI, DAX and FTSE100; includes JCI | Unlicensed demonstration values; not live index feeds; the list includes regional STOXX50 and must not be called “32 countries” |
| Trading loop | Faucet, approve, deposit, open long/short, close and withdraw | Contract constraints and deployed receipt govern actual behavior |
| Risk limits | 1–20x leverage, isolated position margin of 1–10,000 dUSD | Prototype limits are not evidence that comparable real-money exposure is safe |
| Price authority | Operator publishes demonstration quotes; 15-minute freshness bound | Centralized mock oracle; fresh does not mean economically correct |
| Settlement | Profit and loss capped at the position's initial margin; payout capacity reserved | Intentionally bounded simulation, not uncapped perpetual economics |
| Liquidation | Eligible at 90% initial-margin loss in the prototype | No independently operated keeper network is implied |
| Stale-price recovery | Position owner can recover initial margin at zero PnL after 24 hours without a quote | Demonstration escape hatch; not fair-value settlement for real-money derivatives |
| Trading fees / funding | No production fee or funding engine | Commercial fee assumptions below are future design proposals |
| Market sessions | Production session-aware execution is specified below | The prototype does not implement a licensed exchange calendar or closed-session queue |

At 20x, an approximately 4.5% adverse synthetic index move reaches the prototype's 90%-margin liquidation threshold; an approximately 5% move reaches its ±100%-margin PnL cap, before integer-rounding effects. The higher ceiling expands simulation coverage, not capital safety. All 32 test markets share the same synthetic-price and bounded-settlement model.

Contract source, tests, deployment records and the engineering handoff are the source of truth for a particular build. A mined deployment must be verified on the correct chain before it is described as deployed. A successful local demonstration is not a public launch.

**Observed deployment evidence:** the version 2 [sandbox engine](https://explorer.testnet.chain.robinhood.com/address/0xaa790F4610a38e925f19fB054E2ADf68cD8de38d?tab=contract) and [dUSD token](https://explorer.testnet.chain.robinhood.com/address/0x6bfcF1343F7c1631cb5aD61513ae07Ab09f2F1ea?tab=contract) are deployed on chain 46630. The completed smoke test exercised 20x leverage, confirmed all 32 markets enabled, closed position 1, [withdrew its test collateral](https://explorer.testnet.chain.robinhood.com/tx/0x599c0d291f4fd5d5567109cccce9bdbf90eb9cd91cd787fbd2adc7354bf673b8), and reconciled 500,000 **worthless dUSD** in the engine to accounted balances. This reserve is not $500,000 of assets, TVL, LP investment or revenue. Source verification means published code matches explorer verification requirements; it is not an independent security audit. Receipts and the 13-test local validation record are in `contracts/deployments/`; earlier version 1 receipts are historical only.

A supplied optional local keeper republishes all 32 fixed demonstration quotes every five minutes when an operator starts it. A one-cycle check passed and the process was stopped. No hosted or continuously running service is part of the handoff; see the runbook to operate a supervised demonstration.

### First production product, if all gates pass

Start with **no more than three licensed benchmarks**, one approved collateral asset and isolated margin. Japan, Germany and the UK are the initial research candidates, selected to span Asian and European sessions and recognizable macro themes. Their final inclusion depends on actual licensing, data quality, customer demand and hedge availability; none is commercially secured. Maintain one account balance for convenience while isolating each position's committed margin. Cross-margin, portfolio netting and automatic collateral rehypothecation are not launch features.

The public interface must show the reference instrument, quotation units, source timestamp, session status, collateral asset, maximum leverage, applicable fees, estimated liquidation level and the precise policy for an order that cannot execute immediately. Transaction details should be inspectable before wallet approval.

A watchlist and session atlas can remain useful without a connected wallet. The trading workflow is: review market → connect wallet → complete required eligibility checks → fund approved collateral → preview order and risk → sign → inspect fill and position → close → withdraw. Deposits, trading and withdrawals require observable success or failure states.

### Expansion options after evidence

Add markets only when each passes data licensing, sufficient trading demand, risk modeling and liquidity criteria. API access, professional reporting and third-party interface integrations follow reliable first-party execution. A token, DAO or referral-point program is not needed to validate the business and is not promised.

## 4. Execution, data and market integrity

### Benchmark specification

Every production market needs a versioned market specification: index administrator, exact index variant, currency, price-return versus total-return basis, official session calendar, time zone and daylight-saving rules, data license, primary and secondary data sources, quote precision, settlement formula and exceptional-event procedure. A shorthand such as “NIKKEI” is not a legal or economic specification.

For an entry notional `N`, entry index value `P0`, exit value `P1`, and direction `s` of +1 for long or −1 for short, the proposed baseline price-return exposure is `PnL = s × N × (P1 / P0 − 1)`, denominated in the settlement asset, before funding and fees. This does not automatically add currency exposure. Any FX-linked product must have a separate specification and data source.

### Proposed session policy

| Condition | Order behavior | Position / liquidation behavior |
|---|---|---|
| Open session; valid fresh feed | Execute subject to price bounds, liquidity and risk caps | Mark positions and permit liquidation under published rules |
| Normal overnight or holiday closure | Accept an explicitly queued instruction only; reserve its required margin; allow cancellation until execution cutoff | Show last valid price and its timestamp; do not imply fresh continuous discovery |
| First valid post-open reference | Execute queued instructions only if unexpired, within user bounds and adequately margined | Apply reopening checks and a published grace/recovery policy; gap losses remain possible |
| Feed stale, disputed, missing or zero | Stop price-sensitive execution; expire or retain orders according to disclosed TTL | Suspend price-dependent liquidations; expose incident status |
| Exchange halt / exceptional event | Close that market to new risk and publish the applicable procedure | Reduce or settle exposure only using previously disclosed valid-reference rules |
| Sequencer outage or recovery | Reject new risk while down and during recovery grace | Resume only after fresh data and chain-health checks |

**“Submit any time” does not mean “fill any time at a fresh equity price.”** An order queued over a weekend can face an opening gap or fail its bounds. Users must see this before submission. A calendar service should cover exchange holidays, extraordinary closures, daylight saving and early closes; a weekday-only clock is insufficient.

For an initial production implementation, it may be safer to disable order creation when a reference session is closed than to ship an incomplete queue. The final policy must match audited contract and keeper behavior exactly. This plan does not claim that a queue is in the delivered prototype.

### Oracle architecture

Robinhood's official documentation describes Chainlink feeds and Data Streams, but it does not establish that all intended national-index products are licensed and available to QUIVANTA. Obtain written market-by-market coverage, redistribution and derivative-use rights before using a provider name in marketing.

The production adapter should verify positive values, decimals, sequence/replay constraints, timestamp freshness, signed-report validity, per-market deviation limits and L2 sequencer health. Validate a licensed secondary reference; disagreement beyond a published threshold pauses execution rather than silently switching an economic benchmark. A staleness threshold must reflect the actual feed heartbeat and market session, not an arbitrary 15-minute prototype setting.

Stock Token feeds may include reinvested dividends through a token multiplier. They must not be substituted for cash-index or headline-share feeds without specifying the resulting economic difference. Index changes, rebalance events and data corrections need versioned handling.

## 5. Liquidity, margin and solvency

### Production architecture decision

The proposed initial design is a collateralized liquidity vault that takes the residual side of trader exposure, with external professional hedging where legal and operationally viable. This is a design hypothesis; it needs an independent risk review before implementation. A professional market-maker RFQ design may be preferable if the vault cannot secure reliable hedges or withstand opening gaps.

Liquidity providers earn the modeled share of fees and bear specified inventory and counterparty risks. Fee share is variable income, not a guaranteed APY. Trader profits are liabilities to the liquidity system, not operating revenue. The business must not count collateral deposits, LP deposits or unrealized trader losses as customer revenue.

### Initial risk framework to validate

- For a future real-money beta, start at at most 5x leverage and lower it when gap scenarios or hedge availability require; use isolated margin and explicit per-account limits. The 20x **synthetic testnet** ceiling is not a production leverage commitment.
- Set per-market gross and net open-interest caps from stress loss capacity, not nominal TVL. Initial illustrative limits are gross notional no greater than 0.5× eligible LP equity for a market, combined gross notional no greater than 1.5×, and a tighter correlated net-directional cap. These are candidate limits, not certified safe values.
- Mark LP net asset value after accrued fees, trader liabilities, hedge valuations, funding and impairment. Show concentration and liquidity haircuts.
- Test single-market 10% gaps, correlated 20% equity moves, delayed oracle updates, collateral depeg, illiquid hedges, bridge interruption and a withdrawal rush. Combine shocks; isolated single-variable tests understate risk.
- Treat closed-session exposure as unhedgeable unless the actual hedge is available. Tighten new-risk caps before closures and publish the policy in advance.
- Gate LP withdrawals on realized available liquidity and a disclosed queue. Never promise instant redemption while capital supports open trader liabilities.
- Keep protocol operating cash, user collateral, LP equity and restricted insurance assets separately accounted for and separately controlled.

Illustrative capital targets for a private beta are **$5 million of independently committed LP equity** and **$250,000 of initial restricted risk reserve**. Neither is secured. These amounts do not prove adequate capitalization; scenario losses determine the actual required capital and OI caps. They are separate from the $2.5 million operating-capital request.

### Funding and liquidations

Production funding should converge perp exposure toward its specified reference without turning a stale cash-index price into artificial tradable information. Use a documented premium/skew methodology, bounded updates and published caps. Define whether funding accrues during closures and why; a conservative initial option is to suspend premium-based funding when no valid tradable reference exists and separately disclose any inventory charge. Funding flows between counterparties or LPs and traders; it is excluded from modeled protocol revenue.

Maintenance margin and liquidation parameters must be calibrated using gap data and transaction latency. Independent keepers should perform permissionless, ideally partial liquidation against valid data, with deterministic incentives and recovery procedures. Show the difference between an estimated liquidation level and guaranteed execution; opening gaps can cross both liquidation and bankruptcy levels.

The loss waterfall should be fixed in contracts and customer terms: position margin → designated LP risk capital → restricted insurance under defined triggers → explicitly disclosed emergency resolution. Do not silently socialize losses or describe insurance as a guarantee. If an automatic deleveraging mechanism is chosen, document allocation priority and affected user rights before launch.

## 6. Compliance and commercial prerequisites

A legal entity and qualified jurisdiction-specific counsel must determine the classification of the product, operator, frontend, liquidity vault and marketing. The review must address derivatives dealing and venue permissions, financial promotions, customer categorization, AML/sanctions duties, recordkeeping, privacy and complaints. Decentralized settlement and English-language marketing do not remove these obligations.

Before production access, adopt a written country and customer-type matrix. Default to no real-money access where permission or required controls are unresolved. Evaluate the US, UK, EEA, China and other intended markets separately; the same rule cannot be assumed to apply everywhere. The FCA's published ban on derivatives referencing certain cryptoassets is not, by itself, a classification decision for an equity-index derivative. Counsel must assess the actual product and applicable CFD, futures or securities regime.

Required commercial agreements include benchmark trademark/derivative licensing, real-time and historical data use, public display and redistribution rights, hedge venue and market-maker terms, oracle and infrastructure service levels, and collateral issuance/redemption exposure. A paid API key alone may not authorize redistribution or derivative creation. Do not claim partnerships with Robinhood, Chainlink, benchmark administrators or liquidity providers without a signed and publishable basis.

Use an original visual identity and independently written software. The website should say “Built on Robinhood Chain” only as a factual infrastructure description and identify QUIVANTA as independent. All public claims about audits, reserves, uptime and deployment require dated evidence. No token price, return, guaranteed yield or unannounced airdrop is part of the launch message.

## 7. Business model and financial assumptions

### Proposed fee waterfall

One basis point is 0.01% of executed notional. Opening and closing are separate executions; a $10,000 open followed by a $10,000 close produces $20,000 of reported notional and $12 of fees at 6 basis points. Do not count the same execution again as both sides of a matched trade in public volume reporting.

| Item | Basis points of executed volume | Treatment |
|---|---:|---|
| Gross execution fee | 6.00 | Customer trading fee before allocations |
| LP / market-maker allocation | −2.00 | Variable liquidity servicing cost |
| Referral / distribution allocation | −0.50 | Assumes every execution bears the weighted-average allocation |
| Variable oracle / execution data | −0.25 | Additional to fixed infrastructure subscriptions |
| Restricted insurance allocation | −0.50 | Not available to fund ordinary operations |
| Keeper / transaction subsidy | −0.15 | Variable operational servicing |
| **Operating contribution** | **2.60** | **43.33% of gross execution fees** |

These are unnegotiated assumptions. Actual accounting treatment of pass-through allocations and insurance transfers should be set with an accountant. This model uses a cash contribution view so restricted amounts are not mistaken for spendable operating cash. Slippage and spread are customer execution costs, not silently assumed revenue. Funding, collateral interest, token sales and licensing/API revenue are excluded.

### Fixed monthly operating expense

| Cost category | Monthly USD | Composition / assumption |
|---|---:|---|
| Core team | 56,000 | Two protocol engineers, frontend/product, risk, founder/operations and growth coverage; illustrative blended costs |
| Ongoing legal / compliance | 10,000 | Retainer and operating support; launch legal work is budgeted separately |
| Infrastructure, monitoring and fixed data | 7,000 | Redundant RPC, indexing, support tooling and subscriptions |
| Acquisition experiments | 12,000 | Capped paid channels; no open-ended volume rewards |
| Administration and customer operations | 5,000 | Accounting, tools and general support |
| **Total** | **90,000** | **$1,080,000 per 12 modeled months** |

### Scenario model: first 12 months after a permitted mainnet launch

The model clock begins with a qualified commercial launch, not today and not testnet deployment. All scenarios assume the same fee waterfall and fixed cost to isolate adoption sensitivity. Monthly active traders execute at least one qualifying trade; their notional includes both opening and closing fills. Data are available in [financial-model.csv](financial-model.csv).

| Metric | Bear | Base | Bull |
|---|---:|---:|---:|
| Month 1 active traders | 60 | 120 | 200 |
| Month 12 active traders | 750 | 3,300 | 9,000 |
| Monthly notional per active trader | $40,000 | $80,000 | $120,000 |
| Year 1 executed notional | $148,400,000 | $1,233,600,000 | $4,500,000,000 |
| Year 1 gross execution fees | $89,040 | $740,160 | $2,700,000 |
| Year 1 variable allocations | $50,456 | $419,424 | $1,530,000 |
| Year 1 operating contribution | $38,584 | $320,736 | $1,170,000 |
| Year 1 fixed operating expense | $1,080,000 | $1,080,000 | $1,080,000 |
| **Year 1 operating result** | **−$1,041,416** | **−$759,264** | **+$90,000** |
| Month 12 executed notional | $30,000,000 | $264,000,000 | $1,080,000,000 |
| Month 12 contribution | $7,800 | $68,640 | $280,800 |
| **Month 12 operating result** | **−$82,200** | **−$21,360** | **+$190,800** |

Operating results exclude one-time prelaunch expenditure, financing, taxes and catastrophic trading losses. The bull case must not be read as guaranteed profitability; its higher volume also increases operational and inventory demands that could raise fixed or variable costs.

**Break-even:** `$90,000 / 0.00026 = $346,153,846` monthly executed notional. At $80,000 monthly volume per active trader, approximately **4,327 active traders** are required. If gross fees compress from 6 to 4 basis points while the modeled 3.4 basis points of allocations remain unchanged, contribution falls to 0.6 basis points and break-even rises to **$1.5 billion per month**. Fee competitiveness is a central business risk.

### Retention and acquisition economics

At the base notional assumption, contribution is **$20.80 per active trader-month**. An illustrative 85% monthly active-retention rate gives `1 / (1 − 0.85) = 6.67` expected active months and **$138.67 contribution lifetime value**, before fixed support costs, discounting or changing activity. This is a simplified stationary cohort model, not an observed LTV.

The 85% production retention assumption is materially more demanding than the 40% testnet D30 experiment target below. Different user populations and incentives make them non-interchangeable; production economics must be rerun using actual fee-paying cohorts before paid acquisition scales.

At $60 incremental paid CAC, undiscounted contribution LTV/CAC is **2.31×**. The simple no-churn payback of `$60 / $20.80 = 2.88` ignores churn. Solving `$20.80 × (1 − 0.85^n) / (1 − 0.85) = $60` gives approximately **3.49 monthly contribution periods**, so cumulative expected contribution first exceeds CAC in the fourth monthly period. To exceed 3× contribution LTV/CAC at the assumed retention and activity, paid CAC must be at most **$46.22**. Do not scale paid acquisition merely because gross-fee LTV looks positive.

At month 12 in the base case, 3,300 active traders and 85% retention of the previous month's 2,800 imply **920 newly activated traders**. A $12,000 monthly paid acquisition budget at $60 CAC buys at most 200; approximately **720 must arrive through organic or referral distribution**. The variable referral allocation is already deducted in contribution and must not be deducted a second time in CAC calculations. This dependence on organic distribution is an explicit assumption to test. If it fails, reduce the adoption forecast or raise the acquisition budget and recompute burn.

### Funding and runway

| Operating capital use | USD |
|---|---:|
| Prelaunch legal, entity, licensing diligence | 160,000 |
| Security audits and economic review | 180,000 |
| Initial data integration and reliability work | 80,000 |
| Brand, launch setup and operations | 30,000 |
| 18 months fixed operating expense | 1,620,000 |
| Contingency | 430,000 |
| **Illustrative operating raise** | **2,500,000** |

This provides the explicitly budgeted 18 operating months plus prelaunch work and contingency before contribution revenue. It is not a claim of unrestricted 27.8-month runway: prelaunch spending and reserved contingency must be deducted first. Testnet produces no revenue. LP capital and initial insurance reserve must be separately secured and may not be used for salaries or marketing.

## 8. Acquisition → activation → retention → revenue → reinvestment

### The operating loop

Publish a useful session briefing → attract qualified visitors → let them inspect an understandable market → complete the testnet round trip → collect voluntary, structured feedback → fix a measurable friction point → bring successful users back for the next session → measure retained activity → introduce permitted live trading only after gates pass → allocate collected fees to liquidity, risk reserves and operations → reinvest a capped portion of operating contribution in channels that produce retained eligible users.

This loop should work before any token incentives. A testnet transaction is a usability signal; it is not evidence of willingness to risk real capital or pay a production fee.

### Initial distribution programs

| Program | Action | Conversion event | Weekly owner | Stop / scale rule |
|---|---|---|---|---|
| Session briefing | Three original English explanations per week with actual source links and clear simulation labels | Qualified visit → market inspection | Growth lead + risk editor | Continue if 4-week engaged return rate exceeds 20%; revise otherwise |
| Guided testnet cohort | 10–15 experienced users per cohort; complete deposit/open/close/withdraw | Successful independent round trip | Product lead | Fix the workflow before recruiting more if completion falls below 70% |
| Educator distribution | Approach relevant educators after legal review; disclose fees | Verified retained eligible trader | Founder + compliance | Scale only on net contribution and compliant messaging |
| Market-session utility | Share a calendar/atlas and educational event notes | Weekly return without trading incentive | Product + content | Prioritize if retained visits lead to completed testing |
| Developer integration | Publish contract/API examples after interfaces stabilize | Independent integration and recurring usage | Protocol lead | No integration bounty without working code and a real user case |

Messages and outreach templates can be prepared, but external posting or messaging should be performed only by the project owner or an explicitly authorized operator. No outreach has been sent as part of this plan.

### Instrumentation and definitions

Use consent-aware analytics and minimize wallet-level personal data. Events should include `market_viewed`, `wallet_connected`, `network_ready`, `faucet_confirmed`, `approval_confirmed`, `deposit_confirmed`, `position_opened`, `position_closed`, `withdrawal_confirmed`, `transaction_failed`, `stale_quote_seen` and `feedback_received`. These are an implementation backlog, not a claim that analytics are installed.

Activation on testnet means a confirmed deposit, open, close and withdrawal by the same pseudonymous participant, with session/version and chain ID recorded. Production activation additionally requires a permitted eligible account and a completed fee-bearing round trip. Deduplicate repeated wallets and bot loops when reporting people; do not equate addresses with humans.

Report D7 and D30 return rates by cohort, completion time, transaction failure reasons, fee-paying retained actives, net revenue retention, trader concentration, real execution slippage, unresolved support incidents and contribution after all variable costs. Exclude self-trading, incentive loops, internal testing and market-maker churn from customer-demand claims.

### Reinvestment policy

Honor the fee waterfall first. Keep insurance allocations restricted. Preserve at least 12 months of forecast operating runway before discretionary growth expansion. Propose allocating up to 25% of positive monthly operating contribution to incremental acquisition only when three consecutive mature cohorts meet the contribution-LTV/CAC target and risk limits remain healthy. The remaining contribution offsets burn and funds reliability. Revise the financial model before approving any spend above the fixed $12,000 acquisition envelope.

## 9. Execution plan and stage gates

The schedule is measured from the owner's kickoff. Dependencies can extend it; day 90 is a review, not an unconditional mainnet date.

| Period | Deliverables | Owner | Exit evidence |
|---|---|---|---|
| Days 1–30 | Secure selected identity; publish testnet-only site after hosting setup; verify deployments; run 30 interviews; resolve highest-severity UX defects; commission legal and data-licensing scopes | Founder, product, protocol, counsel | Working round trip, public addresses and receipts, interview report, scoped external proposals |
| Days 31–60 | 100 qualified testnet participants; at least 70 completed independent round trips; documented session/oracle spec; risk simulation; first independent security review | Product, risk, protocol | Cohort report, failure-rate dashboard, written data coverage, prioritized audit findings |
| Days 61–90 | Target 400 cumulative qualified testers and 200 independent round trips; at least 40% D30 return for cohorts old enough to measure; finalize production design and financing decision | Founder, risk, growth | No unresolved critical defects, evidence-based demand review, costed legal/liquidity path |
| After day 90, only if gates pass | Restricted production beta with small account/OI caps, a controlled user cohort and an incident drill | Accountable launch committee | All mainnet gates signed; monitored capped launch; reversible expansion plan |

These are targets, not current metrics. If interview demand is weak, users misunderstand the product, or returning activity depends on rewards, extend or stop the testnet experiment rather than advertise an imminent launch.

### Mandatory production gates

1. Written legal opinions and a country/customer matrix, legal entity, required permissions and compliant marketing process.
2. Executed benchmark and market-data rights for each launched market; production oracle coverage and failure policy verified.
3. Independent smart-contract audit plus economic/solvency review; critical and high findings resolved and retested; public disclosure scope approved.
4. Real production collateral accepted through a reviewed token integration; bridge/redemption/depeg procedures documented.
5. Committed LP and risk capital, stress-calibrated OI limits and enforceable withdrawal/loss-waterfall rules.
6. Independent keeper operations, monitoring, incident response, backups, multisig control and emergency drills.
7. Successful controlled production end-to-end exercise with tiny authorized amounts, reconciliation and chain-specific verification.
8. Evidence of retained qualified demand, an updated model, sufficient operating runway and an accountable signed go/no-go decision.

## 10. Team, governance and accountability

Initially assign one accountable person to each function: founder/CEO for capital and strategy; protocol lead for contract delivery; product lead for wallet UX and accessibility; risk lead for market and solvency rules; compliance lead or retained counsel for permitted operations; and growth lead for documented acquisition quality. Small teams may share roles, but the same person should not unilaterally change risk limits, sign treasury transfers and approve their own production release.

Separate deployer, oracle, treasury and emergency roles. The supplied development key is testnet-only; never publish it, include it in frontend code or reuse it as a production authority. Production should use hardware-backed multisig administration, least privilege, logged parameter changes and appropriate timelocks. An emergency pause policy must specify which exits remain available.

Weekly: review incidents, cohort behavior, contribution and next experiments. Monthly: reconcile onchain balances to liabilities and reserves, review market/LP concentration, update runway and publish a factual development report. Quarterly: reassess legal scope, licenses, stress limits and market additions.

## 11. Principal risks and decisions

| Risk | Early signal | Response / decision owner |
|---|---|---|
| Legal or data rights unavailable | Counsel cannot approve target market; benchmark license unaffordable | Remove market or stop production launch; founder/counsel |
| Thin durable demand | Low unincentivized D30 return and no willingness to pay | Narrow customer segment or stop acquisition; product/founder |
| Adverse selection and gaps | Profitable toxic flow, concentrated skew, unhedgeable closures | Lower OI/leverage, pause new risk, revise architecture; risk lead |
| Oracle or sequencer failure | Stale/disputed feed, failed reports, uptime feed down | Deterministic pause and incident process; protocol/risk |
| Collateral impairment | Depeg, issuer freeze, impaired redemption | Apply predeclared limits and halt new exposure; risk/treasury |
| Fee compression | CAC payback worsens; competitors undercut fee | Reprice and remodel; do not subsidize indefinitely; founder |
| Operational key compromise | Unauthorized role or parameter changes | Pause appropriate actions, revoke authority, investigate; security lead |
| Misleading marketing | Demo prices called live; affiliation/audit claim lacks evidence | Remove claim and correct public record; compliance/product |
| Liquidity capital unavailable | No signed risk capital despite usage interest | Keep testnet; consider RFQ/infrastructure model; founder |

## 12. Investment decision framework

QUIVANTA is worth pursuing if transparent global-market execution produces a small but repeatedly active customer base, the legal and data path is viable, and execution can be delivered with positive contribution and solvent risk capacity. It should not advance to real money merely because the prototype looks complete.

The next financing decision should be based on the testnet cohort report, signed or credibly priced licenses, reviewed production architecture, committed risk capital and an updated bottom-up model. The complete business loop is a measurable operating system with explicit stop conditions; this document does not substitute for running those experiments.

### Source and assumption policy

Observed competitor and chain facts are documented in [research.md](research.md), checked 18 September 2026. Financial, hiring, acquisition, capital, market-policy and roadmap numbers in this plan are **QUIVANTA planning assumptions** unless explicitly identified as delivered functionality. No partner, customer, licensing agreement, audit certification or current revenue is invented. Operational release instructions and the remaining owner actions are in [launch-runbook.md](launch-runbook.md).
