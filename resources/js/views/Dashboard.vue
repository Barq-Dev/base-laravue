<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 xs12 md12 lg12>
          <v-sheet class="rounded-lg mx-auto" elevation="5" width="100%">
            <Carousel :slides="carousel_slides" />
          </v-sheet>
        </v-flex>

        <v-flex sm12 xs12 md12 lg12 class="py-5">
          <v-divider></v-divider>
        </v-flex>

        <!-- Counter -->
        <v-flex sm12 xs12 md3 lg3 v-for="i in counters" :key="i.id">
          <router-link :to="i.link" style="text-decoration: none; color: inherit">
            <v-flex sm12 xs12 md12 lg12>
              <v-card class="ma-3 rounded-lg" elevation="5">
                <v-list-item>
                  <v-sheet
                    align="center"
                    :color="i.color"
                    width="50"
                    height="50"
                    elevation="5"
                    class="rounded-lg"
                  >
                    <v-list-item-avatar tile>
                      <v-icon class="ml-2" dark large>{{ i.icon }}</v-icon>
                    </v-list-item-avatar>
                  </v-sheet>

                  <v-list-item-content>
                    <div class="text-right font-weight-bold caption">
                      {{ i.name.toUpperCase() }}
                    </div>
                    <v-list-item-title class="headline mb-1 text-right">
                      <number
                        ref="number2"
                        :from="0"
                        :to="i.value"
                        :duration="3"
                        :format="theFormat"
                        easing="Power1.easeOut"
                      />
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-flex>
          </router-link>
        </v-flex>

        <v-flex sm12 xs12 md12 lg12>
          <v-card
            :loading="loading.stat_revenue"
            class="ma-3 pa-3 rounded-lg"
            elevation="5"
          >
            <echart title="Revenue" type="bar" :params="params" :url="`tagihan`"></echart>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel";
import Echart from "@/components/ECharts/Example";
import { mapState } from "vuex";
export default {
  components: {
    Carousel,
    Echart,
  },
  data() {
    return {
      counters: [
        {
          name: "Users",
          icon: "mdi-account",
          color: "blue",
          link: "users",
          value: 0,
        },
      ],
      items: {
        sekolah: [],
      },
      params: {},
      filter: {
        sd: {
          sekolah_id: null,
        },
        smp: {
          sekolah_id: null,
        },
        sertifikasi: {
          jenjang: null,
          status: null,
        },
      },
      loading: {
        status_project: false,
        intervensi: false,
        reduksi: false,
        dana: false,
        project_progress: false,
        project_wilayah: false,
      },

      status_project: {
        // labels: ["Selesai", "Berjalan"],
        // datasets: [
        //   {
        //     data: [50, 30],
        //     backgroundColor: ["#4CAF50", "#FFC107"],
        //   },
        // ],
      },
      intervensi: {},
      reduksi: {},
      dana: {},
      project_progress: {},
      project_wilayah: {
        data: {},
        options: {
          legend: {
            display: false,
          },
        },
      },
      carousel_slides: ["/images/carousel/img-1.jpg", "/images/carousel/img-2.jpg"],
    };
  },
  methods: {
    async loadDataGrafik(type) {
      this.loading[type] = true;
      let { data } = await this.$http.post("dashboard", {
        type: type,
        ...this.params,
        user_id: this.user.id,
        role: this.user.role,
        resor: this.user.meta && this.user.meta.resor,
      });
      this[type] = data;

      this.loading[type] = false;
    },
    filterData(url) {
      this.params = this.filter;
      this.loadDataGrafik(url);
      this.params = {};
    },
    theFormat(number) {
      return new Intl.NumberFormat("en-US").format(number);
      // return number;
    },
  },
  mounted() {
    // this.$http("sekolah", { params: { all: true, filter_status:'Negeri' } }).then(
    //   ({ data }) => (this.items.sekolah = data)
    // );

    this.loadDataGrafik("counters");

    // this.loadDataGrafik("status_project");
    // this.loadDataGrafik("intervensi");
    // this.loadDataGrafik("reduksi");
    // this.loadDataGrafik("dana");
    // this.loadDataGrafik("project_progress");

    // this.loadDataGrafik("project_wilayah");
    // setTimeout(() => {
    // }, 1500);
  },

  watch: {
    user() {
      this.loadDataGrafik("counters");
    },
  },

  computed: {
    ...mapState("auth", ["user"]),
  },
};
</script>
<style lang=""></style>
