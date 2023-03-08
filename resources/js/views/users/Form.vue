<template>
  <div>
    <v-row>
      <v-col cols="12" sm="12" md="6">
        <v-text-field dense hide-details v-model="form.name" label="Nama"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-text-field dense hide-details v-model="form.username" label="Username"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-text-field dense hide-details v-model="form.email" label="Email"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <v-text-field dense hide-details v-model="form.password" type="password" label="Password"></v-text-field>
      </v-col>
      <v-col cols="12" sm="12" md="6" v-if="userRole('admin')">
        <v-autocomplete chips clearable deletable-chips dense multiple small-chips solo v-model="role"
          :items="items"></v-autocomplete>
      </v-col>
      <v-col cols="12" sm="12" md="6">
        <VFileInput :form="form" label="File Foto" dense />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import VFileInput from "@/components/FormInput/VFileInput";
import BarqunVSelect from "@/components/FormInput/BarqunVSelect";
import { mapState, mapMutations } from "vuex";
export default {
  props: ["form", "dialog"],
  components: {
    VFileInput,
    BarqunVSelect,
  },
  data() {
    return {
      // items: [],
      sekolahs: [],
      items: ["foo", "bar", "fizz", "buzz"],
      meta: {
        resor: null
      },
      role: [],
    };
  },
  computed: {
    ...mapState("base", ["errors"]),
    ...mapState("auth", ["user"]),
  },
  methods: {
    ...mapMutations("base", ["DEL_ERRORS"]),
    load() {
      if (this.form.id) {
        this.role = this.form.role_list;
        this.meta.resor = this.form.meta && this.form.meta.resor
      }
    }
  },
  mounted() {
    this.load()

    if (this.form.id) this.role = this.form.role_list;

    this.$http("role", {
      params: {
        all: true,
        pluck: ["name"],
      },
    }).then(({ data }) => (this.items = data));

    // this.$http("sekolah", {
    //   params: {
    //     all: true,
    //   },
    // }).then(({ data }) => (this.sekolahs = data));
  },
  watch: {
    dialog(val) {
      this.load()
    },
    role(val) {
      this.form.role = val;
    },
    meta: {
      deep: true,
      handler: function (v) {
        this.form.meta = v
      }
    }
  },
};
</script>
<style lang="">
</style>