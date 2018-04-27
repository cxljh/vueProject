<template>
    <div 
    class="yu-table"
    :style="{'text-align':textPos}"
    :data='data'
    >
        <table cellspacing="0">
            <thead>
                <tr class="yu-th">
                    <yuTd v-for="item in title" :data='item.tit' :border='border'></yuTd>
                    
                </tr>
            </thead>
            <tbody>
                <yuTr :data='item.name' :border='border' v-for="item in data"></yuTr>
            </tbody>
        </table>
    </div>
</template>

<script>
import yuTr from './yu-tr'
export default {
   name: 'yu-table',
   components:{
      yuTd
  }, 
    props:{
        height:{
            type:String,
            default:''
        },
        maxHeight:{
            type:String,
            default:''
        },
        border:{//是否带边框
            type:Boolean,
            default:false
        },
        textPos:{//文字位置
            type:String,
            default:'left'
        }
        
    },
    data(){
      return {
          data:[{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
          title:[
              {tit:'姓名'},
              {tit:'日期'},
              {tit:'地区'}
              ]
          
      }
    },
    methods:{
       
    },
    computed:{

    },
    //  created(){
    //    console.log(this.border)
    // },
}
</script>


<style lang="scss" scoped>
    .yu-table,table{
        width: 100%;  
        border-collapse:collapse;
    }
    
    th,td{
        font-weight: normal;     
        padding: 8px 0 8px 10px;
        border-bottom: 1px solid #e1e7f6;
        position: relative;
        line-height: 24px;
        max-width: 160px;
        font-size: 14px;
        color: #666;
    }
    .yu-th{
        background-color: #F4F5F9;
        font-weight: normal;
        width: auto;
    }
    tr:hover{
        background-color: #F4F5F9;
    }
</style>
