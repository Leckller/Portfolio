<template>
  <section id="experiencia">
    <article class="experience-card">
      <div class="experience-card-header">
        <div class="enterprise">
          <h3>Estagiário em Testes Automatizados</h3>
          <h4>3Con</h4>
        </div>
        <p class="date">2025 - Presente</p>
      </div>
      <p class="description">
        Desenvolvimento de testes automatizados utilizando Robot Framework com
        python para APIs, Web e Mobile.
      </p>
    </article>
    <article class="experience-card">
      <div class="experience-card-header">
        <div class="enterprise">
          <h3>Estagiário full stack</h3>
          <h4>Compasso UOL</h4>
        </div>
        <p class="date">2024 - 2024</p>
      </div>
      <p class="description">
        Desenvolvimento de aplicações web e APIs, utilizando tecnologias
        modernas e metodologias ágeis.
      </p>
    </article>
  </section>
</template>

<style scoped>
#experiencia {
  padding: 70px 0;
  display: flex;
  gap: 32px;
  flex-direction: column;
  max-width: 65 0px;
}

.experience-card {
  display: flex;
  border: 1px solid gainsboro;
  border-radius: 16px;
  padding: 16px;
  flex-direction: column;
  gap: 32px;
}

.experience-card-header {
  display: flex;
  justify-content: space-between;
}

.enterprise {
  display: flex;
  align-items: start;
  flex-direction: column;
  justify-content: start;
}

.enterprise h4 {
  color: gray;
}

.date {
  border: 1px solid gainsboro;
  border-radius: 16px;
  padding: 4px 16px;
  display: flex;
  align-items: center;
  justify-content: end;
  font-size: small;
}

.description {
  display: flex;
  align-items: start;
  justify-content: start;
}
</style>