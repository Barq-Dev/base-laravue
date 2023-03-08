<template>
  <v-footer dark padless app inset absolute>
    <v-card
      class="flex"
      :class="{ 'darken-4': isDark }"
      flat
      tile
      :color="$appInfo.theme.primary"
      :elavation="10"
    >
      <v-card-text class="py-2 white--text text-center">
        © {{ new Date().getFullYear() }} -
        <strong :title="$appInfo.name">
          {{ $appInfo.instance }} - {{ $appInfo.shortname }}
        </strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>
<script>
export default {
  computed: {
    isDark() {
      return this.$vuetify.theme.dark;
    },
  },
};
</script>
