<script setup>
const { path } = useRoute();
const articleName = path.substring("/blog/".length);

const { data } = await useAsyncData(articleName, () =>
  queryContent(`/articles/${articleName}`).findOne()
);
</script>

<template>
  <div>
    <Navbar />
    <ContentRenderer :value="data" />
  </div>
</template>
