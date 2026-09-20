<script setup>
import { ref, computed } from 'vue'
import {
  ArrowUpRight,
  ArrowRight,
  Plus,
  Minus,
  Globe2,
  ShieldCheck,
  MoveUpRight,
  Layers,
  ChevronRight,
} from 'lucide-vue-next'
import Globe from '../components/Globe.vue'
import { markets, featured, format, spark } from '../markets'
const region = ref('All markets'),
  activeFaq = ref(0)
const filtered = computed(() =>
  region.value === 'All markets'
    ? [...featured, ...markets.filter((m) => !featured.includes(m))].slice(0, 6)
    : markets.filter((m) => m.region === region.value).slice(0, 6),
)
const faqs = [
  [
    'What is LATQOR?',
    'LATQOR is building an onchain home for global equity index perpetuals. Our first release is an experimental Robinhood Chain testnet, with 32 synthetic benchmark markets and a complete test-collateral trading loop.',
  ],
  [
    'What can I do on the testnet?',
    'Connect your wallet, claim free dUSD, deposit test collateral, and open or close a long or short position with 1–20× leverage. dUSD has no monetary value. Prices are operator-published synthetic fixtures, not live index data.',
  ],
  [
    'Can I trade when a stock exchange is closed?',
    'The testnet uses synthetic prices without an exchange-session dependency. The planned live policy is to queue out-of-session orders for the next valid live price, subject to implemented and audited execution rules. A 24/7 interface does not mean a 24/7 underlying stock market.',
  ],
  [
    'Is this a Robinhood product?',
    'No. LATQOR is an independent project using Robinhood Chain’s public testnet. There is no claimed affiliation, endorsement, investment, or partnership with Robinhood.',
  ],
  [
    'What should I know about risk?',
    'The contracts are experimental and unaudited. Testnet PnL is capped at ±100% of position margin, and the model has no funding payments. The future live product requires licensed data, independent security reviews, liquidity, and jurisdiction-specific legal approval. Never send real-value assets to testnet contracts.',
  ],
]
</script>
<template>
  <section class="hero section-shell">
    <div class="hero-copy">
      <div class="eyebrow"><span class="tiny-dot"></span> A NEW PERSPECTIVE ON GLOBAL MARKETS</div>
      <h1>The world moves.<br />Trade <span>your view.</span></h1>
      <p>
        Tokyo’s momentum. Europe’s next move. A global perspective. Global index perpetuals, brought
        onchain.
      </p>
      <div class="hero-actions">
        <RouterLink class="button primary" to="/trade"
          >Explore the testnet <ArrowUpRight :size="18" /></RouterLink
        ><RouterLink class="text-link" to="/#how"
          >See how it works <ArrowRight :size="16"
        /></RouterLink>
      </div>
      <div class="hero-note">
        <span class="tiny-dot"></span> Built for Robinhood Chain
        <span class="note-divider">/</span> Testnet now open
      </div>
    </div>
    <Globe />
  </section>
  <section class="market-ribbon section-shell" aria-label="Illustrative market preview">
    <div class="ribbon-label">
      <Globe2 :size="20" /><span>THE WORLD<br />AT A GLANCE</span><small>ILLUSTRATIVE DATA</small>
    </div>
    <RouterLink
      v-for="m in featured"
      :key="m.id"
      :to="`/trade?market=${m.id}`"
      class="ribbon-market"
      ><div>
        <span class="flag" :class="m.flag"></span><span>{{ m.name }}</span
        ><small>{{ m.country }}</small>
      </div>
      <strong>{{ format(m.price) }}</strong
      ><span :class="m.change > 0 ? 'positive' : 'negative'"
        >{{ m.change > 0 ? '+' : '' }}{{ m.change.toFixed(2) }}%</span
      ><svg viewBox="0 0 105 80" aria-hidden="true">
        <polyline
          :points="spark(m)"
          fill="none"
          :stroke="m.change > 0 ? '#648b48' : '#a37164'"
          stroke-width="1.7"
        /></svg
    ></RouterLink>
  </section>
  <section class="intro-section section-shell">
    <div class="section-kicker">
      <span>01 / A BIGGER PICTURE</span><span>LESS FRICTION. MORE PERSPECTIVE.</span>
    </div>
    <div class="intro-heading">
      <h2>Your conviction.<br />A world of opportunity.</h2>
      <p>
        Think beyond a single stock. Express a view on an entire economy, with markets that make
        sense and a wallet you control.
      </p>
    </div>
    <div class="benefits">
      <article>
        <span class="benefit-number">01</span>
        <div class="benefit-icon"><Globe2 :size="25" /></div>
        <h3>Think in economies.</h3>
        <p>From the UK to Japan, follow broad equity benchmarks in familiar local index points.</p>
      </article>
      <article>
        <span class="benefit-number">02</span>
        <div class="benefit-icon"><Layers :size="25" /></div>
        <h3>One place. More perspective.</h3>
        <p>
          Compare global markets and express a long or short view from a single test-collateral
          balance.
        </p>
      </article>
      <article>
        <span class="benefit-number">03</span>
        <div class="benefit-icon"><ShieldCheck :size="25" /></div>
        <h3>Know your position.</h3>
        <p>
          See margin, exposure, price freshness and model limits before you confirm a transaction.
        </p>
      </article>
    </div>
  </section>
  <section class="markets-section section-shell" id="markets">
    <div class="section-kicker">
      <span>02 / EXPLORE THE MAP</span><span>32 BENCHMARKS. A GLOBAL STARTING POINT.</span>
    </div>
    <div class="section-title-row">
      <h2>Find your next perspective.</h2>
      <RouterLink to="/trade" class="text-link"
        >Open trading terminal <ArrowUpRight :size="18"
      /></RouterLink>
    </div>
    <div class="market-toolbar">
      <div class="region-tabs" role="group" aria-label="Filter markets">
        <button
          v-for="r in ['All markets', 'Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa']"
          :key="r"
          :class="{ active: region === r }"
          :aria-pressed="region === r"
          @click="region = r"
        >
          {{ r }}
        </button>
      </div>
      <span class="small">Illustrative quotes · not live prices</span>
    </div>
    <div class="market-table">
      <div class="market-table-head">
        <span>MARKET</span><span>INDEX POINTS</span><span>EXAMPLE CHANGE</span
        ><span>ILLUSTRATIVE TREND</span><span></span>
      </div>
      <RouterLink v-for="m in filtered" :key="m.id" :to="`/trade?market=${m.id}`" class="market-row"
        ><div class="market-name">
          <span class="flag large" :class="m.flag"></span>
          <div>
            <strong>{{ m.name }}</strong
            ><small
              >{{ m.country }} <span> / {{ m.id }}</span></small
            >
          </div>
        </div>
        <strong class="market-price">{{ format(m.price) }}</strong
        ><span :class="m.change > 0 ? 'positive' : 'negative'"
          >{{ m.change > 0 ? '+' : '' }}{{ m.change.toFixed(2) }}%</span
        ><svg viewBox="0 0 105 85" aria-hidden="true">
          <polyline
            :points="spark(m)"
            fill="none"
            :stroke="m.change > 0 ? '#537d3b' : '#a37164'"
            stroke-width="1.6"
          /></svg
        ><span class="row-arrow"><ArrowUpRight :size="20" /></span
      ></RouterLink>
    </div>
    <div class="markets-foot">
      <span class="tiny-dot"></span> 32 synthetic benchmark markets. Licensed live data is on the
      roadmap.
    </div>
  </section>
  <section class="feature-band">
    <div class="section-shell feature-inner">
      <div class="feature-copy">
        <span class="eyebrow">GLOBAL THINKING. ONCHAIN FOUNDATIONS.</span>
        <h2>A wider world.<br />A clearer position.</h2>
        <p>
          Built for the next chapter of finance on Robinhood Chain. Every test position has a
          visible entry, defined collateral, and a transaction you can inspect.
        </p>
        <RouterLink to="/learn" class="button lime"
          >Explore the foundations <ArrowUpRight :size="18"
        /></RouterLink>
        <div class="feature-footnote">
          INDEPENDENTLY BUILT · PUBLIC TESTNET · OPEN SOURCE CONTRACTS
        </div>
      </div>
      <div class="position-illustration">
        <div class="mini-terminal-top">
          <span class="tiny-dot"></span> YOUR PERSPECTIVE <span>POSITION PREVIEW</span>
        </div>
        <div class="mini-market">
          <span class="flag gb large"></span>
          <div><strong>FTSE 100</strong><small>United Kingdom equity benchmark</small></div>
          <span class="long-badge">LONG ↗</span>
        </div>
        <div class="exposure">
          <span>Example notional exposure</span><strong>3,000<span> dUSD</span></strong>
        </div>
        <svg class="example-chart" viewBox="0 0 440 100" aria-label="Decorative example chart">
          <path
            d="M0 81 18 70 36 74 52 54 72 62 91 45 110 51 130 32 149 45 170 26 192 34 212 15 232 27 251 19 270 31 290 11 310 18 330 4 350 15 370 9 390 19 410 4 440 9"
            fill="none"
            stroke="#d9f992"
            stroke-width="2"
          />
          <path d="M0 95H440" stroke="#3b5044" stroke-dasharray="3 5" />
        </svg>
        <div class="mini-position-stats">
          <div><span>Margin</span><strong>1,000 dUSD</strong></div>
          <div><span>Leverage</span><strong>3×</strong></div>
          <div><span>Mode</span><strong>Testnet</strong></div>
        </div>
        <div class="mini-terminal-bottom">
          <ShieldCheck :size="15" /> Illustrative position · synthetic prices · no real funds
        </div>
      </div>
    </div>
  </section>
  <section class="how-section section-shell" id="how">
    <div class="section-kicker">
      <span>03 / FROM A VIEW TO A POSITION</span><span>A SIMPLE PLACE TO START</span>
    </div>
    <div class="section-title-row">
      <h2>Your first move, in three steps.</h2>
      <RouterLink to="/learn" class="text-link"
        >Read the quickstart <ArrowUpRight :size="18"
      /></RouterLink>
    </div>
    <div class="steps">
      <article>
        <span>01 <span class="step-line"></span></span>
        <h3>Connect your wallet.</h3>
        <p>
          Bring your Ethereum wallet and switch to the Robinhood Chain testnet. Your keys stay with
          you.
        </p>
        <div class="step-graphic">
          <span class="draw-wallet">▱</span><span class="graphic-line"></span
          ><span class="step-chip">CONNECTED <i></i></span>
        </div>
      </article>
      <article>
        <span>02 <span class="step-line"></span></span>
        <h3>Choose your perspective.</h3>
        <p>
          Claim free dUSD, deposit test collateral, and explore 32 global benchmarks. Go long or
          short at 1–20×.
        </p>
        <div class="step-graphic">
          <span class="flag gb"></span><span class="flag de"></span><span class="flag jp"></span
          ><span class="step-chip">ONE BALANCE</span>
        </div>
      </article>
      <article>
        <span>03 <span class="step-line"></span></span>
        <h3>Make it an onchain position.</h3>
        <p>
          Review the limits, confirm in your wallet, and follow your position. Close and withdraw to
          complete the loop.
        </p>
        <div class="step-graphic">
          <span class="step-chip">YOUR WALLET</span><ArrowRight :size="22" /><span
            class="step-chip dark-chip"
            >ONCHAIN ↗</span
          >
        </div>
      </article>
    </div>
  </section>
  <section class="faq-section section-shell">
    <div>
      <span class="eyebrow">A LITTLE MORE CLARITY</span>
      <h2>Good questions.<br />Clear answers.</h2>
      <RouterLink to="/learn#risk" class="text-link"
        >Read the full disclosures <ArrowUpRight :size="17"
      /></RouterLink>
    </div>
    <div class="faq-list">
      <article v-for="(f, i) in faqs" :key="f[0]" :class="{ open: activeFaq === i }">
        <button
          :aria-expanded="activeFaq === i"
          :aria-controls="`faq-${i}`"
          @click="activeFaq = activeFaq === i ? -1 : i"
        >
          {{ f[0] }}<Minus v-if="activeFaq === i" :size="18" /><Plus v-else :size="18" />
        </button>
        <p :id="`faq-${i}`" v-show="activeFaq === i">{{ f[1] }}</p>
      </article>
    </div>
  </section>
  <section class="final-cta section-shell">
    <div class="cta-grid" aria-hidden="true"></div>
    <div>
      <span class="eyebrow">YOUR NEXT PERSPECTIVE STARTS HERE</span>
      <h2>The world is moving.<br />Where do you stand?</h2>
      <RouterLink class="button primary" to="/trade"
        >Explore LATQOR <ArrowUpRight :size="19"
      /></RouterLink>
      <p>Free test tokens. Real onchain exploration.</p>
    </div>
    <div class="cta-orbit" aria-hidden="true">
      <span></span><span></span><span></span><MoveUpRight :size="112" :stroke-width="1" />
    </div>
  </section>
</template>
