<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <!-- ouve o evento de submite, prevenindo o comportamento padrão que submete e recarrega a pagina-->
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">Nome do Projeto</label>
                <input 
                    class="input"
                    type="text"
                    v-model="nomeDoProjeto"
                    id="nomeDoProjeto"
                />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NOME</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IProjeto from '../interfaces/IProjeto'

export default defineComponent({
    name: 'ProjetosView',
    data() {
        return {
            nomeDoProjeto: "",
            projetos: [] as IProjeto[]
        }
    },
    methods: {
        salvar() {
            const projeto: IProjeto = {
                nome: this.nomeDoProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
})
</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>