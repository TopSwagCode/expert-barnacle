<template>
  <v-app>
    <v-app-bar class="bg-indigo-lighten-1 text-white text-center d-flex flex-column">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>TopSwagCode</v-toolbar-title>
      <router-link style="text-decoration: none; color: inherit;" to="/"><v-btn >Home</v-btn></router-link>
      <router-link style="text-decoration: none; color: inherit;" to="/about"><v-btn>About</v-btn></router-link>
      <router-link style="text-decoration: none; color: inherit;" to="/vue"><v-btn>Vue</v-btn></router-link> 
    </v-app-bar>
    <v-main>
      <router-view />
      
    </v-main>

    <v-footer class="bg-indigo-lighten-1 text-white text-center d-flex flex-column" >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4 text-white"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="text-white pt-0">
      A small demo App I am currently working on. Currently learning Vue3, Vue Router and soon JWT authentication.
    </div>

    <v-divider></v-divider>

    <div class="text-white">
      {{ new Date().getFullYear() }} — <strong>TopSwagCode</strong>
    </div>
  </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
  }),
}
</script>