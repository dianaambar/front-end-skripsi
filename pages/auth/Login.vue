<template>
	<div>
		<v-card class="card-login">
			<!--{{errors}}-->
			<v-form @submit.prevent="login">
				
				<!--<v-col
				cols="12"
				md="4"-->
				>
				<div class="form-group">
					<label>Email</label><br>
					<input v-model="form.email" type="email" class="form-control" :class="{ 'is-invalid': errors.name}" placeholder="Email">
					<div class="invalid-feedback" v-if="errors.email">
						{{errors.email[0]}}
					</div>
				</div>
				<div class="form-group">
					<label>Password</label><br>
					<input v-model="form.password" type="password" class="form-control" :class="{ 'is-invalid': errors.password}" placeholder="Password">
					<div class="invalid-feedback" v-if="errors.password">
						{{errors.password[0]}}
					</div>
				</div>
				<!--<v-text-field
					v-model="form.email"
					:counter="30"
					label="Email"
					required
					v-if="errors.email"
					type="email"
				></v-text-field>
				</v-col>

				<v-col
				cols="12"
				md="4"
				>
				<v-text-field
					v-model="form.password"
					label="Password"
					required
					v-if="errors.password"
					type="password"
				></v-text-field>-->
				<div>
					<input type="submit" value="login" class="btn btn-default w-100">
				</div>
				<!--</v-col>-->
			</v-form>
		</v-card>
	</div>
</template>

<script>
export default {
	data(){
		return{
			form: {
				email: '',
				password: '',
			}
		}
	},
	methods: {
		async login() {
			await this.$auth.login({data: this.form});

			this.$router.push({ name: 'HalamanDonasi'})
		}
	}
}
</script>

<style scoped>
.card-login{
	align-self: center;
	margin-top: 3rem;
	margin-left: 30rem;
	width: 50rem;
	padding: 1em;
}
</style>