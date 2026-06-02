<script setup lang="ts">
import { Atom, Beaker, BookOpen, Calculator, Dna, GraduationCap, Monitor, NotebookPen } from 'lucide-vue-next'

const classes = [
  {
    id: 'english',
    icon: BookOpen,
  },
  {
    id: 'mathematics',
    icon: Calculator,
  },
  {
    id: 'physics',
    icon: Atom,
  },
  {
    id: 'chemistry',
    icon: Beaker,
  },
  {
    id: 'biology',
    icon: Dna,
  },
  {
    id: 'computer',
    icon: Monitor,
  },
  {
    id: 'exam',
    icon: GraduationCap,
  },
  {
    id: 'support',
    icon: NotebookPen,
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
        mx-auto max-w-6xl space-y-8 px-6
        md:space-y-12
      "
    >
      <div
        class="relative z-10 mx-auto max-w-xl space-y-4 text-center"
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

      <div
        class="
          relative mx-auto grid gap-3
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <div
          v-for="item in classes"
          :key="item.id"
          class="space-y-3 rounded-xl border p-6"
        >
          <div class="flex items-center gap-2">
            <component
              :is="item.icon"
              class="size-4"
            />
            <h3 class="text-sm font-medium">
              {{ $t(`home.classes.items.${item.id}.title`) }}
            </h3>
          </div>
          <p class="text-sm text-muted-foreground">
            {{ $t(`home.classes.items.${item.id}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
