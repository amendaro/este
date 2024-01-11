<template>
  <v-app theme="light">




      <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import VueToolbar from "./components/VueToolbar";
export default {
  name: "App",
    components: {VueToolbar},
    data () {
      return {
          drawer: false
      }
  }
}
</script>
