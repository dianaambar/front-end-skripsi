<template>
<div>
	<v-form @submit.prevent="register">
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
	</v-form>
</div>
	
</template>

<script>
export default {
	data(){
		return{
			form: {
				name: '',
				email: '',
				password: '',
				tipe_user: 'komunitas',
				//notelp: '',
				//legalitas: '',
				//tglBerdiri: '',
				//jmlRelawan: '',
				//alamat: '',
				//foto: ''
			}
		}
	},
	methods: {
		async register() {
			await this.$axios.$post("register", this.form);

			this.$router.push({ name: 'Login'})
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
	
}
</script>
