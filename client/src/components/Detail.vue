<template>
  <v-container>
    <v-row>
      <v-container cols="12">
         <v-toolbar light dense color="red" class="mb-3" v-if="classified.status == 'REJECTED'"> Bu ilan {{classified.adminID}} tarafından reddedilmiştir. </v-toolbar>
          <v-toolbar light dense color="red" class="mb-3" v-if="classified.status == 'WAITING_APPROVAL'"> Bu ilan onay beklemektedir. </v-toolbar>
           <v-toolbar light dense color="red" class="mb-3" v-if="classified.status == 'PASSIVATED'"> Bu ilan pasifleştirilmiştir. </v-toolbar>
           <v-toolbar light dense color="red" class="mb-3" v-if="classified.status == 'EXPIRED'"> Bu ilanın süresi geçmiştir. </v-toolbar>
        <v-card class="mx-auto" tile>
          
          <v-toolbar light dense color="yellow"> İlan Detayı </v-toolbar>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>İlan Başlığı</v-list-item-title>
              <v-list-item-subtitle>{{
                classified.title
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>İlan Açıklaması</v-list-item-title>
              <v-list-item-subtitle>{{
                classified.description
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Satıcı Tipi</v-list-item-title>
              <v-list-item-subtitle>{{
                classified.sellerType
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>İlan Kategorileri</v-list-item-title>
              <v-list-item-subtitle>
                <template v-for="i in 6">
                  <v-chip
                    color="yellow"
                    v-bind:key="i"
                    v-if="classified.categories['category' + i].id > 0"
                    class="ma-2"
                  >
                    {{ classified.categories["category" + i].title }}
                  </v-chip>
                </template>
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>İlan Kapanma Tarihi</v-list-item-title>
              <v-list-item-subtitle>{{
                new Date(classified.expiryDate)
              }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>

        <RecommendedList></RecommendedList>
      </v-container>
    </v-row>
  </v-container>
</template>
<script>
import ClassifiedService from "../services/classified";
import RecommendedList from "./RecommendedList";
export default {
  components: {
    RecommendedList,
  },
  data() {
    return {
      classified: {},
    };
  },
  async mounted() {
    const classified = await ClassifiedService.getClassifiedById(this.$route.params.id);

    this.classified = classified.data.data;
  },
};
</script>