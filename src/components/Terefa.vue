<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da Tarefa
            </div>
            <div class="column">
                <CronometroVue tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CronometroVue from './Cronometro.vue';

    export default defineComponent({
        name: "TarefaVue",
        components: {
            CronometroVue
        }
    })
</script>

<style scoped>
.box {
    background: #FAF0CA;
}
</style>