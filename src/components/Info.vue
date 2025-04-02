<template>
    <div>
        <p v-if="isWorking" >Estou trabalhando no momento</p>
        <p v-else >Estou em busca de novas oportunidades!</p>
        <p>Utilizo as seguintes tecnologias:</p>
        <ul v-for="item in skills" :key="item">
            <li>{{ item }}</li>
        </ul>
        <p v-show="show_email" >Mande uma mensagem para: {{ email }}</p>
    </div>
</template>
<script>
export default {
    name: "Info",
    data() {
        return {
            isWorking: true,
            skills: ["JS", "PHP", "Python"],
            show_email: false,
            email: "luizgustavo@email.com"
        }
    }
}
</script>