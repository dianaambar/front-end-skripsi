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
            src="http://localhost:8000/images/pesantren.jpg"
          />
        </v-col>
        <v-col cols="9">
          <div>
            <v-chip>
              <v-icon left>mdi-map-marker</v-icon>
              {{nama_penerima}}
            </v-chip>
            <h4>Data Penerima</h4>
            <p>Nama Penerima : {{nama_penerima}}</p>
            <p>Alamat Penerima : {{alamat_penerima}}</p>
          </div>
          <v-btn color="grey darken-1">Ubah Data</v-btn>
          <v-btn class="btn-acc" color="green darken-3">Kirim Laporan</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "CardReport",
  data() {
    return {
      nama_penerima: "Pesantren Darussalam",
      alamat_penerima: "Jalan Raya Citayam Gang H.Dul"
    };
  }
};
</script>

<style scoped>
.img-donasi {
  margin-left: 3rem;
}

.atas {
  /*max-width: 40rem;*/
}

.btn-acc {
  /*margin-top: 1rem;*/
}
</style>