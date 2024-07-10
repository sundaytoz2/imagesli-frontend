<script setup lang="ts">
</script>

<template>
  <nav class="bg-slate-600 text-white flex justify-between items-center p-2">
    <h1 class="ml-2 text-2xl font-bold cursor-pointer px-3 py-1 rounded bg-slate-400 hover:bg-slate-300"
      @click="$router.push('/')">
      Vue 3
      Tools</h1>
    <ul class="flex gap-x-2">
      <li><router-link to="/tools/image-comp" class="px-3 py-1 rounded bg-slate-400 hover:bg-slate-300">Image
          Compare</router-link></li>
      <li><router-link to="/tools/convert" class="px-3 py-1 rounded bg-slate-400 hover:bg-slate-300">Convert JSON to
          CSV</router-link></li>
    </ul>
    <div class="mr-4">help</div>
  </nav>
  <router-view />
</template>

<style></style>