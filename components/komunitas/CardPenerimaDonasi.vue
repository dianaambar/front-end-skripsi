<template>
  <div>
    <v-card color="#2a9d8f" class="card">
      <v-row>
        <v-col cols="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text title">Penerima Donasi</v-list-item-title>
              <v-list-item-subtitle class="white--text">Penerima Donasi saat ini</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="3">
          <h1 class="white--text jumlah">{{jmlPenerima}}</h1>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["jmlPenerima"],
  name: "CardPenerimaDonasi"
};
</script>

<style scoped>
.card {
  margin: 2rem;
}
</style>