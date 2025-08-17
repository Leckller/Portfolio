<template>
  <section id="sobre">
    <h3 class="title">Sobre Mim</h3>
    <div class="content">
      <article>
        <p class="description">
          Sou um desenvolvedor full stack apaixonado por tecnologia com 3 anos de
          experiência na área de tecnologia.
        </p>
        <p class="description">
          Minha expertise abrange desde o desenvolvimento frontend com React e
          Vue.js, até arquiteturas backend robustas com Node.js e Java.
        </p>
        <div class="stacks">
          <div class="stack">
            <i class="fa-solid fa-code"></i>
            Frontend Development
          </div>
          <div class="stack">
            <i class="fa-solid fa-server"></i>
            Backend Development
          </div>
        </div>
      </article>
      <article>
        <img class="img" src="../assets/code.png" alt="code" />
      </article>
    </div>
  </section>
</template>

<style scoped>
#sobre {
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.082);
  gap: 32px;
}

.content {
  display: flex;
  align-items: center;
  width: 60%;
  flex-wrap: wrap;
}

.content article {
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 32px;
}

.img {
  max-width: 500px;
  min-width: 300px;
  border-radius: 16px;
}

.description {
  text-align: start;
  padding: 16px;
}

.stacks {
  display: flex;
  flex-wrap: wrap;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
}

.stack {
  display: flex;
  gap: 8px;
  align-items: center;
}
</style>