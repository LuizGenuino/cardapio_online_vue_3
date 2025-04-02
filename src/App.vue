<template>
  <OlaMundoVue />
  <LifeCycleVue />
</template>

<script>
import LifeCycleVue from './components/LifeCycle.vue'
import OlaMundoVue from './components/OlaMundo.vue'

export default {
  name: "App",
  components: {
    OlaMundoVue,
    LifeCycleVue
  }
}
</script>