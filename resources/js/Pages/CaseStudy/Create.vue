<template>
    <div>
        <form @submit.prevent="submit" enctype="multipart/form-data">
            <label for="head_intro">Head_Intro:</label><br />
            <input
                type="text"
                id="head_intro"
                v-model="form.head_intro"
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

            <label for="body_details">Body_details:</label><br />
            <input
                type="text"
                id="body-details"
                v-model="form.body_details"
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

                image: null,

                body_title: null,

                body_details: null,

                created_at: new Date().toISOString().slice(0, 10)
            }
        };
    },
    methods: {
        submit() {
            console.log(this.form);
            this.$inertia.post(this.route("casestudy.store"), this.form, {
                onStart: () => (this.sending = true),
                onFinish: () => (this.sending = false)
            });
        }
    }
};
</script>
