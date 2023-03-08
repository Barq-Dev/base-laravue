<template>
  <nav>
    <v-app-bar :color="$appInfo.theme.primary" :class="{ 'darken-4': isDark }" dark app>
      <v-app-bar-nav-icon v-if="isAuth" @click.stop="drawerState"> </v-app-bar-nav-icon>

      <v-toolbar-title class="text-uppercase">
        <router-link to="/" class="text-decoration-none white--text text--darken-2">
          <h4 v-if="$vuetify.breakpoint.mobile" class="font-light" :title="$appInfo.name">
            {{ $appInfo.shortname }}
          </h4>
          <h4 v-else class="font-light">
            {{ $appInfo.name }}
          </h4>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <div v-if="isAuth">
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" small @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on" color="info" small @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div> -->

      <!-- Help -->
      <!-- <v-btn v-if="$store.state.auth.isAuth" small icon to="/help">
        <v-badge overlap :color="$appInfo.theme.primary" dot value="true">
          <v-icon>mdi-help</v-icon>
        </v-badge>
      </v-btn> -->

      <v-menu
        v-if="$store.state.auth.isAuth"
        transition="slide-y-transition"
        bottom
        :offset-y="true"
        max-height="360"
        min-width="360"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-badge
              overlap
              color="red darken-3"
              dot
              :value="notifications.unRead.length"
            >
              <v-icon>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-list>
          <v-row no-gutters>
            <v-subheader>
              <span class="body-2">
                <router-link
                  to="/notifications"
                  class="font-weight-medium grey--text text-decoration-none"
                  >Notifikasi ({{ notifications.unRead.length }})</router-link
                >
              </span>
            </v-subheader>
            <v-spacer></v-spacer>
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-icon class="mr-3" v-bind="attrs" v-on="on" @click="markAsRead">
                  mark_email_read
                </v-icon>
              </template>
              <span>Mark all read</span>
            </v-tooltip>
          </v-row>
          <v-divider />
          <template v-if="notifications.all.length">
            <v-list-item
              v-for="notif in notifications.all"
              :key="notif.id"
              link
              :to="notif.data.link"
              class="align-start"
              @click="markAsRead(notif.id)"
              two-line
            >
              <v-list-item-content>
                <v-list-item-title :class="notif.read_at ? `grey--text` : ``">
                  {{ notif.data.title }}
                </v-list-item-title>
                <v-list-item-subtitle :class="notif.read_at ? `grey--text` : ``">
                  {{ notif.data.message }}
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  :class="notif.read_at ? `grey--text` : `info--text`"
                >
                  {{ $moment(notif.created_at).fromNow() }}
                </v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-icon>
                <v-icon :color="notif.read_at ? `grey` : `info`">{{
                  notif.read_at ? `drafts` : `email`
                }}</v-icon>
              </v-list-item-icon>
            </v-list-item>
          </template>
          <v-list-item v-else>
            <span class="body-2">Tidak Ada Notifikasi</span>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-menu offset-y v-if="$store.state.auth.isAuth">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            <!-- <span>{{ $store.state.auth.user.name }}</span> -->
            <v-icon>mdi-account</v-icon>
            <v-icon right>expand_more</v-icon>
          </v-btn>
        </template>
        <v-list flat>
          <v-subheader class="font-weight-bold">
            <span>{{ $store.state.auth.user.name }}</span>
          </v-subheader>
          <v-divider></v-divider>
          <v-list-item router to="/profile">
            <v-list-item-title class="caption"> Profile </v-list-item-title>
            <v-list-item-icon
              ><v-icon color="grey darken-1">mdi-account</v-icon></v-list-item-icon
            >
          </v-list-item>
          <!-- <v-list-item router to="/">
            <v-list-item-title> Settings </v-list-item-title>
            <v-list-item-icon
              ><v-icon color="grey darken-1">settings</v-icon></v-list-item-icon
            >
          </v-list-item> -->
          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-title class="caption"> Exit </v-list-item-title>
            <v-list-item-icon><v-icon>exit_to_app</v-icon></v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text to="/login" v-else>
        <span>Login</span>
        <v-icon right>login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-card max-width="375" class="mx-auto rounded-0">
      <v-navigation-drawer v-model="drawer" src="/images/sidebar/sid-1.jpg" app>
        <v-img
          gradient="to top, rgba(0, 0, 0, 0.6) 0%, transparent 100px"
          src="/images/sidebar/cover-1.jpg"
          max-height="150"
          dark
          id="top"
        >
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img-preview :src="user.avatar_link"></v-img-preview>
              </v-list-item-avatar>
              <v-spacer></v-spacer>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6 white--text">
                  {{ (user.sekolah && user.sekolah.nama) || user.name }}
                </v-list-item-title>
                <v-list-item-subtitle>
                  {{ user.email }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-img>

        <v-divider></v-divider>

        <v-row class="mr-2 ml-2 mt-2" v-if="$appInfo.sideBarFilter">
          <v-text-field
            v-model="search"
            append-icon="search"
            label="Cari Menu"
            outlined
            clearable
            dense
            rounded
            :color="$appInfo.theme.primary"
          ></v-text-field>
        </v-row>
        <div v-if="!filteredLinks.length" class="text-center grey--text">
          <i>Menu tidak ditemukan...</i>
        </div>
        <!-- Menu Link -->
        <v-list shaped dense nav :key="componentKey">
          <template v-for="(link, index) in filteredLinks">
            <!-- Single menu -->
            <v-list-item
              v-if="
                link.route &&
                !link.childs &&
                ((link.can == undefined && link.role == undefined) ||
                  userCan(link.can) ||
                  userRole(link.role))
              "
              :key="link.id"
              router
              exact
              :to="link.route"
              active-class="border white--text blue"
              dense
            >
              <v-list-item-action>
                <v-icon :color="link.route == $route.path ? '' : $appInfo.theme.primary">
                  {{ link.icon }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title> {{ link.text }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-action v-if="link.actions">
                <v-chip
                  v-if="link.actions.chip"
                  :color="$appInfo.theme.primary"
                  small
                  text-color="white"
                >
                  {{ link.actions.chip }}
                </v-chip>
              </v-list-item-action>
            </v-list-item>

            <v-divider v-if="link.divider" :key="link.id"></v-divider>
            <v-subheader
              v-if="
                link.subheader &&
                (link.group_permissions.some((i) => userCan(i)) ||
                  !link.group_permissions.length)
              "
              :key="link.id"
              class="font-weight-bold"
            >
              {{ link.subheader }}
            </v-subheader>
            <!-- Dropdown menu -->
            <v-list-group
              v-if="
                link.childs &&
                link.childs.some(
                  (i) =>
                    (i.can == undefined && i.role == undefined) ||
                    userCan(i.can) ||
                    userRole(i.role)
                )
              "
              v-model="dropDown[index]"
              :key="link.text"
              :value="link.childs.find((i) => i.route == $route.path)"
              :prepend-icon="link.icon"
              :color="$appInfo.theme.primary"
              no-action
              active-class="border white--text blue"
            >
              <v-icon
                slot="prependIcon"
                :color="dropDown[index] ? 'white' : $appInfo.theme.primary"
              >
                {{ link.icon }}
              </v-icon>
              <template v-slot:activator>
                <v-list-item-title>{{ link.text }}</v-list-item-title>
              </template>
              <template v-for="child in link.childs">
                <v-list-item
                  v-if="
                    (child.can == undefined && child.role == undefined) ||
                    userCan(child.can) ||
                    userRole(child.role)
                  "
                  :key="child.text"
                  router
                  exact
                  dense
                  class="submenu"
                  :to="child.route"
                  active-class="border white--text blue"
                >
                  <v-list-item-action>
                    <v-icon>{{ child.icon }}</v-icon>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-list-item-title :title="child.text">
                      {{ child.text }}
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </template>
            </v-list-group>
          </template>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import pdf from "@/components/PdfViewer";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      search: "",
      drawer: false,
      componentKey: 0,
      dropDown: [],
    };
  },
  created: function () {
    window.addEventListener("keydown", (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key === "b") {
        event.preventDefault();
        this.drawer = !this.drawer;
      }
    });
  },
  mounted() {
    if (localStorage.getItem("darkMode")) this.$vuetify.theme.dark = true;
    if (localStorage.getItem("drawerState") == "true" || this.isAuth) this.drawer = true;
  },
  computed: {
    ...mapGetters("theme", ["links"]),
    ...mapState("auth", ["user", "isAuth", "notifications"]),
    isDark() {
      return this.$vuetify.theme.dark;
    },
    filteredLinks() {
      let menu = this.search
        ? this.links.filter((i) => {
            return (
              (i.text && i.text.toLowerCase().includes(this.search.toLowerCase())) ||
              (i.childs &&
                i.childs.length &&
                i.childs.some((child) =>
                  child.text.toLowerCase().includes(this.search.toLowerCase())
                ))
            );
          })
        : this.links;
      return menu;
    },
  },
  methods: {
    ...mapActions("auth", ["logout", "markAsRead"]),
    drawerState() {
      this.drawer = !this.drawer;
    },
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      if (this.$vuetify.theme.dark)
        localStorage.setItem("darkMode", this.$vuetify.theme.dark);
      else localStorage.removeItem("darkMode");
    },
  },
};
</script>

<style scoped>
.border {
  border-left: 4px solid#29338c;
}
</style>
<style lang="scss">
.v-text-field.v-text-field--enclosed .v-text-field__details {
  padding-top: 0px;
  margin-bottom: 0px !important;
}
</style>
<style lang="css">
.v-navigation-drawer__content::-webkit-scrollbar {
  display: none;
}
.submenu {
  min-height: 40px !important;
  height: 40px !important;
}
</style>
