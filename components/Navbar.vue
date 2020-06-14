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
              <img
                src="data:image/png;base64,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"
              />
            </v-list-item-avatar>

            <v-list-item-content class="subjudul">
              <v-list-item-title>Garda Pangan</v-list-item-title>
              <v-list-item-subtitle>gardapangan@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list-item v-for="item in items" :key="item.title" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content class="subcontent">
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
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
      items: [
        { id: 1, title: "Donasi", icon: "mdi-home-city" },
        { id: 2, title: "Relawan", icon: "mdi-home-city" }
      ],
      mini: true
    };
  }
  //  computed: mapGetters({
  //    user: "auth/user"
  //  })
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
.judul {
  padding: 1rem;
}

.subjudul {
  margin-left: 1rem;
  font-family: "Rubik", sans-serif;
}

.subcontent {
  margin-left: 1rem;

  font-family: "Rubik", sans-serif;
}
</style>