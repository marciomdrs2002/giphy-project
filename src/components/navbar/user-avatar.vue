<template>
  <q-btn-dropdown flat dense class="q-ml-sm" dropdown-icon="none">
    <template v-slot:label>
      <q-avatar size="32px">
        <img src="https://cdn.quasar.dev/img/avatar.png" />
      </q-avatar>
    </template>

    <q-list style="min-width: 150px">
      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-icon name="person" />
        </q-item-section>
        <q-item-section>Perfil</q-item-section>
      </q-item>

      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-icon name="settings" />
        </q-item-section>
        <q-item-section>Configurações</q-item-section>
      </q-item>

      <q-separator />

      <q-item clickable v-close-popup>
        <q-item-section avatar>
          <q-icon name="logout" color="negative" />
        </q-item-section>
        <q-item-section class="text-negative">Sair</q-item-section>
      </q-item>
    </q-list>
  </q-btn-dropdown>
</template>

<script setup>
defineOptions({
  name: 'user-avatar',
})
</script>
