<script setup lang="ts">
const slides = [
  {
    src: '/images/classroom/certificate.jpeg',
    altKey: 'certificate',
  },
  {
    src: '/images/classroom/ceremony.jpeg',
    altKey: 'ceremony',
  },
  {
    src: '/images/classroom/computer.jpeg',
    altKey: 'computer',
  },
  {
    src: '/images/classroom/graduation.jpeg',
    altKey: 'graduation',
  },
  {
    src: '/images/classroom/female-students.jpeg',
    altKey: 'female_students',
  },
  {
    src: '/images/classroom/speaker.jpeg',
    altKey: 'speaker',
  },
] as const

const loopedSlides = [...slides, ...slides]
</script>

<template>
  <section class="overflow-hidden py-12">
    <div class="mx-auto max-w-6xl px-6">
      <div class="mx-auto max-w-xl space-y-4 text-center">
        <h2 class="text-3xl font-semibold text-balance">
          {{ $t('home.image_slider.title') }}
        </h2>
        <p class="text-muted-foreground">
          {{ $t('home.image_slider.subtitle') }}
        </p>
      </div>
    </div>

    <div data-zaac-image-slider dir="ltr" class="mt-10">
      <div data-zaac-image-track class="flex w-max gap-4 px-6">
        <figure
          v-for="(slide, index) in loopedSlides"
          :key="`${slide.src}-${index}`"
          class="
            w-80 shrink-0 overflow-hidden rounded-xl border bg-card
            md:w-[28rem]
          "
        >
          <img
            :src="slide.src"
            :alt="$t(`home.image_slider.slides.${slide.altKey}`)"
            class="aspect-[4/3] h-full w-full object-cover grayscale"
            loading="lazy"
          >
        </figure>
      </div>
    </div>

    <div data-zaac-slider-dots aria-hidden="true" />
  </section>
</template>

<style scoped>
[data-zaac-image-slider] {
  mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
}

[data-zaac-image-track] {
  animation: zaac-image-marquee 32s linear infinite;
}

[data-zaac-image-slider]:hover [data-zaac-image-track] {
  animation-play-state: paused;
}

[data-zaac-slider-dots] {
  width: 100vw;
  height: 16px;
  margin: 1.5rem 0 0;
  margin-left: calc(50% - 50vw);
  background-image: radial-gradient(circle, oklch(0.58 0.12 225 / 54%) 0.9px, transparent 1.5px);
  background-repeat: repeat;
  background-size: 8px 6px;
  opacity: 0.72;
  pointer-events: none;
}

:global(.dark) [data-zaac-slider-dots] {
  background-image: radial-gradient(circle, oklch(0.72 0.1 225 / 64%) 0.9px, transparent 1.5px);
}

@keyframes zaac-image-marquee {
  to {
    transform: translateX(calc(-50% - 0.5rem));
  }
}

@media (prefers-reduced-motion: reduce) {
  [data-zaac-image-slider] {
    overflow-x: auto;
    mask-image: none;
  }

  [data-zaac-image-track] {
    animation: none;
  }
}
</style>
