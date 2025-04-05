<template>
    <Banner />
    <div class="main-container">
        <h1>Monte seu Hamburguer: </h1>
        <BurguerForm />
    </div>
</template>
<script>
import Banner from '@/components/Banner.vue'
import BurguerForm from '@/components/BurguerForm.vue'
export default {
    components: { Banner, BurguerForm },
    name: "Home"
}
</script>