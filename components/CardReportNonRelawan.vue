<template>
  <div class="card-report">
    <v-row>
      <v-col cols="4">
        <!--<tr>-->
        <p>Nama Penerima :</p>
        <!--</tr>-->
        <!--<tr>-->
        <p>Alamat Penerima :</p>
        <!--</tr>-->
      </v-col>
      <v-col cols="8">
        <div v-if="editing">
          <v-text-field v-model="namaValue" dense label="Nama Penerima"></v-text-field>
          <v-text-field v-model="alamatValue" dense label="Alamat"></v-text-field>
          <v-btn @click="saveEdit" color="grey darken-1">Simpan</v-btn>
        </div>
        <div v-else>
          <p>{{form.nama_penerima}}</p>
          <p>{{form.alamat_penerima}}</p>
          <v-btn @click="isEdit" color="grey darken-1">Edit</v-btn>
        </div>
        <v-btn class="btn-acc" color="green darken-3">Kirim Laporan</v-btn>
      </v-col>
    </v-row>
    <div>
      <!--<p>{{datadonasi.penerima_donasi.nama_penerima}}</p>
      <p>{{datadonasi.penerima_donasi.alamat_penerima}}</p>-->
    </div>
  </div>
</template>

<script>
export default {
  name: "CardReportNonRelawan",
  props: ["datarelawan", "datadonasi"],
  data() {
    return {
      editing: true,
      namaValue: null,
      alamatValue: null,
      form: {
        nama_penerima: "",
        alamat_penerima: ""
      }
    };
  },
  methods: {
    isEdit: function() {
      this.editing = true;
    },
    isNotEditing: function() {
      this.editing = false;
    },
    saveEdit: function() {
      (this.editing = false),
        (this.form.nama_penerima = this.namaValue),
        (this.form.alamat_penerima = this.alamatValue);
    }
  }
};
</script>

<style scoped>
.card-report {
  max-width: 50rem;
  margin: 2rem;
}
</style>