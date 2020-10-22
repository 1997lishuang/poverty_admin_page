<template>
  <div class="container">
    <div id="one">
<!--      <h1>村级扶贫金额统计</h1>-->
      <div ref="myChart" style="height:300px;width:100%"></div>
    </div>
    <div id="two">
      <Tabs>
        <TabPane label="产业扶贫" icon="logo-apple">

          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>
        <TabPane label="教育扶贫" icon="logo-windows">
          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>
        <TabPane label="搬迁扶贫" icon="logo-tux">
          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>
        <TabPane label="就业扶贫" icon="logo-tux">
          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>
        <TabPane label="医疗扶贫" icon="logo-tux">
          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>
        <TabPane label="兜底扶贫" icon="logo-tux">
          <el-table
            :data="tableData"
            border
            height="200"
            style="width: 100%; margin-top: 20px">

            <el-table-column
              prop="amount1"
              label="教育类型">
            </el-table-column>
            <el-table-column
              prop="amount2"
              label="人数">
            </el-table-column>
            <el-table-column
              prop="amount3"
              label="合计补助金额(元)">
            </el-table-column>
          </el-table>
          <h1 style="color: #ff0000">总计人数:{{totalPerson}} </h1>
          <h1 style="color: red">总补助金额:{{totalMoney}} </h1>
        </TabPane>

      </Tabs>
    </div>
  </div>
</template>

<script>
  export default {
    //写核心代码位置
    // data:{
    // },
    data() { //定义变量和初始值
      return {
        tableData: [{
          amount1: '234',
          amount2: '1',
          amount3: 10
        }, {

          amount1: '165',
          amount2: '4',
          amount3: 12
        }, {

          amount1: '324',
          amount2: '1',
          amount3: 9
        }, {

          amount1: '621',
          amount2: '2',
          amount3: 17
        }, {

          amount1: '539',
          amount2: '4',
          amount3: 15
        }],
        totalPerson:44,
        totalMoney:3000

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
          title: { text: "村级扶贫金额统计"},
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
        });
      }
    }
  }
</script>

<style scoped>

</style>
