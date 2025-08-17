<template>
  <footer>
    <small> © 2025 Gusttavo Ruy. Todos os direitos reservados. </small>

    <section>
      <RouterLink to="https://github.com/Leckller">
        <i class="fa-brands fa-github"></i>
        github
      </RouterLink>
      <RouterLink to="https://www.linkedin.com/in/gusttavoruy">
        <i class="fa-brands fa-linkedin"></i>
        linkedin
      </RouterLink>
      <RouterLink to="mailto:gusttavoruynascimento@gmail.com">
        <i class="fa-solid fa-envelope"></i>
        email
      </RouterLink>
    </section>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  components: { RouterLink },
  data() {
    return {};
  },
});
</script>
