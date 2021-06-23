<template>
    <div>
        <form @submit.prevent="submit" enctype="multipart/form-data">
            <label for="head_intro">Head_Intro:</label><br />
            <input
                type="text"
                id="head_intro"
                v-model="form.head_intro"
            /><br />
            <label for="head_years">Head_Years:</label><br />
            <input
                type="head_years"
                id="title"
                v-model="form.head_years"
            /><br />
            <label for="head_main">Head_Main:</label><br />
            <input type="text" id="head_main" v-model="form.head_main" /><br />
            <label for="head_details">Head_Details:</label><br />
            <input
                type="text"
                id="head_details"
                v-model="form.head_details"
            /><br />

            <label for="image">Image:</label><br />
            <input
                v-on:change="image"
                type="file"
                id="image"
                name="image"
            /><br /><br />
            <label for="body_title">Body_Title:</label><br />
            <input
                type="text"
                id="body_title"
                v-model="form.body_title"
            /><br />
            <label for="body_icon">body_icon:</label><br />
            <input type="text" id="body_icon" v-model="form.body_icon" /><br />
            <label for="body_details">Body_details:</label><br />
            <input
                type="text"
                id="body-details"
                v-model="form.body_details"
            /><br />

            <label for="body_title2">Another_Body_Title:</label><br />
            <input
                type="text"
                id="body_title2"
                v-model="form.body_title2"
            /><br />
            <label for="body_icon2">Anoter_body_icon:</label><br />
            <input
                type="text"
                id="body_icon2"
                v-model="form.body_icon2"
            /><br />
            <label for="body_details2">Anotehr_Body_details:</label><br />
            <input
                type="text"
                id="body-details2"
                v-model="form.body_details2"
            /><br />
            <button :loading="sending" class="btn-indigo" type="submit">
                add
            </button>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            sending: false,
            form: {
                head_intro: null,
                head_years: null,
                head_main: null,
                head_details: null,
                image: null,

                body_title: null,
                body_icon: null,
                body_details: null,
                body_title_2: null,
                body_icon_2: null,
                body_details_2: null,

                created_at: new Date().toISOString().slice(0, 10)
            }
        };
    },
    methods: {
        submit() {
            console.log(this.form);
            this.$inertia.post(this.route("about.store"), this.form, {
                onStart: () => (this.sending = true),
                onFinish: () => (this.sending = false)
            });
        }
    }
};
</script>
