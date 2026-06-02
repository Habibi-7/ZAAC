<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const { locale, localeProperties } = useI18n()
const heroUrl = '/images/hero.svg'
const isRtl = computed(() => localeProperties.value.dir === 'rtl')
</script>

<template>
  <section>
    <div
      class="
        py-16
        md:py-24
      "
    >
      <div
        class="
          mx-auto flex max-w-6xl flex-col items-center gap-12 px-6
          lg:flex-row lg:justify-between
        "
      >
        <div
          :lang="locale"
          :dir="isRtl ? 'rtl' : 'ltr'"
          class="max-w-lg text-center"
          :class="isRtl ? 'lg:text-right' : 'lg:text-left'"
        >
          <a
            href="#programs"
            :title="$t('home.hero.badge')"
            class="
              zaac-hero-badge mx-auto mb-8 inline-flex w-fit items-center gap-2
              rounded-full border p-1 pr-3
            "
            :class="isRtl ? 'lg:mr-0 lg:ml-auto' : 'lg:mr-auto lg:ml-0'"
          >
            <span
              data-zaac-badge-mark
              class="
                flex items-center gap-1.5 rounded-full bg-muted px-2 py-1
                text-xs
              "
            >
              ZAAC
            </span>
            <span class="text-sm">{{ $t('home.hero.badge') }}</span>
            <span class="block h-4 w-px bg-border" />
            <ArrowRight aria-hidden="true" class="size-4" />
          </a>

          <h1
            class="
              text-4xl font-medium text-balance
              md:text-5xl
              xl:text-6xl
            "
          >
            {{ $t('home.hero.title') }}
          </h1>
          <p class="mt-6 text-lg text-pretty text-muted-foreground">
            {{ $t('home.hero.description') }}
          </p>

          <div
            class="
              mt-10 flex flex-col items-center justify-center gap-2
              sm:flex-row
            "
            :class="isRtl ? 'lg:justify-end' : 'lg:justify-start'"
          >
            <Button
              as-child
              size="lg"
              class="px-5 text-base"
            >
              <a href="#programs">
                <span class="text-nowrap">{{ $t('home.hero.primary_action') }}</span>
              </a>
            </Button>
            <Button
              as-child
              size="lg"
              variant="ghost"
              class="px-5 text-base"
            >
              <a href="#contact" :title="$t('home.hero.secondary_action')">
                <span class="text-nowrap">{{ $t('home.hero.secondary_action') }}</span>
              </a>
            </Button>
          </div>
        </div>

        <object
          type="image/svg+xml"
          :data="heroUrl"
          class="
            hidden aspect-square w-96 shrink-0
            md:block
            lg:w-[420px]
          "
          aria-label="Mathematics education illustration"
          suppressHydrationWarning
        />
      </div>
    </div>
  </section>
</template>
