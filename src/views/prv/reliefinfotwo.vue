<template>
  <div class="app-container">
    <h1>脱贫人信息搜索框</h1>

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
    <i-table :columns="columns8" :data="data7" size="small" ref="table"></i-table>
    <br>
    <i-button type="primary" size="large" @click="exportData()"><Icon type="ios-download-outline"></Icon> 导出原始数据</i-button>

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
        return{
        value:'',
        list:null,//查询之后接口返回集合
        page:1,//当前页
        limit:8,//每页记录数
        total:18,//总记录数
        tpaPerson:{},
          //条件封装对象
          columns8: [
            {
              "title": "姓名",
              "key": "name",
              "fixed": "left",
              "width": 200
            },
            {
              "title": "展示",
              "key": "show",
              "width": 150,
              "sortable": true,
              filters: [
                {
                  label: '大于4000',
                  value: 1
                },
                {
                  label: '小于4000',
                  value: 2
                }
              ],
              filterMultiple: false,
              filterMethod (value, row) {
                if (value === 1) {
                  return row.show > 4000;
                } else if (value === 2) {
                  return row.show < 4000;
                }
              }
            },
            {
              "title": "唤醒",
              "key": "weak",
              "width": 150,
              "sortable": true
            },
            {
              "title": "登录",
              "key": "signin",
              "width": 150,
              "sortable": true
            },
            {
              "title": "点击",
              "key": "click",
              "width": 150,
              "sortable": true
            },
            {
              "title": "激活",
              "key": "active",
              "width": 150,
              "sortable": true
            },
            {
              "title": "7日留存",
              "key": "day7",
              "width": 150,
              "sortable": true
            },
            {
              "title": "30日留存",
              "key": "day30",
              "width": 150,
              "sortable": true
            },
            {
              "title": "次日留存",
              "key": "tomorrow",
              "width": 150,
              "sortable": true
            },
            {
              "title": "日活跃",
              "key": "day",
              "width": 150,
              "sortable": true
            },
            {
              "title": "周活跃",
              "key": "week",
              "width": 150,
              "sortable": true
            },
            {
              "title": "月活跃",
              "key": "month",
              "width": 150,
              "sortable": true
            },
            {
              title: '操作',
              key: 'action',
              width: 150,
              align: 'center',
              render: (h, row) => {
                return h('div', [
                  h('Button', {
                    props: {
                      type: 'primary',
                      size: 'small'
                    },
                    style: {
                      marginRight: '5px'
                    },
                    on: {
                      click: () => {
                        //跳转到详情页面（户主与成员的关系页面）
                        this.$router.push({path: '/prv/infoTwo', query:{id: row.row.id}})
                      }
                    }
                  }, 'View')
                  // h('Button', {
                  //   props: {
                  //     type: 'error',
                  //     size: 'small'
                  //   },
                  //   on: {
                  //     click: () => {
                  //       console.log(111)
                  //     }
                  //   }
                  // }, 'Delete')
                ])
              }
            }
          ],
          data7: [
            {
              id:1,
              name: "推广名称1",
              fav: 0,
              show: 7302,
              "weak": 5627,
              "signin": 1563,
              "click": 4254,
              "active": 1438,
              "day7": 274,
              "day30": 285,
              "tomorrow": 1727,
              "day": 558,
              "week": 4440,
              "month": 5610
            },
            {
              id:2,
              name: "推广名称2",
              "fav": 0,
              "show": 4720,
              "weak": 4086,
              "signin": 3792,
              "click": 8690,
              "active": 8470,
              "day7": 8172,
              "day30": 5197,
              "tomorrow": 1684,
              "day": 2593,
              "week": 2507,
              "month": 1537
            },
            {
              id:3,
              name: "推广名称3",
              "fav": 0,
              "show": 7181,
              "weak": 8007,
              "signin": 8477,
              "click": 1879,
              "active": 16,
              "day7": 2249,
              "day30": 3450,
              "tomorrow": 377,
              "day": 1561,
              "week": 3219,
              "month": 1588
            }

          ]
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
        getPrvListPageist(page=1) {
        	// 出现问题是在请求成功后进入catch中
        	// 解决的方案是不用from表单 用iview的table
            this.page = page
            prv.getPrvListPage(this.page,this.limit)
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
        resetData() {//清空的方法
            //表单输入项数据清空
             this.tpaPerson = {}
             //查询所有讲师数据
             this.getList()
         },
        //删除讲师的方法
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
        },
      exportData (type) {
        // this.$nextTick(()=>{
        //   this.$refs['table'].resetFields();
        // })
          this.$refs.table.exportCsv({
            filename: '原始数据'
          })
      },
      lookInfo(){
          alert("dsdsd")
      }
    }
}
</script>
