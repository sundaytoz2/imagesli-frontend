<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import DropFile from '@/components/DropFile.vue';
import ImageComparer from '@/components/ImageComparer.vue';

const dropFileRef = ref<typeof DropFile | null>(null)
const limitImageCount = 2
const workingImages = ref<any[]>(['/before.png', '/after.png'])

const handleFileChange = (files: File[]) => {
  workingImages.value = []
  if (files && files.length > 0) {
    for (let i = 0; i < files.length; i++) {
      if (i >= limitImageCount) {
        console.log('이미지는 최대 8개까지만 업로드 가능합니다.')
        // toast msg
        break
      }

      const file = files[i];
      console.log(file.name);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          // console.log('readAsDataUrl:', e.target!.result)
          workingImages.value.push(e.target!.result); // base64 인코딩된 이미지 데이터
        };
        reader.readAsDataURL(file);
      }
    }
  }
}

const clickedRemoveAllImages = () => {
  workingImages.value = []
  // dropFileRef casting to DropFileComponent to call removeAllFiles method
  if (dropFileRef.value) {
    dropFileRef.value.removeAllFiles()
  }
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="mx-auto max-w-screen-xl flex flex-col gap-4 p-12 justify-center overflow-auto">
    <!-- main -->
    <h1 class="text-xl font-bold">Image Compare with slider<span class="font-normal text-sm">, compare your image with
        overlay
        view</span>
    </h1>

    <div class="bg-slate-200 rounded-xl">
      <!-- input forms -->
      <div v-if="workingImages.length < limitImageCount" class="flex-1 p-2">
        <DropFile ref="dropFileRef" @changeDroppedFiles="handleFileChange">
          <template #header>
            <div></div>
            <!-- <h1 class="text-xl font-bold">Image Comparison<span class="ml-2 font-normal text-sm">Drop your images
                here</span>
            </h1> -->
          </template>
        </DropFile>
      </div>

      <!-- previewer -->
      <div v-else id="image-slider" class="text-center p-2 select-none">
        <ImageComparer class="" :images="workingImages"></ImageComparer>
      </div>
    </div>

    <!-- options -->
    <div v-show="workingImages.length > 0" class="bg-slate-200 rounded-xl p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">Your Images : ({{ workingImages.length }} / {{ limitImageCount }})</h1>
        <div class="flex gap-2">
          <!-- <button class="bg-green-200 border hover:bg-green-400 rounded-lg p-2"
            @click="clickedSubmitComparison">Upload</button> -->
          <button class="bg-red-200 border hover:bg-red-400 rounded-lg p-2" @click="clickedRemoveAllImages">Remove
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

</template>
