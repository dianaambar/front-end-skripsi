<template>
  <div>
    <!--<v-form @submit.prevent="register">
		<div>
			<label>Nama Komunitas</label><br>
			<input v-model="form.name" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="Nama Komunitas">	
		</div>
		<div>
			<label>Email</label><br>
			<input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="Email">
		</div>
		<div>
			<label>Password</label><br>
			<input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="Password">
		</div>
		<div>
			<label>No. Telepon</label><br>
			<input v-model="form.notelp" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="No Telepon">	
		</div>
		<div>
			<label>Legalitas</label><br>
			<input v-model="form.legalitas" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="">
		</div>
		<div>
			<label>Tanggal Berdiri</label><br>
			<input v-model="form.tglBerdiri" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="">
		</div>
		<div>
			<label>Jumlah Relawan</label><br>
			<input v-model="form.jmlRelawan" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="">
		</div>
		<div>
			<label>Alamat</label><br>
			<input v-model="form.alamat" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="">
		</div>
		<div>
			<label>Foto</label><br>
			<input v-model="form.foto" type="text" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="">	
		</div>

		<div>
			<input type="submit" value="register" class="btn btn-default w-100">
		</div>
    </v-form>-->
    <v-card class="card-regis" @submit.prevent="register">
      <v-card-title>Register</v-card-title>
      <v-form>
        <v-text-field v-model="form.name" label="Nama Komunitas/Organisasi Sosial" type="text"></v-text-field>
        <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
        <v-text-field v-model="form.no_telp" label="No telp" type="text"></v-text-field>
        <v-text-field v-model="form.alamat" label="Alamat" type="text"></v-text-field>
        <v-text-field v-model="form.tgl_berdiri" label="Tanggal Berdiri" type="text"></v-text-field>
        <v-text-field v-model="form.legalitas" label="Legalitas Komunitas" type="text"></v-text-field>
        <!--<v-text-field v-model="form.foto_komunitas" label="Foto Komunitas" type="text"></v-text-field>-->
        <v-file-input
          v-model="form.foto_komunitas"
          show-size
          label="Logo Komunitas/Organisasi Sosial"
        ></v-file-input>
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
        legalitas: "",
        tgl_berdiri: "",
        foto_komunitas: ""
      }
    };
  },
  methods: {
    async register() {
      //  await this.$axios.$post("regiskomunitas", this.form);
      let formData = new FormData();
      formData.append("name", this.form.name);
      formData.append("email", this.form.email);
      formData.append("password", this.form.password);
      formData.append("no_telp", this.form.no_telp);
      formData.append("alamat", this.form.alamat);
      formData.append("legalitas", this.form.legalitas);
      formData.append("tgl_berdiri", this.form.tgl_berdiri);
      formData.append("foto_komunitas", this.form.foto_komunitas);

      let url = "regiskomunitas";

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      await this.$axios.$post(url, formData, config);

      this.$router.push("/auth/Login");
    }
  }

  //computed: {
  //	nameErrors () {
  //    const errors = []
  //    if (!this.$v.name.$dirty) return errors
  //    !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
  //    !this.$v.name.required && errors.push('Name is required.')
  //    return errors
  //  },
  //  emailErrors () {
  //    const errors = []
  //    if (!this.$v.email.$dirty) return errors
  //    !this.$v.email.email && errors.push('Must be valid e-mail')
  //    !this.$v.email.required && errors.push('E-mail is required')
  //    return errors
  //  }
  //}
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
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