<template>
  <article class="article">
    <img class="img" :src="img" :alt="imgAlt || 'Imagem do projeto'" />
    <div class="content">
      <h4 class="title">{{ title }}</h4>

      <p class="description">{{ description }}</p>

      <div class="tecnologies">
        <p v-for="tec in tecs" :key="tec">{{ tec }}</p>
      </div>
      <div class="links" v-if="codeLink || demo">
        <a :href="codeLink" v-if="codeLink">
          <i class="fa-brands fa-github"></i>
          Código
        </a>
        <a :href="demo" v-if="demo">
          <i class="fa-solid fa-arrow-up-right-from-square"></i>
          Demo
        </a>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    tecs: { type: Array as PropType<string[]>, required: true },
    img: { type: String, required: true },
    demo: { type: String, required: true },
    codeLink: { type: String, required: true },
    imgAlt: { type: String, default: "" },
  },
});
</script>

<style scoped>
.article {
  display: flex;
  flex-direction: column;
  max-width: 300px;
  border-radius: 16px;
  background-color: white;
  border: solid 1px rgba(128, 128, 128, 0.384);
  overflow: hidden;
}

.links {
  display: flex;
  width: 100%;
  gap: 8px;
}

.links a {
  width: 50%;
  padding: 4px 8px;
  border-radius: 8px;
}

.links a:first-child {
  border: solid 1px #f0f0f0;
}

.links a:last-child, .links a:last-child i:last-child {
  background-color: black;
  color: white;
}

.img {
  width: 100%;
}

.title {
  font-weight: bold;
}

.content {
  padding: 32px 16px 16px 16px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 16px;
}

.description {
  text-align: start;
  line-height: 20px;
  color: gray;
}

.tecnologies {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
.tecnologies p {
  border: solid 1px #f0f0f0;
  padding: 0.3rem 0.6rem;
  border-radius: 6px;
  font-size: 0.85rem;
}
</style>
