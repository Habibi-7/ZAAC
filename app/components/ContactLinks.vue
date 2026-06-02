<script setup lang="ts">
import type { Component } from 'vue'
import { Facebook, Instagram, Youtube } from 'lucide-vue-next'
import TikTokIcon from './icons/TikTokIcon.vue'

interface SocialLink {
  id: string
  label: string
  href: string
  icon: Component
}

const links: SocialLink[] = [
  {
    id: 'tiktok',
    label: 'TikTok',
    href: 'https://www.tiktok.com/@zaac.main',
    icon: TikTokIcon,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/zaac016',
    icon: Instagram,
  },
  {
    id: 'facebook',
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1Hj5JieW2G/',
    icon: Facebook,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    href: 'https://www.youtube.com/@skillswithjsk-z4b',
    icon: Youtube,
  },
]
</script>

<template>
  <ul class="contact-social" role="list">
    <li v-for="link in links" :key="link.id">
      <a
        :href="link.href"
        :aria-label="link.label"
        :title="link.label"
        target="_blank"
        rel="noopener noreferrer"
        class="contact-social__link"
      >
        <component :is="link.icon" class="contact-social__icon" aria-hidden="true" />
      </a>
    </li>
  </ul>
</template>
