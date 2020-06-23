<template>
  <div>
    <v-app>
      <!--<TopNav/>-->
      <!--<Navbar/>-->
      <nuxt />
    </v-app>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
/*font-family: "Rubik", sans-serif;/*/
</style>