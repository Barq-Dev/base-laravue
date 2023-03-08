<template>
  <v-card elevation="2">
    <v-tabs
      v-model="tab"
      background-color="red lighten-2"
      dark
      slider-color="yellow"
    >
      <v-tab>
        <v-icon left> mdi-account </v-icon>
        Profile
      </v-tab>
      <v-tab>
        <v-icon left> mdi-account-edit </v-icon>
        Edit
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Show :id="user.id" />
      </v-tab-item>
      <v-tab-item v-if="tab">
        <div class="px-3 pt-5">
          <Form :form="form" />
          <v-row>
            <v-col cols="12" class="text-right mb-3">
              <v-btn color="success" @click="save">
                <v-icon>save</v-icon> Save</v-btn
              >
            </v-col>
          </v-row>
        </div>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
</template>
<script>
import BarqunVSelect from "@/components/FormInput/BarqunVSelect";
import Show from "./Show";
import Form from "./Form";

import { mapState } from "vuex";

export default {
  components: {
    BarqunVSelect,
    Show,
    Form,
  },
  data() {
    return {
      form: {},
      tab: null,
    };
  },
  computed: {
    ...mapState("auth", ["user"]),
  },
  methods: {
    save() {
      let formData = new FormData();
      for (const key in this.form) {
        formData.append(key, this.form[key] == null ? "" : this.form[key]);
      }
      this.$http.post("users", formData).then(() => {
        this.$swal("Success", "Success", "success");
        this.$store.dispatch("auth/auth");
      });
    },
  },
  mounted() {
    this.form = this.user;
  },
};
</script>