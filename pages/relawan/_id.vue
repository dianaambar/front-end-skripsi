<template>
  <div>
    <v-row>
      <v-col cols="2">
        <Navbar />
      </v-col>
      <v-col cols="10">
        <!--<v-card>-->
        <h2>Biodata Diri</h2>
        <v-row>
          <v-col cols="5">
            <v-img
              class="img-relawan"
              width="300px"
              :src="'http://localhost:8000/images/' + relawan.foto_relawan"
            />
          </v-col>
          <v-col cols="7">
            <!--<v-card-title>{{relawan.name}}</v-card-title>-->
            <!--<v-card-text>-->
            <h3>{{relawan.name}}</h3>
            <v-row>
              <v-col>
                <p>Nama Panggilan :</p>
                <p>Jenis Kelamin :</p>
                <p>Pekerjaan :</p>
                <p>Agama :</p>
                <p>Golongan Darah :</p>
                <p>Kabupaten/Kota :</p>
                <p>Provinsi :</p>
                <p>Tempat, tanggal lahir :</p>
                <p>Pendidikan Terakhir :</p>
                <p>Organisasi :</p>
                <p>Jenis SIM :</p>
                <p>Motivasi :</p>
              </v-col>
              <v-col>
                <p>{{relawan.nama_panggilan}}</p>
                <p>{{relawan.jenis_kelamin}}</p>
                <p>{{relawan.pekerjaan}}</p>
                <p>{{relawan.agama}}</p>
                <p>{{relawan.gol_darah}}</p>
                <p>{{relawan.kabupaten_kota}}</p>
                <p>{{relawan.provinsi}}</p>
                <p>{{relawan.tempat_lahir}}, {{relawan.tgl_lahir}}</p>
                <p>{{relawan.pend_terakhir}}</p>
                <p>{{relawan.organisasi_ongoing}}</p>
                <p>{{relawan.jenis_sim}}</p>
                <p>{{relawan.motivasi}}</p>

                <v-btn @click="disableRelawan(relawan.user_id)" color="#C62828">Nonaktifkan Relawan</v-btn>
              </v-col>
            </v-row>
            <!--</v-card-text>-->
          </v-col>
        </v-row>
        <!--</v-card>-->
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  },
  data() {
    return { relawan: "" };
  },
  mounted() {
    this.loadDataRelawan();
  },
  methods: {
    async loadDataRelawan() {
      const relawan = await this.$axios.$get(
        "/detailrelawan/" + this.$route.params.id
      );
      this.relawan = relawan.relawan;
      console.log(this.relawan);
      console.log(this.relawan.user_id);
    },
    async disableRelawan(id) {
      await this.$axios.$post("/disablerelawan/" + this.relawan.user_id, {
        id
      });
      this.$router.push("/komunitas/Relawan");
    }
  }
};
</script>