<template>
  <div>
    <v-app>
      <v-row>
        <v-col cols="2">
          <Navbar />
        </v-col>
        <v-col cols="8">
          <TableRelawan />
        </v-col>
      </v-row>
    </v-app>
  </div>
</template>

<script>
import TableRelawan from "@/components/TableRelawan";
import Navbar from "@/components/Navbar";

export default {
  components: {
    TableRelawan,
    Navbar
  }
};
</script>