<template>
  <div>
    <!--<v-card class="card-donasi">
		<v-data-table
		:headers="headers"
		:items="items"
		:search="search"
		show-expand
		>
		<template v-slot:expanded-item >
				<td v-for="(i,index) in items" :key="index">
					{{i.nama_makanan}}
					<v-img :src="items[0].foto_donasi"/>
				</td>
		</template>
		</v-data-table>
    </v-card>-->

    <v-card class="card-donasi">
      <v-card-title>
        Donasi
        <v-spacer></v-spacer>
        <v-text-field label="Search" single-line hide-details v-model="search"></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="datadonasi"
        :search="search"
        show-expand
        @click:row="goToDonasi"
      >
        <template v-slot:item.tgl_pengajuan="{item}">
          <span>{{new Date(item.tgl_pengajuan).toLocaleString()}}</span>
        </template>
        <template v-slot:item.tgl_kadaluwarsa="{item}">
          <span>{{new Date(item.tgl_kadaluwarsa).toLocaleString()}}</span>
        </template>
        <template #expanded-item="{datadonasi,item}">
          <td :colspan="headers.length">
            <!--<v-card class="card-table">-->
            <v-row class="detail-donasi" align="center">
              <v-col cols="6">
                <img class="img-makanan" :src="item.foto_donasi" />
              </v-col>
              <v-col cols="6" class="txt-detail-donasi">
                <h3>{{item.nama_donatur}}</h3>
                <v-row>
                  <v-col>
                    <h5>Jenis Makanan:</h5>
                  </v-col>
                  <v-col>
                    <p>{{item.jenis_makanan}}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h5>Jumlah Porsi:</h5>
                  </v-col>
                  <v-col>
                    <p>{{item.jumlah_porsi}}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h5>Lokasi Penjemputan:</h5>
                  </v-col>
                  <v-col>
                    <p>{{item.lokasi_penjemputan}}</p>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <h5>Perikaraan Tanggal Kadaluwarsa:</h5>
                  </v-col>
                  <v-col>
                    <p>{{new Date(item.tgl_kadaluwarsa).toLocaleString()}}</p>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
            <v-row align="center" class="btn-acc">
              <v-col>
                <v-btn @click="updateDonasi(item.id)" class="my-2" color="#43A047">Terima</v-btn>
              </v-col>
              <v-col>
                <v-btn color="#C62828">Tolak</v-btn>
              </v-col>
            </v-row>
            <!--</v-card>-->
          </td>
        </template>
        <v-alert
          slot="no-results"
          :value="true"
          color="error"
          icon="warning"
        >Your search for "{{ search }}" found no results.</v-alert>
      </v-data-table>
    </v-card>
    <!--<app-donasi datadonasi="datadonasi"> </app-donasi>-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TableDonasi",

  data() {
    return {
      search: "",
      datadonasi: [],
      foto: "/public/images/nasikotak.jpg",
      selected: [],
      headers: [
        //{ text: 'Id', value: 'id' },
        { text: "Jenis Makanan", value: "jenis_makanan" },
        { text: "Tanggal Pengajuan", value: "tgl_pengajuan" },
        { text: "Tanggal Kadaluwarsa", value: "tgl_kadaluwarsa" },
        { text: "Lokasi Penjemputan", value: "lokasi_penjemputan" }
        //{ text: 'Status Donasi', value: 'status_donasi' },
        //{ text: 'Jumlah Porsi', value: 'jumlah_porsi' },
        //{ text: 'Tanggal Produksi', value: 'tgl_produksi' },
        //{ text: 'Data Makanan', value: 'data_makanan' },
        //{ text: 'Foto', value: 'foto_donasi' },
      ]
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const isis = await this.$axios.$get("donasikomunitas");
      this.datadonasi = isis.donasi;
      //console.log("bisa cuy")
      //console.log(isis.donasi[0].nama_makanan)
    },
    //async updateDonasi(id){
    //	await window.axios.post(`donasi/updateDonasi/${id}`);
    //}
    async updateDonasi(id) {
      await this.$axios.$post(`donasi/updateDonasi/${id}`);
      console.log("method ini kepanggil");
      window.location.reload(true);
    },

    goToDonasi(item) {
      this.$router.push(`/komunitas/${item.id}`);
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.card-donasi {
  margin: 1rem;
  font-family: "Rubik", sans-serif;
}

.img-makanan {
  max-width: 15rem;
  border-radius: 1.2rem;
}

.foto_relawan {
  max-width: 3rem;
}

.detail-donasi {
}

.txt-detail-donasi {
  /*margin-top: 1rem;*/
  /*padding: 1rem;*/
  padding-left: 2rem;
}

.btn-acc {
  align-items: center;
}
</style>