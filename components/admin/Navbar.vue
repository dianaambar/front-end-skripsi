<template>
  <div>
    <v-container>
      <v-navigation-drawer permanent absolute dark left="true">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-content class="subjudul">
              <v-list-item-title class="link">Admin</v-list-item-title>
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
        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navbar: [
        {
          icon: "mdi-account-multiple",
          title: "Komunitas",
          link: "/admin/Dashboard"
        },
        { icon: "mdi-comment-check-outline", title: "Donatur", link: "/admin/Donatur" },
        { icon: "mdi-clipboard-text", title: "Donasi", link: "/admin/Donasi" },
        {
          icon: "mdi-account-plus",
          title: "Pendaftaran",
          link: "/admin/PendaftaranKomunitas"
        },
        //  { icon: "mdi-clipboard-text", title: "Donasi", link: "" },
      ]
    };
  },
  methods: {
    async logout() {
      const logout = await this.$axios.$post("/logout");
      this.$router.push("/auth/Login");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.link {
  text-decoration: none;
  color: white;
}
.subcontent {
  margin-left: 1rem;
  font-family: "Rubik", sans-serif;
}

.subjudul {
  margin-left: 1rem;
  font-family: "Rubik", sans-serif;
}
</style>