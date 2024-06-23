<script setup>
import { ref } from 'vue'
import ATitle from '../components/ATitle.vue'
import ArticleCard from '../components/ArticleCard.vue'
import FeaturedArticle from '../components/FeaturedArticle.vue'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore()

const isReady = ref(false)
const articles = ref([])
const featuredArticle = ref('')

//Mocking getting articles, sorting them

async function prepareArticles() {
  //Assuming here the order is not guaranteed
  articles.value = await content.sortArticlesByDate(content.articles)
  featuredArticle.value = await content.getFeatured(articles.value)
  isReady.value = true
}

prepareArticles()
</script>

<template>
  <div class="container" v-if="isReady">
    <header>
      <ATitle text="Headline and Teaser" size="3.5rem"></ATitle>
    </header>
    <section class="featured-article">
      <FeaturedArticle
        :headline="featuredArticle.headline"
        :img-source="featuredArticle.image"
      ></FeaturedArticle>
    </section>
    <section>
      <div class="cards-container">
        <ArticleCard
          class="card"
          v-for="article in articles"
          :key="article.id"
          :headline="article.headline"
          :short="article.short"
          :img-source="article.image"
        ></ArticleCard>
      </div>
    </section>
  </div>
  <div v-else>Loading</div>
</template>

<style scoped>
.featured-article {
  margin-bottom: 2rem;
}
@media (min-width: 900px) {
  .container {
    margin: auto;
    width: 80%;
    display: block;
    text-align: center;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;
  }

  .card {
    width: 30%;
    border: 1px solid #012010;
  }
}

@media (min-width: 700px) and (max-width: 899px) {
  .container {
    margin: auto;
    width: 80%;
    display: block;
    text-align: center;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
    justify-content: space-between;
  }

  .card {
    width: 45%;
    border: 1px solid #012010;
  }
}

@media (max-width: 699px) {
  .container {
    margin: auto;
    width: 90%;
    display: block;
    text-align: center;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    gap: 1rem;
  }

  .card {
    width: 100%;
    border: 1px solid #012010;
  }
}
</style>
