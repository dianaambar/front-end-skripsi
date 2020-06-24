<template>
  <div>
    <v-row>
      <v-col cols="2">
        <Navbar />
      </v-col>
      <v-col cols="10">
        <v-row class="top">
          <v-col>
            <CardTopDonasi :jumlah_donasi="jumlah_donasi" />
          </v-col>
          <v-col>
            <CardTopKomunitas :jumlah_komunitas="jumlah_komunitas" />
          </v-col>
          <v-col>
            <CardTopDonatur :jumlah_donatur="jumlah_donatur" />
          </v-col>
          <v-col>
            <CardTopRelawan :jumlah_relawan="jumlah_relawan" />
          </v-col>
        </v-row>
        <CardKomunitas :datakomunitas="datakomunitas" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import CardKomunitas from "@/components/komunitas/CardKomunitas";
import CardTopKomunitas from "@/components/admin/CardTopKomunitas";
import CardTopDonasi from "@/components/admin/CardTopDonasi";
import CardTopDonatur from "@/components/admin/CardTopDonatur";
import CardTopRelawan from "@/components/admin/CardTopRelawan";

export default {
  components: {
    Navbar,
    CardKomunitas,
    CardTopKomunitas,
    CardTopDonasi,
    CardTopDonatur,
    CardTopRelawan
  },
  data() {
    return {
      datakomunitas: [],
      jumlah_komunitas: "",
      jumlah_donatur: "",
      jumlah_relawan: "",
      jumlah_donasi: ""
    };
  },
  mounted() {
    this.loadKomunitas();
    this.loadDonatur();
    this.loadRelawan();
    this.loadDonasi();
  },
  methods: {
    async loadKomunitas() {
      const isi = await this.$axios.$get("/komunitas");
      this.datakomunitas = isi.komunitas;
      this.jumlah_komunitas = isi.jumlah_komunitas;

      console.log(this.datakomunitas);
      console.log(this.jumlah_komunitas);
    },
    async loadDonatur() {
      const donatur = await this.$axios.$get("/donatur");
      this.jumlah_donatur = donatur.jumlah_donatur;

      console.log(this.jumlah_donatur);
    },
    async loadRelawan() {
      const relawan = await this.$axios.$get("/relawan");
      this.jumlah_relawan = relawan.jumlah_relawan;

      console.log(this.jumlah_relawan);
    },
    async loadDonasi() {
      const donasi = await this.$axios.$get("/donasi");
      this.jumlah_donasi = donasi.jumlah_donasi;

      console.log(this.jumlah_donasi);
    }
  }
};
</script>

<style scoped>
.top {
  margin-right: 2rem;
}
</style>