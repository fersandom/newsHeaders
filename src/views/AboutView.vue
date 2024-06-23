<script setup>
import { useCounterStore } from '@/stores/CounterStore'

const counter = useCounterStore()
</script>

<template>
  <h1>About</h1>



  {{ counter.count }}
  <br />
  <button @click="counter.decrease">-1</button>
  <button @click="counter.increment">+1</button>
</template>
