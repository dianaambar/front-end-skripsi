<template>
  <div>
    <div v-for="dk in datakomunitas" :key="dk.id">
      <v-hover v-slot:default="{ hover }">
        <v-card :elevation="hover ? 12:2" :class="{ 'on-hover': hover }" width="1360" class="card">
          <h4>{{dk.name}}</h4>
          <v-row>
            <v-col cols="2">
              <v-img class="img-komunitas" height="200" width="200" :src="dk.foto_komunitas"></v-img>
            </v-col>

            <!--<v-col cols="10" class="text-center pl-0">-->
            <v-row>
              <v-col cols="2">
                <p>Email :</p>
                <p>Tanggal Berdiri :</p>
                <p>Alamat :</p>
                <p>Nomor Telepon :</p>
                <!--<p>Jumlah Relawan :</p>-->
              </v-col>
              <v-col cols="10">
                <div>
                  <p>{{dk.email}}</p>
                  <p>{{dk.tgl_berdiri}}</p>
                  <p>{{dk.alamat}}</p>
                  <p>{{dk.no_telp}}</p>
                  <!--<p>{{dk.user.name}}</p>-->
                </div>
              </v-col>
            </v-row>

            <!--<v-row class="flex-column" justify="center">
          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>

          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-bookmark</v-icon>
            </v-btn>
          </v-col>

          <v-col class="px-0">
            <v-btn icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-col>
            </v-row>-->
          </v-row>
        </v-card>
      </v-hover>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardKomunitas",
  props: ["datakomunitas"]
  //  methods:{
  //	  async loadKomunitas(){

  //	  }
  //  }
};
</script>

<style scoped>
.card {
  margin-top: 1rem;
  padding: 1rem;
}
</style>