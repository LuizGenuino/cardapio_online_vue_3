<template>
    <OlaMundoVue />
    <LifeCycleVue />
    <Pessoa />
    <Form></Form>
</template>

<script>
import Form from './components/Form.vue';
import LifeCycleVue from './components/LifeCycle.vue'
import OlaMundoVue from './components/OlaMundo.vue'
import Pessoa from './components/Pessoa.vue'

export default {
    name: "App",
    components: {
        OlaMundoVue,
        LifeCycleVue,
        Pessoa,
        Form
    }
}
</script>