<template>
	<div class="container">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
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

	<el-button type="success"  @click="saveOrUpdate">提交</el-button>
	<router-link :to="'/prv/info/'+urlId">
            <el-button type="primary">返回</el-button>
    </router-link>
<!--    <router-link :to="{path:'/prv/info', query:{info_id:urlId}}">-->
<!--            <el-button type="primary">测试返回</el-button>-->
<!--    </router-link>-->
  </div>
</template>
<script>
  import prv from '@/api/prv/crud'
  export default {
    data() {
      return {
      	urlId:'',//用于返回
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
  	 callback(res){
       //回调成功后将图片渲染到页面中
          res.data = this.formInline.url
  	 },
     handleChange(value) {
      	this.formInline.value = value
        console.log(this.formInline)
      },
     init() {
      //判断路径有id值,做修改
      if(this.$route.params && this.$route.params.id) {
          //从路径获取id值
          const id = this.$route.params.id
          console.log(id)
          this.urlId = id
          //调用根据id查询的方法
          this.getInfo(id)
      } else { //路径没有id值，做添加
        //清空表单
        this.formInline = {}
      }
    },
    //根据id查询的方法
    getInfo(id) {
      prv.getPrvMemberInfo(id)
        .then(response => {
          this.formInline = response.data.formInline
        })
    },
    saveOrUpdate() {
    	console.log(this.formInline)
      //判断修改还是添加
      //根据贫困人是否有id
      if(!this.formInline.id) {
        //添加
        this.savePrv()
        //跳转页面
      } else {
        //修改
        this.updatePrv()
      }
    },
    //修改的方法
    updatePrv() {
      prv.updatePrvMember(this.formInline)
        .then(response => {
          //提示信息
          this.$message({
              type: 'success',
              message: '修改成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/prv/reliefinfo'})
        })
    },
    //添加的方法
    savePrv() {
      prv.addPrvMember(this.formInline)
        .then(response => {//添加成功
          //提示信息
          this.$message({
              type: 'success',
              message: '添加成功!'
          });
          //回到列表页面 路由跳转
          this.$router.push({path:'/prv/reliefinfo'})
        })
    }
    },
  }
</script>

