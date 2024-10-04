import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('couter', () => {
  const count = ref(110)
  const addCount = (n) => {
    count.value += n
  }
  return {
    count,
    addCount
  }
})
