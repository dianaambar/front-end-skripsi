<template>
  <div>
    <v-stepper alt-labels v-model="e1">
      <div v-show="false">
        <p>{{statusCondition}}</p>
        <p>{{datadonasi.status}}</p>
      </div>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Menunggu Konfirmasi</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Donasi diterima, Makanan Akan Dijemput</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Donasi telah disalurkan</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>

<script>
export default {
  name: "BarNoRelawan",
  props: ["datadonasi", "datarelawan"],
  data() {
    return {
      e1: ""
    };
  },
  computed: {
    statusCondition() {
      if (this.datadonasi.status == "Menunggu Konfirmasi") {
        return (this.e1 = 1);
      } else if (this.datadonasi.status == "Donasi diterima, Mencari Relawan") {
        return (this.e1 = 2);
      } else if (this.datadonasi.status == "Menunggu konfirmasi relawan") {
        return (this.e1 = 3);
      } else if (
        this.datadonasi.status == "Makanan akan dijemput oleh Relawan"
      ) {
        return (this.e1 = 4);
      } else if (this.datadonasi.status == "Donasi telah disalurkan") {
        return (this.e1 = 5);
      }
    }
  }
};
</script>