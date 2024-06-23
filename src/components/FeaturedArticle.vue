<script setup>
import ATitle from './ATitle.vue'

const props = defineProps({
  headline: String,
  imgSource: String
})
</script>

<template>
  <ATitle :text="props.headline" size="2rem"></ATitle>
  <img :src="props.imgSource" alt="" />
</template>

<style scoped>
img {
  width: 80%;
}
</style>
