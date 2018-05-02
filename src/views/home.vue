<template>
  <div id="home">
    <!-- <aside>
      <div class="logo">
          <img src="/static/icon/logo.png">
      </div>
      <ul>
        <li v-for="(item,index) in $router.options.routes" class="tit" v-if="!item.hidden" @click="tab(index)">
          {{ item.name }}
          <transition name="fade" mode="out-in">
              <ul v-show="index==num">
                  <li v-for="(child,index) in item.children">
                    <router-link :to="child.path">{{ child.name }}</router-link>
                  </li>
              </ul>
          </transition>                    
        </li>
      </ul>
      
    </aside> -->
  	 <section>
       <vselect size='medium' placeholder='选择一个吧' :optionsInp='options' multiple></vselect>
       <vTotop text='' textColor='rgb(255, 0, 0)' pageY='30'></vTotop>
       <vTable border></vTable>
       <!-- <table cellspacing="0" :style="{'width':'100%'}">
            <thead>
                <tr class="yu-th">
                    <yuTd v-for="item in title" :data='item.tit'></yuTd>
                    
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in data">
                    <yuTd :data='item.name' border></yuTd>                  
                    <yuTd :data='item.sex' border></yuTd>
                    <yuTd :data='item.date' border></yuTd>
                    <yuTd :data='item.address' border></yuTd>
                </tr>
            </tbody>
        </table> -->
        <transition name="fade" mode="out-in">
            <!-- <router-view></router-view> -->
           
  
        </transition>
     </section>
  </div>
</template>

<script>
import vselect from '@/components/select'
import vTotop from '@/components/scroll/toTop'
import vTable from '@/components/table/table'
import yuTd from '@/components/table/yu-td'
export default { 
  name: 'Home',
  components:{
      vselect,
      vTotop,
      vTable,
      yuTd
  }, 
  data () {
    return {
      msg: 'hello cxl',
      mesage:'',
      center:"center",
      checkedNames: [],
      options:[
        {name:'11'},
        {name:'22'},
        {name:'33'},
        {name:'44'},
      ],
      title:[
              {tit:'姓名'},
              {tit:'性别'},
              {tit:'日期'},
              {tit:'地区'}
              ],
       data:[{
            date: '2016-05-02',
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            sex:'男',
            address: '上海市普陀区金沙江路 1516 弄'
          }],
      show:false,
      num:-1
    }
  },
  methods:{
    tab(index) {    
      if(this.num == index){
        this.num = -1
      }else{
        this.num = index;
      }
        
    }
  },
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #home{
    width: 100%;
    height: 100%;
    display:flex;
    position: absolute;
    top: 0;
    bottom: 0px;
    // overflow: hidden;
  }
  section{
    height: 100%;
    flex: 1;
    overflow-y: scroll;
    padding: 20px;
  }
  aside{
    flex: 0 0 230px;
    width: 230px;
    height: 100%;
    background: #3f3f3f;
    border-right: 1px solid #3f3f3f;
    .logo{
      height: 60px;
      line-height: 60px;
      text-align: center;
      font-size: 30px;
      border-bottom: 2px solid #3a3838;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    ul{
      padding: 0;
    }
    .tit{
      // height: 56px;
      line-height: 56px;
      font-size: 14px;
      color: #FFC200;
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      position: relative;
      transition: border-color .3s, background-color .3s, color .3s;
      box-sizing: border-box;
      white-space: nowrap;
    }
    .tit:hover{
      background: #fff;
    }
  }
  li{
    list-style: none;
  }
</style>
