// store é provedor, fonte de verdade - 
// responsavel por definir e configurar o estado
// um estado que possua uima lista de projeto - 
// precisa de uma interface que garanta que vai ter uma lista de projetos
import IProjeto from '@/interfaces/IProjeto'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO, NOTIFICAR, DEFINIR_PROJETOS, DEFINIR_TAREFAS} from './tipo-mutacoes'
import { INotificacao } from "@/interfaces/INotificacao"
import { CADASTRAR_PROJETO, OBTER_PROJETOS, ALTERAR_PROJETO, REMOVER_PROJETO, OBTER_TAREFAS } from "./tipo-acoes"
import http from "@/http"
import ITarefa from '@/interfaces/ITarefa'

interface Estado {
    projetos: IProjeto[]
    tarefas: ITarefa[]
    notificacoes: INotificacao[]
}


// é preciso definir uma chave de acesso - é uma chave para o cofre
// quando precisa de acesso a store, ele precisa passar essa chave
export const key: InjectionKey<Store<Estado>> = Symbol()

// cria e define a store com createStore, que é do vuex - é tipado e é uma store do estado - e passa as configs nele
export const store = createStore<Estado>({ 
    state: {
        projetos: [],
        tarefas: [],
        notificacoes: []
    },
    mutations: {
        [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            } as IProjeto
            state.projetos.push(projeto)
        },
        [ALTERA_PROJETO] (state, projeto: IProjeto) {
            const index = state.projetos.findIndex(proj => proj.id == projeto.id)
            state.projetos[index] = projeto
        },
        [EXCLUIR_PROJETO](state, id: string) {
            state.projetos = state.projetos.filter(proj => proj.id != id)
        },
        [NOTIFICAR](state, novaNotificacao:INotificacao) {
            novaNotificacao.id = new Date().getTime()
            state.notificacoes.push(novaNotificacao)

            setTimeout(() => {
                state.notificacoes = state.notificacoes.filter(notificacao => notificacao.id != novaNotificacao.id)
            }, 3000)
        },
        [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
            state.projetos = projetos
        },
        [DEFINIR_TAREFAS](state, tarefas: ITarefa[]) {
            state.tarefas = tarefas
        }        
    },
    actions: {
        [OBTER_PROJETOS] ({ commit }) {
            http.get('projetos')
                .then(resposta => commit(DEFINIR_PROJETOS, resposta.data))
        },
        [CADASTRAR_PROJETO] (contexto, nomeDoProjeto: string) {
            return http.post('/projetos', {
                nome: nomeDoProjeto
            })
        },
        [ALTERAR_PROJETO] (contexto, projeto: IProjeto) {
            return http.put(`/projetos/${ projeto.id }`, projeto)
        },
        [REMOVER_PROJETO] ({ commit }, id: string) {
            return http.delete(`/projetos/${id}`).then(() => commit(EXCLUIR_PROJETO, id))
        },
        [OBTER_TAREFAS] ({ commit }) {
            http.get('tarefas')
                .then(resposta => commit(DEFINIR_TAREFAS, resposta.data))
        },        
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}