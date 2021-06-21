// require("./bootstrap");
// import Vue from "vue";
// import App from "./vue/app";

// const app = new Vue({
//     el: "#app",
//     components: { App }
// });
import { InertiaApp } from "@inertiajs/inertia-vue";
import Vue from "vue";

Vue.use(InertiaApp);
Vue.config.productionTip = false;
Vue.mixin({ methods: { route: window.route } });

let app = document.getElementById("app");

// const pages = {
//     "/": require("./vue/app.vue").default
// };

new Vue({
    render: h =>
        h(InertiaApp, {
            props: {
                initialPage: JSON.parse(app.dataset.page),
                resolveComponent: name =>
                    import(`@/Pages/${name}`).then(module => module.default)
                // resolveComponent: name => pages[name]
            }
        })
}).$mount(app);
