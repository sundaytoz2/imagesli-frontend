<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'
import DropFile from '@/components/DropFile.vue';

const isProgressModalOpen = ref(false)
const isSliderDragging = ref(false)
const limitImageCount = 8
const workingImages = ref<any[]>(['icon.png', 'img.png'])
const sliderPosition = ref(50)

// 슬라이더 위치에 따른 스타일 계산
const sliderStyle = computed(() => {
  return {
    left: `${sliderPosition.value}%`
  };
});

const beforeRightStyle = computed(() => {
  return {
    right: `${100 - sliderPosition.value}%`
  };
});

// 드래그 이벤트 처리
const handleSliderDown = (eveent: MouseEvent) => {
  isSliderDragging.value = true;
  window.addEventListener('mouseup', handleSliderUp);
}
const handleSliderUp = (event: MouseEvent) => {
  isSliderDragging.value = false;
  console.log('handleSliderUp')
  window.removeEventListener('mouseup', handleSliderUp);
}
const handleSliderMove = (event: MouseEvent) => {
  if (!isSliderDragging.value)
    return;

  const imageComparer = event.currentTarget as HTMLElement;
  if (imageComparer.id != 'image-comparer') {
    console.warn('not image-comparer')
    return
  }

  const boundingRect = imageComparer.getBoundingClientRect();
  const x = event.clientX - boundingRect.left; // 클릭한 지점 계산
  const width = boundingRect.width
  const newPosition = (x / width) * 100;
  sliderPosition.value = Math.max(0, Math.min(100, newPosition)); // 0과 100 사이로 제한
  console.log('x:', x, 'boundingRect.left:', boundingRect.left, 'newPosition:', newPosition)
};

const handleFileChange = (files: File[]) => {
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
          console.log('readAsDataUrl:', e.target!.result)
          workingImages.value.push(e.target!.result); // base64 인코딩된 이미지 데이터
        };
        reader.readAsDataURL(file);
      }
    }
  }
}

const clickedSubmitComparison = () => {
  console.log('clickedSubmitComparison')

}

const clickedRemoveAllImages = () => {
  workingImages.value = []
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="mx-auto max-w-screen-xl flex flex-col gap-4 p-12 justify-center overflow-auto">
    <!-- main -->
    <div class="flex gap-5 select-none">
      <!-- input forms -->
      <div class="w-2/3 p-2">
        <DropFile @changeDroppedFiles="handleFileChange">
          <template #header>
            <h1 class="text-xl font-bold">Image Comparison<span class="ml-2 font-normal text-sm">Drop your images
                here</span>
            </h1>
          </template>
        </DropFile>
      </div>

      <!-- previewer -->
      <div v-if="workingImages.length > 1" id="image-slider" class="w-1/3 text-center p-2 select-none">
        <h1 class="text-2xl font-bold">Preview</h1>
        <div id="image-comparer" class="relative inline-block border-2 border-slate-600 rounded-xl"
          @mousemove="handleSliderMove" @mouseup="handleSliderUp">
          <div class="absolute left-2 bottom-2 z-20">preview...</div>
          <div class="absolute right-2 bottom-1 z-20 flex gap-1">
            <button class="bg-white p-2 rounded-full">+</button>
            <button class="bg-white p-2 rounded-full">full</button>
          </div>
          <!-- slider -->
          <div id="slider" class="absolute top-0 bottom-0 right-[calc(50%-1px)] z-20 w-0.5 bg-white/50"
            :style="sliderStyle">
            <button
              class="absolute -left-1 top-[calc(50%-24px)] p-0 m-0 border-white border-4 w-2.5 h-12 bg-gray-300 hover:bg-gray-400 cursor-ew-resize"
              @mousedown="handleSliderDown"></button>
            <div class="absolute -left-4 top-0">1</div>
            <div class="absolute left-4 top-0">2</div>
          </div>
          <!-- before -->
          <div class="absolute z-10 overflow-hidden left-0 top-0 bottom-0 right-1/2" :style="beforeRightStyle">
            <img :src="workingImages[0]" alt="image" class="box-image h-full max-w-full rounded-l-xl object-left" />
          </div>
          <!-- after -->
          <img :src="workingImages[1]" alt="image"
            class="box-image w-full max-h-[calc(100vh - 100px)] rounded-r-xl z-9 object-cover" />
        </div>
      </div>
    </div>

    <!-- options -->
    <div v-show="workingImages.length > 0" class="bg-slate-300 rounded-xl p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="font-bold text-xl">Your Images : ({{ workingImages.length }} / {{ limitImageCount }})</h1>
        <div class="flex gap-2">
          <button class="bg-green-200 border hover:bg-green-400 rounded-lg p-2"
            @click="clickedSubmitComparison">Upload</button>
          <button class="bg-red-200 border hover:bg-red-400 rounded-lg p-2" @click="clickedRemoveAllImages">Remove
            ALL</button>
        </div>
      </div>
      <!-- grid or something -->
      <div class="bg-white p-4 rounded-xl columns-1 lg:columns-2 gap-4">

        <div v-for="    image, index     in     workingImages    " :key="index" class="flex relative p-2">
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

<style scoped>
.box-image {
  display: block;
  width: auto;
  max-height: calc(100vh - 100px);
  object-fit: cover;
}
</style>