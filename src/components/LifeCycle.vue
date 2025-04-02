<template>
    <div>
        <h1>Meu nome é: {{ name }}</h1>
    </div>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        return {
            name: "Não sei", // Valor inicial da variável name
        };
    },

    // Executado antes da criação do componente
    beforeCreate() {
        setTimeout(() => {
            this.name = "Luiz";
        }, 1000);
    },

    // Chamado logo após a criação do componente, mas antes da montagem no DOM
    created() {
        setTimeout(() => {
            this.name = "Gustavo";
        }, 2000);
    },

    // Chamado antes do template ser montado no DOM
    beforeMount() {
        setTimeout(() => {
            this.name = "Pedro";
        }, 3000);
    },

    // Chamado depois que o componente foi montado no DOM
    mounted() {
        setTimeout(() => {
            this.name = "João";
        }, 4000);
    },

    // Chamado antes de qualquer alteração ser refletida no DOM, ex: trocar o valor da variavel this.name
    beforeUpdate() {
        console.log("O componente será atualizado!");
    },

    // Chamado após a atualização do DOM com os novos dados, ex: trocar o valor da variavel this.name
    updated() {
        console.log("O componente foi atualizado!");
    },

    // Chamado antes do componente ser desmontado do DOM
    beforeUnmount() {
        console.log("O componente será desmontado!");
    },

    // Chamado após o componente ser completamente removido do DOM
    unmounted() {
        console.log("O componente foi desmontado!");
    },
};
</script>