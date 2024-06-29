<script setup>
import { onMounted, ref } from 'vue'
import ATitle from './ATitle.vue'

const props = defineProps({
  featuredArticles: Array
})

const i = ref(0)

function startTimer() {
  setInterval(() => {
    goToNextArticle()
  }, 3000)
}

function goToNextArticle() {
  if (i.value === props.featuredArticles.length - 1) {
    i.value = 0
  } else {
    i.value++
  }
}

function goToPreviousArticle() {
  if (i.value === 0) {
    i.value = props.featuredArticles.length - 1
  } else {
    i.value--
  }
}

onMounted(() => {
  startTimer()
})
</script>

<template>
  <article>
    <ATitle :text="props.featuredArticles[i].headline" size="2rem"></ATitle>
    <img :src="props.featuredArticles[i].image" alt="An image" />
    <div class="buttons-container">
      <button @click="goToPreviousArticle">-</button>
      <div v-for="(article, index) in props.featuredArticles" :key="article.id">
        <p v-if="i == index">O</p>
        <p v-else>X</p>
      </div>
      <button @click="goToNextArticle">+</button>
    </div>
  </article>
</template>

<style scoped>
article {
  width: 100%;
}

img {
  width: 80%;
}
.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
}
</style>
