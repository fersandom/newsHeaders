<script setup></script>

<template>
  <div class="links-container">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/news">From Firestore</RouterLink>
  </div>
</template>

<style scoped>
p {
  margin: 0;
}
.links-container {
  display: flex;
  width: 100%;
  gap: 3rem;
  margin-left: 3rem;
}
</style>
