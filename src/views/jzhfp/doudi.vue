<template>
  <div class="app-container">
    <h1>贫困人信息搜索框</h1>

    <!--查询表单-->
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

      <el-button type="primary" icon="el-icon-search" @click="getList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>

    <el-table
      :data="tableData"
      border
      style="width: 60%"
    >
      <el-table-column
        fixed
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="身份证号"
        width="100">
      </el-table-column>

      <el-table-column
        prop="age"
        label="联系电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="家庭电话"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="家庭住址"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="250">
        <template slot-scope="scope">
          <router-link :to="'/jzhfp/doudiInfo/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">查看</el-button>
          </router-link>
          <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
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
      @current-change="getDoudiListPageist"
    />

  </div>
</template>
<script>
  //引入调用prv.js文件
  import jzhfp from '@/api/jzhfp/crud'
  import prv from '@/api/jzhfp/crud'

  export default {
    //写核心代码位置
    // data:{
    // },
    data() { //定义变量和初始值
      return {
        value:0,
        tableData: [{
          id:'1',
          name:'王五',
          sex:'男',
          age:'12',
          nation:'汉',
          address: '湖北'
        },
          {
            id:'2',
            name:'王五',
            sex:'男',
            age:'12',
            nation:'汉',
            address: '湖北'

          },
          {
            id:'3',
            name:'王五',
            sex:'男',
            age:'12',
            nation:'汉',
            address: '湖北'


          },
          {
            id:'4',
            name:'王五',
            sex:'男',
            age:'12',
            nation:'汉',
            address: '湖北'

          }],
        list:null,//查询之后接口返回集合
        page:1,//当前页
        limit:8,//每页记录数
        total:18,//总记录数
        tpaPerson:{} //条件封装对象
      }
    },
    created() { //页面渲染之前执行，一般调用methods定义的方法
      //调用
      this.getDoudiListPageist()
    },
    methods:{  //创建具体的方法，调用teacher.js定义的方法
      //贫困人信息列表的方法
      handleClick(row) {
        console.log(row);
      },
      getDoudiListPageist(page=1) {
        // 出现问题是在请求成功后进入catch中
        // 解决的方案是不用from表单 用iview的table
        this.page = page
        jzhfp.doudiGetListPage(this.page,this.limit)
          .then(response =>{//请求成功
            //response接口返回的数据

            console.log(response.data.data)

            //this.tableData = response.data.data
            // this.total = response.data.total
          }).catch(err => {
          console.log('Error Info:' + JSON.stringify(err))
        })
      },
      resetData() {//清空的方法
        //表单输入项数据清空
        this.tpaPerson = {}
        //查询所有兜底人数数据
        this.getDoudiListPageist()
      },
      //删除的方法
      removeDataById(id) {
        this.$confirm('此操作将永久删除贫困人信息, 是否继续?', '提示', {
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
              this.getDoudiListPageist()
            }).catch(err => {
            console.log("erro")
          })
        })
      }

    }
  }
</script>
