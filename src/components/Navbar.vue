<template>
    <div id="nav">
        <router-link to="/" id="logo-url">
            <img :src="logo" :alt="alt">
        </router-link>
        <router-link to="/">Home</router-link>
        <router-link to="/pedidos">Pedidos</router-link>
    </div>
</template>
<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
}
</script>
<style scoped>
    #nav {
        background: #222;
        border-bottom: 4px solid #111;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    /* o flexbox controla os itens por margin, então posso mudar a posição de um item simplismente reconfigurando a margin */
    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }

    #logo-url img {
        width: 40px;
        height: 40px;
    }

    #nav a {
        color: #fcba03;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }

    #nav a:hover {
        color: #fff;
    }
</style>
