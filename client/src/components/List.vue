<template>
  <v-card>
    <v-toolbar color="yellow">
      <v-toolbar-title>İlanlar</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Mevcut filtrelenmiş ilanlarda arama yap"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="classifieds"
      class="elevation-1 rounded-0"
      :loading="loading"
      loading-text="Yükleniyor..."
      no-data-text="Hiç ilan yok."
      no-results-text="Kriterlerle eşleşen ilan yok."
      :search="search"
    >
      <template #item.id="{ value }">
        <router-link :to="'/' + value + '/detail'">
          <v-icon small> mdi-eye </v-icon>
        </router-link>
      </template>

      <template v-slot:progress>
        <v-progress-linear indeterminate color="yellow"></v-progress-linear>
      </template>
    </v-data-table>

    <v-footer color="yellow lighten-3"> </v-footer>
  </v-card>
</template>


<script>
import ClassifiedService from "../services/classified"
import CategoryService from "../services/category"
export default {
  data: () => ({
    loading: false,
    search: "",
    headers: [
      { value: "id" },
      { text: "Başlık", value: "title" },
      { text: "Fiyat", value: "price" },
      { text: "Satıcı Tipi", value: "sellerType" },
      {text: "İlan Kapanma Tarihi", value: "expiryDate"},
      {text: "Kategori", value: "categories.category0.title"}
    ],
    classifieds: [],
  }),

  created() {
    this.initialize();
    this.$bus.$on("filterByCategoryId", async (categoryId) => {
      this.loading = true;
      if (!categoryId) {
        const classifieds = await ClassifiedService.getClassifieds();
        this.classifieds = classifieds.data.data;
      } else {
        const classifieds = await CategoryService.getClassifiedsByCategoryId(categoryId);
        this.classifieds = classifieds.data.data;
      }
      this.loading = false;
    });
  },

  methods: {
    async initialize() {
      this.loading = true;
      const classifieds = await ClassifiedService.getClassifieds();
        this.classifieds = classifieds.data.data;
        this.loading = false;
    },
  },
};
</script>

<style>
.column {
  padding: 0 !important;
}
</style>