<script setup>
import ATitle from '../components/ATitle.vue'
import ArticleCard from '../components/ArticleCard.vue'
import FeaturedArticle from '../components/FeaturedArticle.vue'
import { useContentStore } from '../stores/ContentStore'

const content = useContentStore()

//Mocking getting articles, sorting them
const articles = content.sortArticlesByDate(content.articles)
articles.reverse()
//Getting the featured article
const featuredArticle = content.getFeatured(articles)
console.log(featuredArticle)
</script>

<template>
  <div class="container">
    <ATitle text="Este título viene de props" size="3.5rem"></ATitle>

    <FeaturedArticle
      :headline="featuredArticle.headline"
      :img-source="featuredArticle.image"
    ></FeaturedArticle>

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
  </div>
</template>

<style scoped>
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
    gap: 1rem;
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
  }

  .card {
    width: 40%;
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
