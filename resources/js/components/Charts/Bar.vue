<template>
  <BarChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { BarChart } from "vue-chart-3";

export default defineComponent({
  props: {
    data: {},
    options: {},
    title: {},
    legend: {
      default: true,
    },
    params: {
      default: null,
    },
    url: {
      default: null,
    },
    api: {
      default: null,
    },
    maintainAspectRatio: {
      default: true,
    },
  },
  name: "Home",
  components: { BarChart },
  setup() {
    const testData = {
      labels: ["Paris", "Nîmes"],
      datasets: [
        {
          data: [30, 40],
          backgroundColor: ["#B71C1C", "#1A237E"],
        },
      ],
    };

    return { testData };
  },
  data() {
    return {
      loading: false,
      apiData: {},
      dummy: {
        options: {
          maintainAspectRatio: this.maintainAspectRatio,
          
          title: {
            display: this.title,
            text: this.title,
          },
          legend: {
            display: this.legend,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          plugins: {
            // labels: false,
            labels: {
              render: "value",
              fontColor: "#000",
              position: "outside",
            },
          },
          routeUrl: this.url,
          push: this.push,
          onClick(evt, array) {
            if (array.length != 0) {
              var activePoint = this.getElementAtEvent(evt)[0];
              var data = activePoint._chart.data;
              var datasetIndex = activePoint._datasetIndex;
              var label = data.datasets[datasetIndex].label;
              var value = data.datasets[datasetIndex].data[activePoint._index];

              if (this.options.routeUrl)
                this.options.push(this.options.routeUrl, {
                  title: _.snakeCase(this.options.title.text),
                  label: activePoint._model.label,
                  datasetLabel: label,
                  datasetValue: value,
                });
            }
          },
        },
      },
    };
  },
  computed: {
    chartData() {
      return this.api ? this.apiData : this.data || this.testData;
    },
    chartOptions() {
      return this._.merge(this.dummy.options, this.options);
    },
  },
  watch: {
    params: {
      handler: function (newValue) {
        this.load();
      },
      deep: true,
    },
  },
  methods: {
    push: function (url, query = {}) {
      this.$router.push({ path: url, query: query });
    },
    async load() {
      this.loading = true;
      this.$emit("load", { loading: true });
      let { data } = await this.$http.post("dashboard", {
        type: this.api,
        ...this.params,
      });
      this.apiData = data;
      this.loading = false;
      this.$emit("load", { loading: false });
    },
  },
  mounted() {
    if (this.api) this.load();
  },
});
</script>