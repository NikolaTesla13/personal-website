<script setup>
const pages = [
  { link: "/", title: "home" },
  // { link: "/about", title: "about" },
  { link: "/blog", title: "blog" },
  // { link: "/projects", title: "projects" },
  { link: "/experiments", title: "experiments" },
  { link: "/webring", title: "webring" },
];
</script>
<template>
  <ul>
    <li v-for="page in pages">
      <NuxtLink :to="page.link">{{ page.title }}</NuxtLink>
    </li>
  </ul>
</template>
