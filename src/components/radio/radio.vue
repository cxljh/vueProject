<template>
    <label
    class="yu_radio"
   
  >  
      <input
        class="yu_radio_original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"  
    
        :name="name"
      >
   
    <span class="yu_radio_label">
      <slot></slot>     
    </span>
  </label>
</template>
 
<script>
  export default {
    name: 'radio',
    props:{
       label:{
           type:String,
           default:''
       },
       disabled: Boolean,
       name:{
           type:String,
           default:'aa'
       },
       border: Boolean,
       size: String
    },
    data(){
      return {
          focus:false,  
                 
      }
    },
    computed:{
       model: {
        get() {
            console.log(this.label)
            return this.label;
        },
        set(val) {
            
            this.$emit('input', val);

        }
      },
    },
    mounted(){
      
    },
    
    methods:{
       
    },
    created(){
        
    },
    beforeDestroy () {
        
    }
  }
</script>
<style lang="scss" scope>
    .yu_radio{
        font-size: 14px;
        color: #595959;
        display: inline-block;
        cursor: pointer;
    }
    input[type='radio']:checked + span{
        color: #409eff;
    }

</style>
