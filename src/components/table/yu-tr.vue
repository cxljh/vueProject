<template>
    <div class="yu-tr">
       <yuTd :data='item.name' :border='border'></yuTd>
        <yuTd :data='item.date' :border='border'></yuTd>
        <yuTd :data='item.address' :border='border'></yuTd>
    </div>
</template>

<script>
import yuTd from './yu-td'
export default {
   name: 'yuTd',
    props:{
      data:Array,
      border:{//是否带边框
            type:Boolean,
            default:false
        },
        
    },
    data(){
      return {
          
      }
    },
    methods:{
       
    },
    computed:{

    },
    created(){
       
    },
}
</script>


<style lang="scss" scoped>
    
</style>
