<template>
  <header id="header">
    <div class="header-div">
      <a href="#apresentacao">
        <h1 class="title">Gusttavo Ruy</h1>
      </a>
      <nav class="nav">
        <a href="#sobre"> Sobre </a>
        <a href="#habilidades"> Habilidades </a>
        <a href="#projetos"> Projetos </a>
        <a href="#experiencia"> Experiência </a>
        <a href="#contato"> Contato </a>
      </nav>
    </div>
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
  gap: 16px;
}

.header-div {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
}

#header {
  border-bottom: 1px solid rgba(128, 128, 128, 0.336);
  width: 100%;
  padding: 16px;
  position: fixed;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.678);
}
</style>
