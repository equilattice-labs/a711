<script setup>
import { ref, watch, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowUpRight, X, Menu, Wallet, CheckCircle2 } from 'lucide-vue-next'
import Brand from './components/Brand.vue'
import {
  address,
  walletOpen,
  walletBusy,
  walletError,
  providers,
  showWallet,
  connect,
  disconnect,
  verified,
  signIn,
} from './composables/wallet'
const route = useRoute(),
  menu = ref(false),
  modal = ref(null),
  authError = ref('')
let previousFocus
watch(
  () => route.fullPath,
  () => {
    menu.value = false
  },
)
watch(walletOpen, async (value) => {
  document.body.style.overflow = value ? 'hidden' : ''
  if (value) {
    previousFocus = document.activeElement
    await nextTick()
    modal.value?.querySelector('button')?.focus()
  } else previousFocus?.focus()
})
function trap(e) {
  if (e.key === 'Escape') walletOpen.value = false
  if (e.key === 'Tab') {
    const items = [...modal.value.querySelectorAll('button,a[href]')].filter((el) => !el.disabled)
    const first = items[0],
      last = items.at(-1)
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last?.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first?.focus()
    }
  }
}
async function verify() {
  authError.value = ''
  try {
    await signIn()
  } catch (e) {
    authError.value = e.code === 4001 ? 'Signature cancelled.' : e.shortMessage || e.message
  }
}
</script>
<template>
  <a class="skip-link" href="#main">Skip to content</a>
  <header class="site-header">
    <div class="nav-shell">
      <RouterLink to="/" aria-label="Quivanta home"><Brand /></RouterLink>
      <nav :class="{ expanded: menu }" aria-label="Main navigation">
        <RouterLink to="/trade">Trade</RouterLink><RouterLink to="/">Markets</RouterLink
        ><RouterLink to="/learn">Risk guide <ArrowUpRight :size="13" /></RouterLink>
      </nav>
      <div class="nav-actions">
        <span class="network-badge"><i></i> RH TESTNET</span
        ><button class="wallet-button" @click="showWallet">
          <Wallet :size="15" /><span>{{
            address ? address.slice(0, 6) + '…' + address.slice(-4) : 'Connect wallet'
          }}</span></button
        ><button
          class="mobile-menu icon-button"
          :aria-expanded="menu"
          aria-label="Toggle navigation"
          @click="menu = !menu"
        >
          <Menu :size="22" />
        </button>
      </div>
    </div>
  </header>
  <main id="main"><RouterView /></main>
  <footer class="site-footer">
    <div class="footer-top">
      <RouterLink to="/"><Brand /></RouterLink>
      <p>Wallet-first index markets on Robinhood Chain testnet.</p>
      <div>
        <RouterLink to="/learn">Documentation <ArrowUpRight :size="14" /></RouterLink
        ><a href="/docs/business-plan.pdf" target="_blank"
          >Business plan <ArrowUpRight :size="14"
        /></a>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© {{ new Date().getFullYear() }} Quivanta</span
      ><span>Independent project. Not affiliated with Robinhood.</span
      ><RouterLink to="/learn#risk">Testnet & risk disclosure</RouterLink>
    </div>
  </footer>
  <div v-if="walletOpen" class="modal-backdrop" @click.self="walletOpen = false">
    <section
      ref="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wallet-title"
      class="wallet-modal"
      @keydown="trap"
    >
      <button
        class="modal-close icon-button"
        aria-label="Close wallet dialog"
        @click="walletOpen = false"
      >
        <X :size="22" /></button
      ><span class="eyebrow">YOUR WALLET. YOUR CONTROL.</span>
      <h2 id="wallet-title">
        {{ address ? 'Your connection' : 'Connect to a world of markets.' }}
      </h2>
      <template v-if="address"
        ><p class="address-wrap">{{ address }}</p>
        <p v-if="verified" class="success-line">
          <CheckCircle2 :size="18" /> Wallet ownership verified locally.
        </p>
        <button v-else class="button primary" @click="verify">Verify wallet ownership</button>
        <p class="small">
          Optional signature. This is a local session proof, not a server account.
        </p>
        <p v-if="authError" role="alert" class="error">{{ authError }}</p>
        <button class="button secondary" @click="disconnect">Disconnect</button></template
      ><template v-else
        ><p>Choose an installed Ethereum wallet to explore the Robinhood Chain testnet.</p>
        <button
          v-for="p in providers"
          :key="p.info.uuid"
          class="provider-button"
          :disabled="walletBusy"
          @click="connect(p.provider)"
        >
          <Wallet :size="21" />{{ p.info.name }}<ArrowUpRight :size="18" />
        </button>
        <div v-if="!providers.length" class="wallet-empty">
          <Wallet :size="30" />
          <h3>No wallet detected</h3>
          <p>
            Install an Ethereum wallet, then refresh. On mobile, open this site inside your wallet's
            browser.
          </p>
          <a href="https://metamask.io/download/" target="_blank" rel="noopener noreferrer"
            >Get MetaMask <ArrowUpRight :size="14"
          /></a>
        </div>
        <p v-if="walletError" class="error" role="alert">{{ walletError }}</p>
        <p class="small">We never request your private key or recovery phrase.</p></template
      >
    </section>
  </div>
</template>
