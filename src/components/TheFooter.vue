<template>
  <footer class="footer">
    <small class="direitos"> © 2025 Gusttavo Ruy. Todos os direitos reservados. </small>

    <section class="section">
      <RouterLink class="sites" to="https://github.com/Leckller">
        <i class="fa-brands fa-github"></i>
      </RouterLink>
      <RouterLink class="sites" to="https://www.linkedin.com/in/gusttavoruy">
        <i class="fa-brands fa-linkedin"></i>
      </RouterLink>
      <RouterLink class="sites" to="mailto:gusttavoruynascimento@gmail.com">
        <i class="fa-solid fa-envelope"></i>
      </RouterLink>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: { RouterLink },
});
</script>

<style scoped>

.footer {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 40px 20px;
  justify-content: space-around;
}
.direitos {
  color: gray;
}
.section {
  display: flex;
  gap: 16px;
}
.sites {}

</style>