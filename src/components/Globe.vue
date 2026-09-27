<script setup>
import { computed } from 'vue'
const dots = computed(() => {
  const p = []
  for (let lat = -70; lat <= 76; lat += 4)
    for (let lon = -180; lon < 180; lon += 4) {
      const x = lon,
        y = lat
      const land =
        (x > -165 && x < -50 && y > 15 && y < 70 && y > -0.5 * x - 48) ||
        (x > -80 && x < -36 && y > -52 && y < 13 && x < y * 0.35 - 44) ||
        (x > -18 && x < 45 && y > -35 && y < 35 && Math.abs(x - 15) < 35 - Math.abs(y) * 0.35) ||
        (x > -10 && x < 170 && y > 35 && y < 73) ||
        (x > 38 && x < 145 && y > 5 && y < 40 && x < 150 - y * 0.2) ||
        (x > 112 && x < 155 && y > -42 && y < -10)
      if (!land) continue
      const r = (lat * Math.PI) / 180,
        t = ((lon + 15) * Math.PI) / 180,
        z = Math.cos(r) * Math.cos(t)
      if (z > -0.15)
        p.push({
          x: 300 + 238 * Math.cos(r) * Math.sin(t),
          y: 300 - 238 * Math.sin(r),
          o: 0.3 + 0.7 * Math.max(0, z),
          r: 1.25 + 1.2 * Math.max(0, z),
        })
    }
  return p
})
</script>
<template>
  <div class="globe-scene">
    <div class="globe-aura"></div>
    <svg
      class="globe"
      viewBox="0 0 600 600"
      aria-label="Illustration of global markets connected onchain"
      role="img"
    >
      <defs>
        <radialGradient id="sphere" cx="30%" cy="25%" r="80%">
          <stop stop-color="#527657" />
          <stop offset=".38" stop-color="#294d3d" />
          <stop offset=".78" stop-color="#17352e" />
          <stop offset="1" stop-color="#0b211c" />
        </radialGradient>
        <clipPath id="clip"><circle cx="300" cy="300" r="238" /></clipPath>
        <radialGradient id="shine" cx="26%" cy="20%">
          <stop stop-color="#55dca6" stop-opacity=".18" />
          <stop offset="1" stop-color="#fff" stop-opacity="0" />
        </radialGradient>
      </defs>
      <g class="orbit-lines" fill="none" stroke="#9da99b" stroke-width=".7">
        <ellipse cx="300" cy="300" rx="291" ry="119" transform="rotate(-28 300 300)" />
        <ellipse
          cx="300"
          cy="300"
          rx="276"
          ry="263"
          transform="rotate(-28 300 300)"
          stroke-dasharray="2 8"
        />
      </g>
      <circle cx="300" cy="300" r="238" fill="url(#sphere)" />
      <g clip-path="url(#clip)" fill="none" stroke="#b9d4a3" stroke-opacity=".13">
        <ellipse v-for="r in [40, 100, 163, 210]" :key="r" cx="300" cy="300" :rx="r" ry="238" />
        <ellipse
          v-for="r in [65, 135, 190, 228]"
          :key="`a${r}`"
          cx="300"
          cy="300"
          rx="238"
          :ry="r"
        />
        <path d="M62 300h476M300 62v476" />
      </g>
      <g fill="#9be8c9">
        <circle v-for="(d, i) in dots" :key="i" :cx="d.x" :cy="d.y" :r="d.r" :opacity="d.o" />
      </g>
      <circle cx="300" cy="300" r="238" fill="url(#shine)" />
      <g fill="#55dca6">
        <circle cx="283" cy="135" r="5" />
        <circle cx="437" cy="208" r="5" />
        <circle cx="122" cy="205" r="5" />
      </g>
      <g fill="none" stroke="#55dca6" stroke-opacity=".7">
        <path d="M122 205Q230 20 437 208" />
        <path d="M283 135Q373 100 437 208" />
        <circle class="pulse-ring" cx="283" cy="135" r="12" />
        <circle cx="122" cy="205" r="11" />
      </g>
    </svg>
    <div class="globe-label label-ny">
      <span class="market-pin"></span>
      <div>
        LONDON<small>FTSE 100 <b>↗</b></small>
      </div>
    </div>
    <div class="globe-label label-tokyo">
      <span class="market-pin"></span>
      <div>
        TOKYO<small>NIKKEI 225 <b>↗</b></small>
      </div>
    </div>
    <div class="globe-label label-london">
      <span class="market-pin"></span>
      <div>
        FRANKFURT<small>DAX 40 <b>↘</b></small>
      </div>
    </div>
    <span class="globe-caption">GLOBAL BENCHMARKS / SYNTHETIC TESTNET</span>
  </div>
</template>
