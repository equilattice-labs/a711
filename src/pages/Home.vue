<script setup>
import { ref, computed } from 'vue'
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Clock3,
  Gauge,
  Search,
  ShieldCheck,
  WalletCards,
  Zap,
} from 'lucide-vue-next'
import { markets, featured, format, spark } from '../markets'

const region = ref('All markets')
const activeFaq = ref(0)
const regions = ['All markets', 'Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa']
const filtered = computed(() => {
  const source =
    region.value === 'All markets' ? markets : markets.filter((m) => m.region === region.value)
  return source.slice(0, 8)
})
const faqs = [
  [
    'What is ORVECTA?',
    'ORVECTA is an independent market terminal prototype on Robinhood Chain testnet. It exposes 32 synthetic equity benchmark markets and a complete test-collateral trading loop.',
  ],
  [
    'What can I do on testnet?',
    'Connect a wallet, claim free dUSD, deposit test collateral, then open or close a long or short position. Quotes are operator-published synthetic fixtures and have no monetary value.',
  ],
  [
    'Are these live prices?',
    'No. The demo uses synthetic prices and disables ordinary execution when a quote is older than 15 minutes. Never send real-value assets to the testnet contracts.',
  ],
  [
    'Is ORVECTA a Robinhood product?',
    'No. ORVECTA is independent and only uses the public Robinhood Chain testnet. Network compatibility does not imply affiliation or endorsement.',
  ],
]
</script>

