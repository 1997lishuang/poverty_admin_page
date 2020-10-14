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
<!--            <router-link :to="'/prv/savaMember'+scope.row.id">-->
<!--              <el-button type="primary" size="mini" icon="el-icon-edit">添加成员</el-button>-->
<!--            </router-link>-->
            <el-button type="primary" size="mini" icon="el-icon-primary" @click="dialogFormVisible = true">添加成员</el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeHuzhuDataById(scope.row.id)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!--表达添加户主的成员 -->

    <el-dialog title="添加户主成员" :visible.sync="dialogFormVisible">
      <el-form :model="formInline">
        <el-form-item label="姓名">
          <el-input v-model="formInline.yearIncome" placeholder="审姓名批人"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="formInline.sex" placeholder="性别">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="电话号码">
          <el-input v-model="formInline.yearIncome" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="与户主关系">
          <el-select v-model="formInline.sex" placeholder="与户主关系">
            <el-option label="儿子" value="male"></el-option>
            <el-option label="其它" value="female"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="在校状态">
          <el-select v-model="formInline.sex" placeholder="在校状态">
            <el-option label="男" value="male"></el-option>
            <el-option label="女" value="female"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="身份证号">
          <el-input v-model="formInline.idCard" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="民族">
          <el-select v-model="formInline.sex" placeholder="名族">
            <el-option label="汉" value="male"></el-option>
            <el-option label="其它" value="female"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" required>
          <el-col :span="20">
            <el-form-item prop="date1">
              <el-date-picker type="date" placeholder="选择日期" v-model="formInline.predictTime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="文化程度">
          <el-select v-model="formInline.sex" placeholder="文化程度">
            <el-option label="大学" value="male"></el-option>
            <el-option label="其它" value="female"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button :plain="true" @click="dialogFormVisible = false">取 消</el-button>
        <el-button :plain="true" type="primary" @click="addNumber()">添加</el-button>
      </div>
    </el-dialog>
    <!--
   -->
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
        dialogFormVisible: false,
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
        }],
        formInline: {
          id:'',
          name:'',
          sex:'',
          age:'',
          nation:'',
          phone:'',
          idCard:'',
          yearIncome:'',
          predictTime:'',
          cause:'',
          demand:'',
          address:'',
          grade:'',
          culture:'',
          born:'',
          url:''
        }
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
      //删除户主
      removeHuzhuDataById(id){
        this.$confirm('此操作将永久删除户主记录, 是否继续?', '提示', {
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
      },
      //删除户主的成员方法
      removeDataById(id) {
        this.$confirm('此操作将永久删除成员记录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  //点击确定，执行then方法
          //调用删除的方法
          prv.deletePrvMemberId(id)
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
      },
      //添加户主成员
      addNumber(){
        prv.addPrvMember(this.formInline)
          .then(response => {//添加成功
            //提示信息
            this.$message({
              type: 'success',
              message: '添加成功!'
            });
            this.dialogFormVisible=false
            //回到列表页面 路由跳转
            this.$router.push({path:'/prv/reliefinfo'})

          }).catch(error=>{
             this.dialogFormVisible=false
            this.$message('添加失败');
        })
      }
    }

  }
</script>



