<script setup>
const { path } = useRoute();
const articleName = path.substring("/blog/".length);

const { data } = await useAsyncData(articleName, () =>
  queryContent(`/articles/${articleName}`).findOne()
);
</script>

<template>
  <div>
    <ContentRenderer :value="data" />
  </div>
</template>
