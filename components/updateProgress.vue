<template>
  <div>
    <!--<v-row class="acc-or-not">
        <v-col>
          <v-btn @click="e1 = 2" color="green darken-3">Terima</v-btn>
        </v-col>
        <v-col>
          <v-btn color="red darken-4">Tolak</v-btn>
        </v-col>
    </v-row>-->
    <!--<p>{{datadonasi.status}}</p>-->
    <v-stepper alt-labels v-model="e1">
      <div v-show="false">
        <p>{{statusCondition}}</p>
        <p>{{datadonasi.status}}</p>
      </div>
      <v-stepper-header>
        <v-stepper-step :complete="e1 > 1" step="1">Menunggu Konfirmasi</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 2" step="2">Donasi diterima, Mencari Relawan</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 3" step="3">Menunggu Konfirmasi Relawan</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 4" step="4">Makanan akan dijemput oleh relawan</v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step :complete="e1 > 5" step="5">Donasi telah disalurkan</v-stepper-step>
      </v-stepper-header>
    </v-stepper>
  </div>
</template>



<script>
export default {
  name: "ProgressBar",
  props: ["datadonasi"],
  data() {
    return {
      e1: 1
      //  datadonasi: []
    };
  },
  methods: {},
  computed: {
    statusCondition() {
      if (this.datadonasi.status == "Menunggu Konfirmasi") {
        return (this.e1 = 1);
      } else if (this.datadonasi.status == "Donasi diterima, Mencari Relawan") {
        return (this.e1 = 2);
      } else if (this.datadonasi.status == "Menunggu konfirmasi Relawan") {
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