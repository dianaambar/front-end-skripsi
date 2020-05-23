<template>
	<div>
		<div v-for="dd in datadonasi" :key="dd.id">
			<p>{{dd.jenis_makanan}}</p>
		</div>
		
	</div>
</template>

<script>
export default {
	name: "DetailDonasi",
	props: ['datadonasi'],
	data(){
		return{

		}
	}
}
</script>