<template>
  <section class="dashboard-hero section-shell">
    <div class="dashboard-heading">
      <div>
        <span class="eyebrow"
          ><i class="status-dot"></i> ROBINHOOD CHAIN TESTNET
          <span class="live-pill">ONLINE</span></span
        >
        <h1>Global markets,<br /><span>onchain.</span></h1>
        <p>
          One terminal for 32 synthetic index markets. Scan the move, choose a side, and sign every
          action from your wallet.
        </p>
        <div class="dashboard-actions">
          <RouterLink class="button primary" to="/trade"
            >Open terminal <ArrowUpRight :size="17" /></RouterLink
          ><RouterLink class="text-link" to="/learn"
            >Read the risk guide <ArrowRight :size="15"
          /></RouterLink>
        </div>
      </div>
      <div class="hero-metrics" aria-label="Testnet metrics">
        <div><span>MARKETS</span><strong>32</strong><small>synthetic benchmarks</small></div>
        <div><span>MAX LEVERAGE</span><strong>20x</strong><small>isolated demo margin</small></div>
        <div><span>QUOTE WINDOW</span><strong>15m</strong><small>freshness guard</small></div>
      </div>
    </div>
    <div class="terminal-dashboard">
      <section class="overview-panel">
        <div class="panel-topline">
          <span>ACCOUNT OVERVIEW</span
          ><span class="connection-state"><i></i> Wallet not connected</span>
        </div>
        <div class="overview-balance">
          <span>AVAILABLE COLLATERAL</span><strong>— <em>dUSD</em></strong
          ><small>Connect a wallet to load your test balance.</small>
        </div>
        <div class="overview-stats">
          <div><span>OPEN POSITIONS</span><strong>0</strong></div>
          <div><span>24H PNL</span><strong class="muted-value">—</strong></div>
        </div>
        <RouterLink to="/trade" class="panel-action"
          ><WalletCards :size="16" /> Connect in terminal <ArrowUpRight :size="15"
        /></RouterLink>
      </section>
      <section class="market-watch-panel">
        <div class="panel-topline">
          <span>MARKET WATCH</span
          ><RouterLink to="/trade" class="panel-link"
            >View all <ArrowUpRight :size="14"
          /></RouterLink>
        </div>
        <div class="watch-list">
          <RouterLink
            v-for="m in featured.slice(0, 4)"
            :key="m.id"
            :to="`/trade?market=${m.id}`"
            class="watch-row"
            ><div class="watch-name">
              <span class="flag" :class="m.flag"></span>
              <div>
                <strong>{{ m.name }}</strong
                ><small>{{ m.id }} / {{ m.country }}</small>
              </div>
            </div>
            <strong class="watch-price">{{ format(m.price) }}</strong
            ><span :class="m.change > 0 ? 'positive' : 'negative'"
              >{{ m.change > 0 ? '+' : '' }}{{ m.change.toFixed(2) }}%</span
            ><svg viewBox="0 0 105 50" aria-hidden="true">
              <polyline
                :points="spark(m)"
                fill="none"
                :stroke="m.change > 0 ? '#55dca6' : '#ff827a'"
                stroke-width="1.7"
              /></svg
          ></RouterLink>
        </div>
        <div class="quote-note">
          <Activity :size="14" /> Illustrative fixtures · refreshed by the demo operator
        </div>
      </section>
      <section class="start-panel">
        <div class="panel-topline"><span>START HERE</span><Zap :size="15" /></div>
        <h2>From wallet<br />to position.</h2>
        <ol class="start-steps">
          <li>
            <span>01</span>
            <div><strong>Connect wallet</strong><small>Use an injected Ethereum wallet</small></div>
          </li>
          <li>
            <span>02</span>
            <div><strong>Claim dUSD</strong><small>Free test collateral on testnet</small></div>
          </li>
          <li>
            <span>03</span>
            <div><strong>Choose long or short</strong><small>Review risk, then sign</small></div>
          </li>
        </ol>
        <RouterLink to="/trade" class="text-link"
          >Open the terminal <ArrowRight :size="15"
        /></RouterLink>
      </section>
    </div>
  </section>
  <section class="markets-section section-shell" id="markets">
    <div class="section-kicker">
      <span>01 / MARKET SCANNER</span><span>FAST CONTEXT BEFORE THE TICKET</span>
    </div>
    <div class="section-title-row">
      <div>
        <h2>Find a market.</h2>
        <p class="section-subtitle">
          Filter the synthetic benchmark universe, then jump straight into the terminal.
        </p>
      </div>
      <RouterLink to="/trade" class="text-link"
        >Full market list <ArrowUpRight :size="17"
      /></RouterLink>
    </div>
    <div class="market-toolbar">
      <div class="region-tabs" role="group" aria-label="Filter markets">
        <button
          v-for="r in regions"
          :key="r"
          :class="{ active: region === r }"
          :aria-pressed="region === r"
          @click="region = r"
        >
          {{ r }}
        </button>
      </div>
      <span class="small"><Search :size="13" /> 32 synthetic markets</span>
    </div>
    <div class="market-table">
      <div class="market-table-head">
        <span>MARKET</span><span>INDEX POINTS</span><span>EXAMPLE CHANGE</span><span>TREND</span
        ><span></span>
      </div>
      <RouterLink v-for="m in filtered" :key="m.id" :to="`/trade?market=${m.id}`" class="market-row"
        ><div class="market-name">
          <span class="flag large" :class="m.flag"></span>
          <div>
            <strong>{{ m.name }}</strong
            ><small
              >{{ m.country }} <span>/ {{ m.id }}</span></small
            >
          </div>
        </div>
        <strong class="market-price">{{ format(m.price) }}</strong
        ><span :class="m.change > 0 ? 'positive' : 'negative'"
          >{{ m.change > 0 ? '+' : '' }}{{ m.change.toFixed(2) }}%</span
        ><svg viewBox="0 0 105 50" aria-hidden="true">
          <polyline
            :points="spark(m)"
            fill="none"
            :stroke="m.change > 0 ? '#55dca6' : '#ff827a'"
            stroke-width="1.6"
          /></svg
        ><span class="row-arrow"><ArrowUpRight :size="18" /></span
      ></RouterLink>
    </div>
    <div class="markets-foot">
      <span class="tiny-dot"></span> Prices are illustrative fixtures. Licensed live data is not
      connected.
    </div>
  </section>
  <section class="terminal-promise section-shell">
    <div>
      <span class="eyebrow">02 / BUILT FOR THE LOOP</span>
      <h2>Every action has a receipt.</h2>
      <p>
        ORVECTA keeps the demo flow visible: faucet, approve, deposit, open, close, withdraw. The
        terminal shows wallet state, quote age, collateral and contract health before you sign.
      </p>
      <RouterLink to="/learn#mechanics" class="text-link"
        >Inspect the model <ArrowUpRight :size="16"
      /></RouterLink>
    </div>
    <div class="promise-grid">
      <article>
        <ShieldCheck :size="19" /><strong>Wallet-signed</strong
        ><span>Your keys stay in your wallet.</span>
      </article>
      <article>
        <Clock3 :size="19" /><strong>Freshness guard</strong
        ><span>Stale quotes block new orders.</span>
      </article>
      <article>
        <Gauge :size="19" /><strong>Isolated margin</strong
        ><span>Limits are shown before confirmation.</span>
      </article>
    </div>
  </section>
  <section class="how-section section-shell" id="how">
    <div class="section-kicker">
      <span>03 / QUICKSTART</span><span>THREE STEPS TO A TEST POSITION</span>
    </div>
    <div class="section-title-row">
      <h2>Start small. Read everything.</h2>
      <RouterLink to="/learn" class="text-link"
        >Open documentation <ArrowUpRight :size="17"
      /></RouterLink>
    </div>
    <div class="steps">
      <article>
        <span>01 <i class="step-line"></i></span>
        <h3>Connect a wallet.</h3>
        <p>
          Switch to Robinhood Chain Testnet, chain ID 46630. No account or private key is requested.
        </p>
      </article>
      <article>
        <span>02 <i class="step-line"></i></span>
        <h3>Fund the demo balance.</h3>
        <p>Claim dUSD, approve the exact amount, and deposit test collateral into the sandbox.</p>
      </article>
      <article>
        <span>03 <i class="step-line"></i></span>
        <h3>Sign and settle.</h3>
        <p>
          Choose a side, review leverage and freshness, then close and withdraw to complete the
          loop.
        </p>
      </article>
    </div>
  </section>
  <section class="faq-section section-shell">
    <div>
      <span class="eyebrow">04 / CLARITY FIRST</span>
      <h2>Know the<br />boundaries.</h2>
      <RouterLink to="/learn#risk" class="text-link"
        >Read risk disclosures <ArrowUpRight :size="16"
      /></RouterLink>
    </div>
    <div class="faq-list">
      <article v-for="(f, i) in faqs" :key="f[0]" :class="{ open: activeFaq === i }">
        <button :aria-expanded="activeFaq === i" @click="activeFaq = activeFaq === i ? -1 : i">
          {{ f[0] }}<span>{{ activeFaq === i ? '−' : '+' }}</span>
        </button>
        <p v-show="activeFaq === i">{{ f[1] }}</p>
      </article>
    </div>
  </section>
  <section class="final-cta section-shell">
    <div>
      <span class="eyebrow">TESTNET ACCESS</span>
      <h2>Open the market terminal.</h2>
      <p>Worthless test tokens. Public contracts. No real money.</p>
      <RouterLink class="button primary" to="/trade"
        >Explore ORVECTA <ArrowUpRight :size="17"
      /></RouterLink>
    </div>
    <div class="cta-readout">
      <span>CHAIN</span><strong>46630</strong><small>Robinhood Chain Testnet</small>
    </div>
  </section>
</template>
