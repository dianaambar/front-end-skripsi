<template>
  <v-card class="card-donasi">
    <v-card-title>
      Data Relawan
      <v-spacer></v-spacer>
      <v-text-field label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table v-model="selected" :headers="headers" :items="datarelawan" :search="search">
      <v-alert slot="no-results" :value="true">Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "TableRelawan",
  data() {
    return {
      search: "",
      datarelawan: [],
      selected: [],
      headers: [
        { text: "Nama", value: "name" },
        { text: "Jenis Kelamin", value: "jenis_kelamin" },
        { text: "No Telp", value: "no_telp" },
        { text: "Alamat", value: "alamat" }
      ]
    };
  },
  mounted() {
    this.loadRelawan();
  },
  methods: {
    async loadRelawan() {
      const isis = await this.$axios.$get("relawankomunitas");
      this.datarelawan = isis.relawan;
      //console.log("bisa cuy")
      //  console.log(isis);
    }
  }
};
</script>