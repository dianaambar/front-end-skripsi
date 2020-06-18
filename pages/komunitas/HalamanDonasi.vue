<template>
  <div>
    <v-app>
      <Navbar />
      <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="10">
          <v-row>
            <TableDonasi />
          </v-row>
        </v-col>
      </v-row>
      <!--<p v-for="i in isi" :key="i.id">{{i.nama_makanan}}</p>-->
      <!--<p>test</p>-->
    </v-app>
  </div>
</template>

<script>
import TableDonasi from "@/components/TableDonasi";
import TableDonasiAcc from "@/components/TableDonasiAcc";
import Navbar from "@/components/Navbar";
import TopNavv from "@/components/TopNavv";
import axios from "axios";
export default {
  components: {
    TableDonasi,
    Navbar,
    TopNavv,
    TableDonasiAcc
  },
  data() {
    return {
      isi: [],
      profile: []
    };
  },
  mounted() {
    //this.loadData()
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
  }
};
</script>

<style scoped>
/*@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');*/
</style>