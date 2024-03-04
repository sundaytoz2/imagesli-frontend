<script setup lang="ts">
import type { Flower } from '@/types';
import { defineProps } from 'vue';

const props = defineProps<Flower>();

const clickedFlower = () => {
  alert('꽃을 클릭했습니다.');
};
</script>

<template>
  <div @click="clickedFlower"
    class="cursor-pointer mb-4 min-h-64 min-w-64 rounded-xl bg-yellow-200 hover:bg-yellow-300 hover:shadow">
    <h1>{{ props.name }} </h1>
    <p>{{ props.meaning }}</p>
    <p>{{ props.tips }}</p>
  </div>
</template>