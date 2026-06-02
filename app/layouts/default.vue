<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
import logoUrl from '@/assets/images/logo.jpeg'

const showMenu = ref(false)
const { title } = useAppConfig()
</script>

<template>
  <div class="flex min-h-screen flex-col">
    <!-- Header -->
    <header>
      <nav
        :data-state="showMenu && 'active'"
        class="fixed z-20 w-full border-b bg-background/50 backdrop-blur-3xl"
      >
        <div class="mx-auto max-w-6xl px-6 transition-all duration-300">
          <div
            class="
              relative flex flex-wrap items-center justify-between gap-6 py-3
              lg:gap-0 lg:py-4
            "
          >
            <div
              class="
                flex w-full items-center justify-between gap-12
                lg:w-auto
              "
            >
              <NuxtLink
                to="/"
                :title="title"
                aria-label="ZAAC home"
                class="flex items-center"
              >
                <img
                  :src="logoUrl"
                  alt=""
                  width="96"
                  height="96"
                  class="
                    h-10 w-auto shrink-0 rounded-md object-contain
                    sm:h-12
                  "
                >
              </NuxtLink>

              <button
                aria-label="Toggle Menu"
                :aria-expanded="showMenu"
                aria-controls="mobile-menu"
                class="
                  relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5
                  lg:hidden
                "
                @click="showMenu = !showMenu"
              >
                <Menu
                  class="m-auto size-6 duration-200" :class="[
                    showMenu && 'scale-0 rotate-180 opacity-0',
                  ]"
                />
                <X
                  class="absolute inset-0 m-auto size-6 duration-200" :class="[
                    showMenu ? 'scale-100 rotate-0 opacity-100' : `
                      scale-0 -rotate-180 opacity-0
                    `,
                  ]"
                />
              </button>
            </div>

            <div
              id="mobile-menu"
              class="
                mb-6 w-full flex-wrap items-center justify-end space-y-8
                rounded-3xl border bg-background p-6 shadow-2xl
                shadow-zinc-300/20
                md:flex-nowrap
                lg:m-0 lg:flex lg:w-fit lg:items-center lg:gap-6 lg:space-y-0
                lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none
                dark:shadow-none dark:lg:bg-transparent
              " :class="[
                showMenu ? 'block' : 'hidden',
              ]"
            >
              <div
                class="
                  flex w-full flex-col items-center space-y-3
                  sm:flex-row sm:gap-3 sm:space-y-0
                  md:w-fit
                "
              >
                <Button
                  as-child
                  variant="outline"
                  size="sm"
                >
                  <a href="#programs">{{ $t('layouts.header.programs') }}</a>
                </Button>
                <Button
                  as-child
                  size="sm"
                >
                  <a href="#contact">{{ $t('layouts.header.contact') }}</a>
                </Button>

                <SwitchLanguage />
                <SwitchTheme />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>

    <!-- Main Content -->
    <main class="flex flex-1 flex-col pt-20">
      <slot />
    </main>

    <footer class="site-footer">
      <div class="footer-row">
        <NuxtLink
          to="/"
          :title="title"
          aria-label="home"
          class="footer-logo"
        >
          {{ title }}
        </NuxtLink>

        <nav class="footer-links" aria-label="Footer">
          <a href="#programs">{{ $t('layouts.header.programs') }}</a>
          <a href="#contact">{{ $t('layouts.header.contact') }}</a>
          <span>{{ $t('layouts.footer.location') }}</span>
        </nav>

        <div class="footer-credit">
          <span>
            {{ $t('layouts.footer.created_by') }}
            <NuxtLink to="/">
              {{ $t('layouts.footer.creator') }}
            </NuxtLink>
          </span>
        </div>
      </div>
    </footer>
  </div>
</template>
