<template>
  <!-- <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
  </div> -->

  <div class="container">

    <div class="two">
      <van-field name="uploader" label="文件上传">
        <template #input>
          <van-uploader v-model="uploader" />
        </template>
      </van-field>
    </div>

    <div class="one">

      <van-icon name="chat-o" dot size="40"/>
      <van-icon name="chat-o" badge="9" size="40" />
      <van-icon name="chat-o" badge="99+" size="40" />
      <div ref="myChart" style="height:300px;width:100%"></div>
    </div>
    <div class="two">
      <!--导出用户信息excel表格-->
      <download-excel
        class = "export-excel-wrapper"
        :data = "json_data"
        :fields = "json_fields"
        type="xls"
        >
        <el-button type="primary" size="small" @click="getData">导出EXCEL</el-button>
      </download-excel>
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
    return {
      uploader: [{ url: 'https://img.yzcdn.cn/vant/leaf.jpg' }],
      badge:88,
      name:"扶贫基本信息",
      //导出excel
      json_fields: {
        "姓名": "name",    //常规字段
        "用户名":"username",
        "所属组织":"organization",
        "权限":"auth",
      },
      json_data: [
        //写死，后续可通过接口进行传值
        {
          name:'汤姆',
          username:'admin1',
          organization:'地球村',
          auth:'超级管理员'
        },
        {
          name:'杰米',
          username:'admin2',
          organization:'地球村',
          auth:'超级管理员'
        }
      ],
      json_meta: [
        [
          {
            "key": "charset",
            "value": "utf- 8"
          }
        ]
      ]
    };
  },
  //表格渲染
  created() {
    // this.drawLine();
  },
  methods: {
    getData(){
         alert("111")
    },
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
