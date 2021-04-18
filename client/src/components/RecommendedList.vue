<template>
  <v-card class="mt-5">
    <v-toolbar light dense color="yellow">
      Bu ilanı inceleyenler aşağıdaki ilanları da inceledi
    </v-toolbar>
    <v-card
      class="mt-1"
      v-for="recommendation in recommendations"
      :key="recommendation.id"
    >
      <v-card-title primary-title>
        <a :href="'/' + recommendation.id + '/detail'" target="_blank">
          {{ recommendation.title }}
        </a>

        <template v-for="i in 6">
          <v-chip
            color="yellow"
            v-bind:key="i"
            v-if="recommendation.categories['category' + i].id > 0"
            class="ma-2"
          >
            {{ recommendation.categories["category" + i].title }}
          </v-chip>
        </template>
         
         <v-chip color="green" v-if="recommendation.status == 'ACTIVE'" :key="recommendation.status"> Aktif ilan </v-chip>
       <v-chip  color="red" v-if="recommendation.status == 'REJECTED'" :key="recommendation.status"> Reddedildi ({{recommendation.adminID}})</v-chip>
        <v-chip color="red"  v-if="recommendation.status == 'WAITING_APPROVAL'"> Onay bekliyor </v-chip>
        <v-chip color="red"  v-if="recommendation.status == 'PASSIVATED'"> Pasif ilan </v-chip>
        <v-chip color="red"  v-if="recommendation.status == 'EXPIRED'"> Süresi doldu </v-chip>
    
      </v-card-title>
    </v-card>
  </v-card>
</template>

<script>
import RecommendationService from "../services/recommendation";
export default {
  data() {
    return {
      recommendations: [],
    };
  },
  async mounted() {
    const recommendations = await RecommendationService.getRecommendations();
    this.recommendations = recommendations.data.data;
  },
};
</script>