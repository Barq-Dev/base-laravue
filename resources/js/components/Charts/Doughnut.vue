<template>
  <DoughnutChart :chartData="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { DoughnutChart } from "vue-chart-3";

export default defineComponent({
  props: ["data", "options", "title", "url"],
  name: "Home",
  components: { DoughnutChart },
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
      dummy: {
        options: {
          title: {
            display: this.title,
            text: this.title,
          },
          plugins: {
            labels: [
              {
                render: "percentage",
                // render: (args) => {
                //     return `${args.value} (${args.percentage}%)`;
                //     },
                fontColor: "#000",
                position: "outside",
              },
              {
                render: "value",
                fontColor: "#000",
              },
            ],
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
      return this.data || this.testData;
    },
    chartOptions() {
      return this._.merge(this.dummy.options, this.options);
    },
  },

  methods: {
    push: function (url, query = {}) {
      this.$router.push({ path: url, query: query });
    },
  },
});
</script>