<template>
  <div>
    <v-app>
      <v-row>
        <v-col cols="2">
          <Navbar />
        </v-col>
        <v-col cols="8">
          <TableRelawan />

          <div class="daftar-relawan">
            <h2>Relawan Mendaftar</h2>
            <CardAccRelawan :datarelawan="datarelawan" />
          </div>
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import TableRelawan from "@/components/TableRelawan";
import Navbar from "@/components/Navbar";
import CardAccRelawan from "@/components/komunitas/CardAccRelawan";

export default {
  components: {
    TableRelawan,
    Navbar,
    CardAccRelawan
  },

  data() {
    return {
      datarelawan: []
    };
  },
  mounted() {
    this.loadRelawan();
  },
  methods: {
    async loadRelawan() {
      const relawan = await this.$axios.$get("/nonaccrelawan");
      this.datarelawan = relawan.relawan;
      console.log(relawan);
    }
  }
};
</script>

<style scoped>
.daftar-relawan {
  padding-top: 4rem;
}
</style>