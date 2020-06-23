<template>
  <div>
    <v-card>
      <v-card-title>
        Donasi Selesai
        <v-spacer></v-spacer>
        <v-text-field label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>

      <v-data-table v-model="selected" :headers="headers" :items="datadonasi" :search="search">
        <v-alert slot="no-results" :value="true">Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
export default {
  name: "TableDonasiSelesai",
  data() {
    return {
      search: "",
      selected: [],
      datadonasi: [],
      headers: [
        { text: "Donatur", value: "name" },
        { text: "Penerima Donasi", value: "penerima_donasi.nama_penerima" }
        //{ text: "Waktu Penjemputan", value: "waktu_penjemputan" },
      ]
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const isis = await this.$axios.$get("historydonasi");
      this.datadonasi = isis.history;
      //console.log(isis.donasi[0].nama_makanan)
    }
  }
};
</script>