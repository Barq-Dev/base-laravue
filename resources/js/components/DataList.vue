<template>
  <div>
    <!--  -->
    <v-list three-line>
      <!-- <v-subheader v-text="'Tahanan'"></v-subheader> -->
      <v-list-item>
        <template>
          <v-list-item-content class="pt-0">
            <v-list-item-subtitle>
              <v-text-field
                @keyup="action('search', search)"
                v-model="search"
                class="mt-1"
                outlined
                dense
                hide-details
                label="Pencarian"
                append-icon="mdi-magnify"
              ></v-text-field>
            </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <!-- <v-btn dark color="green darken-3" small fab>
              <v-icon>mdi-dots-horizontal</v-icon>
            </v-btn> -->
            <v-speed-dial
              v-model="fab"
              direction="bottom"
              transition="slide-y-transition"
            >
              <v-btn
                small
                slot="activator"
                color="primary"
                dark
                fab
                v-model="fab"
              >
                <v-icon v-if="fab"> mdi-close </v-icon>
                <v-icon v-else> mdi-dots-horizontal </v-icon>
              </v-btn>
              <v-btn fab dark small color="amber" @click="action('refresh')">
                <v-icon>mdi-cached</v-icon>
              </v-btn>
              <v-btn fab dark small color="green" @click="action('add')">
                <v-icon>mdi-plus</v-icon>
              </v-btn>
              <v-btn fab dark small color="brown" @click="action('download')">
                <v-icon>mdi-download</v-icon>
              </v-btn>
              <v-btn fab dark small color="info" @click="action('filter')">
                <v-icon>mdi-filter</v-icon>
              </v-btn>
            </v-speed-dial>
          </v-list-item-action>
        </template>
      </v-list-item>
      <v-list-item-group v-model="selected" active-class="primary--text">
        <template v-for="(item, index) in items">
          <v-list-item :key="item.title" @dblclick="action('dblclicked', item)">
            <template>
              <v-list-item-avatar>
                <slot name="list-item-avatar">
                  <v-img-preview
                    :src="
                      (itemKey.avatar && item[itemKey.avatar]) || item.avatar
                    "
                  />
                </slot>
              </v-list-item-avatar>
              <v-list-item-content>
                <slot name="list-item-content">
                  <v-list-item-title>
                    <slot name="list-item-title">
                      {{ (itemKey.title && item[itemKey.title]) || item.title }}
                    </slot>
                  </v-list-item-title>

                  <v-list-item-subtitle>
                    <span class="text--primary">
                      <slot name="list-item-headline">
                        {{
                          (itemKey.headline && item[itemKey.headline]) ||
                          item.headline
                        }}
                      </slot>
                    </span>

                    <slot
                      name="list-item-sub_headline"
                      v-if="itemKey.sub_headline"
                    >
                      &mdash;
                      {{
                        (itemKey.sub_headline && item[itemKey.sub_headline]) ||
                        item.sub_headline
                      }}
                    </slot>
                  </v-list-item-subtitle>

                  <v-list-item-subtitle>
                    <slot name="list-item-subtitle">
                      {{
                        (itemKey.subtitle && item[itemKey.subtitle]) ||
                        item.subtitle
                      }}
                    </slot>
                  </v-list-item-subtitle>
                </slot>
              </v-list-item-content>

              <v-list-item-action>
                <slot name="list-item-action" :item="item"></slot>
                <slot name="list-item-action-base">
                  <v-icon color="blue" @click="action('show', item)">
                    mdi-eye
                  </v-icon>
                  <!-- <v-icon
                    color="yellow darken-3"
                    @click="action('edit', item.id)"
                  >
                    mdi-pencil
                  </v-icon> -->
                </slot>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-divider v-if="index < items.length - 1" :key="index"></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
    <div class="text-center py-2 mx-2">
      <v-pagination
        @input="action('pageChange', page)"
        v-model="page"
        :length="options.last_page"
        circle
      ></v-pagination>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items", "itemKey", "options"],
  data() {
    return {
      search: "",
      fab: null,
      page: 1,
      selected: [],
    };
  },
  methods: {
    action(type, data) {
      this.$emit("action", { type: type, data: data });
    },
  },
};
</script>
<style>
</style>