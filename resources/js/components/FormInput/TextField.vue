<template>
  <v-text-field
    v-bind="$attrs"
    v-model="form[name]"
    :label="label"
    :autofocus="autofocus"
    :rules="[(value) => !required || !!value || 'Required.']"
    :error="false"
  >
    <template #label v-if="required">
      {{ label }} <span class="red--text"><strong> *</strong></span>
    </template>

    <slot slot="append" name="append" />
    <slot slot="append-outer" name="append-outer" />
  </v-text-field>
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
};
</script>
<style></style>
