<template>
  <q-page padding>
    <page-header title="Categorias">
      <template #actions>
        <q-chip v-if="selectedCategory" color="primary" text-color="white">
          {{ pagination.total_count }} GIFs encontrados
        </q-chip>
      </template>
    </page-header>

    <div class="categories-section q-mb-lg">
      <div class="row q-col-gutter-sm">
        <div v-for="category in categories" :key="category.name" class="col-auto">
          <q-chip
            :color="selectedCategory === category.name ? 'primary' : 'grey'"
            text-color="white"
            clickable
            @click="handleCategoryClick(category.name)"
          >
            {{ category.name }}
          </q-chip>
        </div>
      </div>
    </div>

    <div v-if="selectedCategory" class="text-h6 q-mb-md">
      GIFs da categoria: {{ selectedCategory }}
    </div>

    <div class="row q-col-gutter-md">
      <div v-for="gif in items" :key="gif.id" class="col-12 col-sm-6 col-md-4 col-lg-3">
        <gif-card :gif="gif" />
      </div>
    </div>

    <div v-if="!selectedCategory" class="text-center q-mt-xl">
      <q-icon name="category" size="4rem" color="grey-5" />
      <div class="text-h6 text-grey-7 q-mt-md">Selecione uma categoria para ver os GIFs</div>
    </div>

    <div v-if="selectedCategory && totalPages > 1" class="row justify-center q-mt-lg">
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

    <div v-if="selectedCategory && items.length > 0" class="row justify-center q-mt-md">
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
import GifCard from 'src/components/common/gif-card.vue'
import PageHeader from 'src/components/common/page-header.vue'

const $q = useQuasar()
const giphyApi = new GiphyApi()

const items = ref([])
const categories = ref([])
const selectedCategory = ref('')
const currentPage = ref(1)
const pageSize = ref(20)
const pagination = ref({
  total_count: 0,
  count: 0,
  offset: 0,
})

const totalPages = computed(() => {
  return Math.ceil(pagination.value.total_count / pageSize.value)
})

onMounted(async () => {
  await fetchCategories()
})

const fetchCategories = async () => {
  try {
    $q.loading.show({
      message: 'Carregando categorias...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })
    const response = await giphyApi.getCategories()
    categories.value = response
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao carregar categorias',
      icon: 'error',
    })
  } finally {
    $q.loading.hide()
  }
}

const handleCategoryClick = async (categoryName) => {
  try {
    if (selectedCategory.value === categoryName) {
      selectedCategory.value = ''
      items.value = []
      pagination.value = {
        total_count: 0,
        count: 0,
        offset: 0,
      }
      return
    }

    selectedCategory.value = categoryName
    currentPage.value = 1

    $q.loading.show({
      message: 'Carregando GIFs da categoria...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })

    const response = await giphyApi.getByCategory(categoryName, currentPage.value, pageSize.value)
    items.value = response.data
    pagination.value = response.pagination
  } catch (error) {
    console.error(error)
    $q.notify({
      color: 'negative',
      message: 'Erro ao carregar GIFs da categoria',
      icon: 'error',
    })
  } finally {
    $q.loading.hide()
  }
}

const onPageChange = async (page) => {
  if (!selectedCategory.value) return

  try {
    $q.loading.show({
      message: 'Carregando página...',
      spinnerColor: 'primary',
      backgroundColor: 'dark',
    })

    const response = await giphyApi.getByCategory(selectedCategory.value, page, pageSize.value)
    items.value = response.data
    pagination.value = response.pagination
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
.categories-section {
  .q-chip {
    transition: transform 0.2s;
    &:hover {
      transform: translateY(-2px);
    }
  }
}
</style>
