<template>
  <div>
    <v-card color="#2a9d8f" class="card">
      <v-row>
        <v-col cols="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text title">Donatur</v-list-item-title>
              <v-list-item-title class="white--text">Jumlah Donatur Terdaftar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="3">
          <h1 class="white--text jumlah">{{jumlah_donatur}}</h1>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["jumlah_donatur"],
  name: "CardTopDonatur"
};
</script>

<style scoped>
.jumlah {
  padding-top: 1rem;
}
</style>