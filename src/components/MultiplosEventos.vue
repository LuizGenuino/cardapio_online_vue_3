<template>
    <div>
        <button @click="primeiro(), segundo('Segundo Evento Ativado')" >Ativar Multiplos Eventos</button>
        <p>{{ multiplos_eventos }}</p>
    </div>
</template>
<script>
    export default {
        name: "MultiplosEventos",
        data() {
            return {
                multiplos_eventos: ""
            }
        },
        methods: {
            primeiro(){
                this.multiplos_eventos = "Primeiro Evento Ativado"
            },
            segundo(text){
                setTimeout(() => { this.multiplos_eventos = text}, 2000)
            }
        }
    }
</script>