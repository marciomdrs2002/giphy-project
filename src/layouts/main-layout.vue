<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-primary">
      <q-toolbar class="row items-center justify-between">
        <div class="row items-center">
          <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />
          <app-logo class="q-ml-md" />
        </div>
        <div class="row items-center">
          <div class="text-subtitle2 q-mr-sm">Marcio de Medeiros</div>
          <q-avatar size="32px" class="q-mr-md">
            <img src="images/dev.jpg" />
          </q-avatar>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>GiphyFinder</q-item-label>

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
import AppLogo from 'src/components/common/app-logo.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'GIFs em alta e pesquisa',
    icon: 'home',
    link: '/home',
  },
  {
    title: 'Favoritos',
    caption: 'Seus GIFs salvos',
    icon: 'favorite',
    link: '/favorites',
  },
  {
    title: 'Categorias',
    caption: 'Explorar por categoria',
    icon: 'category',
    link: '/categories',
  },
  {
    title: 'Sobre',
    caption: 'Informações do projeto',
    icon: 'info',
    link: '/about',
  },
]

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style lang="scss" scoped>
.q-header {
  background: #0066ff !important;
}
</style>
