<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
});
</script>


<template>
  <section id="apresentacao">
    <img class="img" src="../assets/ruy.jpg" alt="RuyPicture" />

    <h1 class="title">Desenvolvedor Full Stack</h1>

    <p class="text">
      Transformo ideias em soluções digitais sob medida. Especialista no
      desenvolvimento de aplicações web modernas e APIs escaláveis, focadas em
      performance e inovação.
    </p>

    <div class="links">
      <a class="link" href="#contato">
        <i class="fa-solid fa-envelope"></i>
        Entre em Contato
      </a>
      <a class="link" href="#projetos">
        <i class="fa-brands fa-github"></i>
        Ver Projetos
      </a>
    </div>
  </section>
</template>

<style scoped>
#apresentacao {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
  gap: 16px;
  width: 60%;
  min-width: 320px;
}

.img {
  width: 150px;
  height: 150px;
  border-radius: 9999px;
}

.title {
  font-size: 40px;
  font-weight: lighter;
}

.text {
  color: gray;
}

.links {
  display: flex;
  gap: 16px;
}

.link {
  border-radius: 8px;
  padding: 12px;
  font-size: large;
}

.links .link:first-child, .links .link:first-child i {
  background-color: black;
  color: white;
}

.links .link:last-child {
  border: 1px solid rgba(128, 128, 128, 0.603);
}

</style>
