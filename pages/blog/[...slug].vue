<script setup>
const { path } = useRoute();
const articleName = path.substring("/blog/".length);

const { data } = await useAsyncData(articleName, () =>
  queryContent(`/articles/${articleName}`).findOne()
);

console.log(data);
useHead({
  title: data._rawValue.title,
  description: data._rawValue.description,
});
</script>

<template>
  <div>
    <div class="article">
      <ContentRenderer :value="data" />
    </div>
    <section>
      <hr />
      <p>copyright 2022 Asandei Stefan; all rights reserved</p>
    </section>
  </div>
</template>
