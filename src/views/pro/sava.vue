<template>
	<div class="container">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">

	 <el-form-item label="产业名称">
	    <el-select v-model="formInline.sex" placeholder="性别">
	      <el-option label="男" value="male"></el-option>
	      <el-option label="女" value="female"></el-option>
	    </el-select>
     </el-form-item>

	  <el-form-item label="扶贫时间" required>
		    <el-col :span="20">
		      <el-form-item prop="date1">
		        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.predictTime" style="width: 100%;"></el-date-picker>
		      </el-form-item>
		    </el-col>
      </el-form-item>
	  <el-form-item label="当前发放金额">
	    <el-input v-model="formInline.yearIncome" placeholder="审批人"></el-input>
	  </el-form-item>
	 <el-form-item label="产业规模">
      <el-input v-model="formInline.yearIncome" placeholder="审批人"></el-input>
    </el-form-item>
    <el-form-item label="资金到位时间" required>
        <el-col :span="20">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="formInline.predictTime" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
    <el-form-item label="单位">
      <el-select v-model="formInline.sex" placeholder="性别">
        <el-option label="男" value="male"></el-option>
        <el-option label="女" value="female"></el-option>
      </el-select>
    </el-form-item>
  
	  <el-form-item label="经办人">
	    <el-input v-model="formInline.idCard" placeholder="审批人"></el-input>
	  </el-form-item>


	  <el-form-item label="单位补助金额">
	    <el-input v-model="formInline.phone" placeholder="审批人"></el-input>
	  </el-form-item>
    <el-form-item label="审核人">
      <el-input v-model="formInline.phone" placeholder="审批人"></el-input>
    </el-form-item>
   
    <el-form-item label="文件上传">
      <el-upload
        class="upload-demo"
        drag
        v-model="formInline.url"
        :on-change="callback"
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处,或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-form-item>
 
	</el-form>
	/
	<el-button type="success"  @click="saveOrUpdate">提交</el-button>
	<router-link :to="'/prv/info/1'">
            <el-button type="primary">返回</el-button>
  </router-link>
  </div>
</template>
<script>
  import prv from '@/api/prv/crud'
  export default {
    data() {
      return {
      	value: [],

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
          //调用根据id查询的方法
          this.getInfo(id)
      } else { //路径没有id值，做添加
        //清空表单
        this.formInline = {}
      }
    },
    //根据id查询的方法
    getInfo(id) {
      prv.getPrvInfo(id)
        .then(response => {
          this.formInline = response.data.formInline
        })
    },
    saveOrUpdate() {
    	console.log(this.formInline)
      //判断修改还是添加
      //根据teacher是否有id
      if(!this.formInline.id) {
        //添加
        this.savePrv()
      } else {
        //修改
        this.updatePrv()
      }
    },
    //修改的方法
    updatePrv() {
      prv.updatePrvInfo(this.formInline)
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
      prv.addPrv(this.formInline)
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

