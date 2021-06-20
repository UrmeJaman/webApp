<template>
    <div>
        <Head />
        <Nav />
        <HeadContent />
        <HeadInfo />
        <History />
        <Consult />
        <Service />
        <Work />
        <Question />
        <Testimoni />
        <Blog />
        <Appointment />
        <Footer />
        <div id="ftco-loader" class="show fullscreen">
            <svg class="circular" width="48px" height="48px">
                <circle
                    class="path-bg"
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke-width="4"
                    stroke="#eeeeee"
                />
                <circle
                    class="path"
                    cx="24"
                    cy="24"
                    r="22"
                    fill="none"
                    stroke-width="4"
                    stroke-miterlimit="10"
                    stroke="#F96D00"
                />
            </svg>
        </div>
    </div>
</template>
<script>
import Head from "./head.vue";
import Nav from "./nav.vue";
import HeadContent from "./headContent.vue";
import HeadInfo from "./headInfo.vue";
import Question from "./question.vue";
import History from "./history.vue";
import Consult from "./consult.vue";
import Service from "./service.vue";
import Work from "./work.vue";
import Testimoni from "./testimoni.vue";
import Blog from "./blog.vue";
import Appointment from "./appointment.vue";
import Footer from "./footer.vue";
import { TemplateMain } from "./../../lib/TemplateMain";

export default {
    components: {
        Head,
        Nav,
        HeadContent,
        HeadInfo,
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
    mounted() {
        this.$nextTick(function() {
            TemplateMain();
        });
    }
};
</script>
