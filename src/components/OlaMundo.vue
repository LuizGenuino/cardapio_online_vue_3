<template>
    <div>
        <h1>Ola Vue</h1>
        <p>Meu nome é {{ name }} e trabalho como {{ job }}</p>
    </div>
</template>
<script>
export default {
    name: "OlaMundo",
    data() {
        return {
            name: "Luiz",
            job: "Programador"
        }
    }
}
</script>