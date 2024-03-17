<script setup lang="ts">
import { ref } from 'vue';
import DropFile from '@/components/DropFile.vue';

const isProgressModalOpen = ref(false);
const workingImages = ref<any[]>([]);
</script>

<template>
  <main class="mx-auto max-w-screen-xl flex flex-col gap-4 p-12 justify-center overflow-auto">
    <!-- main -->
    <div class="flex gap-5 select-none">
      <!-- input forms -->
      <div class="w-1/3 p-2">
        <DropFile>
          <template #header>
            <h1>Yes</h1>
          </template>
        </DropFile>

      </div>

      <!-- previewer -->
      <div id="summarize" class="w-2/3 text-center p-2 select-none">
        <h1 class="text-2xl font-bold">Preview</h1>
      </div>
    </div>

    <!-- options -->
    <div class="bg-slate-300 rounded-xl p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">Your Files : ( / )</h1>
        <div class="flex gap-2">
          <button class="bg-green-200 border hover:bg-green-400 rounded-lg p-2">Upload</button>
          <button class="bg-red-200 border hover:bg-red-400 rounded-lg p-2">Remove
            ALL</button>
        </div>
      </div>
      <!-- grid or something -->
      <div class="bg-white p-4 rounded-xl columns-1 lg:columns-2 gap-4">

        <div v-for="image, index in workingImages" :key="index" class="flex relative p-2">
          <button class="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
            @click="workingImages.splice(index, 1)">X</button>

          <img :src="image" alt="image" class="w-1/2 rounded-xl" />
          <!-- 1line text input -->
          <div class="w-1/2 flex flex-col justify-between p-4">
            <p>{{ index }}</p>
            <input type="text" class="w-full" placeholder="Image description" />
          </div>
        </div>
      </div>
    </div>

    <h1 class="text-xl font-bold">Image Slider<span class="font-normal text-sm">, compare your image with overlay
        view</span>
    </h1>
  </main>
  <!-- progress modal -->
  <div v-show="isProgressModalOpen" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
    <div class="bg-white p-8 rounded-xl">
      <h1 class="text-xl font-bold">Uploading...</h1>
      <!-- spinner -->
      <div class="spinner spinner-primary"></div>
    </div>
  </div>
</template>