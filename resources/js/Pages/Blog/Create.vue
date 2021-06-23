<template>
    <div>
        <form @submit.prevent="submit">
            <label for="title">Blog Title:</label><br />
            <input type="text" id="title" v-model="form.title" /><br />
            <label for="lname">Blog DEtails:</label><br />
            <input
                type="text"
                id="lname"
                v-model="form.description"
                value="Doe"
            /><br /><br />
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
                title: null,
                description: null,
                created_at: new Date().toISOString().slice(0, 10)
            }
        };
    },
    methods: {
        submit() {
            console.log(this.form);
            this.$inertia.post(this.route("blog.store"), this.form, {
                onStart: () => (this.sending = true),
                onFinish: () => (this.sending = false)
            });
        }
    }
};
</script>
