<template>
    <div>
        <h2>Esta é a descrição da pessoa: {{ name }}</h2>
        <info />
        <multiplos-eventos />
    </div>
</template>
<script>
import Info from './Info.vue';
import MultiplosEventos from './MultiplosEventos.vue';
export default {
    name: "Pessoa",
    components: {
        Info,
        MultiplosEventos
    },
    data() {
        return {
            name: "Luiz",
        };
    },
};
</script>