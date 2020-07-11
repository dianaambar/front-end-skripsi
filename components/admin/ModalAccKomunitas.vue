<template>
  <div>
    <v-dialog v-model="dialog" max-width="1000px">
      <template v-slot:activator="{on, komunitas}">
        <v-btn v-bind="komunitas" v-on="on">Lihat Detail</v-btn>
      </template>
      <v-card>
        <v-row>
          <v-col class="5">
            <v-img
              class="img-relawan"
              width="300px"
              :src="'http://localhost:8000/images/' + komunitas.foto_komunitas"
            />
          </v-col>
          <v-col cols="7">
            <!--<v-card-title>{{relawan.name}}</v-card-title>-->
            <v-card-text>
              <h3>{{komunitas.name}}</h3>
              <v-row>
                <v-col>
                  <p>Nama Panggilan :</p>
                  <p>Jenis Kelamin :</p>
                  <p>Pekerjaan :</p>
                  <p>Agama :</p>
                  <p>Golongan Darah :</p>
                  <p>Kabupaten/Kota :</p>
                  <p>Provinsi :</p>
                  <p>Tempat, tanggal lahir :</p>
                  <p>Pendidikan Terakhir :</p>
                  <p>Organisasi :</p>
                  <p>Jenis SIM :</p>
                  <p>Motivasi :</p>
                </v-col>
                <v-col>
                  <!--<p>{{relawan.nama_panggilan}}</p>
                  <p>{{relawan.jenis_kelamin}}</p>
                  <p>{{relawan.pekerjaan}}</p>
                  <p>{{relawan.agama}}</p>
                  <p>{{relawan.gol_darah}}</p>
                  <p>{{relawan.kabupaten_kota}}</p>
                  <p>{{relawan.provinsi}}</p>
                  <p>{{relawan.tempat_lahir}}, {{relawan.tgl_lahir}}</p>
                  <p>{{relawan.pend_terakhir}}</p>
                  <p>{{relawan.organisasi_ongoing}}</p>
                  <p>{{relawan.jenis_sim}}</p>
                  <p>{{relawan.motivasi}}</p>-->
                </v-col>
              </v-row>
            </v-card-text>
          </v-col>
        </v-row>
        <v-btn color="#BBDEFB">Kirim Email</v-btn>
        <v-card-actions>
          <v-btn @click="dialog = false">Close</v-btn>
          <v-btn @click="acceptKomunitas(komunitas.user_id)" color="red darken-4">Tolak</v-btn>
          <!--<v-btn @click="acceptRelawan(relawan.user_id)" color="green darken-3">Terima</v-btn>-->
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ["komunitas"],
  name: "ModalAccKomunitas",
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    //async acceptKomunitas(id) {
    //  await this.$axios.$post("/acckomunitas/" + this.komunitas.id, {
    //    id
    //  });
    //  window.location.reload(true);
    //}
  }
};
</script>