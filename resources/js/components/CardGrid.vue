<template>
  <div>
    <v-row class="mx-2">
      <v-col cols="12" sm="12" md="12">
        <v-text-field
          class="mr-2"
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        >
        </v-text-field>
      </v-col>
    </v-row>

    <v-row v-if="filteredData.length" class="ma-2">
      <v-col
        cols="12"
        sm="12"
        md="3"
        v-for="(item, index) in filteredData"
        :key="index"
      >
        <v-card class="" :loading="loading">
          <template slot="progress">
            <v-progress-linear
              color="deep-purple"
              height="10"
              indeterminate
            ></v-progress-linear>
          </template>

          <v-img
            class="clickable"
            @click="$emit('click', item)"
            height="250"
            :src="item.image_link"
          ></v-img>

          <v-card-title :class="{ subheading: $vuetify.breakpoint.xs }">{{
            item.title
          }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <div class="text-subtitle-1">
                {{ item.author }} • {{ item.tahun }} • {{ item.penerbit }}
              </div>
              <!-- <div class="grey--text ms-4">{{item.tahun}}</div> -->
            </v-row>

            <div class="my-4 text-subtitle-1">
              <template v-if="item.tags && item.tags.length">
                <span class="grey--text" v-for="(i, k) in item.tags" :key="k"
                  >#{{ i }},
                </span>
              </template>
              <span class="grey--text" v-else> #no-tags</span>
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-actions>
            <v-btn
              :disabled="!item.stock"
              depressed
              small
              class="white--text"
              color="green"
              @click="reserve(item)"
            >
              <v-icon>shopping_bag</v-icon>
              Pinjam
            </v-btn>
            <v-spacer></v-spacer>
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-chip
                  v-bind="attrs"
                  v-on="on"
                  :color="item.stock ? 'info' : 'warning'"
                  small
                >
                  {{ item.stock || 0 }}
                  <v-icon small right>book</v-icon>
                </v-chip>
              </template>
              <span>{{
                item.stock ? `Tersedia ${item.stock} buku` : "Buku Kosong"
              }}</span>
            </v-tooltip>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <div v-else class="text-center mt-2">
      <img width="500" src="/images/empty.png" />
      <h3 class="mb-3 grey--text">Tidak ada data</h3>
    </div>

    <div class="text-center">
      <v-container>
        <v-row justify="center">
          <v-col cols="8">
            <v-container class="max-width">
              <v-pagination
                v-model="$store.state.base.options.current_page"
                class="my-4"
                :length="$store.state.base.options.last_page"
              ></v-pagination>
            </v-container>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data() {
    return {
      search: "",
      loading: false,
      selection: [],
    };
  },
  methods: {
    reserve(item) {
      this.$router.push({
        path: "peminjaman-buku",
        query: { buku_id: item.id },
      });
    },
  },

  computed: {
    filteredData() {
      return this.search
        ? this.items.filter((i) => i.title.toLowerCase().includes(this.search))
        : this.items;
    },
  },
};
</script>
<style>
.clickable:hover {
  cursor: pointer;
}
</style>