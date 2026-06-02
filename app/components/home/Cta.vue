<template>
  <section id="contact" class="py-16">
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="
          mx-auto max-w-3xl rounded-xl border px-6 py-10
          md:py-12
        "
      >
        <div class="text-center">
          <h2
            class="text-3xl font-semibold text-balance"
          >
            {{ $t('home.cta.title') }}
          </h2>
          <p class="mt-4 text-muted-foreground">
            {{ $t('home.cta.description') }}
          </p>

          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              as-child
              size="lg"
            >
              <a href="#programs" :title="$t('home.cta.button')">
                {{ $t('home.cta.button') }}
              </a>
            </Button>

            <div
              class="
                zaac-location-chip inline-flex items-center rounded-md border
                px-4 py-2 text-sm text-muted-foreground
              "
            >
              {{ $t('home.cta.location') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
