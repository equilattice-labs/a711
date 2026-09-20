# LATQOR — name and availability evidence

**Selected name: LATQOR**  
**Domain: `latqor.xyz`**  
**X username: `@latqor`**  
**Pronunciation: “LAT-core”**

The same six-letter lowercase string, `latqor`, is used for the domain label and X username. The coined name combines **latitude**, expressing international markets, with **core**, expressing one account at the center of those markets. The `q` gives it a distinct spelling and also suggests a market quote. It does not imply affiliation with Robinhood.

## Live availability checks

**Final delivery recheck: 18 September 2026, 10:09 UTC / 18:09 Asia/Shanghai.** Both results remain unchanged: authoritative RDAP returned `404 Object not found`; X returned `valid: true`, `reason: available`. Raw final response: [final-availability-check.json](../research/naming/final-availability-check.json).

Checks were performed on **18 September 2026**, approximately **09:22 UTC / 17:22 Asia/Shanghai**. These are point-in-time results, not reservations.

| Item | Method and direct source | Observed result | Conclusion |
| --- | --- | --- | --- |
| `latqor.xyz` | Authoritative [.xyz registry RDAP](https://rdap.centralnic.com/xyz/domain/latqor.xyz), 09:22:48 UTC | HTTP 404; `errorCode: 404`; `title: "Object not found"`; `description: ["Object not found"]` | No domain registration record found; available according to this registry lookup at check time. Registrar pricing, reserved-label rules, and successful checkout remain to be confirmed when securing it. |
| `@latqor` | [Twitter/X username availability endpoint](https://api.twitter.com/i/users/username_available.json?username=latqor), 09:22:31 UTC | HTTP 200; `{"valid":true,"reason":"available","msg":"Available!","desc":"Available!"}` | X explicitly reported the username available at check time. |
| `@latqor` public profile | [X profile URL](https://x.com/latqor), 09:22:48 UTC | HTTP 404; page title `User Profile Not Found - X \| 404 Error` | No public profile found; corroborates the validator, but would not establish registration eligibility by itself. |
| Validator positive control | [Existing `@PerpIndex` username](https://api.twitter.com/i/users/username_available.json?username=PerpIndex), 09:22:48 UTC | HTTP 200; `valid:false`; `reason:"taken"` | The same availability endpoint distinguished an existing account from the selected username. |
| Registry authority | [IANA RDAP bootstrap](https://data.iana.org/rdap/dns.json), 09:22:48 UTC | The `xyz` entry names `https://rdap.centralnic.com/xyz/` | Confirms that the domain query used the authoritative RDAP service. |

The domain has **not been purchased**, and the X account has **not been created**. Availability can change immediately; the selected identifiers should be secured together before a public launch. No domain registration or account-creation action was performed.

## Originality and collision screen

A live [exact-name DuckDuckGo search for `"latqor"`](https://html.duckduckgo.com/html/?q=%22latqor%22), performed at 09:22:29 UTC, returned **“No results found for \"latqor\".”** No matching project or business was identified in that preliminary screen.

A Google check returned an interstitial rather than usable results. A Bing check returned unrelated results that did not support an exact-name conclusion. Neither is counted as positive verification. Other internal candidates were discarded when an existing business or X account was found; only the selected name is recommended.

No web search can prove that a name has never been used anywhere. This is a documented preliminary collision screen, not exhaustive company-register or trademark clearance. LATQOR is a coined recommendation with no exact-name collision identified in the usable search result.

## Evidence files

Raw responses include the request URL, UTC check timestamp, HTTP status, final URL, and response body. Plain-text companions make page content easier to inspect.

- [Registry response](../research/naming/latqor-xyz.json)
- [X availability response](../research/naming/latqor-twitter-check.json)
- [X profile response](../research/naming/latqor-x.json)
- [Existing-account control](../research/naming/x-check-control.json)
- [IANA authority response](../research/naming/rdap-iana.json)
- [Exact-name search response](../research/naming/latqor-duck.json)
- [Exact-name search text](../research/naming/latqor-duck.txt)

## Source-project observations

Read-only requests to [perpdex.lat](https://www.perpdex.lat/), [its markets page](https://www.perpdex.lat/app), and [@PerpIndex](https://x.com/PerpIndex) succeeded on 18 September 2026. These observations describe public site copy and do not independently verify its operations or security.

- The product describes perpetual futures on **31 national stock benchmark indices**, quoted in each index's local points and settled from one **USDG balance on Robinhood Chain**.
- The published leverage ceiling is **20x**. The site describes long/short tickets with entry price, fee, and liquidation price shown before signing.
- The “place an order any time” claim has an important qualification: margin is reserved and the order opens at the **next live index price**. Continuous order intake should not be confused with continuous underlying equity-market price discovery.
- Markets are grouped by Americas, Europe, Asia & Pacific, and Middle East & Africa.
- The public X account identifies itself as Perpdex. At the check it showed 18 posts and 43 followers, and used a “NoKyc” claim. These are observed marketing details, not an appropriate basis for promising legal eligibility or unlimited geographic access.
- LATQOR should implement the useful workflow with original branding, layout, copy, and code. Benchmark data rights, oracle integrity, market-session rules, and derivatives eligibility need independent treatment.

Raw source evidence: [homepage](../research/naming/perpdex-home.json), [homepage text](../research/naming/perpdex-home.txt), [markets page](../research/naming/perpdex-app.json), [X profile](../research/naming/perpindex-x.json).

## Mainstream product references

The following public sites were also inspected through live HTML requests at approximately 09:21:58 UTC. Their claims are source copy, not audited statistics.

| Reference | Public content and information structure observed | Useful direction for LATQOR |
| --- | --- | --- |
| [Hyperliquid](https://hyperliquid.xyz/) | Broad finance-infrastructure headline, short explanation, prominent trading action, paired build/trade paths, market activity statistics, and press references. | Establish the market proposition immediately, keep the trading action visible, and distinguish infrastructure ambitions from the currently working release. |
| [Jupiter](https://jup.ag/) | Product-first navigation across trade, earn, and portfolio; search and wallet connection; dense but categorized feature surfaces. | Use a compact market directory with region filters and persistent account access so users reach a relevant benchmark quickly. |
| [Drift](https://www.drift.trade/) | Execution-oriented positioning, explicit trade/earn paths, product suite, leverage explanations, and mobile continuity. | Explain execution mechanics and risk near the trading action, using coherent product cards and readable data rather than unsupported performance claims. |

Raw reference files: [Hyperliquid](../research/naming/hyperliquid-home.json), [Jupiter](../research/naming/jupiter-home.json), [Drift](../research/naming/drift-home.json).

Suggested original direction: a **global market observatory** with geographic coordinates, session clocks, a restrained light editorial canvas, a deep-blue execution panel, and an electric warm accent. This ties visual motion to real concepts such as rotating market sessions and ordered price discovery. Any display prices or activity metrics must be marked as illustrative unless a live source is actually connected.
