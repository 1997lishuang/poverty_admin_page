<template>
  <div class="one">
    <div ref="myChart" style="height:300px;width:100%"></div>
  </div>
</template>

<script>
  export default {

    data() { //定义变量和初始值
      return {

      }
    },
    created() { //页面渲染之前执行，一般调用methods定义的方法

    },
    mounted() {
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    methods:{  //创建具体的方法，调用xx定义的方法
      getList() {

      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart);
        // 绘制图表
        myChart.setOption({
          title: { text: "村级户口数量统计"},
          tooltip: {},
          xAxis: {
            data: ['核桃种植', '养母猪', '茶叶新建', '种植蔬菜','烟叶','中药材']
          },
          yAxis: {},
          series: [
            {
              name: "产量",
              type: "bar",
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        })
      }

    }
  }
</script>

<style scoped>

</style>
