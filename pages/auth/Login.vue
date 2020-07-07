<template>
  <div>
    <v-card class="card-login">
      <v-card-title>Login</v-card-title>
      <!--{{errors}}-->
      <v-form @submit.prevent="login">
        <!--				
				<v-col
				cols="12"
        md="4"-->

        <!--<div class="form-group">
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
        </div>-->
        <v-text-field v-model="form.email" label="Email" type="email"></v-text-field>
        <v-text-field v-model="form.password" label="Password" type="password"></v-text-field>
        <div>
          <input type="submit" value="Login" class="btn-login" />
        </div>
        <!--</v-col>-->
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async login() {
      if (this.form.email == "" || this.form.password == "") {
        alert("Harap Lengkapi Isiannya");
      } else {
        await this.$auth.login({ data: this.form });

        if (this.$auth.user.role_id == 1) {
          this.$router.push("/admin/Dashboard");
        } else {
          if (this.$auth.user.status !== true) {
            alert("Akun Anda Belum Terverifikasi");
          } else {
            this.$router.push("/komunitas/HalamanDonasi");
          }
        }
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.card-login {
  margin-top: 10rem;
  margin-left: 30rem;
  padding: 2rem;
  width: 30rem;
  font-family: "Rubik", sans-serif;
  /*background-color: rgb(96, 240, 151);*/
}

.btn-login {
  background-color: rgb(96, 240, 151);
  padding: 0.5rem;
  width: 10rem;
  border-radius: 1rem;
  margin-left: 8rem;
  font-family: "Rubik", sans-serif;
}
</style>