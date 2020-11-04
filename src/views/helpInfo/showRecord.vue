<template>
  <div class="app-container">
    <div class="search">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="tpaPerson.name" placeholder="扶贫人"/>
        </el-form-item>
        <el-form-item>
          <el-input v-model="tpaPerson.name" placeholder="请输入身份证号"/>
        </el-form-item>


        <el-form-item label="添加时间">
          <el-date-picker
            v-model="tpaPerson.begin"
            type="datetime"
            placeholder="选择开始时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>
        <el-form-item>
          <el-date-picker
            v-model="tpaPerson.end"
            type="datetime"
            placeholder="选择截止时间"
            value-format="yyyy-MM-dd HH:mm:ss"
            default-time="00:00:00"
          />
        </el-form-item>

        <el-button type="primary" icon="el-icon-search" @click="getLikeList()">查询</el-button>
        <el-button type="default" @click="resetData()">清空</el-button>
      </el-form>
    </div>
    <div class="info">
      <el-table
        :data="tableData"
        border
        style="width:100%">
        <el-table-column
          prop="date"
          label="产业名称"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="产业规模"
          width="100">
        </el-table-column>
        <el-table-column
          prop="province"
          label="总补助金"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="已发金额"
          width="100">
        </el-table-column>
        <el-table-column

          prop="date"
          label="剩余金额"
          width="100">
        </el-table-column>
        <el-table-column

          prop="date"
          label="发放时间"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="经办人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="name"
          label="审核人"
          width="100">
        </el-table-column>
        <el-table-column
          prop="date"
          label="扶贫时间"
          width="100">
        </el-table-column>
        <el-table-column prop="url" label="产业的图片">
          　　<template slot-scope="scope">
          　　　　<img :src="scope.row.url" width="40" height="40" class="head_pic"/>
          　　</template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="300">
          <template slot-scope="scope">
            <router-link :to="'/helpInfo/showHelpInfo/'+scope.row.id">
              <el-button type="primary" size="mini" icon="el-icon-edit">详情</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        :current-page="page"
        :page-size="limit"
        :total="total"
        style="padding: 30px 0; text-align: center;"
        layout="total, prev, pager, next, jumper"
        @current-change="getHelpRecordList"
      />
    </div>

  </div>
</template>

<script>
    export default {
        name: "showRecord",
      data() {
        return {
          list:null,//查询之后接口返回集合
          page:1,//当前页
          limit:3,//每页记录数
          total:18,//总记录数，
          tpaPerson:{}, //条件封装对象
          tableData: [{
            id:'1',
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            url:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg'
          }]
        }
      },
      methods:{
        getHelpRecordList(){
          console.log("获取日信息")
        }
      }
      }
</script>

<style scoped>

</style>
