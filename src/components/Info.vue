<template>
    <div>
        <p v-if="isWorking">Estou trabalhando no momento</p>
        <p v-else>Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul>
            <li v-for="item, index in skills" :key="index" >{{ item }}</li>
        </ul>
        <div>
            <button @click="showEmail" >{{ textButton }}</button>
        </div>
        <p v-show="show_email">Mande uma mensagem para: {{ email }}</p>
        <p>{{ compEmail }}</p>
        <!-- v-bind: ou apenas : é a mesma coisa -->
        <p>Para acessar meu portifolio <a v-bind:href="link" target="_blank">Clique Aqui</a></p>
        <Picture></Picture>
    </div>
</template>
<script>

import Picture from "./Picture.vue"

export default {
    name: "Info",
    components: {
        Picture
    },
    props: {
        compEmail: String,
        email: String,
    },
    data() {
        return {
            isWorking: true,
            skills: ["JS", "PHP", "Python"],
            show_email: false,
            link: "https://www.google.com",
            textButton: "Mostrar email"
        }
    },

    methods: {
        showEmail(){
            this.show_email = !this.show_email
            if(this.show_email){
                this.textButton = "Ocultar email" 
            }
            else{
                this.textButton = "Mostrar email" 
            }
        }
    }
}
</script>