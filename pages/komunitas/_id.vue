<template>
  <div class="isi">
    <v-app>
      <v-row>
        <v-col cols="2">
          <Navbar />
        </v-col>
        <v-col cols="10">
          <v-card>
            <v-card-title>Detail Donasi</v-card-title>
            <div>
              <v-row>
                <v-col cols="4">
                  <div class="img-makanan">
                    <v-img height="250" width="250" src="https://cdn2.tstatic.net/default-2.jpg" />
                  </div>
                </v-col>
                <v-col cols="8">
                  <CardDonasiDetail
                    :datadonasi="datadonasi"
                    :datamakanan_donasi="datamakanan_donasi"
                  />
                  <div v-if="datadonasi.status == 'Menunggu Konfirmasi'">
                    <v-row v-show="show" class="acc-or-not">
                      <v-col>
                        <v-btn @click="updateDonasi" color="green darken-3">Terima</v-btn>
                      </v-col>
                      <v-col>
                        <v-btn color="red darken-4">Tolak</v-btn>
                      </v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>
            <div class="bar">
              <ProgressBar :datadonasi="datadonasi" />
              <!--<ProgressBar :e1="e1" />-->
              <!--<p>{{datadonasi.status}}</p>-->
            </div>
          </v-card>
          <div class="select-relawan">
            <SelectRelawan :datarelawan="datarelawan" />
          </div>
          <CardReport :datarelawan="datarelawan" />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import ProgressBar from "@/components/updateProgress";
import Navbar from "@/components/Navbar";
import CardDonasiDetail from "@/components/CardDonasiDetail";
import CardReport from "@/components/CardReport";
import TableRelawan from "@/components/TableRelawan";
import SelectRelawan from "@/components/SelectRelawan";

export default {
  components: {
    ProgressBar,
    Navbar,
    CardDonasiDetail,
    CardReport,
    TableRelawan,
    SelectRelawan
  },
  data() {
    return {
      datadonasi: "",
      datamakanan_donasi: "",
      e1: 1,
      datarelawan: [],
      show: true
    };
  },
  mounted() {
    //console.log(this.$route);
    this.loadData();
    this.loadRelawan();
  },

  methods: {
    async loadData() {
      const isis = await this.$axios.$get(
        "donasikomunitas/" + this.$route.params.id
      );
      this.datadonasi = isis.donasi;
      this.datamakanan_donasi = isis.donasi.makanan_donasi;
      console.log(isis);
      console.log(this.datamakanan_donasi);
      //console.log("bisa cuy")
      //console.log(isis.donasi[0].nama_makanan)
    },
    async loadRelawan() {
      const isi = await this.$axios.$get("relawankomunitas");
      this.datarelawan = isi.relawan;
      console.log("bisa cuy");
      console.log(isi.relawan[0].id);
    },
    async updateDonasi() {
      await this.$axios.$post("updatedonasi/" + this.$route.params.id);
      //  this.e1 = 2;
      //  this.show = false;
      window.location.reload(true);
      //  console.log("ya?");
      //  console.log(this.e1);
    },
    accept: function() {
      this.e1 = this.el > 2;
      //  this.datadonasi.accDonasi = true
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.isi {
  font-family: "Rubik", sans-serif;
}
.img-makanan {
  align-items: center;
  padding-left: 8rem;
  padding-right: 4rem;
  padding-top: 3rem;
}

.bar {
  padding-left: 4rem;
  padding-right: 4rem;
  padding-bottom: 3rem;
}

.select-relawan {
  margin: 3rem;
}
</style>