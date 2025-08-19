<template>
  <section id="contato">
    <h3 class="title">Entre em Contato</h3>

    <div class="content">
      <div class="details">
        <h4 class="sub-title">Vamos conversar!</h4>
        <p class="text">
          Estou sempre interessado em novos projetos e oportunidades. Se você
          tem uma ideia ou precisa de ajuda com um projeto, vamos conversar!
        </p>
        <p class="contato-info">
          <i class="fa-solid fa-envelope"></i>
          gusttavoruynascimento@gmail.com
        </p>
        <p class="contato-info">
          <i class="fa-solid fa-phone"></i>
          +55 (21) 984255938
        </p>
        <p class="contato-info">
          <i class="fa-brands fa-linkedin"></i>
          www.linkedin.com/in/gusttavoruy
        </p>
        <p class="contato-info">
          <i class="fa-brands fa-github"></i>
          https://github.com/Leckller
        </p>
      </div>

      <form class="form">
        <label class="label">
          Nome
          <input class="input" type="text" />
        </label>
        <label class="label">
          Email
          <input class="input" type="text" />
        </label>
        <label class="label">
          Mensagem
          <input class="input" type="text" />
        </label>
        <button class="form-button">Enviar Mensagem</button>
      </form>
    </div>
  </section>
</template>

<style scoped>
#contato {
  width: 100%;
  padding: 70px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.082);
  gap: 32px;
}
.content {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.details,
.form {
  width: 50%;
  max-width: 400px;
  min-width: 300px;
}
.details {
  display: flex;
  gap: 16px;
  flex-direction: column;
  justify-content: end;
  align-items: center;
}
.details p,
.details h4 {
  display: flex;
  gap: 8px;
  align-items: start;
  justify-content: start;
  width: 100%;
  text-align: start;
}

.sub-title {
  font-size: x-large;
}
.text {
  padding-top: 16px;
  color: gray;
  padding-bottom: 16px;
}
.form {
  display: flex;
  gap: 8px;
  flex-direction: column;
}
.label {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: start;
}
.input {
  width: 100%;
  padding: 8px 12px;
  border-radius: 4px;
  background-color: rgba(128, 128, 128, 0.082);
  border: none;
}
.form-button {
  border: none;
  padding: 8px 12px;
  background-color: #030213;
  border-radius: 4px;
  color: white;
}
</style>
