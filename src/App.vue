<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="clumn is-one-quarter">
      <BarraLateralVue @aoTemaAlterado="trocarTema"/>
    </div>   
    <div class="column is-three-quarter conteudo">
      <FormularioVue @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaVue v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxVue v-if="listaEstaVazia">
          Você não está muito produtivo hoje. =(
        </BoxVue>
      </div>
    </div> 
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import BarraLateralVue from './components/BarraLateral.vue'
  import FormularioVue from './components/Formulario.vue'
  import TarefaVue from './components/Terefa.vue'
  import ITarefa from './interfaces/ITarefa'
  import BoxVue from './components/Box.vue'

  export default defineComponent({
    name: 'App',
    components: {
      BarraLateralVue,
      FormularioVue,
      TarefaVue,
      BoxVue
    },
    data() {
      return {
        tarefas: [] as ITarefa[],
        modoEscuroAtivo: false
      }
    },
    computed: {
      listaEstaVazia() : boolean{
        return this.tarefas.length === 0
      }
    },
    methods: {
      salvarTarefa(tarefa: ITarefa) {
        this.tarefas.push(tarefa)
      },
      trocarTema(modoEscuroAtivo: boolean) {
        this.modoEscuroAtivo = modoEscuroAtivo
      }
    }
  })
</script>

<style>
.lista {
  padding: 1.25rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
