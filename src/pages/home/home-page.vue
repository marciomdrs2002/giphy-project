<template>
  <q-page padding>
    <search-bar
      v-model="searchQuery"
      label="Pesquisar GIFs"
      @search="handleSearch"
      @clear="clearSearch"
    />

    <div class="row q-col-gutter-md">
      <div v-for="gif in items" :key="gif.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <gif-card :gif="gif" />
      </div>
    </div>

    <div v-if="totalPages > 1" class="row justify-center q-mt-lg">
      <q-pagination
        v-model="currentPage"
        :max="totalPages"
        :max-pages="6"
        direction-links
        boundary-links
        color="primary"
        @update:model-value="onPageChange"
      />
    </div>

    <div v-if="items.length > 0" class="row justify-center q-mt-md">
      <div class="text-caption text-grey-6">
        Página {{ currentPage }} de {{ totalPages }} ({{ pagination.total_count }}
        GIFs encontrados)
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useQuasar } from 'quasar'
import { GiphyApi } from 'src/api/giphy'
import SearchBar from 'src/components/common/search-bar.vue'
import GifCard from 'src/components/common/gif-card.vue'

const $q = useQuasar()
const giphyApi = new GiphyApi()

// Estado local
const items = ref([])
const searchQuery = ref('')
const currentPage = ref(1)
const pageSize = ref(20)
const pagination = ref({
  total_count: 0,
  count: 0,
  offset: 0,
})

// Computed
const totalPages = computed(() => {
  return Math.ceil(pagination.value.total_count / pageSize.value)
})

onMounted(() => {
  fetchTrending()
})

// Métodos
const fetchTrending = async () => {
  try {
    $q.loading.show({
      message: 'Carregando GIFs...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })
    const response = await giphyApi.trending(currentPage.value, pageSize.value)
    items.value = response.data
    pagination.value = response.pagination
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao carregar GIFs',
      icon: 'error',
    })
  } finally {
    $q.loading.hide()
  }
}

const handleSearch = async () => {
  try {
    if (!searchQuery.value.trim()) {
      return clearSearch()
    }
    currentPage.value = 1
    $q.loading.show({
      message: 'Buscando GIFs...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })
    const response = await giphyApi.search(searchQuery.value, currentPage.value, pageSize.value)
    items.value = response.data
    pagination.value = response.pagination
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao pesquisar GIFs',
      icon: 'error',
    })
  } finally {
    $q.loading.hide()
  }
}

const clearSearch = () => {
  searchQuery.value = ''
  currentPage.value = 1
  fetchTrending()
}

const onPageChange = async (page) => {
  try {
    $q.loading.show({
      message: 'Carregando página...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })
    if (searchQuery.value) {
      const response = await giphyApi.search(searchQuery.value, page, pageSize.value)
      items.value = response.data
      pagination.value = response.pagination
    } else {
      const response = await giphyApi.trending(page, pageSize.value)
      items.value = response.data
      pagination.value = response.pagination
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao carregar página',
      icon: 'error',
    })
  } finally {
    $q.loading.hide()
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
