<template>
  <v-app>
    <Navbar v-if="$route.name != 'login'" />

    <v-main class="grey lighten-3">
      <v-container grid-list-xs>
        <v-breadcrumbs :items="breadcrumbs" v-if="user.id && breadcrumbs.length">
          <template #item="{ item }">
            <v-breadcrumbs-item exact :to="item.to" :disabled="item.disabled">
              <span class="text-overline" :class="{ 'blue--text': item.to }">{{
                item.text
              }}</span>
            </v-breadcrumbs-item>
          </template>
          <template #divider>
            <v-icon>mdi-chevron-right</v-icon>
          </template>
        </v-breadcrumbs>

        <router-view></router-view>
      </v-container>
    </v-main>

    <bottom-nav v-if="this.$vuetify.breakpoint.mobile && $route.name != 'login'" />

    <Footer v-if="$route.name != 'login'" />
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

import BottomNav from "./layouts/BottomNav";
export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    BottomNav,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", ["user"]),
    breadcrumbs() {
      return this.$route.meta.breadcrumbs || [];
    },
  },
  methods: {
    init() {
      if (this.user.id) {
        window.Echo.private(`App.Models.User.${this.user.id}`).notification(
          (notification) => {
            // this.loadNotifications();
            this.$swal({
              title: "Pemberitahuan",
              text: notification.message,
              icon: "info",
              showCancelButton: false,
              showConfirmButton: false,
              toast: true,
              position: "bottom-end",
              timer: 5000,
              timerProgressBar: true,
            });
          }
        );
        // this.loadNotifications();
      }
    },
  },
};
</script>
<style>
.filepond--fullsize-overlay {
  z-index: 3000 !important;
}
</style>
