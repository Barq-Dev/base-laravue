<template>
  <v-bottom-navigation
    v-model="value"
    shift
    fixed
    grow
    app
    :background-color="`${$appInfo.theme.primary}`"
  >
    <v-btn to="/" icon active-class="bottom-nav-btn-active">
      <span>Dashboard</span>

      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>

    <v-btn to="/article" icon active-class="bottom-nav-btn-active">
      <span>Articles</span>

      <v-icon>mdi-post</v-icon>
    </v-btn>

    <v-btn to="/comments" icon active-class="bottom-nav-btn-active">
      <span>Comments</span>

      <v-icon>mdi-comment-multiple</v-icon>
    </v-btn>

    <v-btn to="/media" icon active-class="bottom-nav-btn-active">
      <span>Media</span>

      <v-icon>mdi-image-multiple</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>
<script>
export default {
  data: () => ({ value: 0 }),
};
</script>

<style>
.bottom-nav-btn-active {
  color: white !important;
}
</style>
