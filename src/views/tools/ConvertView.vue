<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid'

const source = ref<string>()
const dest = ref<string>()

const changedSource = () => {
  alert('test')
}

const inputSource = () => { }

function jsonToCsv(jsonArray: any[], excludeColumns: string[] = [], idType: 'sequential' | 'uuid' = 'sequential'): string {
  let headers = Object.keys(jsonArray[0]).filter(key => !excludeColumns.includes(key));
  let idIndex = headers.indexOf('id');

  if (idType === 'uuid' && idIndex !== -1) {
    // 'id'를 UUID로 대체
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
}

// 예제 JSON 데이터
const jsonData = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

// JSON을 CSV로 변환 (id 열을 순차적으로 생성)
const sequentialCsv = jsonToCsv(jsonData, [], 'sequential');
console.log(sequentialCsv);

// JSON을 CSV로 변환 (id 열을 UUID로 생성)
const uuidCsv = jsonToCsv(jsonData, [], 'uuid');
console.log(uuidCsv);

</script>

<template>
  <div class="flex h-screen p-20">
    <div class="w-1/2 bg-slate-300 rounded-lg p-4">
      <textarea v-model="source" @change="changedSource" @input="inputSource"></textarea>
    </div>
    <div class="w-64 flex flex-col justify-center items-center">
      <div>
        <button>to csv</button>
      </div>
    </div>
    <div class="w-1/2 bg-slate-300 rounded-lg p-4">
      <textarea v-model="dest"></textarea>
    </div>
  </div>
</template>