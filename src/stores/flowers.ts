import { ref } from 'vue'
import { defineStore } from 'pinia'
import flowersData from '../mock/flowersData.json'

console.log(flowersData)

export const useFlowerStore = defineStore('flower', () => {
  const currentMonth = ref(new Date().getMonth() + 1)
  const flowers = ref(flowersData)
  function getFlowerByMonth(month: number) {
    return flowers.value.filter((flower) => flower.month === month)
  }

  console.log('이번달: ', currentMonth.value)

  return { currentMonth, flowers, getFlowerByMonth }
})
