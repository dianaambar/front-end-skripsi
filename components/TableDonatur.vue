<template>
    <v-card class="card-donatur">
        <v-card-title>
            Data donatur
            <v-spacer></v-spacer>
            <v-text-field label="Search" single-line hide-details v-model ="search"></v-text-field>
        </v-card-title>
        <v-data-table
            v-model="selected"
            :headers="headers"
            :items="datadonatur"
            :search="search"
        >
            <v-alert slot="no-results" :value="true">Your search for "{{ search }}" found no results.</v-alert>
        </v-data-table>
    </v-card>
</template>

<script>
export default {
    name: "TableDonatur",
    data() {
        return{
            search: "",
            datadonatur: [],
            datalengkapdonatur: [],
            selected: [],
            headers: [
                { text: "Nama Lengkap", value: "name"},
                { text: "Email", value: "email"},
                { text: "Jenis Kelamin", value: "jenis_kelamin"},
                { text: "No Telp", value: "no_telp"},
                { text: "Alamat", value: "alamat"}
            ]
        };
    },
    mounted(){
        this.loadDonatur();
    },
    methods: {
        async loadDonatur(){
            const isis = await this.$axios.$get("showalldonatur");
            this.datadonatur = isis.donatur;
            this.datalengkapdonatur = isis.donatur.user;
        },
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.card-donatur {
  font-family: "Rubik", sans-serif;
  width: 77rem;
  align-self: center;
}

</style>