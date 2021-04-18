import Vue from "vue";
import Router from "vue-router";
import Main from "../components/Main";
import Detail from "../components/Detail"

Vue.use(Router);

export const router = new Router({
    mode: "history",
    routes: [
        { path: "/", component: Main, meta: { title: "Anasayfa" } },
        { path: "/:id/detail", component: Detail }
    ]
})