<script setup lang="ts">
withDefaults(defineProps<{ size?: number | string }>(), { size: 24 })
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.896 2.896 0 0 1-5.201 1.74 2.895 2.895 0 0 1 2.305-4.642 2.91 2.91 0 0 1 .885.135V9.404a6.336 6.336 0 0 0-1-.057 6.328 6.328 0 0 0-3.469 11.617 6.32 6.32 0 0 0 9.876-5.231V8.687a8.182 8.182 0 0 0 4.773 1.526V6.776a4.86 4.86 0 0 1-.954-.09z" />
  </svg>
</template>
