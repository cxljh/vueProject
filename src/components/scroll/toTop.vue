<template>
  <div 
  class="toTop" 
  v-show="show" 
  @click="backToTop"
  >
      <span 
      :class="{'iClass':iClass}" 
      :style="{'color':iColor,'font-size':iFontsize}" 
      v-show="textShow"
      >
      </span>
      <!-- <span 
      :style="{'color':textColor}"
      >
      {{ text }}  
      </span> -->
       
  </div>
</template>
 
// <script>
import { scrollTop } from './scrollTop'; // 引入动画过渡的实现
  export default {
    name: 'toTop',
    props:{
        text:{//默认文本
            type:String,
            default:''
        },
        textColor:{//文本颜色
            type:String,
            default:'#fff'
        },
        iClass: { // 图标形状
            type: String,
            default: 'iClass'
        },
        iColor: { // 图标颜色
            type: String,
            default: '#f00'
        },
        iFontsize: { // 图标大小
            type: String,
            default: '50px'
        },
        pageY:{
            type:String,
            default:10
        }
    },
    computed:{

    },
    mounted(){
      
    },
    data(){
      return {
          show:false,
          textShow:true,
          scroll:''
      }
    },
    methods:{
      currentPageYoffset(){
          this.scroll =window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
          this.scroll>this.pageY ? this.show = true:this.show = false
      },
      backToTop(){
          scrollTop(0, 500, this.transitionName, this.currentPageYOffset);
      }
    },
    created(){
        document.addEventListener("scroll", this.currentPageYoffset);
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.currentPageYOffset)
    }
  }
</script>
<style lang="scss" scope>
// @import '../../styles/color.scss';
.toTop{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #e3e3e3;
    border-radius: 4px;
    position: fixed;
    bottom: 50px;
    right: 20px;
    cursor: pointer;
}
.iClass{
    display: inline-block;
    width: 50px;
    height: 50px;
    background: url(../../assets/logo.png) no-repeat center;
    background-size: 100%;
}
</style>
