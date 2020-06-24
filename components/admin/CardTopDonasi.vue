<template>
  <div>
    <v-card color="#d62828" class="card">
      <v-row>
        <v-col cols="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text title">Donasi</v-list-item-title>
              <v-list-item-title class="white--text">Donasi tersalurkan sampai saat ini</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="3">
          <h1 class="white--text jumlah">{{jumlah_donasi}}</h1>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["jumlah_donasi"],
  name: "CardTopDonasi"
};
</script>

<style scoped>
.jumlah {
  padding-top: 1rem;
}
</style>