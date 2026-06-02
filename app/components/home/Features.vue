<script setup lang="ts">
const classes = [
  {
    id: 'english',
    animation: 'writing',
    plinth: 'plinth-1',
  },
  {
    id: 'mathematics',
    animation: 'draw',
    plinth: 'plinth-2',
  },
  {
    id: 'physics',
    animation: 'orbit',
    plinth: 'plinth-3',
  },
  {
    id: 'chemistry',
    animation: 'beaker',
    plinth: 'plinth-4',
  },
  {
    id: 'biology',
    animation: 'dna',
    plinth: 'plinth-5',
  },
  {
    id: 'computer',
    animation: 'responsive',
    plinth: 'plinth-6',
  },
  {
    id: 'exam',
    animation: 'target',
    plinth: 'plinth-7',
  },
  {
    id: 'support',
    animation: 'support',
    plinth: 'plinth-8',
  },
] as const
</script>

<template>
  <section
    id="programs"
    class="
      py-12
      md:py-20
    "
  >
    <div
      class="
        mx-auto max-w-6xl space-y-5 px-6
        md:space-y-6
      "
    >
      <div
        class="relative z-10 mx-auto max-w-xl space-y-2 text-center"
      >
        <h2
          class="text-3xl font-semibold text-balance"
        >
          {{ $t('home.classes.title') }}
        </h2>
        <p class="text-muted-foreground">
          {{ $t('home.classes.subtitle') }}
        </p>
      </div>

      <div class="foundation-grid">
        <div
          v-for="(item, index) in classes"
          :key="item.id"
          class="foundation-column"
          :style="{ '--foundation-delay': `${index * 70}ms` }"
        >
          <div class="foundation-card">
            <div class="foundation-card-viz" aria-hidden="true">
              <svg
                v-if="item.animation === 'writing'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <rect x="8" y="11" width="22" height="2" rx="1" fill="var(--zaac-foundation-ink)" />
                <rect x="8" y="18" width="18" height="2" rx="1" fill="var(--zaac-foundation-muted)" />
                <rect x="8" y="25" width="24" height="2" rx="1" fill="var(--zaac-foundation-blue)" />
                <line
                  x1="29" y1="24" x2="29" y2="29" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" class="
                    anim-blink
                  "
                />
              </svg>

              <svg
                v-else-if="item.animation === 'draw'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <path d="M9 30L20 9L31 30" stroke="var(--zaac-foundation-muted)" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M9 30L20 9L31 30" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="
                    anim-draw
                  "
                />
                <path
                  d="M14 23H26" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" stroke-linecap="round" class="
                    anim-draw-delay
                  "
                />
              </svg>

              <svg
                v-else-if="item.animation === 'orbit'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <circle cx="20" cy="20" r="3" fill="var(--zaac-foundation-blue)" />
                <ellipse
                  cx="20" cy="20" rx="14" ry="6" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" class="
                    anim-orbit-a
                  "
                />
                <ellipse
                  cx="20" cy="20" rx="14" ry="6" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" class="
                    anim-orbit-b
                  "
                />
              </svg>

              <svg
                v-else-if="item.animation === 'beaker'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <path d="M15 8H25M18 8V17L11 30C10.3 31.4 11.3 33 12.9 33H27.1C28.7 33 29.7 31.4 29 30L22 17V8" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path
                  d="M14 27C17 25 22 29 26 26" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" stroke-linecap="round" class="
                    anim-draw
                  "
                />
                <circle
                  cx="16" cy="23" r="1.4" fill="var(--zaac-foundation-blue)" class="
                    anim-bubble-a
                  "
                />
                <circle
                  cx="24" cy="21" r="1.2" fill="var(--zaac-foundation-blue)" class="
                    anim-bubble-b
                  "
                />
              </svg>

              <svg
                v-else-if="item.animation === 'dna'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <path
                  d="M13 8C28 13 28 27 13 32" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" stroke-linecap="round" class="
                    anim-draw
                  "
                />
                <path
                  d="M27 8C12 13 12 27 27 32" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" stroke-linecap="round" class="
                    anim-draw-delay
                  "
                />
                <path d="M16 14H24M15 20H25M16 26H24" stroke="var(--zaac-foundation-muted)" stroke-width="1" stroke-linecap="round" />
              </svg>

              <svg
                v-else-if="item.animation === 'responsive'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <rect
                  x="6" y="8" width="28" height="24" rx="2" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" class="
                    anim-res-frame
                  "
                />
                <rect
                  x="9" y="12" width="10" height="8" rx="1" fill="var(--zaac-foundation-blue)" class="
                    anim-res-img
                  "
                />
                <rect
                  x="22" y="12" width="10" height="2" rx="0.5" fill="var(--zaac-foundation-ink)" class="
                    anim-res-title
                  "
                />
                <rect
                  x="22" y="16.5" width="10" height="1.5" rx="0.5" fill="var(--zaac-foundation-muted)" class="
                    anim-res-line-1
                  "
                />
                <rect
                  x="22" y="20" width="8" height="1.5" rx="0.5" fill="var(--zaac-foundation-muted)" class="
                    anim-res-line-2
                  "
                />
              </svg>

              <svg
                v-else-if="item.animation === 'target'"
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <circle cx="20" cy="20" r="12" stroke="var(--zaac-foundation-muted)" stroke-width="1.5" />
                <circle cx="20" cy="20" r="7" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" />
                <circle
                  cx="20" cy="20" r="2.5" fill="var(--zaac-foundation-blue)" class="
                    anim-target
                  "
                />
              </svg>

              <svg
                v-else
                viewBox="0 0 40 40"
                fill="none"
                class="foundation-svg"
              >
                <path d="M12 27V14C12 11.8 13.8 10 16 10H24C26.2 10 28 11.8 28 14V27" stroke="var(--zaac-foundation-ink)" stroke-width="1.5" stroke-linecap="round" />
                <path
                  d="M8 28C12 25 15 25 20 29C25 25 28 25 32 28" stroke="var(--zaac-foundation-blue)" stroke-width="1.5" stroke-linecap="round" class="
                    anim-draw
                  "
                />
                <path d="M16 17H24M16 22H22" stroke="var(--zaac-foundation-muted)" stroke-width="1.5" stroke-linecap="round" />
              </svg>
            </div>

            <div class="foundation-card-header">
              <h3 class="foundation-card-label">
                {{ $t(`home.classes.items.${item.id}.title`) }}
              </h3>
            </div>
            <p class="foundation-card-detail">
              {{ $t(`home.classes.items.${item.id}.description`) }}
            </p>
          </div>
          <div class="foundation-plinth" :class="item.plinth" />
        </div>
      </div>
    </div>
  </section>
</template>
