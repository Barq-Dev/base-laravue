<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    config: {
      type: Object,
      default: null
    },
    data: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dummy:{
        data:{
          datasets: [{
            data: [10, 20, 30],
            backgroundColor: [
                '#00BCD4',
                '#4CAF50',
                '#FFC107'
            ]
          }],
          labels: [
            'Red',
            'Yellow',
            'Blue'
          ],
        },
        options: {
          responsive: true,
          animation: {
              duration: 500,
              easing: "easeOutQuart",
              onComplete: function () {
              var ctx = this.chart.ctx;
              ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontFamily, 'normal', Chart.defaults.global.defaultFontFamily);
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';

              this.data.datasets.forEach(function (dataset) {

                  for (var i = 0; i < dataset.data.length; i++) {
                  var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model,
                      total = dataset._meta[Object.keys(dataset._meta)[0]].total,
                      mid_radius = model.innerRadius + (model.outerRadius - model.innerRadius)/2,
                      start_angle = model.startAngle,
                      end_angle = model.endAngle,
                      mid_angle = start_angle + (end_angle - start_angle)/2;

                  var x = mid_radius * Math.cos(mid_angle);
                  var y = mid_radius * Math.sin(mid_angle);

                  ctx.fillStyle = '#fff';
                  if (i == 3){ // Darker text color for lighter background
                      ctx.fillStyle = '#444';
                  }
                  var percent = String(Math.round(dataset.data[i]/total*100)) + "%";      
                  //Don't Display If Legend is hide or value is 0
                  if(dataset.data[i] != 0 && dataset._meta[0].data[i].hidden != true) {
                      ctx.fillText(dataset.data[i], model.x + x, model.y + y);
                      // Display percent in another line, line break doesn't work for fillText
                      ctx.fillText(percent, model.x + x, model.y + y + 15);
                  }
                  }
              });               
              }
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(
      this.config && this.config.data || this.data || this.dummy.data,
      this.config && this.config.options || this.options || this.dummy.options
    )
  }
}
</script>