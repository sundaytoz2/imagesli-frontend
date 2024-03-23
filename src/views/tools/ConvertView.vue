<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { json } from 'stream/consumers';

const source = ref<string>('');
const dest = ref<string>('');

const jsonToCsv = (jsonArray: any[], excludeColumns: string[] = [], idType: 'sequential' | 'uuid' = 'sequential'): string => {
  let headers = Object.keys(jsonArray[0]).filter(key => !excludeColumns.includes(key));
  let idIndex = headers.indexOf('id');

  if (idType === 'uuid' && idIndex !== -1) {
    // 'id'를 'uuid'로 대체
    headers[idIndex] = 'uuid';
  }

  const headerRow = headers.join(',');

  let counter = 1;  // 순차적 ID를 위한 카운터
  const rows = jsonArray.map(obj => {
    let row = headers.map(key => {
      if (key === 'uuid') {
        return uuidv4();
      } else if (key === 'id' && idType === 'sequential') {
        return counter++;
      } else {
        const value = obj[key];
        return typeof value === 'string' ? `"${value.replace(/"/g, '""')}"` : value;
      }
    });
    return row.join(',');
  });

  return [headerRow, ...rows].join('\r\n');
};

const convertToJsonAndCsv = () => {
  try {
    // source.value에서 작은따옴표를 큰따옴표로 변환
    let jsonString = source.value.trim()
    jsonString = source.value.replace(/'/g, '"');

    // 키 이름에 큰따옴표가 없는 경우, 큰따옴표로 묶기
    jsonString = jsonString.replace(/(\w+):/g, '"$1":');

    if (!jsonString.startsWith('[')) {
      jsonString = `[${jsonString}]`;
    }
    const jsonData = JSON.parse(jsonString);
    dest.value = jsonToCsv(jsonData, [], 'sequential'); // 여기서 idType을 'uuid'로 설정하면 UUID를 사용할 수 있습니다.
  } catch (e) {
    alert('Invalid JSON');
  }
};
</script>

<template>
  <div class="flex h-screen p-20">
    <div class="w-1/2 bg-slate-300 rounded-lg p-4">
      <textarea v-model="source" placeholder="Enter JSON here"></textarea>
    </div>
    <div class="w-64 flex flex-col justify-center items-center">
      <button @click="convertToJsonAndCsv">to csv</button>
    </div>
    <div class="w-1/2 bg-slate-300 rounded-lg p-4">
      <textarea v-model="dest" placeholder="CSV will appear here"></textarea>
    </div>
  </div>
</template>
