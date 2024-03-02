<script setup lang="ts">
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import TheWelcome from '../components/TheWelcome.vue'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
