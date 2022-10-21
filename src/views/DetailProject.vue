<template>
  <section class="detail-page">
    <div class="detail">
      <img :src="dataFound.image" alt="project gambar" />
      <p>
        <span>{{ dataFound.nama }}</span>
        <span>{{ dataFound.tgl }}</span>
      </p>
      <p>{{ dataFound.description }}</p>
    </div>
  </section>
</template>

<script>
import projectsList from '../../data.json';
import { useDataProject } from '../stores/dataStore.js';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useDataProject();
    const route = useRoute();
    const dataFound = store.data.find((x) => x.id === Number(route.params.id));
    console.log(dataFound);
    return {
      // you can return the whole store instance to use it in the template
      dataFound,
    };
  },
};
</script>

<style scoped>
.detail-page {
  width: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
}
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.detail img {
  width: 100%;
  margin-bottom: 1rem;
}
.detail-page .detail > p span {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
