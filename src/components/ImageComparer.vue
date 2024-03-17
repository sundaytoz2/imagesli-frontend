<script setup lang="ts">
import { computed, ref } from 'vue';


const isSliderDragging = ref(false)
const sliderPosition = ref(50)

interface Props {
  images: string[];
}

const props = withDefaults(defineProps<Props>(), {
  images: () => ['icon.png', 'img.png']
});

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
const handleSliderDown = (event: MouseEvent) => {
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
};
</script>

<template>

  <div id="image-slider" class="p-2 select-none">
    <slot name="header">
      <h1 class="text-2xl font-bold">Preview</h1>
    </slot>

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
        <img :src="props.images[0]" alt="image"
          class="box-image h-full max-w-full rounded-l-xl object-left object-cover" />
      </div>
      <!-- after -->
      <img :src="props.images[1]" alt="image"
        class="box-image w-full max-h-[calc(100vh - 100px)] rounded-r-xl z-9 object-cover" />
    </div>
  </div>
</template>