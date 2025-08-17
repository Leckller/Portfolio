<template>
  <section class="section">
    <img class="img" src="../assets/ruy.jpg" alt="RuyPicture" />

    <h1 class="title">Desenvolvedor Full Stack</h1>

    <p class="text">
      Transformo ideias em soluções digitais sob medida. Especialista no
      desenvolvimento de aplicações web modernas e
      APIs escaláveis, focadas em performance e inovação.
    </p>

    <div>
      <button>Entre em Contato</button>
      <button>Ver Projetos</button>
    </div>
  </section>
</template>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  gap: 16px;
  width: 60%;
  min-width: 320px;
}

.img {
  width: 200px;
  height: 200px;
  border-radius: 9999px;
}

.title {
  font-size: 40px;
  font-weight: lighter;
}

.text {
  color: gray;
}
</style>
