<template>
  <div class="isi">
    <v-row class="detail-relawan">
      <v-col cols="2">
        <div class="img-relawan">
          <v-avatar>
            <img src="http://localhost:8000/images/supermarket.png" alt="Relawan" />
          </v-avatar>
        </div>
      </v-col>

      <v-col cols="10">
        <h4 class="nama-relawan">{{datadonasi.alamat_penjemputan}}</h4>
        <v-row>
          <v-col>
            <h5>Waktu Penjemputan :</h5>
          </v-col>
          <v-col>
            <p>{{datadonasi.waktu_penjemputan}}</p>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row v-for="dm in datamakanan_donasi" :key="dm.id">
      <v-col cols="4">
        <div class="detail-makanan">
          <h4>{{dm.makanan.jenis_makanan.nama_jenis_makanan}}</h4>
          <p>Porsi = {{dm.jumlah}} {{dm.unit}}</p>
          <p>Tanggal Produksi = {{dm.tgl_produksi}}</p>
          <p>Perkiraan Kadaluwarsa = {{dm.tgl_kadaluwarsa}}</p>
          <p>Notes = {{datadonasi.notes}}</p>
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="6">
        <!--{{dm.jamur}}-->
        <h4>Kondisi Makanan</h4>
        <div class="kondisi">
          <div>
            <v-row>
              Berjamur =
              <div v-if="dm.jamur == false">Tidak</div>
              <div v-else>Ya</div>
            </v-row>
          </div>
          <div>
            <v-row>
              Berwarna =
              <div v-if="dm.berwarna == false">Tidak</div>
              <div v-else>Ya</div>
            </v-row>
          </div>
          <div>
            <v-row>
              Berubah Rasa =
              <div v-if="dm.berubahrasa == false">Tidak</div>
              <div v-else>Ya</div>
            </v-row>
          </div>
          <div>
            <v-row>
              Berubah Tekstur =
              <div v-if="dm.berubahtekstur == false">Tidak</div>
              <div v-else>Ya</div>
            </v-row>
          </div>
        </div>
        <!--<p>Berwarna = {{kondisiWarna}}</p>
        <p>Berubah Rasa = {{kondisiRasa}}</p>
        <p>Berubah Tekstur = {{kondisiRekstur}}</p>-->
      </v-col>
    </v-row>

    <!--<v-row class="acc-or-not">
      <v-col>
        <v-btn color="green darken-3">Terima</v-btn>
      </v-col>
      <v-col>
        <v-btn color="red darken-4">Tolak</v-btn>
      </v-col>
    </v-row>-->
  </div>
</template>

<script>
export default {
  name: "cardDonasiDetail",
  props: ["datadonasi", "datamakanan_donasi"],
  data() {
    return {
      nama: "Mukidi",
      jumlahporsi: "100",
      satuan: "Kg",
      tgl_produksi: "2020-09-09",
      tgl_kadaluwarsa: "2020-09-09",
      notes: "tolong cepat ya",
      tidak: "tidak",
      kondisi: "",
      foto: ""
    };
  },
  computed: {
    kondisiJamur() {
      if (this.datamakanan_donasi.jamur == false) {
        return "tidak";
      }
    },
    kondisiWarna() {
      if (this.datamakanan_donasi.berwarna == false) {
        return "tidak";
      }
    },
    kondisiRasa() {
      if (this.datamakanan_donasi.berubahrasa == false) {
        return "tidak";
      }
    },
    kondisiRekstur() {
      if (this.datamakanan_donasi.berubahtekstur == false) {
        return "tidak";
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.isi {
  font-family: "Rubik", sans-serif;
}
.detail-relawan {
  max-width: 20rem;
}

.kondisi {
  margin-left: 0.5rem;
}

.nama-relawan {
  align-items: center;
  align-content: center;
  align-self: center;
}

.acc-or-not {
  max-width: 15rem;
}
</style>