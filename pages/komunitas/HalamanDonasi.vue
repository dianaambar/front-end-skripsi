<template>
<div>	
	<Navbar/>
		<v-row>
			<v-col cols="2">
			
			</v-col>
			<v-col cols="10">
			<v-row>
				<v-col cols="6">
					<TableDonasi/>
				</v-col>
				<v-col cols="6">
					<TableDonasiAcc/>
				</v-col>
			</v-row>
			</v-col>
		</v-row>
	<!--<p v-for="i in isi" :key="i.id">{{i.nama_makanan}}</p>-->
	<!--<p>test</p>-->
</div>
	
</template>

<script>
import TableDonasi from "@/components/TableDonasi";
import TableDonasiAcc from "@/components/TableDonasiAcc";
import Navbar from "@/components/Navbar";
import TopNavv from "@/components/TopNavv";
import axios from 'axios';
export default {
	components:{
		TableDonasi,
		Navbar,
		TopNavv,
		TableDonasiAcc
	},
	data(){
		return{
			isi: []
		}
	},
	mounted(){
		//this.loadData()
	},
	methods: {
		//async loadData(){
		//	try {
		//		const isi = await this.$axios.$get("donasi")
		//		this.data.isi = isi.donasi
		//		console.log("bisa cuy")
		//	} catch (error){
		//		if (error.response.status == 500) {
		//			alert('Gagal Terhubung ke Server!')
		//		}
		//		console.log("metode cuy")
		//	}
		//}
	}
}
</script>

<style scoped>
/*@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');*/
</style>