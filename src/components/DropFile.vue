<script setup lang="ts">
import { ref } from 'vue';

const isDragOver = ref(false);
const default_limit_count = 8
const droppedFiles = ref<File[]>([]);

const emits = defineEmits(['changeDroppedFiles']);

interface Props {
  title?: string;
  desc?: string;
  limitCount?: number;
}

const props = withDefaults(defineProps<Props>(), {
  title: 'DropFile',
  desc: 'desc...',
  limitCount: default_limit_count,
});

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

const handleFileChange = (event: Event) => {
  console.log('handleFileChange', event);
  const files = (event.target as HTMLInputElement).files || (event as DragEvent).dataTransfer?.files;
  if (files && files.length > 0) {
    // const file = files[0];
    // 파일 처리 로직
    // console.log(file.name);
    // for (const file of files) {
    let notify = false;
    for (let i = 0; i < files.length; i++) {
      if (i >= props.limitCount) {
        console.warn(`이미지는 최대 ${default_limit_count}개까지만 업로드 가능합니다.`)
        // toast msg
        break
      }

      const file = files[i];
      // if not exists, add
      if (!droppedFiles.value.includes(file)) {
        droppedFiles.value.push(file); // base64 인코딩된 이미지 데이터
        notify = true;
      }

      if (notify) {
        emits('changeDroppedFiles', droppedFiles.value);
      }
    }
  }
}

</script>

<template>

  <div>
    <!-- title and desc -->
    <div>
      <slot name="header">
        <!-- 기본 내용 -->
        <h1 class="text-xl font-bold">{{ props.title }} / {{ droppedFiles.length }}</h1>
        <div>{{ props.desc }}</div>
      </slot>
    </div>

    <!-- multiple file input form -->
    <div class="flex flex-col justify-center items-center">
      <label for="dropzone-file"
        class="group/dropzone w-full flex flex-col items-center justify-center rounded-xl border-dashed border-4 border-slate-300 bg-slate-200 hover:bg-slate-300 hover:border-slate-400"
        :class="isDragOver ? 'border-slate-400 bg-slate-300' : ''" @dragover="handleDragOver" @drop="handleDrop"
        @dragleave="handleDragLeave">
        <svg class="w-1/2 h-1/2 group-hover/dropzone:text-slate-400"
          :class="isDragOver ? 'text-slate-400' : 'text-slate-300'" aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
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
  </div>

</template>