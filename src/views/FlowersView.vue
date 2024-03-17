<script setup lang="ts">
import FlowerCard from '@/components/FlowerCard.vue';
import { useFlowerStore } from '@/stores/flowers';

const flowerStore = useFlowerStore();

const flowers = flowerStore.getFlowerByMonth((new Date().getMonth() % 12) + 1);
const prevFlowers = flowerStore.getFlowerByMonth(((new Date().getMonth() - 1) % 12) + 1);
const nextFlowers = flowerStore.getFlowerByMonth(((new Date().getMonth() + 1) % 12) + 1);

const clickedFindFlowerShop = () => {
  alert('근처 꽃가게를 찾았습니다.');
};
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      <h1>이번달</h1>
      <section>
        <FlowerCard v-bind="{ ...flowers[0], }" />
      </section>

      <div>
        <h1 class="text-4xl font-bold mb-4">Flowers</h1>
        <p class="text-lg text-center mb-4">
          This is a flowers view. It's a placeholder for the real content.
        </p>
        <button @click="clickedFindFlowerShop"
          class="block mx-auto rounded-lg p-2 border-2 border-pink-400 hover:bg-pink-300 hover:shadow animate-pulse">근처
          꽃가게가
          있을까요?</button>
        <div class="flex justify-end">
          <button @click="clickedFindFlowerShop"
            class="rounded-lg p-2 border-2 border-pink-400 hover:bg-pink-300 hover:shadow animate-pulse">근처
            꽃가게가
            있을까요?</button>
        </div>
      </div>

      <div class="mt-4 flex gap-x-14">
        <section>
          <h1>이전달</h1>
          <FlowerCard v-bind="{ ...prevFlowers[0], }" />
        </section>

        <section>
          <h1>다음달</h1>
          <FlowerCard v-bind="{ ...nextFlowers[0], }" />
        </section>

      </div>
    </div>
  </div>
</template>