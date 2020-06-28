<template>
  <v-card class="card-select-relawan">
    <v-card-title>
      Pilih Relawan
      <!--<div v-for="dr in datarelawan" :key="dr.id">{{dr.id}}</div>-->
      <v-spacer></v-spacer>
      <v-text-field label="Search" single-line hide-details v-model="search"></v-text-field>
    </v-card-title>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="datarelawan"
      :search="search"
      show-expand
    >
      <template v-slot:item="row">
        <tr>
          <td></td>
          <td>{{row.item.name}}</td>
          <td>{{row.item.jenis_kelamin}}</td>
          <td>{{row.item.no_telp}}</td>
          <td>{{row.item.alamat}}</td>
          <td>
            <v-btn @click="selectRelawan(row.item.id)" color="green darken-3">Pilih</v-btn>
          </td>
        </tr>
      </template>
      <v-alert slot="no-results" :value="true">Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "SelectRelawan",
  props: ["datadonasi"],
  data() {
    return {
      search: "",
      datarelawan: [],
      selected: [],
      headers: [
        { text: "Nama", value: "name" },
        { text: "Jenis Kelamin", value: "jenis_kelamin" },
        { text: "No Telp", value: "no_telp" },
        { text: "Alamat", value: "alamat" },
        { text: "Status", value: "" }
      ]
    };
  },
  mounted() {
    this.loadRelawan();
  },
  methods: {
    async loadRelawan() {
      //  const isis = await this.$axios.$get("relawankomunitas");
      const isi = await this.$axios.$get(
        "/closestrelawan/" +
          this.datadonasi.latitude +
          "/" +
          this.datadonasi.longitude
      );
      this.datarelawan = isi.relawan;
      console.log(this.datarelawan);
      //  console.log(datarelawan[0].id);
    },
    async selectRelawan(relawan_id) {
      await this.$axios.$post("selectrelawan/" + this.datadonasi.id, {
        relawan_id
      });
      console.log("ya");
      window.location.reload(true);
    }
  }
};
</script>

<style scoped>
</style>