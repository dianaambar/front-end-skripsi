<template>
	<div>
		<v-app-bar>
			<v-toolbar-title>FoodX</v-toolbar-title>
			<v-spacer></v-spacer>
			<nuxt-link class="itemnav" to='/auth/login'>Login</nuxt-link>
			<nuxt-link class="itemnav" to='/auth/register'>Register</nuxt-link>
		</v-app-bar>
		 <!--<v-navigation-drawer>
			<v-list 
			dense
			nav
			class="py-0"
			permanent
			>
				<v-list-item>
					<v-list-item-avatar>
						<img src="https://randomuser.me/api/portraits/men/81.jpg">
					</v-list-item-avatar>
				</v-list-item>
				<v-list-item>
					<v-list-item-content>
					<v-list-item-title>Garda pangan</v-list-item-title>
					<v-list-item-subtitle>gardapangan@gmail.com</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
				<v-divider></v-divider>
				<v-list-item v-for="item in items" :key="item.id">
					<v-list-item-icon>
					<v-icon>{{ item.icon }}</v-icon>
					</v-list-item-icon>

					<v-list-item-content>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
					</v-list-item-content>
				</v-list-item>
			</v-list>
		</v-navigation-drawer>-->
	</div>
</template>

<script>
export default {
	name: 'Topnav',
	data(){
		return{
			drawer: false,
			items: [
				{id: 1, title: 'Donasi', icon: 'mdi-home-city'},
				{id: 2, title: 'Relawan', icon: 'mdi-home-city'}
			],
			mini: true
		}
	}

}
</script>

<style scoped>
.itemnav {
	margin: 0.2rem;
}
</style>