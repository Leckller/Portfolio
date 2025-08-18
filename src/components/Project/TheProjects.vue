<script setup lang="ts">
import MyRepository from "./MyRepository.vue";
</script>

<template>
  <section id="projetos">
    <h3 class="title">Meus projetos</h3>
    <div class="projetos">
      <MyRepository
        title="Clone do Twitter"
        description="Projeto de estudo prático que visa a criação de uma aplicação
          inspirada no Twitter (X), focado no desenvolvimento de habilidades em
          SQL, Nest.js e Entity Framework. . Este projeto serve como uma
          oportunidade para explorar e aplicar conceitos avançados de back-end,
          incluindo manipulação de dados, autenticação e desempenho."
          img="banners/twitter_clone.png"
          img-alt="Clone do Twitter"
          :tecs=twitterTecs
          code-link="https://github.com/Leckller/Plim"
          demo="https://plim.vercel.app/"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      twitterTecs: ["React", "Redux", "Styled Components", "Nest", "TypeORM"]
    }
  }
})
</script>


<style scoped>
#projetos {
  background-color: rgba(128, 128, 128, 0.082);
  padding: 70px 0;
  display: flex;
  gap: 32px;
  width: 100%;
  flex-direction: column;
}

.projetos {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>