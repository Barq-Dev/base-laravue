<template>
  <div>
    <v-card :loading="loading" class="rounded-lg">
      <!-- <v-card-title primary-title class="sticky blue white--text">
        Detail Buku
        <v-spacer></v-spacer>
      </v-card-title> -->
      <v-divider></v-divider>
      <div class="pa-5">
        <v-row>
          <v-col cols="12" sm="12" md="4">
            <v-img width="400" :src="item.avatar_link"></v-img>
          </v-col>
          <v-col cols="12" sm="12" md="8">
            <v-card-title primary-title class="blue white--text rounded-tr-lg rounded-tl-lg">
              Data Pengguna
            </v-card-title>
            <v-simple-table dense v-if="!_.isEmpty(item)">
              <template v-slot:default>
                <tbody>
                  <tr v-for="(i, key) in filteredItem" :key="key">
                    <td width="10">{{ _.startCase(i) }}</td>
                    <td width="10">:</td>
                    <td>{{ item[i] }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </div>
    </v-card>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: ["id"],
  data() {
    return {
      search: "",
      headers: [],
    };
  },
  mounted() {
    this.load();
  },
  computed: {
    ...mapState("base", ["loading", "item"]),
    filteredItem() {
      //   this.item["tanggal_lahir"] = this.$moment(this.item.tanggal_lahir).format(
      //     "D-M-Y"
      //   );

      return this._.difference(Object.keys(this.item), [
        "id",
        "roles",
        "permissions",
        "all_permissions",
        "userable_id",
        "userable_type",
        "avatar",
        "avatar_link",
        "email_verified_at",
        "created_at",
        "updated_at",
      ]);
    },
  },
  watch: {
    id() {
      this.load();
    },
  },
  methods: {
    ...mapActions("base", ["getData"]),
    load() {
      this.getData({
        customUrl: "users",
        id: this.id || this.$route.params.id,
        params: {
          with: [],
        },
      });
    },
  },
};
</script>