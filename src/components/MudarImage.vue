<template>
    <div>
        <button @click="$emit('MudarImg')" >Trocar Imagem do perfil</button>
    </div>
</template>
<script>
    export default {
        name: "MudarImage",
        emits: ["MudarImg"]
    }
</script>