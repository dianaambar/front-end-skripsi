<template>
  <div>
    <v-card class="card-relawan" v-for="relawan in datarelawan" :key="relawan.id">
      <v-row>
        <v-col cols="3">
          <v-img
            class="img-relawan"
            width="200"
            :src="'http://localhost:8000/images/' + relawan.foto_relawan"
          />
        </v-col>
        <v-col cols="9">
          <!--<v-card-title>{{relawan.name}}</v-card-title>-->
          <v-card-text>
            <h3>{{relawan.name}}</h3>
            <v-row>
              <v-col>
                <p>Nama Panggilan :</p>
                <p>Jenis Kelamin :</p>
                <p>Pekerjaan :</p>
                <p>Kabupaten/Kota :</p>
              </v-col>
              <v-col>
                <p>{{relawan.nama_panggilan}}</p>
                <p>{{relawan.jenis_kelamin}}</p>
                <p>{{relawan.pekerjaan}}</p>
                <p>{{relawan.kabupaten_kota}}</p>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <!--<v-btn>Lihat Detail</v-btn>-->
            <ModalAcceptRelawan :relawan="relawan" />
          </v-card-actions>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import ModalAcceptRelawan from "@/components/komunitas/ModalAccRelawan";

export default {
  props: ["datarelawan"],
  name: "CardAccRelawan",
  components: {
    ModalAcceptRelawan
  },
  data() {
    return {
      nama_relawan: "",
      nama_panggilan: "",
      jenis_kelamis: "",
      pekerjaan: "",
      kabupatenkota: ""
      //  dialog: false
    };
  }
};
</script>

<style scoped>
.img-relawan {
  margin: 1rem;
}

.card-relawan {
  margin-top: 1rem;
}
</style>