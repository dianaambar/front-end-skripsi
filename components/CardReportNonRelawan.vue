<template>
  <div class="card-report">
    <v-row v-if="datadonasi.status == 'Donasi diterima, Mencari Relawan'">
      <v-col cols="3">
        <!--<tr>-->
        <p>Nama Penerima :</p>
        <!--</tr>-->
        <!--<tr>-->
        <p>Alamat Penerima :</p>
        <p>Foto :</p>
        <!--<p>Latitude :</p>
        <p>Longitude :</p>-->
        <!--</tr>-->
      </v-col>
      <v-col cols="9">
        <div v-if="editing">
          <v-text-field v-model="namaValue" dense label="Nama Penerima"></v-text-field>
          <v-row class="alamat">
            <v-text-field v-model="alamatValue" dense label="Alamat"></v-text-field>
            <nuxt-link to="/Map">
              <v-btn>Lokasi</v-btn>
            </nuxt-link>
          </v-row>
          <v-file-input v-model="foto" show-size label="Foto Penerima Donasi"></v-file-input>
          <!--<v-text-field v-model="latitude" dense label="Latitude"></v-text-field>
          <v-text-field v-model="longitude" dense label="Longitude"></v-text-field>-->
          <v-btn @click="saveEdit" color="grey darken-1">Simpan</v-btn>
        </div>
        <div v-else>
          <p>{{form.nama_penerima}}</p>
          <p>{{form.alamat_penerima}}</p>
          <p>{{form.foto}}</p>
          <p>{{form.latitude}}</p>
          <p>{{form.longitude}}</p>
          <v-btn @click="isEdit" color="grey darken-1">Edit</v-btn>
        </div>
        <v-btn @click="updatePenerima" class="btn-acc" color="green darken-3">Kirim Laporan</v-btn>
      </v-col>
    </v-row>
    <div>
      <!--<p>{{datadonasi.penerima_donasi.nama_penerima}}</p>
      <p>{{datadonasi.penerima_donasi.alamat_penerima}}</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardReportNonRelawan",
  props: ["datarelawan", "datadonasi"],
  data() {
    return {
      editing: true,
      namaValue: null,
      alamatValue: null,
      foto: null,
      show: false,
      latitude: null,
      longitude: null,
      form: {
        nama_penerima: "",
        alamat_penerima: "",
        foto: "",
        latitude: "784758345",
        longitude: "45254345"
      }
    };
  },
  methods: {
    async updatePenerima() {
      let formData = new FormData();
      formData.append("nama_penerima", this.form.nama_penerima);
      formData.append("alamat_penerima", this.form.alamat_penerima);
      formData.append("foto", this.form.foto);
      formData.append("latitude", this.form.latitude);
      formData.append("longitude", this.form.longitude);

      let url = "updatepenerima/" + this.datadonasi.id;

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      await this.$axios.$post(url, formData, config);
      this.show = false;
      window.location.reload(true);
    },
    isEdit: function() {
      this.editing = true;
    },
    isNotEditing: function() {
      this.editing = false;
    },
    saveEdit: function() {
      (this.editing = false),
        (this.form.nama_penerima = this.namaValue),
        (this.form.alamat_penerima = this.alamatValue);
      this.form.foto = this.foto;
      this.form.latitude = this.latitude;
      this.form.longitude = this.longitude;
    }
  }
};
</script>

<style scoped>
.card-report {
  max-width: 50rem;
  margin: 2rem;
}

.alamat {
  margin-left: 0.1rem;
}
</style>