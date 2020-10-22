<template>
  <div class="app-container">
    <h1>单项产业对比选择框</h1>
    <!--查询-->

    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>


      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>

    <!-- 产业数据展示-->
    <div class="one">
      <div ref="myChart" style="height:300px;width:100%"></div>
    </div>


  </div>
</template>
<script>
  //引入调用teacher.js文件
  const cityOptions = ['核桃种植', '养母猪', '茶叶新建', '种植蔬菜','烟叶','中药材','蓝莓'];
  export default {
    //写核心代码位置
    // data:{
    // },
    data() { //定义变量和初始值
      return {
        checkAll: false,
        checkedCities: [],
        cities: cityOptions,
        isIndeterminate: true
      }
    },
    created() { //页面渲染之前执行，一般调用methods定义的方法
      //调用
      // this.getList()
    },
    mounted() {
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    methods:{  //创建具体的方法，调用xx定义的方法

      getList() {
           console.log(this.checkedCities)
           // 发送请求获取数据
      },
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(this.$refs.myChart);
        // 绘制图表
        myChart.setOption({
          title: { text: "单项产业的对比"},
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
      },
      handleCheckAllChange(val) {
        this.checkedCities = val ? cityOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedCitiesChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.cities.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
      }
      }
  }
</script>
