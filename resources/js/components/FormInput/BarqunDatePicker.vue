<template >
  <v-menu
    ref="menu1"
    v-model="menu1"
    :close-on-content-click="false"
    transition="scale-transition"
    offset-y
    max-width="290px"
    max-height="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <v-text-field
        prepend-icon="mdi-calendar"
        v-model="dateFormatted"
        :label="label"
        :rules="[(value) => !required || !!value || 'Required.']"
        :error="false"
        hint="DD/MM/YYYY format"
        persistent-hint
        v-bind="attrs"
        readonly
        clearable
        v-on="on"
        >{{ label }}
        <template #label v-if="required">
          {{ label }} <span class="red--text"><strong> *</strong></span>
        </template>
      </v-text-field>
    </template>
    <v-date-picker
      v-model="date"
      no-title
      :active-picker="this.activePicker"
      :max="max"
      @input="menu1 = false"
      @change="() => this.$emit('input')"
    ></v-date-picker>
  </v-menu>
</template>
<script>
export default {
  props: {
    form: {},
    label: {},
    field: {},
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
  data: (vm) => ({
    activePicker: null,
    date: null,
    dateFormatted: null,
    // date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //   .toISOString()
    //   .substr(0, 10),
    // dateFormatted: vm.formatDate(
    //   new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    //     .toISOString()
    //     .substr(0, 10)
    // ),
    menu1: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    max() {
      return this.maxDate
        ? new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
            .toISOString()
            .substr(0, 10)
        : null;
    },
  },

  watch: {
    // form: {
    //   handler: function (newValue) {

    //   },
    //   deep: true,
    // },
    date() {
      this.dateFormatted = this.formatDate(this.date);
      this.form[this.field] = this.date;
    },
    menu1(val) {
      val && setTimeout(() => (this.activePicker = this.picker));
    },
  },

  mounted() {
    this.date = this.form[this.field];
    this.$watch(`form.${this.field}`, function (newValue, oldValue) {
      // console.log(1101010);
      this.date = this.form[this.field];
    });
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
  },
};
</script>
<style lang="">
</style>
