<template>
  <q-page padding>
    <page-header title="Meus Favoritos">
      <template #actions>
        <q-chip v-if="favoritesStore.favoritesCount > 0" color="primary" text-color="white">
          {{ favoritesStore.favoritesCount }} GIFs
        </q-chip>
      </template>
    </page-header>

    <!-- Estado vazio -->
    <div v-if="favoritesStore.items.length === 0" class="text-center q-py-xl">
      <q-icon name="favorite_border" size="80px" color="grey-5" />
      <div class="text-h6 q-mt-md text-grey-6">Nenhum GIF favoritado ainda</div>
      <div class="text-body2 text-grey-5 q-mt-sm">
        Adicione GIFs aos favoritos na página inicial para vê-los aqui
      </div>
      <q-btn to="/home" color="primary" label="Explorar GIFs" class="q-mt-md" />
    </div>

    <!-- Lista de favoritos -->
    <div v-else>
      <!-- Botão para limpar todos -->
      <div class="row justify-end q-mb-md">
        <q-btn
          color="negative"
          outline
          icon="clear_all"
          label="Limpar todos"
          @click="confirmClearAll"
        />
      </div>

      <!-- Grid de GIFs favoritos -->
      <div class="row q-col-gutter-md">
        <div
          v-for="gif in favoritesStore.items"
          :key="gif.id"
          class="col-12 col-sm-6 col-md-4 col-lg-3"
        >
          <gif-card
            :gif="gif"
            :show-remove-button="true"
            @favorite-toggled="onFavoriteToggled"
            @remove-requested="onRemoveRequested"
          />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { useQuasar } from 'quasar'
import { useFavoritesStore } from 'src/stores/favorites-store'
import GifCard from 'src/components/common/gif-card.vue'
import PageHeader from 'src/components/common/page-header.vue'

defineOptions({
  name: 'FavoritesPage',
})

const $q = useQuasar()
const favoritesStore = useFavoritesStore()

const confirmClearAll = () => {
  $q.dialog({
    title: 'Limpar todos os favoritos',
    message:
      'Tem certeza que deseja remover todos os GIFs dos favoritos? Esta ação não pode ser desfeita.',
    cancel: true,
    persistent: true,
    color: 'negative',
  }).onOk(() => {
    favoritesStore.clearFavorites()
    $q.notify({
      color: 'positive',
      message: 'Todos os favoritos foram removidos',
      icon: 'clear_all',
    })
  })
}

const onFavoriteToggled = () => {}

const onRemoveRequested = () => {}
</script>

<style lang="scss" scoped>
.gif-card {
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
}
</style>
