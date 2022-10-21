<script setup></script>

<template>
  <router-link
    class="project_card"
    v-for="project in state.projects"
    :key="project.id"
    :to="{
      name: 'Detail',
      params: {
        id: project.id,
      },
    }"
  >
    <img :src="project.image" alt="project-photo" />
    <p>{{ project.nama }}</p>
    <p>{{ project.tgl }}</p>
  </router-link>
</template>

<script>
import { onMounted, reactive } from 'vue';
import projectsList from '../../data.json';
export default {
  setup() {
    //data users akan disimpan disini
    const state = reactive({
      projects: projectsList,
    });
    //ketika pertama dimuat, akan langsung mengambil data API
    // onMounted(async () => {
    //   state.projects = projects;
    //   console.log(projects);
    // });
    return {
      state,
    };
  },
};
</script>

<style scoped>
.project_card {
  flex: 1;
  min-width: 300px;
  margin: 0;
  cursor: pointer;
  transition: all 0.4s ease;
}
.project_card:hover {
  box-shadow: 10px 10px 20px 2px rgba(0, 0, 0, 0.1);
}
.project_card img {
  width: 100%;
}
</style>
