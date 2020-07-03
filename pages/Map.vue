<template>
  <div>
    <!--<GMapMap
      :center="{lat:10, lng:10}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 500px; height: 300px"
    >
      <GmapMarker :position="google && new google.maps.LatLng(1.38, 103.8)" />
      <GmapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      />
    </GMapMap>-->
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
    <nuxt-link to>
      <v-btn>Pilih Lokasi</v-btn>
    </nuxt-link>
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
  name: "Map",
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
      ]
    };
  },
  methods: {
    markerClick: function(position) {
      console.log(JSON.stringify(position));
    },
    showLocation: function(evt) {
      //  console.log(evt.latLng.toString());
      this.posisi = evt.latLng.toString();
      console.log(this.posisi);
    }
  }
};
</script>