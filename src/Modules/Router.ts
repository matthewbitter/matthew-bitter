//---------------------------------------------------------------------------
// Imports
//---------------------------------------------------------------------------
import Vue from "vue";
import Component from "vue-class-component";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

Component.registerHooks([
    "beforeRouteEnter",
    "beforeRouteLeave",
    "beforeRouteUpdate" // for vue-router 2.2+
]);

// Handle dynamic imports.
const LoadView = (path: string) => () => import(`@/Views/${path}` /* webpackChunkName: "view-[request]" */);

const routes: RouteConfig[] = [

    // Index
    { path: "/", component: LoadView("Index/Index.vue") },
    { path: "/", component: LoadView("About/About.vue") }

];

const router = new VueRouter({
    mode: "history",
    base: "/",
    routes
});

export default router;