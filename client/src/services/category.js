import ApiService from "./api"

const CategoryService = {
    getClassifiedsByCategoryId: function (categoryId) {
        return ApiService.get(`/categories/${categoryId}/classifieds`);
    },

    getCategories: function () {
        return ApiService.get(`/categories/`);
    },
}

export default CategoryService