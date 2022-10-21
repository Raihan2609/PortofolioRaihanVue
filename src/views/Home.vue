<script setup>
import TheWelcome from '../components/TheWelcome.vue';
</script>

<template>
  <header>
    <img class="avatar" src="https://www.kibrispdr.org/data/8/avatar-icon-png-0.png" alt="avatar" />
    <h3>Muhammad Raihan</h3>

    <nav>
      <a href="">About</a>
      <a href="">Contact</a>
      <a href="">Projects</a>
    </nav>
  </header>

  <main>
    <section class="about">
      <h2>About</h2>
      <p>NB: Berkas pengumpulan untuk di e-learning hanya screenshoot tampilan Homepage dan berekstensi .jpg saja; lalu silakan isi detail terkait project tersebut melalui tautan google form berikut; https://forms.gle/NR9BveyVnoqHyec97</p>
    </section>
    <section class="projects">
      <h2>Projects</h2>
      <p>My Project</p>
      <div class="wrapper_project" id="projects">
        <Projects />
      </div>
    </section>
  </main>
</template>

<script>
import Projects from '../components/Projects.vue';

export default {
  name: 'App',
  components: {
    Projects,
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}
.avatar {
  height: 100px;
  width: 100px;
}
header h3,
header h4 {
  font-weight: 600;
}
header nav {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;
}
nav a {
  margin: 0 1rem;
  font-weight: 600;
}
section {
  padding: 20px;
  text-align: center;
}
section h2 {
  font-weight: bold;
  font-size: 3em;
}
.projects > p {
  font-weight: 700;
}
.wrapper_project {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 1rem 0;
}
</style>
