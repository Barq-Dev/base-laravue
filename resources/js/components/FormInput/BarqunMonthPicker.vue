<template>
  <div>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      max-width="290px"
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="date"
          :label="label"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="date"
        type="month"
        no-title
        scrollable
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="menu = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.menu.save(date)"> OK </v-btn>
      </v-date-picker>
    </v-menu>
  </div>
</template>
<script>
export default {
  props: {
    form: {},
    label: {},
    name: {},
    required: Boolean,
    maxDate: {
      type: [Boolean, String],
      default: false,
      // default: true, tgl stop di hari sekarang
    },
    picker: {
      default: null,
    },
    // max:{
    //   default: false
    // }
  },
  data: () => ({
    date: new Date().toISOString().substr(0, 7),
    menu: false,
    modal: false,
  }),
  watch: {
    date() {
      this.form[this.name] = this.date;
    },
  },

  mounted() {
    this.date = this.form[this.name];
    this.$watch(`form.${this.name}`, function (newValue, oldValue) {
      this.date = this.form[this.name];
    });
  },
};
</script>