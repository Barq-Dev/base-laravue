<template>
        <div>
            <ckeditor
                v-bind="$attrs"
                v-model="form[name]"
                :label="label"
                :autofocus="autofocus"
                :rules="[value => !required || !!value || 'Required.']"
                :error="false"
             ></ckeditor>
        </div>
</template>

<script>
    export default {
        props: {
        label: String,
        name: String,
        required: Boolean,
        autofocus: Boolean,
        form: {
            type: [Array, Object],
        },
    },
    }
</script>
