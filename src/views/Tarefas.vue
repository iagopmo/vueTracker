<template>    
    <FormularioVue @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
        <BoxVue v-if="listaEstaVazia">
            Você não está muito produtivo hoje. <span class="has-text-wi">=(</span>
        </BoxVue>
        <TarefaVue v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
    </div>
  </template>
  
  <script lang="ts">
    import { computed, defineComponent } from 'vue';
    import FormularioVue from '../components/Formulario.vue'
    import TarefaVue from '../components/Terefa.vue'
    import BoxVue from '../components/Box.vue'
    import { useStore } from '@/store';
    import { OBTER_TAREFAS } from '@/store/tipo-acoes'
  
    export default defineComponent({
      name: 'App',
      components: {
        FormularioVue,
        TarefaVue,
        BoxVue
      },
      methods: {
        // salvarTarefa(tarefa: ITarefa) {
          //   this.tarefas.push(tarefa)
          // }
        },
        computed: {
          listaEstaVazia() : boolean{
            return this.tarefas.length === 0
          }
        },
        setup() {
          const store = useStore()
          store.dispatch(OBTER_TAREFAS)

          return {            
            tarefas: computed(() => store.state.tarefas),
            store
          }
        }
    })
  </script>
  