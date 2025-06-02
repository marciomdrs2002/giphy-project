<template>
  <q-card class="gif-card">
    <q-img :src="gif.images.fixed_height.url" :ratio="4 / 3" spinner-color="primary" />

    <q-card-section>
      <div class="text-subtitle2">{{ gif.title || 'GIF sem título' }}</div>
    </q-card-section>

    <q-card-actions align="right">
      <!-- Botão de favorito -->
      <q-btn
        flat
        round
        :color="isFavorite ? 'red' : 'grey'"
        :icon="isFavorite ? 'favorite' : 'favorite_border'"
        @click="handleToggleFavorite"
      >
        <q-tooltip>
          {{ isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos' }}
        </q-tooltip>
      </q-btn>

      <!-- Botão de compartilhar -->
      <q-btn flat round color="grey" icon="share" @click="handleShare">
        <q-tooltip>Compartilhar</q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup>
import { computed } from 'vue'
import { useQuasar } from 'quasar'
import { useFavoritesStore } from 'src/stores/favorites-store'

// Props
const props = defineProps({
  gif: {
    type: Object,
    required: true,
  },
  showRemoveButton: {
    type: Boolean,
    default: false,
  },
})

// Emits
const emit = defineEmits(['favorite-toggled', 'remove-requested'])

const $q = useQuasar()
const favoritesStore = useFavoritesStore()

// Computed
const isFavorite = computed(() => favoritesStore.isFavorite(props.gif.id))

// Methods
const handleToggleFavorite = () => {
  favoritesStore.toggleFavorite(props.gif)
  const message = favoritesStore.isFavorite(props.gif.id)
    ? 'GIF adicionado aos favoritos'
    : 'GIF removido dos favoritos'

  const icon = favoritesStore.isFavorite(props.gif.id) ? 'favorite' : 'favorite_border'

  $q.notify({
    color: favoritesStore.isFavorite(props.gif.id) ? 'positive' : 'negative',
    message,
    icon,
  })

  // Emite evento para o componente pai
  emit('favorite-toggled', { gif: props.gif, isFavorite: favoritesStore.isFavorite(props.gif.id) })
}

const handleShare = async () => {
  try {
    const shareData = {
      title: props.gif.title || 'GIF do Giphy',
      text: props.gif.title || 'Confira este GIF incrível!',
      url: props.gif.images.original.url,
    }

    if (navigator.share) {
      await navigator.share(shareData)
    } else {
      await navigator.clipboard.writeText(shareData.url)
      $q.notify({
        color: 'positive',
        message: 'URL copiada para a área de transferência',
        icon: 'content_copy',
      })
    }
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao compartilhar GIF',
      icon: 'error',
    })
  }
}
</script>

<style lang="scss" scoped>
.gif-card {
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-5px);
  }
}
</style>
