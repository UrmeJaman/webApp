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
                        <h1 class="mb-3 bread">About Us</h1>
                        <p class="breadcrumbs">
                            <span class="mr-2"
                                ><a href="index.html"
                                    >Home <i class="fa fa-chevron-right"></i></a
                            ></span>
                            <span
                                >About us
                                <i class="fa fa-chevron-right"></i></span
                            ><inertia-link :href="route('about.create')">
                                <span>ADD About </span></inertia-link
                            >
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <History v-bind:about="about" />
        <Consult />
        <!-- <Service /> -->
        <!-- <Work /> -->

        <Testimoni />
        <Question />
        <!-- <Blog /> -->
        <!-- <Appointment /> -->
        <Footer />
    </div>
</template>
<script>
import Head from "../vue/head.vue";
import Loader from "../vue/loader.vue";
import Nav from "../vue/nav.vue";
import History from "../vue/history.vue";
import Consult from "../vue/consult.vue";
import Service from "../vue/service.vue";
import Work from "../vue/work.vue";
import Testimoni from "../vue/testimoni.vue";
import Blog from "../vue/blog.vue";
import Appointment from "../vue/appointment.vue";
import Footer from "../vue/footer.vue";
import Question from "../vue/question.vue";

import { TemplateMain } from "../../lib/TemplateMain";
export default {
    components: {
        Head,
        Loader,
        Nav,
        History,
        Consult,
        Service,
        Work,
        Question,
        Testimoni,
        Blog,
        Appointment,
        Footer
    },
    props: {
        about: Array
    },
    mounted() {
        this.$nextTick(function() {
            TemplateMain();
        });
    }
};
</script>
