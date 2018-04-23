<template>
    <div style="margin:50px;" >
       <input type="text" 
       :readonly="!filterable || multiple"     
       :class='[{select_small:size=="small"},{select_medium:size=="medium"},{sel_up:showoptions},{sel_down:!showoptions},{disabledinp:disabled}]'
       v-model="mag" 
       :placeholder='placeholder'   
       :disabled='disabledInput'   
       @click="isshow"
       >
       <transition name="fade"> 
          <ul :class='[{option_small:size=="small"},{option_medium:size=="medium"}]' v-if="showoptions" class="option">
            <li v-for="item in optionsInp" @click="text(item.name )">
              {{ item.name }}
            </li>
          </ul>
        </transition>
    </div>
    
</template>

<script>
export default {
  name: 'vselect',
  data () {
    return {
        showoptions:false,
        mag:'',
        disabledInput:false,
    }
  },
  methods:{
    text(value){
      this.mag = value;
      this.showoptions = false;
    },
    isshow(){
      this.showoptions=!this.showoptions;
    }
  },
  props:{
    name:String,
    id:String,
    value: {
      required: false
    },
    size: String,
    disabled: Boolean,
    placeholder:String,
    optionsInp:Array,
    multiple:{
        type: Boolean,
        default: false
    },
    clearable:{
        type: Boolean,
        default: false
    },
    filterable:{
        type: Boolean,
        default: false
    }
  },
  created:function(){
    this.options = this.optionsinp;
    if(this.disabled){
      this.disabledInput = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .select_small{
        width: 102px;
        height: 36px;
        line-height: 36px;
        
    }
    .select_medium{
        width: 222px;
        height: 36px;
        line-height: 36px;
        
    }
    // .sel_down{
    //     background: #fff url("../assets/select/down_icon.png") no-repeat right 15px center;
    //     background-size: 10px;
    // }
    // .sel_up{
    //     background: url(../assets/select/up_icon.png) no-repeat right 15px center;
    //     background-size: 10px;
    // }
    // .disabledinp{
    //     background: #E3E3E3 url("../assets/select/down_icon.png") no-repeat right 15px center;
    //     background-size: 10px;
    // }
    li{
      list-style: none;
    }
    input{
      border: none;
      outline: none;
      border: 1px solid #E3E3E3;
      border-radius: 4px;
      padding-left: 15px;
      cursor: pointer;
      
    }
    input:hover{
      border: none;
      outline: none;
      border: 1px solid #BFBFBF;
      border-radius: 4px;
      padding-left: 15px;
      cursor: pointer;
    }
    .option_small{
      max-width: 120px;
      li{
        width: 80px;
      }
    }
    .option_medium{
      max-width: 240px;
      li{
        width: 200px;
      }
    }
    .option{
      padding: 10px 0;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.16);
      border-radius: 4px;
      margin: 5px 0;
      li{
        
        font-family: PingFangSC-Regular;
        font-size: 14px;
        padding: 0 20px;
        color: #595959;
        line-height: 34px;
        cursor: pointer;
      }
      li:hover{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #595959;
        line-height: 34px;
        cursor: pointer;
        background: #F7F7F7;
      }
      li:active{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #428DD7;
        line-height: 34px;
        cursor: pointer;
        background: #F7F7F7;
      }
    }
</style>
