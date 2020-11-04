<template>
    <div class="container">
       <div class="one">
            <el-table
                :data="tableData"
                border
                style="width:50%">
                <el-table-column
                  fixed
                  prop="name"
                  label="户主"
                  width="150">
                </el-table-column>
              <el-table-column
                prop="province"
                label="姓名"
                width="120">
              </el-table-column>
                <el-table-column
                  prop="province"
                  label="地址"
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
                  prop="name"
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

      <div class="three">
        <el-tabs v-model="activeName" @tab-click="handleClickTabs">
          <el-tab-pane label="产业扶贫" name="first">
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
                  <router-link :to="'/pro/sava/'+scope.row.id">
                    <el-button type="primary" size="mini" icon="el-icon-edit">修改</el-button>
                  </router-link>
                  <router-link :to="'/pro/sava/'">
                    <el-button type="primary" size="mini" icon="el-icon-edit">添加</el-button>
                  </router-link>
                  <el-button type="danger" size="mini" icon="el-icon-delete" @click="removeDataById(scope.row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <h1 v-model="moneytotal" style="color:red">总计金额：{{moneytotal}}</h1>

          </el-tab-pane>
          <el-tab-pane label="教育" name="second">教育</el-tab-pane>

          <el-tab-pane label="就业" name="third">就业</el-tab-pane>

          <el-tab-pane label="医疗" name="fourth">医疗</el-tab-pane>
        </el-tabs>
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
        //产业扶贫集合
        //教育扶贫集合
        //搬迁扶贫集合
        //就业扶贫集合
        //医疗扶贫集合
        //兜底扶贫集合
        moneytotal:'3333',
        activeName: 'first',
        tableData: [{
          id:'1',
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
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
    }

  }
</script>



