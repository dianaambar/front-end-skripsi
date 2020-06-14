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
                  <CardDonasiDetail />
                </v-col>
              </v-row>
            </div>
            <div class="bar">
              <ProgressBar />
            </div>
          </v-card>

          <CardReport />
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

export default {
  components: {
    ProgressBar,
    Navbar,
    CardDonasiDetail,
    CardReport
  }
};
</script>

<style scoped>
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

.isi {
}
</style>