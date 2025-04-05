<template>
    <div>
        <form action="" @submit="enviarEmail">
            <div>
                <input type="text" v-model="name">
            </div>
            <div>
                <input type="text" v-model="email">
            </div>
            <div>
                <input type="submit" value="enviar">
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: "Form",
    data() {
        return {
            name: "",
            email: ""
        }
    },
    methods: {
        enviarEmail(e){
            e.preventDefault();
            console.log(this.name)
            console.log(this.email);
            
        }
    }
}
</script>