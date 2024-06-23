<script setup>
const props = defineProps({
  headline: String,
  short: String,
  imgSource: String
})
</script>
<template>
  <div class="card-container">
    <h3 class="card-title">{{ props.headline }}</h3>
    <img :src="props.imgSource" alt="" class="card-image" />
    <p class="card-text">
      {{ props.short }}
    </p>
  </div>
</template>

<style scoped>
.card-container {
  display: block;
}
.card-title {
  font-size: 2rem;
}
.card-image {
  width: 85%;
}
.card-text {
  font-size: 1.2rem;
}
</style>
/
