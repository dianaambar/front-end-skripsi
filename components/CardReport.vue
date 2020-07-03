<template>
  <div class="isi">
    <v-card>
      <v-card-title>Penerima Donasi</v-card-title>
      <v-row class="atas">
        <v-col cols="3">
          <v-img
            width="250"
            height="250"
            class="img-donasi"
            :src="'http://localhost:8000/images/' + datadonasi.penerima_donasi.foto"
          />
        </v-col>
        <v-col cols="9">
          <div>
            <v-chip>
              <v-icon left>mdi-map-marker</v-icon>
              {{datadonasi.penerima_donasi.nama_penerima}}
            </v-chip>
            <h4>Data Penerima</h4>

            <v-row class="detail-donasi">
              <v-col cols="4">
                <!--<tr>-->
                <p>Nama Penerima :</p>
                <!--</tr>-->
                <!--<tr>-->
                <p>Alamat Penerima :</p>
                <!--</tr>-->
              </v-col>
              <v-col cols="8">
                <div v-if="datarelawan == null">
                  <div v-if="editing">
                    <v-text-field v-model="namaValue" dense label="Nama Penerima"></v-text-field>
                    <v-text-field v-model="alamatValue" dense label="Alamat"></v-text-field>
                    <v-btn @click="saveEdit" color="grey darken-1">Simpan</v-btn>
                  </div>
                  <div v-else>
                    <p>{{datadonasi.penerima_donasi.nama_penerima}}</p>
                    <p>{{datadonasi.penerima_donasi.alamat_penerima}}</p>
                    <v-btn @click="isEdit" color="grey darken-1">Edit</v-btn>
                  </div>
                  <v-btn class="btn-acc" color="green darken-3">Kirim Laporan</v-btn>
                </div>
                <div v-else>
                  <p>{{datadonasi.penerima_donasi.nama_penerima}}</p>
                  <p>{{datadonasi.penerima_donasi.alamat_penerima}}</p>
                </div>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardReport",
  props: ["datarelawan", "datadonasi", "foto_penerima"],
  data() {
    return {
      btnChange: "Ubah Data",
      editing: true,
      namaValue: null,
      alamatValue: null,
      foto: "",
      //  datarelawan: null,
      form: {
        nama_penerima: "Pesantren Darussalam",
        alamat_penerima: "Jalan Raya Citayam Gang H.Dul",
        src: "http://localhost:8000/images/pesantren.jpg"
      }
    };
  },
  methods: {
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
    },
    async loadDataDonasi() {
      const donasi = await this.$axios.$get();
    }
  }
};
</script>

<style scoped>
.img-donasi {
  margin-left: 3rem;
}

.detail-donasi {
  max-width: 30rem;
}
</style>