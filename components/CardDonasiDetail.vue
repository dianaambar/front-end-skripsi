<template>
  <div>
    <v-row class="detail-relawan">
      <v-col cols="2">
        <div class="img-relawan">
          <v-avatar>
            <img src="http://localhost:8000/images/supermarket.png" alt="Relawan" />
          </v-avatar>
        </div>
      </v-col>

      <v-col cols="10">
        <h4 class="nama-relawan">{{nama}}</h4>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <div class="detail-makanan">
          <h4>Jenis Makanan</h4>
          <p>Porsi = {{jumlahporsi}} {{satuan}}</p>
          <p>Tangaal Produksi = {{tgl_produksi}}</p>
          <p>Perkiraan Kadaluwarsa = {{tgl_kadaluwarsa}}</p>
          <p>Notes = {{notes}}</p>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="6">
        <h4>Kondisi Makanan</h4>
        <p>Berjamur = {{jumlahporsi}} {{satuan}}</p>
        <p>Berwarna = {{tgl_produksi}}</p>
        <p>Berubah Rasa = {{tgl_kadaluwarsa}}</p>
        <p>Berubah Tekstur = {{notes}}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn color="green darken-3">Tolak</v-btn>
      </v-col>
      <v-col>
        <v-btn color="red darken-4">>Terima</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "cardDonasiDetail",
  data() {
    return {
      nama: "Mukidi",
      jumlahporsi: "100",
      satuan: "Kg",
      tgl_produksi: "2020-09-09",
      tgl_kadaluwarsa: "2020-09-09",
      notes: "tolong cepat ya"
    };
  }
};
</script>

<style scoped>
.detail-relawan {
  max-width: 20rem;
}

.nama-relawan {
  align-items: center;
  align-content: center;
  align-self: center;
}
</style>