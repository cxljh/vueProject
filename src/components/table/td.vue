<template>
    <div class="yu-td" :class="{'yu-border':border}">
       {{ data }}
    </div>
</template>

<script>
export default {
   name: 'yuTd',
    props:{
       data:{
           type:String,
           default:''
       },
       border:{
           type:Boolean,
            default:true
       }
        
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
    .yu-td{
        display: table-cell;
        vertical-align: inherit;
        font-weight: normal;     
        padding: 8px 0 8px 10px;
        border-bottom: 1px solid #e1e7f6;
        position: relative;
        line-height: 24px;
        max-width: 160px;
        font-size: 14px;
        color: #666;
        word-break: break-all;
        word-wrap: break-word;
    }
    .yu-border{
        border: 1px solid #e1e7f6;
    }
</style>
