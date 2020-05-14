<template>
	<div>
		<TopNav/>
		<v-row align="center">
			<v-col class="text-center"> 
				<div class="my-2">
					<v-btn  x-large color="success" dark>Daftar Sebagai Relawan</v-btn>
				</div>
			</v-col>
			<v-col class="tex-center">
				<div class="my-2">
					<nuxt-link to="/auth/Register">
					<v-btn  x-large color="success" dark>Daftar Sebagai Komunitas</v-btn>
					</nuxt-link>
				</div>
			</v-col>
		</v-row>
	</div>
</template>

<script>
import TopNav from "../components/TopNav";
export default {
	components:{
		TopNav
	},
}
</script>

<style scoped>
.my-2{
	padding: 20rem 10rem;
}
</style>