<template>
  <div>
    <v-app-bar dark>
      <!--<v-toolbar-title>FoodX</v-toolbar-title>-->
      <v-spacer></v-spacer>
      <nuxt-link class="itemnav" to="/auth/login">Logout</nuxt-link>
      <!--<nuxt-link class="itemnav" to='/auth/register'>Register</nuxt-link>-->
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "TopNavLogin"
};
</script>