<template>
  <v-container>
    <v-row>
      <v-col cols="2">
       <left-filter></left-filter>
      </v-col>
      <v-col cols="10">
        <list></list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import List from "./List";
import LeftFilter from "./LeftFilter";
export default {
  components:{
    List,
    LeftFilter
  },
};
</script>