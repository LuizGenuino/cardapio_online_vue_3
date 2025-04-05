import Home from "@/views/Home.vue"
import Pedidos from "@/views/Pedidos.vue"
import { createRouter, createWebHistory } from "vue-router"


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/pedidos",
        name: "Pedidos",
        component: Pedidos
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router