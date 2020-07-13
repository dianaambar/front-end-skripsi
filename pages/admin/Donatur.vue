<template>
<div>
    <Navbar/>

    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols=10>
            <v-row class="table-donatur">
                <TableDonatur />
            </v-row>
        </v-col>
    </v-row>
</div>
</template>

<script>
import Navbar from "@/components/admin/Navbar";
import TableDonatur from "@/components/TableDonatur";

import axios from "axios";

export default {
    components: {
        Navbar,
        TableDonatur
    },
}
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap"); */


.table-donatur {
    width: 100rem;
}

</style>