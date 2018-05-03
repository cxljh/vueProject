<template>
  <label
    class="yu-radio"
    :class="[
      border && size ? 'yu-radio-' + size : '', 
      { 'is-disabled': isDisabled },   
      { 'is-focus': focus },
      { 'is-bordered': border },
      { 'is-checked': model === label }
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = label"
  >
    <span class="yu-radio__input"
      :class="{       
        'is-disabled': isDisabled,
        'is-checked': model === label
      }"
    >
      <span class="yu-radio__inner"></span>
      <input
        class="yu-radio__original"
        :value="label"
        type="radio"
        aria-hidden="true"
        v-model="model"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
        :name="name"     
        :disabled="isDisabled"  
      >
    </span>
    <span class="yu-radio__label">
      <slot></slot>      
    </span>
  </label>
</template>
<style>
  .yu-radio{
    font-size: 14px;
    color: #606266;
    cursor: pointer;
  }
  .yu-radio__input.is-checked+.yu-radio__label {
    color: #409eff;
  }
  .is-bordered {
    display: inline-block;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    height: 40px;
    line-height: 40px;
    padding: 0 10px;
}
.yu-radio.is-bordered.is-checked {
    border-color: #409eff;
}
.yu-radio-medium.is-bordered {    
    border-radius: 3px;
    height: 36px;
    line-height: 36px;
}
.yu-radio-small.is-bordered {   
    border-radius: 3px;
    height: 32px;
    line-height: 32px;
}
.yu-radio-mini.is-bordered {    
    border-radius: 3px;
    height: 28px;
    line-height: 28px;
}
.yu-radio.is-bordered.is-disabled {
    cursor: not-allowed;
    border-color: #ebeef5;
}
.yu-radio__input.is-disabled+span.yu-radio__label {
    color: #c0c4cc;
    cursor: not-allowed;
}
</style>

<script>
 

  export default {
    name: 'yuRadio',
    props: {
      value: {},
      label: {},
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },

    data() {
      return {
        focus: false
      };
    },
    computed: {
      model: {
        get() {
          return  this.value;
        },
        set(val) {
            this.$emit('input', val);
        }
      },
      isDisabled() {
        return  this.disabled ;
      },
    },

    methods: {
      handleChange() {
        this.$nextTick(() => {
          this.$emit('change', this.model);
        });
      }
    }
  };
</script>
