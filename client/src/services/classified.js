import ApiService from "./api"

const ClassifiedService = {
    getClassifieds: function () {
        return ApiService.get(`/classifieds/`);
    },

    getClassifiedById: function (classifiedId) {
        return ApiService.get(`/classifieds/${classifiedId}`);
    },
}

export default ClassifiedService