<template>
    <div>
        <!-- v-bind: ou apenas : é a mesma coisa -->
        <img :src="avatar" v-bind:alt="descption"> 
    </div>
</template>

<script>
    export default {
        name: "Picture",
        data() {
            return {
                avatar: "https://www.google.com/imgres?q=avatar%20png&imgurl=https%3A%2F%2Fw7.pngwing.com%2Fpngs%2F340%2F946%2Fpng-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes-thumbnail.png&imgrefurl=https%3A%2F%2Fwww.pngwing.com%2Fpt%2Fsearch%3Fq%3Davatar&docid=IzCvXibAmSsyhM&tbnid=KMpZDXFLoQCgjM&vet=12ahUKEwiC9bLIlrqMAxUcILkGHXJiB_sQM3oECG4QAA..i&w=360&h=395&hcb=2&ved=2ahUKEwiC9bLIlrqMAxUcILkGHXJiB_sQM3oECG4QAA",
                descption: "Avatar",
            }
        }
    }
</script>