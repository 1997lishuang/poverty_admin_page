<template>
  <div class="container">
    <div class="one">
      <el-table
        :data="tableDataMain"
        border
        style="width:30%">
        <el-table-column
          fixed
          prop="type"
          label="户主"
          width="120">
         </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cardId"
          label="身份证号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="家庭住址"
          width="146">
        </el-table-column>
      </el-table>
    </div>
    <h1>家庭成员列表</h1>
    <div class="two">
      <el-table
        :data="tableData"
        border
        style="width:30%">
        <el-table-column
          fixed
          prop="date"
          label="身份"
          width="146">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cardId"
          label="身份证号"
          width="120">
        </el-table-column>
        <el-table-column
          prop="name"
          label="与户主关系"
          width="120">
        </el-table-column>
      </el-table>
    </div>

    <div class="three">
      <el-tabs v-model="activeName" @tab-click="handleClickTabs">
        <el-tab-pane label="兜底扶贫" name="first">
          <el-table
            :data="tableData"
            border
            style="width:80%">
            <el-table-column
              prop="date"
              label="兜底扶贫类型"
              width="100">
            </el-table-column>
            <el-table-column
              prop="name"
              label="产业规模"
              width="100">
            </el-table-column>
<!--            <el-table-column-->
<!--              prop="province"-->
<!--              label="总补助金"-->
<!--              width="100">-->
<!--            </el-table-column>-->
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
                <router-link :to="'/jzhfp/doudiSave/'+scope.row.id">
                  <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                </router-link>
                <router-link :to="'/jzhfp/doudiSave'">
                  <el-button type="primary" size="mini" icon="el-icon-edit">添加</el-button>
                </router-link>
                <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <h1 v-model="moneytotal" style="color:red">总计金额：{{moneytotal}}</h1>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>


</template>

<script>
  import jzhfp from '@/api/jzhfp/crud'
  import prv from '@/api/prv/crud'

  export default {

    data() {
      return {
        moneytotal:'3333',
        activeName: 'first',
        tableDataMain:[{
          id:'1',
          type:'户主',
          name:'张三',
          address:'湖北',
          cardId:'11111'
        }],
        tableData: [{
          id:'1',
          date: '2016-05-02',
          name: '王小虎',
          cardId: '1111',
          url:'https://dss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1141259048,554497535&fm=26&gp=0.jpg'
        }]
      }
    },

    created() { //页面渲染之前执行
      this.init()
    },
    watch: {  //监听
      $route(to, from) { //路由变化方式，路由发生变化，方法就会执行
        this.init()
      }
    },
    methods: {
      init() {
        //从路径获取id值
        const id = this.$route.params.id
        console.log(id)
        //调用根据id查询户主的方法
        this.getInfo(id)
        //根据户主的id 获取 家庭成员的人数
        this.getPrvList(id)
        //获取兜底类型List集合
        this.GetTypeGetList()
      },
      //获取所有的精准扶贫类型List集合
      GetTypeGetList(){
        jzhfp.doudiTypeGetList()
          .then(response => {
            this.tableData = response.data.tableData
          })
          .catch(erro=>{
            console.log("erro")
          })
      },
      // 获取户主的信息 以及家庭成员的信息
      getInfo(id) {
        prv.getPrvInfo(id)
          .then(response => {
            this.tableDataMain = response.data.tableDataMain
          })
          .catch(erro=>{
            console.log("erro")
          })
      },
      //获取户主成员的信息
      getPrvList(id){
        prv.getPrvMemberInfo(id)
          .then(response => {
            this.tableData = response.data.tableData
          })
          .catch(erro=>{
            console.log("erro")
          })
      },
      //删除兜底类型方法
      removeDataById(id) {
        this.$confirm('此操作将永久删除兜底类型, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  //点击确定，执行then方法
          //调用删除的方法
          jzhfp.doudiDeleteTyepId(id)
            .then(response =>{//删除成功
              //提示信息
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              //回到doudiInfo列表页面
              this.GetTypeGetList()
            }).catch(err => {
            console.log("erro")
          })
        })
      },
      handleClick(row) {
        console.log(row);
      },
      handleClickTabs(tab, event) {
        console.log(tab, event);
      },
    }

  }
</script>



