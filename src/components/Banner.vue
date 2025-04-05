<template>
 <div id="main-banner">
    <h1>Make Your Burguer</h1>
 </div>
</template>

<script>
export default {
    name: "Banner"
}
</script>

<style  scoped>
    #main-banner{
        background-image: url("/public/img/burger.jpg");
        background-position: 0 -250px;
        background-size: cover;
        height: 75vh;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    #main-banner h1 {
        color: #fff;
        text-align: center;
        background: #222222da;
        font-size: 60px;
        padding: 20px 40px;
    }
</style>