<script setup lang="ts">
import { Atom, Beaker, BookOpen, Calculator, Dna, GraduationCap, Monitor, NotebookPen } from 'lucide-vue-next'

const classes = [
  {
    title: 'English Language',
    description: 'Reading, writing, speaking, and grammar for students building strong English skills.',
    icon: BookOpen,
  },
  {
    title: 'Mathematics',
    description: 'Clear, practical math classes from fundamentals to advanced school topics.',
    icon: Calculator,
  },
  {
    title: 'Physics',
    description: 'Core physics lessons with clear explanations, examples, and problem solving.',
    icon: Atom,
  },
  {
    title: 'Chemistry',
    description: 'Practical chemistry support for formulas, reactions, and school coursework.',
    icon: Beaker,
  },
  {
    title: 'Biology',
    description: 'Biology classes that make living systems, diagrams, and concepts easier to understand.',
    icon: Dna,
  },
  {
    title: 'Computer Skills',
    description: 'Computer basics and practical digital skills for school and future work.',
    icon: Monitor,
  },
  {
    title: 'Exam Preparation',
    description: 'Focused review sessions to help students prepare with more confidence.',
    icon: GraduationCap,
  },
  {
    title: 'School Support',
    description: 'Extra help for homework, assignments, and difficult school lessons.',
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
          Classes
        </h2>
        <p class="text-muted-foreground">
          Focused programs for students in Kabul.
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
          :key="item.title"
          class="space-y-3 rounded-xl border p-6"
        >
          <div class="flex items-center gap-2">
            <component
              :is="item.icon"
              class="size-4"
            />
            <h3 class="text-sm font-medium">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-sm text-muted-foreground">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
