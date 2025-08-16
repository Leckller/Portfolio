<template>
  <header class="header">
    <h1 class="title">Gusttavo Ruy</h1>
    <nav class="nav">
      <RouterLink to="#sobre"> Sobre </RouterLink>
      <RouterLink to="#habilidades"> Habilidades </RouterLink>
      <RouterLink to="#projetos"> Projetos </RouterLink>
      <RouterLink to="#experiencia"> Experiência </RouterLink>
      <RouterLink to="#contato"> Contato </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
.title {
  font-weight: bold;
  font-size: x-large;
}
.nav {
  display: flex;
}
.header {
  border-bottom: 1px solid;
}
</style>
