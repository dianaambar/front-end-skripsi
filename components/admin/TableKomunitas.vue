<template>
  <div>
    <v-card v-for="komunitas in datakomunitas" :key="komunitas.id" class="card-komunitas">
      <!--<v-card-title>
        Pendaftaran Komunitas
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table v-model="selected" :headers="headers" :items="komunitas" :search="search"></v-data-table>-->
      <v-row>
        <v-col cols="3">
          <v-img width="600" :src="'http://localhost:8000/images/' +  komunitas.foto_komunitas" />
        </v-col>
        <v-col cols="9">
          <v-card-text>
            <h3>{{komunitas.name}}</h3>
            <v-row>
              <v-col>
                <p>Tanggal Berdiri :</p>
                <p>Nomor Telepon :</p>
                <p>Legalitas :</p>
                <p>Email :</p>
                <p>Alamat :</p>
              </v-col>
              <v-col>
                <p>{{komunitas.tgl_berdiri}}</p>
                <p>{{komunitas.no_telp}}</p>
                <p>{{komunitas.legalitas}}</p>
                <p>{{komunitas.email}}</p>
                <p>{{komunitas.alamat}}</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <!--<ModalAccKomunitas :komunitas="komunitas" />-->
            <v-btn @click="acceptKomunitas(komunitas.user_id)">Terima</v-btn>
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
//import ModalAccKomunitas from "@/components/admin/ModalAccKomunitas";
export default {
  name: "TableKomunitas",
  data() {
    return {
      datakomunitas: [],
      selected: [],
      search: "",
      headers: [
        { text: "Nama Komunitas", value: "name" },
        { text: "Alamat", value: "alamat" },
        { text: "Nomor Telepon", value: "no_telp" }
        //  {text: "Nama Komunitas", value: "name"}
      ]
    };
  },
  mounted() {
    this.loadKomunitas();
  },
  methods: {
    async loadKomunitas() {
      const komunitas = await this.$axios.$get("/nonacckomunitas");
      this.datakomunitas = komunitas.komunitas;
      console.log(this.komunitas.email);
    },
    async acceptKomunitas(id) {
      await this.$axios.$post("/acckomunitas/" + this.komunitas.id, {
        id
      });
      window.location.reload(true);
    }
  }
};
</script>