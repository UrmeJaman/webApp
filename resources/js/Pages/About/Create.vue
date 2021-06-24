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
                @change="handleonchange"
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

            <label for="body_title_2">Another_Body_Title:</label><br />
            <input
                type="text"
                id="body_title_2"
                v-model="form.body_title_2"
            /><br />
            <label for="body_icon_2">Anoter_body_icon:</label><br />
            <input
                type="text"
                id="body_icon_2"
                v-model="form.body_icon_2"
            /><br />
            <label for="body_details_2">Anotehr_Body_details:</label><br />
            <input
                type="text"
                id="body-details2"
                v-model="form.body_details_2"
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

                body_title: null,
                body_icon: null,
                body_details: null,
                body_title_2: null,
                body_icon_2: null,
                body_details_2: null,
                image: " ",
                created_at: new Date().toISOString().slice(0, 10)
            }
        };
    },
    methods: {
        submit() {
            let data = new FormData();
            data.append(
                "head_intro",
                this.form.head_intro ? this.form.head_intro : ""
            );
            data.append(
                "head_years",
                this.form.head_years ? this.form.head_years : ""
            );
            data.append(
                "head_main",
                this.form.head_main ? this.form.head_main : ""
            );
            data.append(
                "head_details",
                this.form.head_details ? this.form.head_details : ""
            );

            data.append(
                "body_title",
                this.form.body_title ? this.form.body_title : ""
            );
            data.append(
                "body_icon",
                this.form.body_icon ? this.form.body_icon : ""
            );
            data.append(
                "body_details",
                this.form.body_details ? this.form.body_details : ""
            );
            data.append(
                "body_title_2",
                this.form.body_title_2 ? this.form.body_title_2 : ""
            );
            data.append(
                "body_icon_2",
                this.form.body_icon_2 ? this.form.body_icon_2 : ""
            );
            data.append(
                "body_details_2",
                this.form.body_details_2 ? this.form.body_details_2 : ""
            );
            data.append("image", this.form.image ? this.form.image : "");

            console.log(this.data);
            this.$inertia.post(this.route("about.store"), data);
        },
        handleonchange(e) {
            this.form.image = e.target.files[0];
        }
    }
};
</script>
