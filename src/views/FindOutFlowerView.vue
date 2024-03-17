<script setup lang="ts">
import { onMounted, ref } from 'vue';

const isMobile = ref(false);
const imageSrc = ref<string | ArrayBuffer | null>(null);

const clickedTakePicture = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const file = target.files?.[0];
  if (file) {
    console.log('file:', file);
    if (file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        console.log('readAsDataUrl:', e.target!.result)
        imageSrc.value = e.target!.result; // base64 인코딩된 이미지 데이터
      };
      reader.readAsDataURL(file);
      console.log('file: ', file);
    }
  }
};

onMounted(() => {
  const userAgent = navigator.userAgent;

  console.log('userAgent:', userAgent)
  // 모바일 사용자인지 판별하는 간단한 방법
  isMobile.value = /android|ipad|iphone|ipod/i.test(userAgent);
});


</script>

<template>
  <div>
    <h1>꽃 찾기</h1>
    <div v-if="isMobile">
      <p>모바일 사용자입니다.</p>
      <!-- 모바일 사용자일 경우, 사진 찍기 기능 활성화 -->
      <input v-if="isMobile" type="file" accept="image/*" @change="clickedTakePicture">
    </div>
    <div v-else>데스크탑 사용자입니다.</div>
    <div>
      <img v-if="imageSrc" :src="imageSrc" alt="사진">
      <img v-else src="https://via.placeholder.com/300" alt="이미지 없음">
    </div>
  </div>
</template>