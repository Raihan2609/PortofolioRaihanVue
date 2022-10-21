<script setup>
// import useDataProject from '../stores/dataStore.js';
// export default {
//   setup() {
//     const counter = useCounterStore();

//     counter.count++;
//     // with autocompletion ✨
//     counter.$patch({ count: counter.count + 1 });
//     // or using an action instead
//     counter.increment();
//   },
// };
</script>
<template>
  <section class="detail-page">
    <div class="detail">
      <img src="" alt="" />
      <span>
        <span>{{ data }}</span>
        <span>20 jan 2000</span>
      </span>
      <p>DESCRIPSI</p>
    </div>
  </section>
</template>
<script>
import data from '../../data.json';
const dataFound = data.find((x) => x.id === $route.params.id);
console.log(dataFound);
export default {
  props: dataFound,
};
</script>
<style scoped>
.detail-page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
