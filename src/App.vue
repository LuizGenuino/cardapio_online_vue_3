<script>
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';

export default {
    components: {
        Navbar,
        Footer
    },

    data() {
        return {
            logo_src: "/img/logo.png",
            alt_name: "Make Your Burger"
        }
    }
}

</script>

<template>
    <Navbar :logo="logo_src" :alt="alt_name" />
    <router-view />
    <Footer></Footer>
</template>


<style>
    * {
        font-family: Helvetica;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .main-container {
        margin: 50px;
        min-height: calc(80vh - 200px);
    }

    h1{
        text-align: center;
        font-size: 42px;
        margin-bottom: 30px;
        color: #222
    }

</style>