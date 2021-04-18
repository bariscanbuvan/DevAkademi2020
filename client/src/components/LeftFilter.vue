<template>
  <v-card max-width="475" class="mx-auto">
    <v-toolbar color="yellow" light>
      <v-toolbar-title>Filtreler</v-toolbar-title>
    </v-toolbar>

    <v-list shaped>
      <v-list-item-group v-model="model">
        <template v-for="item in items">
          <v-list-item
            :key="item.title"
            :value="item.id"
            active-class="text--accent-4"
          >
            <template v-slot:default="{ active }">
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-checkbox :input-value="active" color="yellow"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>

    
     <v-footer color="yellow lighten-4"
    >
    </v-footer>
  </v-card>
</template>

<script>
import CategoryService from "../services/category";
export default {
  data: () => ({
    items: [],
    model: [],
  }),
  async mounted(){
    const categories = await CategoryService.getCategories();
    this.items = categories.data.data;
  },
  watch: {
    model: function (newVal) {
      console.log(newVal);
      this.$bus.$emit("filterByCategoryId", newVal);
    },
  },
};
</script>