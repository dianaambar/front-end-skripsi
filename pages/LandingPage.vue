<template>
  <div>
    <v-row align="center">
      <v-col class="text-center">
        <div class="my-2">
          <nuxt-link to="/auth/RegisterRelawan">
            <v-btn x-large color="success" dark>Daftar SebagaiRelawan</v-btn>
          </nuxt-link>
        </div>
      </v-col>
      <v-col class="tex-center">
        <div class="my-2">
          <nuxt-link to="/auth/register">
            <v-btn x-large color="success" dark>Daftar Sebagai Komunitas</v-btn>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-2 {
  padding: 20rem 15rem;
}
</style>