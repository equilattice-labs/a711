# LATQOR — research and design rationale

**Checked:** 18 September 2026, Asia/Shanghai.  
**Method:** direct, read-only HTTP retrieval of public webpages and their published stylesheets. Content and styling observations below come from returned HTML/CSS. The browser connector was unavailable in this research pass, so these notes do not claim screenshot-based visual inspection or a completed competitor transaction. Source statements describe their publishers' claims, not independent audits.

## 1. Perpdex / PerpIndex: observed proposition and workflow

| Source | Retrieval | Observed evidence | Product implication |
|---|---|---|---|
| [Perpdex homepage](https://www.perpdex.lat/) | HTTP 200 | “Every stock index. One balance”; 31 national benchmarks, local index points, USDG settlement on Robinhood Chain, up to 20x leverage | A narrowly explained product can span many markets without multiple account models |
| [Markets app](https://www.perpdex.lat/app) | HTTP 200 | Regional filters; index, exchange, mark, 24h change and leverage columns; 31 listed markets | Market discovery benefits from a scannable table and geography |
| [Japan market](https://www.perpdex.lat/market/japan) | HTTP 200 | Account panel, total/unrealized/realized PnL, USDG deposit/withdraw, positions/orders/history/transfers tabs | Position lifecycle and cash movement should stay in one workspace |
| [X profile @PerpIndex](https://x.com/PerpIndex) | HTTP 200, readable public profile/posts | Bio describes 31 index perps, up to 20x, “NoKyc,” and Robinhood Chain; pinned post says live | These are competitor statements; LATQOR must not adopt unverified legal, maturity or “first” claims |

### Mechanisms stated by the competitor

- A single USDG balance supports margin across markets.
- Each product follows its country's benchmark in local index points, rather than a dollar-converted headline index.
- The ticket is described as showing entry price, fee and liquidation price before signing.
- The homepage distinguishes order submission from execution: it says orders can be submitted any time, margin is set aside, and the position opens at the **next live price** of the index.
- The public market table lists names and exchanges across the Americas, Europe, Asia/Pacific and Middle East/Africa.

That fourth point is the most important operational observation. A statement about anytime order acceptance is not evidence of continuous, fresh 24/7 cash-index pricing. LATQOR should make the distinction more explicit and implement only behavior that the contracts and keeper support.

### Canonical benchmark inventory for LATQOR's synthetic testnet

The local implementation catalog is `contracts/config/markets.json`. The final **32-identifier** scope includes Indonesia's JCI from the follow-up reference snapshot described below; their values in LATQOR are invented demonstration fixtures, not retrieved index prices or a representation of a licensed index product. This release's inventory is fixed to that snapshot rather than automatically following later competitor changes.

| Region | Count | Market identifiers |
|---|---:|---|
| Americas | 5 | MERVAL, IBOV, TSX, IPSA, IPC |
| Europe | 16 | ATX, BEL20, OMXC25, STOXX50, OMXH25, CAC40, DAX, ISEQ, FTSEMIB, AEX, WIG20, PSI, IBEX35, SMI, BIST100, FTSE100 |
| Asia Pacific | 9 | ASX200, SSECOMP, HSI, NIFTY, JCI, NIKKEI, KOSPI, TAIEX, VNINDEX |
| Middle East & Africa | 2 | TA35, JSEALSI |

This inventory has no US benchmark. STOXX50 is a regional benchmark. Featured examples are NIKKEI, DAX and FTSE100; this presentation choice does not limit access to the other synthetic markets or promise those three have secured production licenses.

### Snapshot limitations and discrepancies

The returned market HTML contained em dashes for marks/changes and “Loading live prices.” The Japan page returned “Loading market.” No wallet was connected and no competitor contract was audited. We therefore verified the public information architecture and claims, not successful funding, fills, liquidation safety, actual liquidity or actual live-data quality.

At the initial retrieval on **18 September 2026**, a recent X post claimed Indonesia/JCI and dark mode had been added, while the homepage and app still enumerated **31 markets**. A follow-up homepage retrieval at **2026-09-18 09:46:12 UTC / 17:46:12 Asia/Shanghai** returned **32**, including JCI/Jakarta Composite for Indonesia; its inventory evidence is in `contracts/config/reference-check.json`. LATQOR's final release scope was fixed at that 32-market snapshot. The initial table above records the first retrieval rather than overwriting its history. These observations show why all surfaces should not be assumed synchronized. The profile's “NoKyc” language does not establish that an equivalent business can legally omit customer checks.

The initially attempted `https://app.perpdex.lat/` connection failed. The working app URL was discovered from the homepage's own links: `https://www.perpdex.lat/app`.

### Information and style observations

The homepage uses a concise proposition, a numerical market/leverage summary, a three-part deposit/trade/anytime-order explanation, a long benchmark list and repeated launch-app calls to action. The public stylesheets specify Roobert display headings from 60px on small layouts up to 128px on large layouts, negative letter spacing, white and near-black surfaces, purple accents, responsive grids, flag assets, cards and staggered opacity/translation transitions.

These are design observations, not assets to reuse. LATQOR's implementation should have its own layout, wording, logo, globe graphic and component code.

## 2. Robinhood Chain: authoritative integration facts

| Topic | Official source | Verified statement | LATQOR action |
|---|---|---|---|
| Network purpose and EVM tooling | [About Robinhood Chain](https://docs.robinhood.com/chain/) | Permissionless Ethereum-compatible L2, Arbitrum Dedicated Blockchains, ETH gas; standard Solidity/EVM tooling | Use ordinary EVM wallet and deployment tooling |
| Mainnet and testnet | [Connecting](https://docs.robinhood.com/chain/connecting) | Mainnet chain ID 4663; testnet 46630 | Pin the prototype to 46630; do not infer network from a token name |
| Testnet RPC | [Connecting](https://docs.robinhood.com/chain/connecting) | `https://rpc.testnet.chain.robinhood.com` | Verify `eth_chainId` before deployment and signing |
| Testnet explorer | [Connecting](https://docs.robinhood.com/chain/connecting) | `https://explorer.testnet.chain.robinhood.com` | Link deployment and transaction evidence here |
| Production endpoint policy | [Connecting](https://docs.robinhood.com/chain/connecting) | Public endpoints are rate-limited and not recommended for production | Budget a supported provider and a fallback |
| Official tokens | [Token contracts](https://docs.robinhood.com/chain/contracts) | Official token addresses are published; token ticker alone is insufficient for authenticity | dUSD is a project-created demo token, not official USDG |
| Chainlink feeds | [Oracles and price feeds](https://docs.robinhood.com/chain/oracles-and-price-feeds) | Feed decimals, freshness, valid answers, L2 uptime checks and recovery grace matter | Build a reviewed adapter; never use a mock quote as a production feed |
| Stock Token economics | [Oracles and price feeds](https://docs.robinhood.com/chain/oracles-and-price-feeds) | Stock Token feeds include a shares-per-token multiplier and reinvested-dividend effects; stock feeds follow 24/5 market hours | Do not substitute token total-return pricing for a raw benchmark without specification |
| Corporate-action pause | [Oracles and price feeds](https://docs.robinhood.com/chain/oracles-and-price-feeds) | `oraclePaused()` is advisory; freshness remains necessary | Treat pauses as unavailable data, not zero or tradable stale values |
| Signed fast data | [Data Streams](https://docs.robinhood.com/chain/data-streams) | Pull-based signed reports verified onchain; a mainnet verifier is documented for chain 4663 | Coverage, rights and testnet availability must still be confirmed market by market |

All above documentation URLs returned HTTP 200. The current official documentation describes Robinhood Chain as live and lists both networks. The correct project statement is **“LATQOR runs its prototype on Robinhood Chain Testnet”**, not “Robinhood Chain only exists on testnet.”

Neither a chain integration nor a listing in an ecosystem directory creates endorsement, affiliation or a commercial partnership. Robinhood's own ecosystem page explicitly disclaims those implications.

### What was not established

This research did not establish licensed feeds for LATQOR's 32 synthetic benchmark labels, including featured NIKKEI, DAX and FTSE100, rights to redistribute actual index values, a production collateral agreement, a liquidity commitment, an audit of LATQOR, or permission to offer derivatives in a particular country. These are commercial and launch-gate work items.

## 3. Mainstream onchain product references

These are established, visible onchain brands selected for relevant communication patterns, not a verified ranking of popularity or trading volume. Any metrics printed on their websites are their claims and are not reused as LATQOR metrics.

| Reference | Observed content structure | Published visual evidence | Pattern to adapt |
|---|---|---|---|
| [Hyperliquid](https://hyperliquid.xyz/) | “Infrastructure to House All Finance”; Build/Trade fork; market ticker; ecosystem apps; builder-code explanation; network/security story | Inline styling includes near-white surfaces and deep green `#03211c`; Teodor Light and ABC Diatype font declarations | Strong editorial hero followed by tangible trading utility and mechanism explanation |
| [Jupiter](https://jup.ag/) | Product/application first; persistent multi-product navigation; connected-wallet entry; visible swap ticket; adjacent perps, lending and portfolio routes | Public CSS includes dark `#131b24`, lime `#c7f284`, cyan `#00bef0`, mono and sans typography | Make the first useful action obvious; keep account and execution controls close |
| [Aave](https://aave.com/) | App/Pro/Kit segmentation; product demos; market configurations; security/track-record claims; FAQ and legal footer | Public CSS emphasizes white and gray surfaces with lavender accents such as `#9896ff`; heading/body/mono roles | Mature explanations, separated audiences, risk facts and FAQs within the conversion path |
| [Ethena](https://ethena.fi/) | Product proposition; comparison metrics with methodology notes; integration paths; transparency/reserves section; educational articles | Public CSS includes black/white and cool blue `#88b4f5`/`#adceff`; Suisse family declarations | Put mechanism, transparency and metric definitions beside marketing claims |

All four homepages returned HTTP 200. Jupiter's returned HTML included an instruction to enable JavaScript alongside rendered product content; dynamic account and market behavior was not tested. Some dynamic metrics across sites appeared unpopulated in the returned document. We did not infer missing values.

### Why LATQOR's selected direction fits

The selected direction is an original **light editorial market atlas**: cream background, deep green type, restrained lime highlights, a globe motif, visible session context, measured typography and a focused trading ticket. It borrows the communication principle of institutional clarity and the interaction principle of immediate utility. LATQOR's synthetic testnet scope mirrors the final observed 32-benchmark universe and offers 1–20x simulated leverage, while the future real-money rollout remains gated and staged. The list includes a regional Eurozone benchmark, so “32 benchmarks” is accurate and “32 countries” is not.

The project should feel like a comprehensible global-market workspace, not a catalogue of speculative token promises. Motion can explain geography, time and market focus; it should respect reduced-motion settings and never obstruct account controls. Market prices and chart series must carry demonstration labels where they are simulated. A polished interface is not evidence of production readiness.

## 4. Legal and benchmark diligence references

| Source | Retrieval | Appropriate use |
|---|---|---|
| [FCA: ban on sale of crypto-derivatives to retail consumers](https://www.fca.org.uk/news/press-releases/fca-bans-sale-crypto-derivatives-retail-consumers) | HTTP 200 | Demonstrates that product classification and distribution restrictions matter; the notice specifically concerns derivatives referencing certain cryptoassets and does not by itself classify an equity-index perp |
| [IOSCO: Principles for Financial Benchmarks](https://www.iosco.org/library/pubdocs/pdf/IOSCOPD415.pdf) | HTTP 200 PDF | Further-reading reference for benchmark governance and methodology diligence; not a LATQOR license or approval |
| S&P index-licensing page attempted | HTTP 403 security response | No substantive licensing terms verified; do not invent price, rights or availability |
| FTSE Russell index-licensing URL attempted | HTTP 404 | No substantive terms verified; request the actual applicable agreement directly |

The business plan's legal and licensing gates are project requirements for due diligence, not legal opinions. Counsel and licensors must determine the applicable rules and rights for actual contracts, target customers and jurisdictions.

## 5. Research conclusions translated into implementation

| Finding | Implementation requirement |
|---|---|
| “Anytime order” and “fresh price” are different | Session status, source timestamp and queued/disabled execution policy must be explicit |
| A shared balance can hide cross-market risk | Explain isolated margin and available collateral; postpone cross-margin |
| Official chain support does not provide every feed | Label operator prices as demo and make licensed coverage a gate |
| Dynamic metrics are easy to misrepresent | No fake TVL, volume, users, partners, APY or audit badges |
| Wallet UX is a product, not a button | Handle missing wallet, wrong chain, rejected signature, stale quote and failed transaction |
| Competition is broader than a copied landing page | Differentiate on market/session clarity and measurable execution quality |
| Testnet attracts reward-driven activity | Measure independent repeated round trips and comprehension rather than volume |

This research is sufficient to inform an original prototype and an initial operating plan. It does not establish that the proposed business is licensed, solvent, commercially viable or ready for real-money users.
