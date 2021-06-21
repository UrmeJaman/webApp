<template>
    <div>
        <Loader />
        <Head />
        <Nav />

        <section
            class="hero-wrap hero-wrap-2"
            style="background-image: url('images/bg_3.jpg');"
            data-stellar-background-ratio="0.5"
        >
            <div class="overlay"></div>
            <div class="container">
                <div
                    class="row no-gutters slider-text align-items-end justify-content-center"
                >
                    <div class="col-md-9 ftco-animate pb-5 text-center">
                        <h1 class="mb-3 bread">Read our blog</h1>
                        <p class="breadcrumbs">
                            <span class="mr-2"
                                ><a href="index.html"
                                    >Home <i class="fa fa-chevron-right"></i></a
                            ></span>
                            <span
                                >Blog <i class="fa fa-chevron-right"></i
                            ></span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <Blog />
        <Page />
        <Footer />
    </div>
</template>
<script>
import Head from "./vue/head.vue";
import Loader from "./vue/loader.vue";
import Nav from "./vue/nav.vue";
import Blog from "./vue/blog.vue";
import Page from "./vue/pageCiecle.vue";
import Footer from "./vue/footer.vue";

import { TemplateMain } from "./../lib/TemplateMain";
export default {
    components: {
        Head,
        Loader,
        Nav,
        Blog,
        Page,
        Footer
    },
    mounted() {
        this.$nextTick(function() {
            TemplateMain();
        });
    }
};
</script>
