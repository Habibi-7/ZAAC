<script setup lang="ts">
const cards = [
  'local',
  'simple',
  'supportive',
] as const
</script>

<template>
  <section class="bg-background py-12">
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="
          grid gap-3
          md:grid-cols-3
        "
      >
        <div
          v-for="card in cards"
          :key="card"
          class="zaac-trust-card rounded-xl border p-5"
        >
          <p class="text-sm font-medium">
            {{ $t(`home.logos.items.${card}.title`) }}
          </p>
          <p class="mt-2 text-sm text-muted-foreground">
            {{ $t(`home.logos.items.${card}.description`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
