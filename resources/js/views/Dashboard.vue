<template>
  <div>
    <v-container>
      <v-layout row wrap>
        <v-flex sm12 xs12 md12 lg12>
          <v-sheet class="rounded-lg mx-auto" elevation="12" width="100%">
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
              <v-card class="ma-3 rounded-lg" elevation="10">
                <v-list-item>
                  <v-sheet
                    align="center"
                    :color="i.color"
                    width="50"
                    height="50"
                    elevation="10"
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
                    <div><v-divider></v-divider></div>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-flex>
          </router-link>
        </v-flex>

        <!-- <v-flex sm12 xs12 md12 lg12>
          <v-divider></v-divider>
        </v-flex> -->

        <!-- <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.status_project" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">fact_check</v-icon>
            </div>
            <pie-chart
              title="Status Project"
              url="model-project"
              :data="status_project"
              :options="{ rotation: 20.5 }"
            ></pie-chart>
          </v-card>
        </v-flex> -->

        <!-- <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">fact_check</v-icon>
            </div>
            <Pie title="Status Project" :data="status_project" />
          </v-card>
        </v-flex>

        <v-flex sm6 xs12 md6 lg6>
          <v-card class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">spa</v-icon>
            </div>
            <Pie
              type="doughnut"
              title="Luas Intervensi Per Wilayah"
              url="model-project"
              :data="intervensi"
            />
          </v-card>
        </v-flex>

        <v-flex sm12 xs12 md12 lg12>
          <v-card class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">spa</v-icon>
            </div>
            <Bar :data="project_progress" />
          </v-card>
        </v-flex> -->

        <!-- <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.intervensi" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">spa</v-icon>
            </div>
            <pie-chart
              title="Luas Intervensi Berdasarkan Wilayah"
              url="model-project"
              :data="intervensi"
              :options="{ rotation: 20.5 }"
            ></pie-chart>
          </v-card>
        </v-flex> -->

        <!-- <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.reduksi" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">bolt</v-icon>
            </div>
            <Pie
              type="doughnut"
              title="Reduksi Emisi Per Wilayah"
              url="model-project"
              :data="reduksi"
            />
          </v-card>
        </v-flex>

        <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.dana" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">payments</v-icon>
            </div>
            <Pie
              type="doughnut"
              title="Pendanaan Per Wilayah"
              url="model-project"
              :data="dana"
            />
          </v-card>
        </v-flex> -->

        <!-- <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.reduksi" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">bolt</v-icon>
            </div>
            <pie-chart
              title="Reduksi Emisi Berdasarkan Wilayah"
              url="model-project"
              :data="reduksi"
              :options="{ rotation: 20.5 }"
            ></pie-chart>
          </v-card>
        </v-flex>
        

        <v-flex sm6 xs12 md6 lg6>
          <v-card :loading="loading.dana" class="ma-3 pb-3">
            <div align="center">
              <v-icon class="mt-2" dark large color="green">payments</v-icon>
            </div>
            <pie-chart
              title="Pendanaan Berdasarkan Wilayah"
              url="model-project"
              :data="dana"
              :options="{ rotation: 20.5 }"
            ></pie-chart>
          </v-card>
        </v-flex>

        <v-flex sm12 xs12 md12 lg12>
          <v-card :loading="loading.project_progress" class="ma-3 pb-3">
            <v-card-title primary-title>
              Project Progress
              <v-spacer></v-spacer>
              <v-autocomplete
                v-model="filter.sd.sekolah_id"
                :items="items.sekolah.filter((i) => i.jenjang.includes('SD'))"
                item-value="id"
                item-text="nama"
                label="Filter Project"
                prepend-icon="filter_alt"
                dense
                small-chips
                clearable
                @input="filterData('project_progress')"
              >
              </v-autocomplete>
            </v-card-title>
            <bar-chart
              :data="project_progress.data"
              :options="project_progress.options"
              :maintainAspectRatio="false"
              url="model-progress"
            ></bar-chart>
          </v-card>
        </v-flex>

        <v-flex sm12 xs12 md12 lg12>
          <v-card :loading="loading.project_wilayah" class="ma-3 pb-3">
            <v-card-title primary-title>
              Project Berdasarkan Wilayah
              <v-spacer></v-spacer>
              <v-autocomplete
                v-model="filter.sd.sekolah_id"
                :items="items.sekolah.filter((i) => i.jenjang.includes('SD'))"
                item-value="id"
                item-text="nama"
                label="Filter"
                prepend-icon="filter_alt"
                dense
                small-chips
                clearable
                @input="filterData('project_wilayah')"
              >
              </v-autocomplete>
            </v-card-title>
            <bar-chart
              :data="project_wilayah.data"
              :options="project_wilayah.options"
              :maintainAspectRatio="false"
              url="model-project?view=wilayah"
            ></bar-chart>
          </v-card>
        </v-flex> -->
      </v-layout>
    </v-container>
  </div>
</template>
<script>
import Carousel from "@/components/Carousel";
import Pie from "@/components/ECharts/Pie";
import Bar from "@/components/ECharts/Bar";
import PieChart from "@/components/Charts/Pie";
import BarChart from "@/components/Charts/Bar";
import LineChart from "@/components/Charts/Line";
import DoughnutChart from "@/components/Charts/Doughnut";
import { mapState } from "vuex";
export default {
  components: {
    Carousel,
    Pie,
    Bar,
    PieChart,
    BarChart,
    LineChart,
    DoughnutChart,
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
