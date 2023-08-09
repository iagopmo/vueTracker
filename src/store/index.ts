// store é provedor, fonte de verdade - 
// responsavel por definir e configurar o estado
// um estado que possua uima lista de projeto - 
// precisa de uma interface que garanta que vai ter uma lista de projetos
import IProjeto from '@/interfaces/IProjeto'
import { createStore, Store, useStore as vuexUseStore } from 'vuex'
import { InjectionKey } from 'vue'
import {ADICIONA_PROJETO, ALTERA_PROJETO, EXCLUIR_PROJETO} from './tipo-mutacoes'

interface Estado {
    projetos: IProjeto[]
}


// é preciso definir uma chave de acesso - é uma chave para o cofre
// quando precisa de acesso a store, ele precisa passar essa chave
export const key: InjectionKey<Store<Estado>> = Symbol()

// cria e define a store com createStore, que é do vuex - é tipado e é uma store do estado - e passa as configs nele
export const store = createStore<Estado>({ 
    state: {
        projetos: []
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
        }
    }
})

export function useStore(): Store<Estado> {
    return vuexUseStore(key)
}