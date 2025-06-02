<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>Giphy Project</q-toolbar-title>

        <div class="text-subtitle2 q-mr-sm">John Doe</div>
        <user-avatar />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Essential Links</q-item-label>

        <essential-link v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import essentialLink from 'src/components/navbar/essential-link.vue'
import userAvatar from 'src/components/navbar/user-avatar.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Home',
    icon: 'home',
    link: '/home',
  },
  {
    title: 'Favoritos',
    caption: 'Favoritos',
    icon: 'favorite',
    link: '/favorites',
  },
  {
    title: 'Categorias',
    caption: 'Categorias',
    icon: 'category',
    link: '/categories',
  },
  {
    title: 'Sobre',
    caption: 'Sobre',
    icon: 'info',
    link: '/about',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
