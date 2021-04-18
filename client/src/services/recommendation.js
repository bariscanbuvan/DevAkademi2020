import ApiService from "./api"

const RecommendationService = {
    getRecommendations: function () {
        return ApiService.get(`/recommendations/`);
    },

}

export default RecommendationService