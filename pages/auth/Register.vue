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
        <v-text-field v-model="form.name" label="Nama Komunitas/Organisasi" type="text"></v-text-field>
        <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
        <v-text-field v-model="form.no_telp" label="No telp" type="text"></v-text-field>
        <v-text-field v-model="form.alamat" label="Alamat" type="text"></v-text-field>
        <v-text-field v-model="form.tgl_berdiri" label="Tanggal Berdiri" type="text"></v-text-field>
        <v-text-field v-model="form.legalitas" label="Legalitas Komunitas/Organisasi" type="text"></v-text-field>
        <v-text-field v-model="form.foto_komunitas" label="Foto Komunitas" type="text"></v-text-field>
        <!--<input type="file" label="Logo Komunitas/Organisasi" @change="onFilesSelected" />-->
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
        legalitas: "",
        tgl_berdiri: "",
        alamat: "",
        foto_komunitas: null
      }
    };
  },
  methods: {
    async register() {
      await this.$axios.$post("regiskomunitas", this.form);

      this.$router.push("/auth/Login");
    },
    onFilesSelected(event) {
      this.foto_komunitas = event.target.files[0];
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