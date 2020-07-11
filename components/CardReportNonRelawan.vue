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
          <v-text-field v-model="form.nama_penerima" dense label="Nama Penerima"></v-text-field>
          <v-row class="alamat">
            <v-text-field v-model="form.alamat_penerima" dense label="Alamat"></v-text-field>

            <v-btn @click="showMap = !showMap">Lokasi</v-btn>

            <div v-if="showMap == true">
              <gmap-map :center="center" :zoom="zoom" style="width: 500px; height: 500px">
                <gmap-marker
                  :key="index"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  :clickable="true"
                  :draggable="true"
                  @click="markerClick(m.position)"
                  @dragend="showLocation"
                />
              </gmap-map>
              <v-btn @click="setLocation">Pilih Lokasi</v-btn>
            </div>
          </v-row>
          <v-file-input v-model="form.foto" show-size label="Foto Penerima Donasi"></v-file-input>
          <!--<v-text-field v-model="latitude" dense label="Latitude"></v-text-field>
          <v-text-field v-model="longitude" dense label="Longitude"></v-text-field>-->
          <v-btn @click="saveEdit" color="grey darken-1">Simpan{{form.latitude}}</v-btn>
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
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCwS9F0LOFfK745jhXuxLSs51tzm7Yb9ZU",
    // process.env.NUXT_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places"
  }
});

export default {
  name: "CardReportNonRelawan",
  props: ["datarelawan", "datadonasi"],
  data() {
    return {
      showMap: false,
      editing: true,
      namaValue: null,
      alamatValue: null,
      foto: null,
      show: false,
      form: {
        nama_penerima: "",
        alamat_penerima: "",
        foto: "",
        latitude: "784758345",
        longitude: "45254345"
      },
      posisi: "",
      center: {
        lat: -6.439244,
        lng: 106.805435
      },
      zoom: 15,
      markers: [
        {
          position: {
            lat: -6.439244,
            lng: 106.805435
          }
        }
      ],
      latitude: "",
      longitude: "",
      lati: "",
      longit: ""
    };
  },
  //  created(){
  //	  bus.$on('location', updateLoc)
  //  },
  methods: {
    async updatePenerima() {
      //  await this.$axios.$post(
      //    "updatenonrelawan/" + this.datadonasi.id,
      //    this.form
      //  );
      let formData = new FormData();
      formData.append("nama_penerima", this.form.nama_penerima);
      formData.append("alamat_penerima", this.form.alamat_penerima);
      formData.append("foto", this.form.foto);
      formData.append("latitude", this.form.latitude);
      formData.append("longitude", this.form.longitude);

      let url = "updatenonrelawan/" + this.datadonasi.id;

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
    },
    markerClick: function(position) {
      console.log(JSON.stringify(position));
    },
    showLocation: function(evt) {
      //  console.log(evt.latLng.toString());
      this.posisi = evt.latLng.toString();
      //  console.log(this.posisi);
      var pos = this.posisi;
      var loc = pos.split(",");

      var lat = loc[0];
      var splitLat = lat.split("(");
      this.lati = splitLat[1];
      //  console.log(this.lati);

      var lng = loc[1];
      var splitLng = lng.split(")");
      //  console.log(splitLng[0]);
      var longi = splitLng[0];
      var splitLongi = longi.split(" ");
      //  console.log(splitLongi[1]);
      this.longit = splitLongi[1];
      //  console.log(this.longit);
    },
    setLocation() {
      this.form.latitude = this.lati;
      console.log(this.form.latitude);
      this.form.longitude = this.longit;
      console.log(this.form.longitude);
    }
    //updateLoc: function() {
    //  this.$root.$on("location", lat => {
    //    this.form.latitude = lat;
    //  });
    //}
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