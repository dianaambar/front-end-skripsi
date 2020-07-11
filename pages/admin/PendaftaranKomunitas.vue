<template>
  <div>
    <v-row>
      <v-col cols="2">
        <Navbar />
      </v-col>
      <v-col cols="10">
        <TableKomunitas />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import TableKomunitas from "@/components/admin/TableKomunitas";
export default {
  components: {
    Navbar,
    TableKomunitas
  }
};
</script>