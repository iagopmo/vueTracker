import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"
import Tarefas from '../views/Tarefas.vue'
import ProjetosView from '../views/Projetos.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosView
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;