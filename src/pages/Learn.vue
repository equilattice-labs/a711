<script setup>
import { ArrowUpRight, ArrowRight } from 'lucide-vue-next'
</script>
<template>
  <div class="learn-page section-shell">
    <span class="eyebrow">THE ORVECTA FIELD GUIDE</span>
    <h1>Context before conviction.</h1>
    <p class="learn-lead">
      Understand the markets, the mechanics, and what this first release can do.
    </p>
    <div class="learn-layout">
      <aside>
        <a href="#quickstart">Get started</a><a href="#mechanics">The testnet model</a
        ><a href="#sessions">Market sessions</a><a href="#risk">Risk & limitations</a
        ><a href="#roadmap">What comes next</a>
      </aside>
      <div class="learn-content">
        <section id="quickstart">
          <span class="eyebrow">01 / QUICKSTART</span>
          <h2>Your first test position.</h2>
          <ol>
            <li>
              <strong>Connect an Ethereum wallet.</strong> Use an injected browser wallet, or open
              this site in your mobile wallet browser. We support EIP-6963 wallet discovery.
            </li>
            <li>
              <strong>Switch to Robinhood Chain Testnet.</strong> Chain ID 46630. You need test ETH
              for gas. Get it from the
              <a
                href="https://faucet.testnet.chain.robinhood.com"
                target="_blank"
                rel="noopener noreferrer"
                >official faucet ↗</a
              >.
            </li>
            <li>
              <strong>Claim free dUSD.</strong> The experimental faucet issues 10,000 test tokens
              per wallet every 24 hours. These tokens cannot be redeemed for money.
            </li>
            <li>
              <strong>Deposit collateral.</strong> Approve the exact amount, then confirm the
              deposit in your wallet.
            </li>
            <li>
              <strong>Open a long or short.</strong> Choose a synthetic market and 1–20× leverage.
              Check entry, margin and freshness. Confirm the transaction.
            </li>
            <li>
              <strong>Close and withdraw.</strong> Settlement returns remaining margin and capped
              synthetic PnL to your available collateral balance. Withdraw that balance to your
              wallet.
            </li>
          </ol>
          <RouterLink class="button primary" to="/trade"
            >Open the terminal <ArrowUpRight :size="17"
          /></RouterLink>
        </section>
        <section id="mechanics">
          <span class="eyebrow">02 / THE ACTUAL MODEL</span>
          <h2>Simple enough to inspect.</h2>
          <p>
            32 synthetic equity benchmark markets, including NIKKEI, DAX and FTSE100. The displayed
            editorial examples are fixed fixtures. Contract prices are separately read from the
            chain and updated by the test operator. There is no connection to a live exchange price
            feed.
          </p>
          <div class="info-panel">
            <strong>Position PnL</strong><code>margin × leverage × (exit − entry) / entry</code>
            <p>
              The sign reverses for a short position. Settlement is capped between a loss of 100%
              and a gain of 100% of position margin. This is a limited simulation, not the payoff of
              an uncapped perpetual future.
            </p>
          </div>
          <p>
            Positions use isolated margin, 1–20× leverage and an operator-controlled demo price
            feed. Prices older than 15 minutes cannot be used for ordinary execution. The
            liquidation threshold is a 90% loss of margin. There are no funding payments or trading
            fees in this sandbox.
          </p>
          <p>
            The prototype reserves maximum profit against test liquidity before opening positions.
            Pausing prevents new risk while preserving the contract’s supported exit paths. This is
            a test of the transaction lifecycle, not proof of mainnet solvency or security.
          </p>
        </section>
        <section id="sessions">
          <span class="eyebrow">03 / A WORLD WITH OPENING HOURS</span>
          <h2>An open interface. Real market hours.</h2>
          <p>
            A stock benchmark is not continuously priced outside its underlying exchange session.
            The intended live product will show the session state and last valid timestamp for every
            market. Out-of-session orders will be queued against reserved margin and filled only
            after a fresh, valid price becomes available, with user-defined slippage and expiry.
          </p>
          <p>
            Exchange calendars, local daylight saving changes, holidays, interruptions and Japan’s
            midday break matter. The current synthetic testnet does not implement a live-market
            order queue. It must not be used to infer out-of-hours prices.
          </p>
        </section>
        <section id="risk">
          <span class="eyebrow">04 / KNOW THE LIMITS</span>
          <h2>What you should know.</h2>
          <ul>
            <li>Experimental, unaudited contracts. Use worthless test tokens only.</li>
            <li>
              The operator controls mock prices, market availability and pause controls. This is not
              a decentralized oracle.
            </li>
            <li>
              Leverage amplifies losses. In this sandbox, liquidation is possible at 90% margin loss
              and PnL is capped at ±100% of margin.
            </li>
            <li>
              Public RPCs, the sequencer, wallet providers and explorers may become unavailable.
            </li>
            <li>
              ORVECTA is independent of Robinhood. Network compatibility does not imply affiliation
              or endorsement.
            </li>
            <li>
              Benchmark names are descriptive. No index data license, issuer partnership or
              investment recommendation is implied.
            </li>
            <li>
              Wallet connection does not create a custody account. Optional ownership verification
              is local to this browser session; no backend authentication session is issued.
            </li>
          </ul>
        </section>
        <section id="roadmap">
          <span class="eyebrow">05 / THE ROAD AHEAD</span>
          <h2>Build confidence before scale.</h2>
          <p>
            <strong>Now:</strong> validate onboarding and the complete test-collateral lifecycle.
            Collect direct feedback, test contract invariants, and document the limits.
          </p>
          <p>
            <strong>Next:</strong> integrate licensed reference feeds, holiday-aware sessions,
            queued orders, and a production risk engine. Commission external security reviews and
            engage qualified legal counsel.
          </p>
          <p>
            <strong>Before any live launch:</strong> establish jurisdiction eligibility, resilient
            oracles, market maker commitments, capped rollout parameters and incident response. No
            launch date or return is promised.
          </p>
          <div class="learn-downloads">
            <a class="button secondary" href="/docs/business-plan.pdf" target="_blank"
              >Business plan PDF <ArrowUpRight :size="17" /></a
            ><a class="button secondary" href="/docs/business-plan.md"
              >Source document <ArrowRight :size="17"
            /></a>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>
