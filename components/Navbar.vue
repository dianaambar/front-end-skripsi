<template>
  <div>
    <v-container>
      <!--<v-card
      height="400"
      class="overflow-hidden"
      >-->
      <v-navigation-drawer v-model="drawer" permanent absolute dark left="true">
        <v-list dense nav class="py-0">
          <v-list-item two-line>
            <v-list-item-avatar>
              <img :src="'http://localhost:8000/images/' + foto" />
            </v-list-item-avatar>

            <v-list-item-content class="subjudul">
              <v-list-item-title>{{datauser.name}}</v-list-item-title>
              <v-list-item-subtitle>{{datauser.email}}</v-list-item-subtitle>
              <!--<v-list-item-subtitle>{{datauser.no_telp}}</v-list-item-subtitle>-->
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <!--<v-list-item v-for="item in items" :key="item.title">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <nuxt-link class="link" :to="item.link">
              <v-list-item-content class="subcontent">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>-->

          <v-list-item>
            <v-list-item-icon>
              <v-icon>{{ iconDonasi }}</v-icon>
            </v-list-item-icon>
            <nuxt-link class="link" :to="linkDon">
              <v-list-item-content class="subcontent">
                <v-list-item-title>{{ tDon }}</v-list-item-title>
              </v-list-item-content>
            </nuxt-link>
          </v-list-item>

          <div v-if="datarelawan.length != 0">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>{{ iconRelawan }}</v-icon>
              </v-list-item-icon>
              <nuxt-link class="link" :to="linkRel">
                <v-list-item-content class="subcontent">
                  <v-list-item-title>{{ tRel }}</v-list-item-title>
                </v-list-item-content>
              </nuxt-link>
            </v-list-item>
          </div>

          <!--<v-list-item @click="logout">
            <v-list-item-icon>
              <v-icon></v-icon>
            </v-list-item-icon>
            <v-list-item-content class="subcontent">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item-content>
          </v-list-item>-->
        </v-list>

        <template v-slot:append>
          <div class="pa-2">
            <v-btn block @click="logout">Logout</v-btn>
          </div>
        </template>
      </v-navigation-drawer>
      <!--</v-card>-->
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      datauser: "",
      iconDonasi: "mdi-home-city",
      iconRelawan: "mdi-home-city",
      tDon: "Donasi",
      tRel: "Relawan",
      linkDon: "/komunitas/HalamanDonasi",
      linkRel: "/komunitas/Relawan",
      items: [
        {
          id: 1,
          title: "Donasi",
          icon: "mdi-home-city",
          link: "/komunitas/HalamanDonasi"
        },
        {
          id: 2,
          title: "Relawan",
          icon: "mdi-home-city",
          link: "/komunitas/Relawan"
        }
      ],
      mini: true,
      datarelawan: "",
      foto: ""
    };
  },

  mounted() {
    this.loadUser();
    this.loadRelawan();
  },
  methods: {
    async loadUser() {
      const isi = await this.$axios.$get("datakomunitas");
      this.datauser = isi.komunitas;
      this.foto = isi.komunitas.foto_komunitas;
      //console.log("bisa cuy")
      console.log(isi);
    },
    async loadRelawan() {
      const isi = await this.$axios.$get("/relawankomunitas");
      this.datarelawan = isi.semua;
      console.log("bisa cuy");
      //  console.log(this.datarelawan.length);
      //  console.log(isi.relawan[0].id);
    },

    async logout() {
      const logout = await this.$axios.$post("/logout");
      this.$router.push("/auth/Login");
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.judul {
}

.subjudul {
  margin-left: 1rem;
  font-family: "Rubik", sans-serif;
}

.link {
  text-decoration: none;
  color: white;
}
.subcontent {
  margin-left: 1rem;
  font-family: "Rubik", sans-serif;
}
</style>