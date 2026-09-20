import config from './market-config.json'
const patterns = [
  [40, 43, 39, 51, 45, 52, 48, 65, 59, 68, 62, 76, 73, 85, 78, 94],
  [32, 40, 37, 42, 34, 45, 49, 46, 61, 58, 64, 74, 71, 83, 80, 91],
  [88, 79, 85, 74, 80, 75, 60, 67, 62, 68, 54, 59, 46, 51, 43, 47],
]
const hours = {
  NIKKEI: '09:00–15:30 Tokyo, with a midday break',
  DAX: '09:00–17:30 Frankfurt',
  FTSE100: '08:00–16:30 London',
}
export const markets = config.map((m, i) => ({
  id: m.symbol,
  name: m.label,
  country: m.country === 'UK' ? 'United Kingdom' : m.country,
  region: m.region,
  flag: m.flag,
  price: Number(m.demoPrice),
  change: [0.84, 1.26, -0.32][i % 3],
  hours: hours[m.symbol] || 'local exchange trading hours',
  points: patterns[i % 3],
}))
export const featured = ['NIKKEI', 'DAX', 'FTSE100'].map((id) => markets.find((m) => m.id === id))
export const format = (n, digits = 2) =>
  Number(n).toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })
export const spark = (m) => m.points.map((y, i) => `${i * 7},${100 - y}`).join(' ')
