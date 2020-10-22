<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div> -->

  <div class="container">
    <h1>111</h1>
    <div class="one">
      <div ref="myChart" style="height:300px;width:100%"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import echarts from "echarts"
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  data() {
    return {};
  },
  //表格渲染
  created() {
    // this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(this.$refs.myChart);
      // 绘制图表
      myChart.setOption({
        title: { text: "单项产业的对比"},
        tooltip: {},
        xAxis: {
          data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.drawLine()
    })
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
