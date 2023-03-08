<template>
  <v-chart class="chart" :option="chartOption" @dblclick="testing" />
</template>

<script>
export default {
  name: "Bar",
  props: ["data", "option", "title", "type"],

  provide: {
    // [THEME_KEY]: "dark"
  },
  data() {
    return {
      dummy: {
        option: {
          legend: {},
          tooltip: {},
          dataset: {
            source: [
              // ["product", "2012"],
              // ["Matcha Latte", 41.1],
              // ["Milk Tea", 86.5],
              // ["Cheese Cocoa", 24.1],
            ],
          },
          xAxis: [
            { type: "category", gridIndex: 0 },
            { type: "category", gridIndex: 0 },
          ],
          yAxis: [{ gridIndex: 0 }, { gridIndex: 0 }],
          series: [
            // These series are in the first grid.
            // { type: "bar", seriesLayoutBy: "row" },
            // { type: "bar", seriesLayoutBy: "row" },
            // { type: "bar", seriesLayoutBy: "row" },
          ],
        },
      },
    };
  },
  computed: {
    chartOption() {
      if (this.data.length) {
        this.dummy.option.dataset.source = this.data;
        for (let index = 1; index < this.data.length; index++) {
          this.dummy.option.series.push({ type: "bar", seriesLayoutBy: "row" });
        }
      }

      return this._.merge(this.dummy.option, this.option);
    },
  },
  methods: {
    testing(event) {
      console.log(event);
    },
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>