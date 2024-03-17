<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { initFlowbite } from 'flowbite'

const isDragOver = ref(false)
const limitImageCount = 8
const workingImages = ref<any[]>([])

const handleFileChange = (event: Event) => {
  const files = (event.target as HTMLInputElement).files || (event as DragEvent).dataTransfer?.files;
  if (files && files.length > 0) {
    // const file = files[0];
    // 파일 처리 로직
    // console.log(file.name);
    // for (const file of files) {
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

const handleDragOver = (event: DragEvent) => {
  // console.log('handleDragOver', event)
  event.preventDefault() // 파일이 드래그되었을 때 브라우저가 기본적으로 수행하는 동작을 방지
  event.dataTransfer!.dropEffect = 'copy'
  isDragOver.value = true;
}

const handleDrop = (event: DragEvent) => {
  // console.log('handleDrop', event)
  event.preventDefault() // 파일이 드래그되었을 때 브라우저가 기본적으로 수행하는 동작을 방지
  handleFileChange(event)
  isDragOver.value = false;
}

const handleDragLeave = (event: DragEvent) => {
  const labelElement = event.currentTarget as HTMLLabelElement
  if (!labelElement.contains(event.relatedTarget as Node)) {
    event.preventDefault() // 파일이 드래그되었을 때 브라우저가 기본적으로 수행하는 동작을 방지
    isDragOver.value = false;
  } else {
    console.log('drag inside')
  }
}

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>

<template>
  <main class="h-screen max-w-screen-xl flex flex-col gap-4 p-12">
    <h1>Image Slider</h1>
    <div class="flex flex-col justify-center items-center">
      <label for="dropzone-file"
        class="w-full flex flex-col items-center justify-center rounded-xl border-dashed border-2 border-slate-200 bg-slate-300  hover:bg-slate-400"
        :class="isDragOver ? 'border-primary-500 bg-slate-400' : 'border-slate-200'" @dragover="handleDragOver"
        @drop="handleDrop" @dragleave="handleDragLeave">
        <svg class="w-64 h-64 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
          <path fill-rule="evenodd" d="M13 10a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H14a1 1 0 0 1-1-1Z" clip-rule="evenodd" />
          <path fill-rule="evenodd"
            d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12c0 .556-.227 1.06-.593 1.422A.999.999 0 0 1 20.5 20H4a2.002 2.002 0 0 1-2-2V6Zm6.892 12 3.833-5.356-3.99-4.322a1 1 0 0 0-1.549.097L4 12.879V6h16v9.95l-3.257-3.619a1 1 0 0 0-1.557.088L11.2 18H8.892Z"
            clip-rule="evenodd" />
        </svg>
        <p class="text-center">Click to upload or drag and drop</p>
        <p class="text-center">SVG, PNG, JPG or GIF</p>
        <input id="dropzone-file" type="file" accept="image/*" multiple class="hidden" @change="handleFileChange" />
      </label>
    </div>

    <div class="bg-slate-300 rounded-xl">
      <p>Slots (max 8)</p>
      <!-- grid or something -->
      <div class="columns-2">
        <div v-for="image, index in workingImages" :key="index" class="flex relative">
          <button class="absolute top-0 right-0 p-2 text-white bg-red-500 rounded-full"
            @click="workingImages.splice(index, 1)">X</button>
          {{ index }}
          <img :src="image" alt="image" class="w-64 h-64 object-cover rounded-xl" />
          <!-- 1line text input -->
          <div>
            <input type="text" class="w-full" placeholder="Image description" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
