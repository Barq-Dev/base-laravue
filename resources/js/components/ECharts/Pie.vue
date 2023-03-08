<template>
  <v-chart class="chart" :option="chartOption" @dblclick="testing" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  BarChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

export default {
  name: "Pie",
  props:['data','option','title','type'],
  components: {
    VChart,
  },
  provide: {
    // [THEME_KEY]: "dark"
  },
  data() {
    return {
      dummy: {
        option: {
          title: {
            text: this.title || "Traffic Sources",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b} : {c} ({d}%)",
          },
          // legend: {
          //   orient: "vertical",
          //   left: "left",
          //   data: [
          //     "Direct",
          //     "Email",
          //     "Ad Networks",
          //     "Video Ads",
          //     "Search Engines",
          //   ],
          // },
          series: [
            {
              name: "Traffic Sources",
              type: "pie",
              // radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              selectedMode: "single",
              selectedOffset: 30,
              center: ["50%", "60%"],
              data: [
                { value: 335, name: "Direct" },
                { value: 310, name: "Email" },
                { value: 234, name: "Ad Networks" },
                { value: 135, name: "Video Ads" },
                { value: 1548, name: "Search Engines" },
              ],
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              emphasis: {
                // itemStyle: {
                //   shadowBlur: 10,
                //   shadowOffsetX: 0,
                //   shadowColor: "rgba(0, 0, 0, 0.5)",
                // },
              },
              label: {
                show: false,
                position: "center",
              },
              labelLine: {
                show: false,
              },
            },
          ],
        },
      },
    };
  },
  computed: {
    chartOption() {
      if(this.type == 'doughnut')
        this.dummy.option.series[0].radius = ["40%", "70%"]

      if(this.data.length)
        this.dummy.option.series[0].data = this.data
        
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