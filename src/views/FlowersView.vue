<script setup lang="ts">
import { useFlowerStore } from '@/stores/flowers';

const flowerStore = useFlowerStore();

const flowers = flowerStore.getFlowerByMonth((new Date().getMonth() % 12) + 1);
const prevFlowers = flowerStore.getFlowerByMonth(((new Date().getMonth() - 1) % 12) + 1);
const nextFlowers = flowerStore.getFlowerByMonth(((new Date().getMonth() + 1) % 12) + 1);
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">

    <section class="mb-4 min-h-64 min-w-64 rounded-xl bg-yellow-200">
      <h1>이번달</h1>
      <p>{{ flowers }}</p>
    </section>

    <h1 class="text-4xl font-bold mb-4">Flowers</h1>
    <p class="text-lg text-center">
      This is a flowers view. It's a placeholder for the real content.
    </p>
    <section class="mt-4 flex gap-x-14">
      <div class="min-h-64 min-w-64 rounded-xl bg-yellow-200">
        <h1>이전달</h1>
        <p>{{ prevFlowers }}</p>
      </div>
      <div class="min-h-64 min-w-64 rounded-xl bg-yellow-200">
        <h1>다음달</h1>
        <p>{{ nextFlowers }}</p>
      </div>
    </section>

  </div>
</template>