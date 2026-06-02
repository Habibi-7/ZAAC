<script setup lang="ts">
import type { Component } from 'vue'
import {
  ArrowRight,
  CalendarClock,
  Globe2,
  Mail,
  PlayCircle,
  Video,
} from 'lucide-vue-next'

interface OnlineFeature {
  id: 'live' | 'recorded' | 'flexible' | 'anywhere'
  icon: Component
}

const features: OnlineFeature[] = [
  { id: 'live', icon: Video },
  { id: 'recorded', icon: PlayCircle },
  { id: 'flexible', icon: CalendarClock },
  { id: 'anywhere', icon: Globe2 },
]

const { t } = useI18n()

const mailtoHref = computed(() => {
  const to = 'zaac.main@gmail.com'
  const subject = encodeURIComponent(t('home.online.email.subject'))
  const body = encodeURIComponent(t('home.online.email.body'))
  return `mailto:${to}?subject=${subject}&body=${body}`
})
</script>

<template>
  <section
    id="online"
    class="
      online-section py-16
      md:py-20
    "
  >
    <div
      class="
        mx-auto max-w-5xl space-y-10 px-6
        md:space-y-12
      "
    >
      <div
        class="relative z-10 mx-auto max-w-2xl space-y-3 text-center"
      >
        <span class="online-eyebrow">
          {{ $t('home.online.eyebrow') }}
        </span>
        <h2 class="text-3xl font-semibold text-balance">
          {{ $t('home.online.title') }}
        </h2>
        <p class="text-pretty text-muted-foreground">
          {{ $t('home.online.subtitle') }}
        </p>
      </div>

      <ul
        class="
          grid gap-3
          sm:grid-cols-2
          lg:grid-cols-4
        "
        role="list"
      >
        <li
          v-for="feature in features"
          :key="feature.id"
          class="online-feature"
        >
          <span class="online-feature__icon">
            <component :is="feature.icon" aria-hidden="true" class="size-5" />
          </span>
          <h3 class="online-feature__title">
            {{ $t(`home.online.features.${feature.id}.title`) }}
          </h3>
          <p class="online-feature__description">
            {{ $t(`home.online.features.${feature.id}.description`) }}
          </p>
        </li>
      </ul>

      <div class="online-cta">
        <div class="online-cta__copy">
          <h3 class="text-xl font-semibold text-balance">
            {{ $t('home.online.cta.title') }}
          </h3>
          <p class="mt-2 text-sm text-pretty text-muted-foreground">
            {{ $t('home.online.cta.description') }}
          </p>
        </div>

        <div class="online-cta__action">
          <Button
            as-child
            size="lg"
            class="online-cta__button"
          >
            <a
              :href="mailtoHref"
              :title="$t('home.online.cta.button')"
            >
              <Mail aria-hidden="true" class="size-4" />
              <span>{{ $t('home.online.cta.button') }}</span>
              <ArrowRight aria-hidden="true" class="size-4" />
            </a>
          </Button>
          <p class="online-cta__hint">
            {{ $t('home.online.cta.hint') }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
