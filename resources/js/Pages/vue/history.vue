<template>
    <div class="ftco-section">
        <div class="container">
            <div class="row justify-content-center pb-5">
                <div class="col-lg-6 heading-section text-center ftco-animate">
                    <h2 class="mb-4">
                        {{ about.head_intro }}
                        <span> {{ about.head_years }}</span>
                        {{ about.head_main }}
                        <span>IT Solution</span>
                    </h2>
                    <p>
                        {{ about.head_details }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="services-2 text-center">
                        <div class="icon">
                            <!-- <span class="flaticon-web-programming"></span> -->
                            <span v-bind:class="about.body_icon"></span>
                        </div>
                        <div class="text">
                            <h3>{{ about.body_title }}</h3>
                            <p>
                                {{ about.body_details }}
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <img
                        v-bind:src="'/about/download/' + about.image"
                        class="img-fluid"
                        alt=""
                    />
                    <!-- <img src="images/services.svg" class="img-fluid" alt="" /> -->
                </div>
                <div class="col-md-4">
                    <div class="services-2 text-center">
                        <div class="icon">
                            <!-- <span class="flaticon-secure"></span> -->
                            <span v-bind:class="about.body_icon_2"></span>
                        </div>
                        <div class="text">
                            <h3>{{ about.body_title_2 }}</h3>
                            <p>
                                {{ about.body_details_2 }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    components: {},
    props: {
        about: Array
    }
};
</script>
