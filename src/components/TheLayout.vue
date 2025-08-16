<template>
  <TheHeader />
  <slot />
  <TheFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheFooter from './TheFooter.vue'
import TheHeader from './TheHeader.vue'

export default defineComponent({
  components: { TheFooter, TheHeader },
  data () {
    return {
    }
  }
})

</script>
