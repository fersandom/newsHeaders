<script setup>
const props = defineProps({
  text: String,
  size: String
})
</script>
<template>
  <h3 class="size">{{ props.text }}</h3>
</template>

<style>
.size {
  font-size: v-bind(size);
}
</style>
