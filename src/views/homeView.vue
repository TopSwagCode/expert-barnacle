<template>
  <h1>Home Page</h1>
  <HelloWorld/>
</template>

<script>
import HelloWorld from './../components/HelloWorld.vue'

export default {
  name: 'vueView',

  components: {
    HelloWorld,
  },

  data: () => ({
  }),
}
</script>