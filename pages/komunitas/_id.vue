<template>
  <div class="isi">
    <!--<v-app>-->
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
                  <v-img height="250" width="250" :src="fotoo" />
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
                      <v-btn @click="ignoreDonasi" color="red darken-4">Tolak</v-btn>
                    </v-col>
                  </v-row>
                </div>
              </v-col>
            </v-row>
          </div>
          <div v-if="status" class="bar">
            <!--<ProgressBar :datadonasi="datadonasi" :datarelawan="datarelawan" />-->
            <BarNoRelawan :datadonasi="datadonasi" :datarelawan="datarelawan" />
          </div>
          <div v-else>
            <ProgressBar :datadonasi="datadonasi" :datarelawan="datarelawan" />
            <!--<BarNoRelawan :datadonasi="datadonasi" :datarelawan="datarelawan" />-->
          </div>
        </v-card>
        <div v-if="datarelawan.length != 0">
          <div
            v-if="datadonasi.status == 'Donasi diterima, Mencari Relawan'"
            class="select-relawan"
          >
            <SelectRelawan :datarelawan="datarelawan" :datadonasi="datadonasi" />
          </div>
          <div class="card-relawan" v-if="datadonasi.status =='Menunggu konfirmasi relawan'">
            <v-card class="rounded-xl">
              <div class="inside-card-relawan">
                <h3>Relawan yang menjemput:</h3>
                <v-row>
                  <v-col>
                    <v-row>
                      <v-col cols="2">
                        <v-avatar>
                          <img src="http://localhost:8000/images/supermarket.png" alt="Relawan" />
                        </v-avatar>
                      </v-col>

                      <v-col class="nama-relawan" cols="10">{{datadonasi.relawan.user.name}}</v-col>
                    </v-row>
                  </v-col>

                  <v-divider vertical></v-divider>
                  <v-col>
                    <v-row>
                      <v-col cols="2">
                        <v-icon left>mdi-timer-sand</v-icon>
                      </v-col>
                      <v-col cols="10">
                        <div v-if="datadonasi.accDonasi == true">
                          <p>Relawan akan menjemput makanan</p>
                        </div>
                        <!--<div v-if="datadonasi.penerima_donasi != null">
                          <p>Relawan telah manyalurkan makanan</p>
                        </div>-->
                        <div v-else>
                          <p>Menunggu Konfirmasi</p>
                        </div>
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </div>
        </div>
        <div v-if="datarelawan.length == 0">
          <CardReportNonRelawan :datadonasi="datadonasi" :datarelawan="datarelawan" />
        </div>
        <div v-if="datadonasi.status == 'Donasi telah disalurkan'">
          <CardReport
            :datarelawan="datarelawan"
            :datadonasi="datadonasi"
            :foto_penerima="foto_penerima"
          />
        </div>
      </v-col>
    </v-row>
    <!--</v-app>-->
  </div>
</template>

<script>
import ProgressBar from "@/components/updateProgress";
import Navbar from "@/components/Navbar";
import CardDonasiDetail from "@/components/CardDonasiDetail";
import CardReport from "@/components/CardReport";
import TableRelawan from "@/components/TableRelawan";
import SelectRelawan from "@/components/SelectRelawan";
import BarNoRelawan from "@/components/progressNoRelawan";
import CardReportNonRelawan from "@/components/CardReportNonRelawan";

export default {
  components: {
    ProgressBar,
    Navbar,
    CardDonasiDetail,
    CardReport,
    TableRelawan,
    SelectRelawan,
    BarNoRelawan,
    CardReportNonRelawan
  },
  data() {
    return {
      datadonasi: "",
      datamakanan_donasi: "",
      e1: 1,
      datarelawan: [],
      show: true,
      fotoo: "",
      foto_penerima: ""
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
      this.fotoo = "http://localhost:8000/images/" + isis.donasi.foto;
      this.datamakanan_donasi = isis.donasi.makanan_donasi;
      //  console.log(isis.donasi);
      console.log(this.foto_penerima);
      console.log("iyaa" + this.fotoo);
      //  console.log(isis);
      //  console.log(this.datadonasi);
    },
    async loadRelawan() {
      const isi = await this.$axios.$get("relawankomunitas");
      this.datarelawan = isi.relawan;
      console.log("bisa cuy");
      //  console.log(this.datarelawan.length);
      //  console.log(isi.relawan[0].id);
    },
    async updateDonasi() {
      await this.$axios.$put("updatedonasi/" + this.$route.params.id);
      window.location.reload(true);
    },
    async ignoreDonasi() {
      await this.$axios.$post("deleteDonasi/" + this.$route.params.id);
      this.$router.push("/komunitas/HalamanDonasi");
    },
    accept: function() {
      this.e1 = this.el > 2;
      //  this.datadonasi.accDonasi = true
    }
  },

  computed: {
    status() {
      return (
        this.datarelawan.length == 0 || this.datarelawan.length == "undefined"
      );
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

.card-relawan {
  max-width: 40rem;
  max-height: 15rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
}

.inside-card-relawan {
  padding: 1rem;
}

.nama-relawan {
  align-self: center;
}
</style>