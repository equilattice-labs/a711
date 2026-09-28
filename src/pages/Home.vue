<script setup>
import { ref, computed } from 'vue'
import { Activity, ArrowUpRight, Search, ShieldCheck, WalletCards, Zap } from 'lucide-vue-next'
import { address, chainId, showWallet } from '../composables/wallet'
import { markets, featured, format, spark } from '../markets'

const region = ref('All markets')
const query = ref('')
const regions = ['All markets', 'Americas', 'Europe', 'Asia Pacific', 'Middle East & Africa']
const filtered = computed(() => {
  const source =
    region.value === 'All markets' ? markets : markets.filter((m) => m.region === region.value)
  return source
    .filter((m) =>
      `${m.name} ${m.id} ${m.country}`.toLowerCase().includes(query.value.toLowerCase().trim()),
    )
    .slice(0, 10)
})
const walletLabel = computed(() =>
  address.value ? `${address.value.slice(0, 6)}…${address.value.slice(-4)}` : 'Connect wallet',
)
const networkLabel = computed(() =>
  chainId.value === 46630
    ? 'Testnet connected'
    : address.value
      ? 'Switch to testnet'
      : 'Wallet not connected',
)
</script>

<template>
  <section class="app-home section-shell">
    <div class="home-toolbar">
      <div>
        <span class="eyebrow"><i class="status-dot"></i> QUIVANTA / MARKETS</span>
        <h1>Trade the market view.</h1>
        <p class="home-lead">
          A compact wallet terminal for synthetic benchmark markets on Robinhood Chain testnet.
        </p>
      </div>
      <div class="home-toolbar-actions">
        <span class="chain-chip"><i></i>{{ networkLabel }}</span>
        <button class="button primary" @click="showWallet">
          <WalletCards :size="16" />{{ walletLabel }}
        </button>
      </div>
    </div>

    <div class="home-grid">
      <section class="home-card account-card">
        <div class="card-label"><span>ACCOUNT</span><ShieldCheck :size="16" /></div>
        <strong class="account-state">{{
          address ? 'Wallet connected' : 'Connect to trade'
        }}</strong>
        <p>
          {{
            address
              ? 'Your wallet is the signing surface. Review every transaction before approval.'
              : 'Connect an injected EVM wallet to claim dUSD and open a test position.'
          }}
        </p>
        <button class="button secondary full" @click="showWallet">
          <WalletCards :size="16" />{{ address ? 'Manage wallet' : 'Connect wallet' }}
        </button>
        <div class="account-meta">
          <span>CHAIN</span><b>46630</b><small>Robinhood Chain Testnet</small>
        </div>
      </section>

      <section class="home-card watch-card">
        <div class="card-label">
          <span>WATCHLIST</span
          ><RouterLink to="/trade">All markets <ArrowUpRight :size="14" /></RouterLink>
        </div>
        <RouterLink
          v-for="m in featured.slice(0, 5)"
          :key="m.id"
          :to="`/trade?market=${m.id}`"
          class="home-market-row"
        >
          <span class="market-name"
            ><span class="flag" :class="m.flag"></span
            ><span
              ><b>{{ m.name }}</b
              ><small>{{ m.id }} / {{ m.country }}</small></span
            ></span
          >
          <b class="market-value">{{ format(m.price) }}</b>
          <span :class="m.change > 0 ? 'positive' : 'negative'"
            >{{ m.change > 0 ? '+' : '' }}{{ m.change.toFixed(2) }}%</span
          >
          <svg viewBox="0 0 105 50" aria-hidden="true">
            <polyline
              :points="spark(m)"
              fill="none"
              :stroke="m.change > 0 ? '#55dca6' : '#ff827a'"
              stroke-width="1.7"
            />
          </svg>
        </RouterLink>
        <p class="table-note">
          <Activity :size="14" /> Fixed synthetic quotes. No live price feed.
        </p>
      </section>

      <section class="home-card steps-card">
        <div class="card-label"><span>QUICK START</span><Zap :size="16" /></div>
        <ol>
          <li>
            <b>01</b><span>Connect a wallet<small>Injected EVM provider</small></span>
          </li>
          <li>
            <b>02</b><span>Claim dUSD<small>Worthless test collateral</small></span>
          </li>
          <li>
            <b>03</b><span>Preview and sign<small>Isolated 1–20x demo margin</small></span>
          </li>
        </ol>
        <RouterLink to="/learn#mechanics" class="text-link"
          >Read the model <ArrowUpRight :size="15"
        /></RouterLink>
      </section>
    </div>
  </section>

  <section class="market-board section-shell" id="markets">
    <div class="board-header">
      <div>
        <span class="eyebrow">MARKET BOARD / 32 SYNTHETIC BENCHMARKS</span>
        <h2>Choose a market.</h2>
      </div>
      <RouterLink to="/trade" class="button secondary"
        >Open trade ticket <ArrowUpRight :size="16"
      /></RouterLink>
    </div>
    <div class="market-controls">
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
      <label class="search-field"
        ><Search :size="15" /><span class="sr-only">Search markets</span
        ><input v-model="query" placeholder="Search symbol or country"
      /></label>
    </div>
    <div class="market-table compact">
      <div class="market-table-head">
        <span>MARKET</span><span>INDEX POINTS</span><span>CHANGE</span><span>TREND</span
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
        ><span class="row-arrow"><ArrowUpRight :size="17" /></span
      ></RouterLink>
    </div>
    <p v-if="!filtered.length" class="empty-market-state">
      No markets match that search. Try a symbol such as DAX or JCI.
    </p>
    <div class="board-disclosure">
      <span class="tiny-dot"></span> Testnet only · synthetic prices · no real money · independent
      project
    </div>
  </section>

  <section class="home-footer-band section-shell">
    <div>
      <span class="eyebrow">BUILT FOR THE LOOP</span>
      <h2>See the risk before you sign.</h2>
      <p>
        Quivanta keeps quote age, margin, leverage, collateral and contract status in the same
        trading surface.
      </p>
    </div>
    <div class="home-feature-list">
      <span><ShieldCheck :size="17" /> Wallet-signed actions</span
      ><span><Activity :size="17" /> Freshness guard</span
      ><span><Zap :size="17" /> Visible receipts</span>
    </div>
  </section>
</template>
