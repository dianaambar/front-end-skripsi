<template>
  <div>
    <v-container>
      <v-navigation-drawer permanent absolute dark left="true">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <!--<img :src="datauser.foto_komunitas" />-->
            </v-list-item-avatar>

            <v-list-item-content class="subjudul">
              <v-list-item-title>Admin</v-list-item-title>
              <!--<v-list-item-subtitle>{{datauser.no_telp}}</v-list-item-subtitle>-->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="dn in navbar" :key="dn.title">
            <v-list-item-icon>
              <v-icon>{{dn.icon}}</v-icon>
            </v-list-item-icon>
            <nuxt-link class="link" :to="dn.link">
              <v-list-item-content class="subcontent">
                <v-list-item-title>{{dn.title}}</v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        { icon: "", title: "Komunitas", link: "/admin/Dashboard" },
        { icon: "", title: "Relawan", link: "" },
        { icon: "", title: "Donatur", link: "" },
        { icon: "", title: "Donasi", link: "" }
      ]
    };
  }
};
</script>

<style scoped>
</style>