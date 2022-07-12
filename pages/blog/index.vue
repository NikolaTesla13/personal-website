<script setup>
const data = await queryContent("articles").find();
console.log(data);
</script>

<template>
  <div>
    <h1>blog</h1>
    <ul>
      <li v-for="article in data">
        <NuxtLink :to="article._path.replace('articles', 'blog')">{{
          article.title
        }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
