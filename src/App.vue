<template>
    <OlaMundoVue />
    <LifeCycleVue />
    <Pessoa />
</template>

<script>
import LifeCycleVue from './components/LifeCycle.vue'
import OlaMundoVue from './components/OlaMundo.vue'
import Pessoa from './components/Pessoa.vue'

export default {
    name: "App",
    components: {
        OlaMundoVue,
        LifeCycleVue,
        Pessoa
    }
}
</script>