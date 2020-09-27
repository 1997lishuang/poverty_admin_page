<template>
  <div class="container">
    <div class="one">
      <el-table
        :data="tableData"
        border
        style="width:50%">
        <el-table-column
          fixed
          prop="date"
          label="户主"
          width="150">
        </el-table-column>

        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>

        <el-table-column
          prop="province"
          label="身份证号"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <router-link :to="'/prv/savaMember/'+scope.row.id">
              <el-button type="primary" size="mini" icon="el-icon-edit">添加成员</el-button>
            </router-link>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="two">
      <el-table
        :data="tableData"
        border
        style="width:50%">
        <el-table-column
          fixed
          prop="date"
          label="身份"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="与户主关系"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="200">
          <template slot-scope="scope">
            <router-link :to="'/prv/savaMember/'+scope.row.id">
              <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
            </router-link>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

  </div>


</template>

<script>
  import prv from '@/api/prv/crud'
  export default {


    data() {
      return {
        //户主的成员集合
        member:[],
        //户主
        headMan:[],
        moneytotal:'3333',
        activeName: 'first',
        tableData: [{
          id:'1',
          date: '2016-05-02',
          name: '王小虎',
          province:'父子'
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
        const id = this.$route.query.id
        // console.log(id)
        //调用根据id查询的方法
        this.getInfo(id)
      },
      getInfo(id) {
        //创建prv 获取户主的信息 以及家庭成员的信息
        prv.getPrvInfo(id)
          .then(response => {
            this.formInline = response.data.formInline
          })
          .catch(erro=>{
            console.log("erro")
          })
      },
      handleClick(row) {
        console.log(row);
      },
      handleClickTabs(tab, event) {
        console.log(tab, event);
      },
      //删除的方法
      removeDataById(id) {
        this.$confirm('此操作将永久删除讲师记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  //点击确定，执行then方法
          //调用删除的方法
          prv.deletePrvId(id)
            .then(response =>{//删除成功
              //提示信息
              this.$message({
                type: 'success',
                message: '删除成功!'
              })
              //回到列表页面
              this.getList()
            }).catch(err => {
            console.log("erro")
          })
        })
      }
    }

  }
</script>



