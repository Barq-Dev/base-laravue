<template>
  <v-img
    v-bind="$attrs"
    class="preview"
    :src="src"
    @click.prevent="dialog = true"
  >
    <v-dialog
      v-model="dialog"
      :overlay="false"
      max-width="500px"
      transition="dialog-transition"
    >
      <v-img :src="src" />
    </v-dialog>
  </v-img>
</template>
<script>
export default {
  props: ["src"],
  data() {
    return {
      dialog: false,
    };
  },
};
</script>
<style scoped>
.preview {
  cursor: pointer;
}
</style>