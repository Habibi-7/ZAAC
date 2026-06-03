<script setup lang="ts">
import testimonials from '@/data/testimonials.json'

interface Testimonial {
  id: string
  content: string
}

const typedTestimonials = testimonials as Testimonial[]
</script>

<template>
  <section>
    <div
      class="
        py-12
        md:py-16
      "
    >
      <div class="mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h2 class="text-3xl font-semibold">
            {{ $t('home.testimonials.title') }}
          </h2>
          <p class="mt-4 text-muted-foreground">
            {{ $t('home.testimonials.subtitle') }}
          </p>
        </div>
        <div
          class="
            mt-8 grid gap-3
            md:mt-12 md:grid-cols-3
          "
        >
          <article
            v-for="testimonial in typedTestimonials"
            :key="testimonial.id"
            class="
              rounded-xl border bg-card px-4 py-5 transition-shadow
              hover:shadow-md
            "
          >
            <h3 class="zaac-testimonial-name font-medium">
              {{ $t(`home.testimonials.items.${testimonial.id}.name`) }}
            </h3>

            <blockquote class="mt-3">
              <p class="text-foreground">
                {{ $t(`home.testimonials.items.${testimonial.id}.content`) }}
              </p>
            </blockquote>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
