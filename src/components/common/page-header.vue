<template>
  <div class="page-header row items-center justify-between q-mb-lg">
    <div class="text-h4">{{ title }}</div>
    <div class="row items-center">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.page-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 1rem;
}
</style>
