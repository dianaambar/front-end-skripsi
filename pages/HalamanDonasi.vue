<template>
<div>
	<div>
		<v-row>
			<v-col cols="2">
			<Navbar/>
			</v-col>
			<v-col cols="10">
			<TableDonasi/>
			</v-col>
		</v-row>
	<!--<p v-for="i in isi" :key="i.id">{{i.nama_makanan}}</p>-->
	<!--<p>test</p>-->
	</div>
</div>
	
</template>

<script>
import TableDonasi from "../components/TableDonasi";
import Navbar from "../components/Navbar";
import axios from 'axios';
export default {
	components:{
		TableDonasi,
		Navbar
	},
	data(){
		return{
			isi: []
		}
	},
	mounted(){
		this.loadData()
	},
	methods: {
		async loadData(){
			try {
				const isi = await this.$axios.$get("donasi")
				this.data.isi = isi.donasi
				console.log("bisa cuy")
			} catch (error){
				if (error.response.status == 500) {
					alert('Gagal Terhubung ke Server!')
				}
				console.log("metode cuy")
			}
		}
	}
}
</script>