import { ref, shallowRef } from 'vue'
import { BrowserProvider, verifyMessage } from 'ethers'
export const address = ref(''),
  chainId = ref(0),
  walletOpen = ref(false),
  walletBusy = ref(false),
  walletError = ref(''),
  verified = ref(false)
export const providers = shallowRef([]),
  provider = shallowRef(null)
export const CHAIN = {
  chainId: '0xb626',
  chainName: 'Robinhood Chain Testnet',
  nativeCurrency: { name: 'Ether', symbol: 'ETH', decimals: 18 },
  rpcUrls: ['https://rpc.testnet.chain.robinhood.com'],
  blockExplorerUrls: ['https://explorer.testnet.chain.robinhood.com'],
}
let active,
  listening = false
function onAccounts(accounts) {
  address.value = accounts[0] || ''
  verified.value = false
}
function onChain(id) {
  chainId.value = parseInt(id, 16)
  verified.value = false
  if (active) provider.value = new BrowserProvider(active, 'any')
}
export function discover() {
  if (!listening) {
    window.addEventListener('eip6963:announceProvider', (e) => {
      if (!providers.value.some((p) => p.info.uuid === e.detail.info.uuid))
        providers.value = [...providers.value, e.detail]
    })
    listening = true
  }
  window.dispatchEvent(new Event('eip6963:requestProvider'))
  if (window.ethereum && !providers.value.length)
    providers.value = [
      { info: { name: 'Browser wallet', uuid: 'injected' }, provider: window.ethereum },
    ]
}
export function showWallet() {
  walletError.value = ''
  walletOpen.value = true
  discover()
}
export async function connect(p) {
  walletBusy.value = true
  walletError.value = ''
  try {
    if (active) {
      active.removeListener?.('accountsChanged', onAccounts)
      active.removeListener?.('chainChanged', onChain)
    }
    active = p
    const accounts = await p.request({ method: 'eth_requestAccounts' })
    address.value = accounts[0] || ''
    chainId.value = parseInt(await p.request({ method: 'eth_chainId' }), 16)
    provider.value = new BrowserProvider(p, 'any')
    active.on?.('accountsChanged', onAccounts)
    active.on?.('chainChanged', onChain)
    walletOpen.value = false
    verified.value = false
  } catch (e) {
    walletError.value =
      e.code === 4001
        ? 'Connection cancelled. You can try again.'
        : 'Could not connect. Open your wallet and try again.'
  } finally {
    walletBusy.value = false
  }
}
export async function switchNetwork() {
  if (!active) {
    showWallet()
    return false
  }
  try {
    await active.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: CHAIN.chainId }],
    })
  } catch (e) {
    if (e.code === 4902 || e?.data?.originalError?.code === 4902) {
      await active.request({ method: 'wallet_addEthereumChain', params: [CHAIN] })
      await active.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: CHAIN.chainId }],
      })
    } else throw e
  }
  chainId.value = parseInt(await active.request({ method: 'eth_chainId' }), 16)
  provider.value = new BrowserProvider(active, 'any')
  return chainId.value === 46630
}
export async function signIn() {
  if (!provider.value) throw Error('Connect a wallet first.')
  const signer = await provider.value.getSigner(),
    bytes = crypto.getRandomValues(new Uint8Array(16)),
    nonce = Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('')
  const message = `${location.host} requests a local wallet ownership proof.\n\nAccount: ${address.value}\nURI: ${location.origin}\nChain ID: ${chainId.value}\nNonce: ${nonce}\nIssued At: ${new Date().toISOString()}\n\nThis signs no transaction and grants no token permissions. This proof is local to this browser session.`
  const signature = await signer.signMessage(message)
  verified.value = verifyMessage(message, signature).toLowerCase() === address.value.toLowerCase()
  if (!verified.value) throw Error('The signature did not match your connected wallet.')
}
export function disconnect() {
  active?.removeListener?.('accountsChanged', onAccounts)
  active?.removeListener?.('chainChanged', onChain)
  active = null
  provider.value = null
  address.value = ''
  verified.value = false
  walletOpen.value = false
}
