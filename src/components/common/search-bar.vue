<template>
  <div class="row q-mb-md">
    <q-input
      v-model="searchModel"
      filled
      class="col-12 col-sm-6 col-md-4"
      :label="label"
      @update:model-value="handleSearch"
    >
      <template v-slot:append>
        <q-icon v-if="searchModel" name="close" @click="clearSearch" class="cursor-pointer" />
        <q-icon name="search" @click="handleSearch" class="cursor-pointer" />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: 'Pesquisar',
  },
})

const emit = defineEmits(['update:modelValue', 'search', 'clear'])

const searchModel = ref(props.modelValue)

watch(
  () => props.modelValue,
  (newValue) => {
    searchModel.value = newValue
  },
)

watch(searchModel, (newValue) => {
  emit('update:modelValue', newValue)
})

const handleSearch = () => {
  if (searchModel.value.trim()) {
    emit('search', searchModel.value)
  } else {
    emit('clear')
  }
}

const clearSearch = () => {
  searchModel.value = ''
  emit('update:modelValue', '')
  emit('clear')
}
</script>
