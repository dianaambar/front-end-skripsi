<template>
<div>
	
	<v-card class="card-donasi">
		<v-data-table
		:headers="headers"
		:items="isi"
		:search="search"
		>
		</v-data-table>
	</v-card>

</div>
	
</template>

<script>
import axios from 'axios';
export default {
	name: "TableDonasi",

	data(){
		return{
			search: "",
			isi: [],
			headers: [
				{ text: 'Nama Makanan', value: 'nama_makanan' },
				{ text: 'Tanggal Pengajuan', value: 'tgl_pengajuan' },
				{ text: 'Jenis Makanan', value: 'jenis_makanan' },
				{ text: 'Tanggal Kadaluwarsa', value: 'tgl_kadaluwarsa' },
				{ text: 'Lokasi Penjemputan', value: 'lokasi_penjemputan' },
				{ text: 'Status Donasi', value: 'status_donasi' },
			],
		}
	},
	mounted(){
		this.loadData()
	},
	methods:{
		async loadData(){
				const isis = await this.$axios.$get("donasi")
				this.isi = isis.donasi
				this.dataMakanan = isis.donasi
				console.log("bisa cuy")
				console.log(isis.donasi[0].nama_makanan)
		}
	}
}
</script>

<style scoped>
.card-donasi{
	margin: 2rem;
}
</style>