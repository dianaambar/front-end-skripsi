<template>
  <div>
    <!--<v-app>-->
    <!--<TopNavLogin />-->
    <Navbar />

    <v-row>
      <v-col cols="2"></v-col>
      <v-col cols="10">
        <v-row>
          <CardDonasi :jmlDonasi="jmlDonasi" />
          <CardPenerimaDonasi :jmlPenerima="jmlPenerima" />
          <div v-if="jmlRelawan != 0">
            <CardRelawan :jmlRelawan="jmlRelawan" />
          </div>
        </v-row>

        <v-row class="table-donasi">
          <TableDonasi />
          <!--<TableDonasiSelesai />-->
        </v-row>
      </v-col>
    </v-row>
    <!--<p v-for="i in isi" :key="i.id">{{i.nama_makanan}}</p>-->
    <!--<p>test</p>-->
    <!--</v-app>-->
  </div>
</template>

<script>
import TableDonasi from "@/components/TableDonasi";
import TableDonasiAcc from "@/components/TableDonasiAcc";
import TableDonasiSelesai from "@/components/TableDonasiSelesai";
import Navbar from "@/components/Navbar";
import CardDonasi from "@/components/komunitas/CardDonasi";
import CardRelawan from "@/components/komunitas/CardRelawan";
import CardPenerimaDonasi from "@/components/komunitas/CardPenerimaDonasi";
import TopNavLogin from "@/components/TopNavLogin";

import axios from "axios";

export default {
  components: {
    TableDonasi,
    Navbar,
    TableDonasiAcc,
    TableDonasiSelesai,
    CardDonasi,
    CardRelawan,
    CardPenerimaDonasi,
    TopNavLogin
  },
  data() {
    return {
      isi: [],
      profile: [],
      jmlDonasi: "",
      jmlRelawan: "",
      jmlPenerima: ""
    };
  },
  mounted() {
    this.loadJumlahData();
  },
  methods: {
    //async loadData(){
    //	const profiles = await this.$axios.$get('auth/user')
    //	this.profile = profiles
    //	console.log(profiles)
    //},
    //async loadDataa(){
    //	const profiles = await this.$axios.$get("auth/user" + this.isi.id)
    //	this.profile = profiles
    //	console.log(profiles)
    //}
    async loadJumlahData() {
      const jumlah = await this.$axios.$get("/jumlahdata");
      this.jmlDonasi = jumlah.jmlDonasi;
      this.jmlRelawan = jumlah.jmlRelawan;
      this.jmlPenerima = jumlah.jmlPenerima;

      console.log(this.jmlDonasi);
      console.log(this.jmlRelawan);
      console.log(this.jmlPenerima);
    }
  }
};
</script>

<style scoped>
/*@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');*/

.table-donasi {
  width: 100rem;
}
</style>