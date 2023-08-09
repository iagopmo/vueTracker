<template>
    <div class="projetos">
        <h1 class="title">Projetos</h1>
        <!-- local que renderiza as rotas filhas - router-view -->
        <router-view></router-view> 
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ProjetosView'
    })
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>