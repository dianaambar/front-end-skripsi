<template>
  <v-stepper alt-labels>
    <v-stepper-header>
      <v-stepper-step step="1">Menunggu Konfirmasi</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="2">Donasi diterima, Mencari Relawan</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="3">Menunggu Konfirmasi Relawan</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="4">Makanan akan dijemput oleh relawan</v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step step="5">Donasi telah disalurkan</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: "ProgressBar"
};
</script>