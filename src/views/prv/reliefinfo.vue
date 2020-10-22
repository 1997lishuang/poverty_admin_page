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

      <el-button type="primary" icon="el-icon-search" @click="getLikeList()">查询</el-button>
      <el-button type="default" @click="resetData()">清空</el-button>
    </el-form>

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
    <el-table-column
      fixed="right"
      label="操作"
      width="450">
      <template slot-scope="scope">

        <router-link :to="'/prv/sava'">
            <el-button type="primary" size="mini" icon="el-icon-edit">添加</el-button>
        </router-link>
        <router-link :to="'/prv/sava/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
        </router-link>
        <router-link :to="'/prv/info/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">详情</el-button>
        </router-link>
        <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
        <router-link :to="'/prv/help/'+scope.row.id">
            <el-button type="primary" size="mini" icon="el-icon-edit">授予帮扶人</el-button>
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
      @current-change="getPrvListPageist"
    />

  </div>
</template>
<script>
//引入调用prv.js文件
import prv from '@/api/prv/crud'

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
        },
        {
          id:'2',
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
        },
        {
          id:'3',
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
        },
        {
          id:'4',
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
        list:null,//查询之后接口返回集合
        page:1,//当前页
        limit:3,//每页记录数
        total:18,//总记录数
        tpaPerson:{} //条件封装对象
        }
    },
    created() { //页面渲染之前执行，一般调用methods定义的方法
        //调用
        this.getPrvListPageist()
    },
    methods:{  //创建具体的方法，调用teacher.js定义的方法
        //贫困人信息列表的方法
        handleClick(row) {
        console.log(row);
        },
        //
        getLikeList(){
         prv.getLikeList(this.page,this.limit)
            .then(response =>{//请求成功
              //response接口返回的数据
              this.tableData = response.msg.data
              this.limit = response.msg.limit
              this.page = response.msg.page
              this.total  = response.msg.count
            }).catch(err => {
            console.log('Error Info:' + JSON.stringify(err))
          })

        },
        getPrvListPageist(page=1) {
        	// 出现问题是在请求成功后进入catch中
        	// 解决的方案是不用from表单 用iview的table
            this.page = page
            prv.getPrvListPage(this.page,this.limit)
            .then(response =>{//请求成功
                    //response接口返回的数据
                    alert("1111")
                    this.tableData = response.msg.data
                    this.limit = response.msg.limit
                    this.page = response.msg.page
                    this.total  = response.msg.count
                }).catch(err => {

                     console.log('Error Info:' + JSON.stringify(err))
               })
        },
        resetData() {//清空的方法
            //表单输入项数据清空
             this.tpaPerson = {}
             //查询所有讲师数据
             this.getList()
         },
        //删除的方法
        removeDataById(id) {
            this.$confirm('此操作将永久删除, 是否继续?', '提示', {
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
