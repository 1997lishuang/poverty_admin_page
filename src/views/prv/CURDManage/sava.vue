<template>
	<div class="container">
       <el-form :inline="true" :model="formInline" class="demo-form-inline">
	  <el-form-item label="姓名" required>
	    <el-input v-model="formInline.name" placeholder="姓名"></el-input>
	  </el-form-item>
	  <el-form-item label="一卡通卡号" required>
	    <el-input v-model="formInline.oneCard" placeholder="一卡通卡号"></el-input>
	  </el-form-item>
	  <el-form-item label="性别">
	    <el-select v-model="formInline.sex" placeholder="性别">
	      <el-option label="男" value="male"></el-option>
	      <el-option label="女" value="female"></el-option>
	    </el-select>
      </el-form-item>

	  <el-form-item label="脱贫时间" required>
		    <el-col :span="20">
		      <el-form-item prop="date1">
		        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.predictTime" style="width: 100%;"></el-date-picker>
		      </el-form-item>
		    </el-col>
      </el-form-item>
	  <el-form-item label="名族">
	    <el-select v-model="formInline.nation" placeholder="请选择名族">
	      <el-option label="汉" value="male"></el-option>
	      <el-option label="回族" value="female"></el-option>
	    </el-select>
      </el-form-item>
	  <el-form-item label="出生日期" required>
		    <el-col :span="20">
		      <el-form-item prop="born">
		        <el-date-picker type="date" placeholder="选择日期" v-model="formInline.born" style="width: 100%;"></el-date-picker>
		      </el-form-item>
		    </el-col>
      </el-form-item>
	  <el-form-item label="人均年收入">
	    <el-input v-model="formInline.yearIncome" placeholder="审批人"></el-input>
	  </el-form-item>
	  <el-form-item label="贫困原因" prop="cause">
        <el-input type="textarea" v-model="formInline.cause"></el-input>
      </el-form-item>
      <el-form-item label="帮扶需求" prop="demand">
        <el-input type="textarea" v-model="formInline.demand"></el-input>
      </el-form-item>
	  <el-form-item label="身份证号">
	    <el-input v-model="formInline.idCard" placeholder="审批人"></el-input>
	  </el-form-item>
	  
	 <el-form-item label="文化程度">
	    <el-select v-model="formInline.culture" placeholder="请选择文化程度">
	      <el-option label="男" value="male"></el-option>
	      <el-option label="女" value="female"></el-option>
	    </el-select>
      </el-form-item>
	  <el-form-item label="贫困等级">
	    <el-select v-model="formInline.grade" placeholder="请选择贫困等级">
	      <el-option label="特别困难" value="male"></el-option>
	      <el-option label="困难" value="female"></el-option>
	    </el-select>
      </el-form-item>
	  <el-form-item label="在校状态">
	    <el-select v-model="formInline.region" placeholder="请选择在校状态">
	      <el-option label="在校" value="school"></el-option>
	      <el-option label="在家" value="home"></el-option>
	    </el-select>
      </el-form-item>
	  <el-form-item label="电话号码">
	    <el-input v-model="formInline.phone" placeholder="审批人"></el-input>
	  </el-form-item>
	  <el-form-item label="家庭住址">
	    <div class="block">		
		  <el-cascader
		    v-model="formInline.address"
		    :options="options"
		    :props="{ expandTrigger: 'hover' }"
		    @change="handleChange"></el-cascader>
		</div>
	  </el-form-item>	  
	</el-form>
	
	<el-button type="success"  @click="saveOrUpdate">提交</el-button>
	<router-link :to="'/prv/reliefinfo'">
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
        options: [{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则',
            children: [{
              value: 'yizhi',
              label: '一致'
            }, {
              value: 'fankui',
              label: '反馈'
            }, {
              value: 'xiaolv',
              label: '效率'
            }, {
              value: 'kekong',
              label: '可控'
            }]
          }, {
            value: 'daohang',
            label: '导航',
            children: [{
              value: 'cexiangdaohang',
              label: '侧向导航'
            }, {
              value: 'dingbudaohang',
              label: '顶部导航'
            }]
          }]
        }, {
          value: 'zujian',
          label: '组件',
          children: [{
            value: 'basic',
            label: 'Basic',
            children: [{
              value: 'layout',
              label: 'Layout 布局'
            }, {
              value: 'color',
              label: 'Color 色彩'
            }, {
              value: 'typography',
              label: 'Typography 字体'
            }, {
              value: 'icon',
              label: 'Icon 图标'
            }, {
              value: 'button',
              label: 'Button 按钮'
            }]
          }, {
            value: 'form',
            label: 'Form',
            children: [{
              value: 'radio',
              label: 'Radio 单选框'
            }, {
              value: 'checkbox',
              label: 'Checkbox 多选框'
            }, {
              value: 'input',
              label: 'Input 输入框'
            }, {
              value: 'input-number',
              label: 'InputNumber 计数器'
            }, {
              value: 'select',
              label: 'Select 选择器'
            }, {
              value: 'cascader',
              label: 'Cascader 级联选择器'
            }, {
              value: 'switch',
              label: 'Switch 开关'
            }, {
              value: 'slider',
              label: 'Slider 滑块'
            }, {
              value: 'time-picker',
              label: 'TimePicker 时间选择器'
            }, {
              value: 'date-picker',
              label: 'DatePicker 日期选择器'
            }, {
              value: 'datetime-picker',
              label: 'DateTimePicker 日期时间选择器'
            }, {
              value: 'upload',
              label: 'Upload 上传'
            }, {
              value: 'rate',
              label: 'Rate 评分'
            }, {
              value: 'form',
              label: 'Form 表单'
            }]
          }, {
            value: 'data',
            label: 'Data',
            children: [{
              value: 'table',
              label: 'Table 表格'
            }, {
              value: 'tag',
              label: 'Tag 标签'
            }, {
              value: 'progress',
              label: 'Progress 进度条'
            }, {
              value: 'tree',
              label: 'Tree 树形控件'
            }, {
              value: 'pagination',
              label: 'Pagination 分页'
            }, {
              value: 'badge',
              label: 'Badge 标记'
            }]
          }, {
            value: 'notice',
            label: 'Notice',
            children: [{
              value: 'alert',
              label: 'Alert 警告'
            }, {
              value: 'loading',
              label: 'Loading 加载'
            }, {
              value: 'message',
              label: 'Message 消息提示'
            }, {
              value: 'message-box',
              label: 'MessageBox 弹框'
            }, {
              value: 'notification',
              label: 'Notification 通知'
            }]
          }, {
            value: 'navigation',
            label: 'Navigation',
            children: [{
              value: 'menu',
              label: 'NavMenu 导航菜单'
            }, {
              value: 'tabs',
              label: 'Tabs 标签页'
            }, {
              value: 'breadcrumb',
              label: 'Breadcrumb 面包屑'
            }, {
              value: 'dropdown',
              label: 'Dropdown 下拉菜单'
            }, {
              value: 'steps',
              label: 'Steps 步骤条'
            }]
          }, {
            value: 'others',
            label: 'Others',
            children: [{
              value: 'dialog',
              label: 'Dialog 对话框'
            }, {
              value: 'tooltip',
              label: 'Tooltip 文字提示'
            }, {
              value: 'popover',
              label: 'Popover 弹出框'
            }, {
              value: 'card',
              label: 'Card 卡片'
            }, {
              value: 'carousel',
              label: 'Carousel 走马灯'
            }, {
              value: 'collapse',
              label: 'Collapse 折叠面板'
            }]
          }]
        }, {
          value: 'ziyuan',
          label: '资源',
          children: [{
            value: 'axure',
            label: 'Axure Components'
          }, {
            value: 'sketch',
            label: 'Sketch Templates'
          }, {
            value: 'jiaohu',
            label: '组件交互文档'
          }]
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
          born:''
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
        .catch(erro=>{
          console.log("erro")
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
        }).catch(erro=>{
          console.log("erro")
        })
    }
    },
  }
</script>

