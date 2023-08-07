// store é provedor, fonte de verdade - 
// responsavel por definir e configurar o estado
// um estado que possua uima lista de projeto - 
// precisa de uma interface que garanta que vai ter uma lista de projetos
import IProjeto from '@/interfaces/IProjeto'
import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
'
interface Estado {
    projetos: IProjeto[]
}


// é preciso definir uma chave de acesso - é uma chave para o cofre
// quando precisa de acesso a store, ele precisa passar essa chave
export const key: InjectionKey<Store<Estado>> = Symbol()

// cria e define a store com createStore, que é do vuex - é tipado e é uma store do estado - e passa as configs nele
export const store = createStore<Estado>({ 
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'TypeScript'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vue'
            },
            {
                id: new Date().toISOString(),
                nome: 'Vuex'
            }
        ]
    }
})