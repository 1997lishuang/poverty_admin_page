<template>
  <div class="container">

      <div class="one">
   <el-table
        :data="tableData"
        border
        style="width: 100%"
        >
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
            label="序号"
            width="70"
            align="center">
            <template slot-scope="scope">
              {{ (page - 1) * limit + scope.$index + 1 }}
            </template>
        </el-table-column>
        <el-table-column
          prop="sex"
          label="日期"
          width="100">
        </el-table-column>

        <el-table-column
          prop="age"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="nation"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="idCard"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="yearIncome"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="reliefTime"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cause"
          label="地址"
          width="100">
        </el-table-column>
        <el-table-column
          prop="demand"
          label="邮编"
          width="100">
        </el-table-column>
        <el-table-column
          prop="address"
          label="邮编"
          width="100">
        </el-table-column>
        <el-table-column
          prop="prank"
          label="邮编"
          width="100">
        </el-table-column>
        <el-table-column
          prop="helpPerson"
          label="邮编"
          width="100">
        </el-table-column>
        <el-table-column
          prop="helpunit"
          label="111"
          width="100">
        </el-table-column>
      </el-table>
      </div>

      <div class="two">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item>
            <el-input v-model="tpaHelpPerson.name" placeholder="扶贫人"/>
          </el-form-item>

          <el-button type="primary" icon="el-icon-search" @click="getHelpList()">查询</el-button>
        </el-form>
        //table全部的扶贫人
        <el-table
        :data="tableData1"
        border
        style="width: 50%"
        >
            <el-table-column
              fixed
              prop="name"
              label="姓名"
              width="120">
            </el-table-column>
            <el-table-column
                label="序号"
                width="70"
                align="center">
                <template slot-scope="scope">
                  {{ (page - 1) * limit + scope.$index + 1 }}
                </template>
            </el-table-column>
            <el-table-column
              prop="iphone"
              label="电话"
              width="100">
            </el-table-column>
            <el-table-column
              prop="IdCard"
              label="身份证号"
              width="100">
            </el-table-column>
            <el-table-column
              prop="workUnit"
              label="工作单位"
              width="100">
            </el-table-column>

            <el-table-column
              fixed="right"
              label="操作"
              width="120">
              <template slot-scope="scope">
                <el-button type="primary" size="mini"  @click="giveHelpPersonById(scope.row.id)">授予扶贫人</el-button>
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
          @current-change="getPrvHelpListPage"
        />
      </div>

  </div>
</template>
  <script>
    import prv from '@/api/prv/crud'
    export default {
      data() {
        return {
          tpaHelpPerson:{
            name:""
          },
           tableData: [{
            id:'1',
            name:'王五',
            sex:'男',
            age:'12',
            nation:'汉',
            phone:'12321',
            idCard:'324353465',
            yearIncome:'222',
            reliefTime:'2020-1-1',
            cause:'脱贫',
            demand:'反对',
            address:'中国',
            prank:'困难',
            helpPerson:'张三',
            helpunit:'科技局'
          }],
          tableData1: [{
            id:'1',
            iphone: '1111111',
            name: '王小虎',
            IdCard: '12763273837247',
            workUnit:'科技局'
          }],
          list:null,//查询之后接口返回集合
          page:1,//当前页
          limit:8,//每页记录数
          total:18,//总记录数
        }
      },
      created(){
        this.getAllHelpPerson()
      },
      methods:{
        getAllHelpPerson(){

        },
        getHelpList(){
          //获取查询帮扶人的姓名


        },
        getPrvHelpListPage(page=1) {
          // 出现问题是在请求成功后进入catch中
          // 解决的方案是不用from表单 用iview的table
            this.page = page
            prv.getPrvHelpListPageist(this.page,this.limit)
            .then(response =>{//请求成功
                    //response接口返回的数据

                    console.log(response.data.data)

                    //this.tableData = response.data.data
                    // this.total = response.data.total
                    // console.log(this.list)
                    // console.log(this.total)
                }).catch(err => {
                     console.log('Error Info:' + JSON.stringify(err))
               })
        },
        giveHelpPersonById(id){
             //发送请求  添加 帮扶人
             // 在 查询所有的帮扶人在页面显示
             // 后去扶贫人的id this.tableData.id
             pev.helpPerson()
               .then(response =>{//请求成功
                 //response接口返回的数据

                 console.log(response.data.data)

               })
          .catch(err=>{
              console.log('Error Info:' + JSON.stringify(err))
          })
             this.getHelpList()
        }
      }
    }
  </script>
<style>
.two{
  margin:40px;
}
</style>

<!--在传递帮扶人的时间-->
