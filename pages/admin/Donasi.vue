<template>
<div>
    <Navbar/>

    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols=10>
            <v-row class="table-all-donasi">
                <TableAllDonasi />
            </v-row>
        </v-col>
    </v-row>
 </div>
</template>

<script>

import Navbar from "@/components/admin/Navbar";
import TableAllDonasi from "@/components/TableAllDonasi";

import axios from "axios";

export default {
    components: {
        Navbar,
        TableAllDonasi
    },
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

.table-all-donasi {
    width: 100rem;
}

</style>