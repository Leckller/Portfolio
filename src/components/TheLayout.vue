<template>
  <TheHeader />
  <main class="main">
    <slot />
  </main>
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TheFooter from "./TheFooter.vue";
import TheHeader from "./TheHeader.vue";

export default defineComponent({
  components: { TheFooter, TheHeader },
  data() {
    return {};
  },
});
</script>

<style scoped>

.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}

</style>