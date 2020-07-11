<template>
  <div>
    <gmap-map :center="center" :zoom="zoom" style="width: 1000px; height: 1000px">
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

    <nuxt-link to="/">
      <v-btn>Pilih Lokasi</v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import Vue from "vue";
import * as VueGoogleMaps from "vue2-google-maps";
//import func from "../../vue-temp/vue-editor-bridge";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCwS9F0LOFfK745jhXuxLSs51tzm7Yb9ZU",
    // process.env.NUXT_APP_GOOGLE_MAPS_API_KEY,
    libraries: "places"
  }
});

export default {
  name: "GetMap",
  data() {
    return {
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
      longitude: ""
    };
  },
  methods: {
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
      this.latitude = splitLat[1];
      console.log(this.latitude);

      var lng = loc[1];
      var splitLng = lng.split(")");
      //  console.log(splitLng[0]);
      var longi = splitLng[0];
      var splitLongi = longi.split(" ");
      //  console.log(splitLongi[1]);
      this.longitude = splitLongi[1];
      console.log(this.longitude);
    }
    //sendLocation: function() {
    //  this.$router.push("/komunitas/_id");
    //  this.$root.$emit("location", this.latitude);
    //}
  }
};
</script>

<style scoped>
</style>