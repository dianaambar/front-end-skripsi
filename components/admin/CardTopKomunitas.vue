<template>
  <div>
    <v-card color="#003049" class="card">
      <v-row>
        <v-col cols="9">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="white--text title">Komunitas</v-list-item-title>
              <v-list-item-title class="white--text">Jumlah Komunitas Terdaftar</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="3">
          <h1 class="white--text jumlah">{{jumlah_komunitas}}</h1>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["jumlah_komunitas"],
  name: "CardTopKomunitas"
};
</script>

<style scoped>
.jumlah {
  padding-top: 1rem;
}
</style>