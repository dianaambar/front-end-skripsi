<template>
  <div>
    <v-card class="card-regis" @submit.prevent="register">
      <v-card-title>Daftar Sebagai Relawan</v-card-title>
      <v-form>
        <v-text-field v-model="form.name" label="Nama" type="text"></v-text-field>
        <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
        <v-text-field v-model="form.no_telp" label="No telp" type="text"></v-text-field>
        <v-text-field v-model="form.alamat" label="Alamat" type="text"></v-text-field>
        <v-text-field v-model="form.jenis_kelamin" label="Jenis Kelamin" type="text"></v-text-field>
        <v-text-field v-model="form.jenis_kendaraan" label="Jenis Kendaraan" type="text"></v-text-field>
        <v-text-field v-model="form.latitude" label="Latitude" type="text"></v-text-field>
        <v-text-field v-model="form.longitude" label="Longitude" type="text"></v-text-field>
        <v-text-field v-model="form.komunitas_id" label="Komunitas" type="text"></v-text-field>
        <v-text-field v-model="form.foto_relawan" label="Foto Relawan" type="text"></v-text-field>

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
      form: {
        name: "",
        email: "",
        password: "",
        no_telp: "",
        alamat: "",
        jenis_kelamin: "",
        jenis_kendaraan: "",
        foto_relawan: "",
        latitude: "",
        longitude: "",
        komunitas_id: ""
      }
    };
  },
  methods: {
    async register() {
      await this.$axios.$post("regisrelawan", this.form);

      this.$router.push("/auth/Login");
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