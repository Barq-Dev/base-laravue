<template >
  <v-menu
    ref="menu"
    v-model="menu2"
    :close-on-content-click="false"
    :nudge-right="40"
    :return-value.sync="form[name]"
    transition="scale-transition"
    offset-y
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        v-model="form[name]"
        :label="label"
        prepend-icon="mdi-clock-time-four-outline"
        readonly
        v-bind="{ ...attrs, ...$attrs }"
        v-on="on"
        @change="changeHandle"
      >
        <template #append-outer>
          <slot name="append-outer"></slot>
        </template>
      </v-text-field>
    </template>
    <v-time-picker
      v-if="menu2"
      v-model="form[name]"
      full-width
      @click:minute="$refs.menu.save(form[name])"
    ></v-time-picker>
  </v-menu>
</template>
<script>
export default {
  props: ["form", "name", "label"],
  data() {
    return {
      time: null,
      menu2: false,
      modal2: false,
    };
  },
  methods: {
    changeHandle(value) {
      this.$emit("input", value);
    },
  },
  // watch: {
  //   time(val) {
  //     if (val) this.form[this.name] = val;
  //   },
  // },
};
</script>