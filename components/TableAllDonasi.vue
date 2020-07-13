<template>
    <div>
        <v-card class="card-all-donasi">
            <v-card-title>
                Donasi
                <v-spacer></v-spacer>
                <v-text-field label="Search" single-line hide-details v-model="search"></v-text-field>
            </v-card-title>
            <v-data-table
                v-model="selected"
                :headers="headers"
                :items="datadonasi"
                :search="search"
                >
                 <template v-slot:item.tgl_penjemputan="{item}">
                     <span>{{new Date(item.tgl_penjemputan).toLocaleString()}}</span>
                 </template>
                 <v-alert slot="no-results" :value="true">Your search for "{{ search }}" found no results.</v-alert>
            </v-data-table>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "TableAllDonasi",

    data() {
        return{
            search: "",
            // namadonatur: "",
            namakomunitas: "",
            datadonasi: [],
            foto: "/public/images/nasikotak.jpg",
            selected: [],
            headers: [
                { text: "Donatur", value: "name"},
                { text: "Alamat Penjemputan", value: "alamat_penjemputan"},
                { text: "Tanggal Penjemputan", value: "tgl_penjemputan"},
                { text: "Status Donasi", value: "status"},
                { text: "Komunitas", value: "komunitas.user.name"},
                { text: "Penerima Donasi", value: "penerima_donasi.nama_penerima"}
            ]
        };
    },
    mounted() {
        this.loadData();
    },
    methods: {
        async loadData(){
            const isis = await this.$axios.$get("/showalldonasi");
            this.datadonasi = isis.donasi;
            this.namakomunitas = isis.donasi.komunitas.user;
            this.namadonatur = isis.donasi.donatur.user;
        }

        // goToDonasi(item){
        //     this.$router.push('/')
        // }
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.card-all-donasi {
  font-family: "Rubik", sans-serif;
  width: 77rem;
  align-self: center;
}
</style>