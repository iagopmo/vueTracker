<template>
  <main class="columns is-gapless is-multiline">
    <div class="clumn is-one-quarter">
      <BarraLateralVue />
    </div>    
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BarraLateralVue from './components/BarraLateral.vue'

  export default defineComponent({
    name: 'App',
    components: {
      BarraLateralVue
    }
  })
</script>

<style>

</style>
