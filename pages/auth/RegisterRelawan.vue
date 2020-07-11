<template>
  <div>
    <v-card class="card-regis" @submit.prevent="register">
      <v-card-title>Daftar Sebagai Relawan</v-card-title>
      <v-form>
        <v-select
          v-model="form.komunitas_id"
          item-text="name"
          item-value="id"
          :items="komunitas"
          label="Pilih Komunitas"
        ></v-select>
        <v-text-field v-model="form.name" label="Nama" type="text"></v-text-field>

        <v-text-field v-model="form.nama_panggilan" label="Nama Panggilan" type="text"></v-text-field>

        <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>

        <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>

        <v-text-field v-model="form.no_telp" label="No telp" type="text"></v-text-field>

        <v-text-field v-model="form.alamat" label="Alamat" type="text"></v-text-field>

        <!--<v-text-field v-model="form.jenis_kelamin" label="Jenis Kelamin" type="text"></v-text-field>-->
        <v-select v-model="form.jenis_kelamin" :items="jns_kel" label="Pilih Jenis Kelamin"></v-select>

        <!--<v-text-field v-model="form.agama" label="Agama" type="text"></v-text-field>-->
        <v-select v-model="form.agama" :items="agm" label="Pilih Agama"></v-select>

        <!--<v-text-field v-model="form.gol_darah" label="Golongan Darah" type="text"></v-text-field>-->
        <v-select v-model="form.gol_darah" :items="goldar" label="Pilih Golongan Darah"></v-select>

        <v-text-field v-model="form.kabupaten_kota" label="Kabupaten/Kota" type="text"></v-text-field>

        <v-text-field v-model="form.provinsi" label="Provinsi" type="text"></v-text-field>

        <v-text-field v-model="form.tempat_lahir" label="Tempat Lahir" type="text"></v-text-field>

        <v-text-field v-model="form.tgl_lahir" label="Tanggal Lahir" type="text"></v-text-field>

        <v-text-field v-model="form.pekerjaan" label="Pekerjaan" type="text"></v-text-field>

        <v-text-field v-model="form.pend_terakhir" label="Pendidikan Terakhir" type="text"></v-text-field>

        <v-text-field v-model="form.organisasi_ongoing" label="Organisasi yang diikuti" type="text"></v-text-field>

        <v-text-field v-model="form.jenis_sim" label="Jenis SIM yang dimiliki" type="text"></v-text-field>

        <!--<v-text-field v-model="form.foto_relawan" label="" type="text"></v-text-field>-->
        <v-text-field v-model="form.motivasi" label="Motivasi" type="text"></v-text-field>

        <!--<v-file-input v-model="form.foto_relawan"></v-file-input>-->
        <v-file-input v-model="form.foto_relawan" show-size label="Foto Relawan"></v-file-input>

        <div>
          <input type="submit" value="register" class="btn-regis" />
        </div>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jns_kel: ["Laki-laki", "Perempuan"],
      agm: ["Islam", "Kristen", "Katolik", "Hindu", "Budha", "Konghuchu"],
      goldar: ["O", "A", "B", "AB"],
      form: {
        komunitas_id: "",
        name: "",
        email: "",
        password: "",
        no_telp: "",
        alamat: "",
        nama_panggilan: "",
        jenis_kelamin: "",
        agama: "",
        gol_darah: "",
        kabupaten_kota: "",
        provinsi: "",
        tempat_lahir: "",
        tgl_lahir: "",
        pekerjaan: "",
        pend_terakhir: "",
        organisasi_ongoing: "",
        jenis_sim: "",
        foto_relawan: "",
        motivasi: ""
      },
      select: "",
      komunitas: [
        {
          nama: "",
          id: ""
        }
      ]
      //  komunitas: ["Foodcycle of Indonesia", "Foodbank of Indonesia"]
    };
  },
  mounted() {
    this.loadKomunitas();
  },
  methods: {
    async register() {
      let formData = new FormData();
      formData.append("komunitas_id", this.form.komunitas_id);
      formData.append("name", this.form.name);
      formData.append("nama_panggilan", this.form.nama_panggilan);
      formData.append("email", this.form.email);
      formData.append("password", this.form.password);
      formData.append("no_telp", this.form.no_telp);
      formData.append("alamat", this.form.alamat);
      formData.append("jenis_kelamin", this.form.jenis_kelamin);
      formData.append("agama", this.form.agama);
      formData.append("gol_darah", this.form.gol_darah);
      formData.append("kabupaten_kota", this.form.kabupaten_kota);
      formData.append("provinsi", this.form.provinsi);
      formData.append("tempat_lahir", this.form.tempat_lahir);
      formData.append("tgl_lahir", this.form.tgl_lahir);
      formData.append("pekerjaan", this.form.pekerjaan);
      formData.append("pend_terakhir", this.form.pend_terakhir);
      formData.append("organisasi_ongoing", this.form.organisasi_ongoing);
      formData.append("jenis_sim", this.form.jenis_sim);
      formData.append("foto_relawan", this.form.foto_relawan);
      formData.append("motivasi", this.form.motivasi);

      let url = "regisrelawan";

      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      await this.$axios.$post(url, formData, config);
      alert(
        "Terima Kasih Sudah Mendaftar, Mohon Tunggu Verifikasi dari Pihak Komunitas"
      );
      this.$router.push("/");
    },
    async loadKomunitas() {
      const komunitas = await this.$axios.get("/acceptedkomunitas");
      this.komunitas = komunitas.data.komunitas;
      //  this.komunitas.nama = komunitas.data.komunitas[0].name;
      console.log(this.komunitas);
    }
  }
};
</script>
<style scoped>
.card-regis {
  margin-top: 10rem;
  margin-left: 20rem;
  padding: 2rem;
  max-width: 50rem;
  font-family: "Rubik", sans-serif;
}

.btn-regis {
  background-color: lightblue;
  padding: 0.5rem;
  width: 10rem;
  border-radius: 1rem;
  margin-left: 17rem;

  font-family: "Rubik", sans-serif;
}
</style>