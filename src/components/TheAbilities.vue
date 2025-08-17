<template>
  <section id="habilidades">
    <h2>Habilidades & Tecnologias</h2>
    <div class="stacks">
      <article class="tec">
        <h3>Frontend</h3>
        <div class="tecnologies">
          <p>React</p>
          <p>Vue.js</p>
          <p>Tailwind</p>
          <p>Styled-Components</p>
          <p>Typescript</p>
          <p>Javascript</p>
          <p>Robot Framework</p>
          <p>RTL</p>
        </div>
      </article>
      <article class="tec">
        <h3>Backend</h3>
        <div class="tecnologies">
          <p>Nest</p>
          <p>Express</p>
          <p>Java</p>
          <p>Spring</p>
          <p>Node.js</p>
          <p>JUnit</p>
          <p>Robot Framework</p>
        </div>
      </article>
      <article class="tec">
        <h3>Cloud & DevOps</h3>
        <div class="tecnologies">
          <p>Git</p>
          <p>Docker</p>
          <p>Railway</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
#habilidades {
  padding: 50px 0;
  display: flex;
  gap: 32px;
  width: 100%;
  flex-direction: column;
}
.stacks {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
}
.tec {
  flex-grow: 1;
  align-items: start;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  max-width: 320px;
  border: 1px solid gainsboro;
  gap: 32px;
  padding: 16px;
}
.tecnologies {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
}
.tecnologies p {
  padding: 4px 8px;
  background-color: rgba(220, 220, 220, 0.603);
  font-size: small;
  border-radius: 8px;
}
</style>