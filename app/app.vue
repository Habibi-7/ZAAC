<script setup lang="ts">
const { title, description } = useAppConfig()
const route = useRoute()
const localeHead = useLocaleHead()
const siteUrl = 'https://zahoorafkaar.com'

useSeoMeta({
  title: `${title} - Academic Center in Kabul`,
  description,
  ogType: 'website',
  ogTitle: title,
  ogSiteName: title,
  ogDescription: description,
  twitterTitle: title,
  twitterDescription: description,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  htmlAttrs: localeHead.value.htmlAttrs,
  meta: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: computed(() => `${siteUrl}${route.path}`),
    },
  ],
}))
</script>

<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#000" />
    <NuxtPage />
  </NuxtLayout>
</template>
