<template>
	<div id="d-donasi">
		<p> test </p>
		<div v-for="dd in items" :key="dd.id">
			<p>{{dd.jenis_makanan}}</p>
		</div>
		
	</div>
</template>

<script>
export default {
	props: ['items'],
	data(){
		return{

		}
	}
}
</script>