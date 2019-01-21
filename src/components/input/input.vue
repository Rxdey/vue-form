<template>
  <div class="rx-input" :class="{required: required}">
    <div class="rx-input__title">
      <div class="rx-input__title--left" v-show="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="rx-input__title--label"><label :for="inputId">{{label}}</label></div>
    </div>
    <div class="rx-input__body">
      <input :type="type" :id="inputId" :placeholder="placeholder" :maxlength="max" :name="name" v-model="currentValue">
    </div>
    <div class="rx-input__right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
import { mobileReg, noChinese, createRands } from '@/common/util';
import Bus from '../tool/bus';

const validate = (type, value) => {
  const valids = {
    phone: (val) => ({ valid: mobileReg.test(val), message: '请输入正确的手机号' }),
    noChinese: (val) => ({ valid: noChinese.test(val), message: '请输入数字或字母' })
  };
  return valids[type](value);
};

export default {
  name: 'rx-input',
  props: {
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    max: {
      type: String,
      default: '400'
    },
    required: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: [String, Number],
    isType: [Function, String]
  },
  data () {
    return {
      currentValue: null,
      isFocus: false,
      valid: true,
      errorMessage: null,
      inputId: createRands(5)
    };
  },
  mounted () {
    this.currentValue = this.value;
    Bus.$emit('addInput', this);
  },
  beforeDestroy () {
    Bus.$emit('removeInput', this);
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val);
    },
    value (val) {
      this.currentValue = val;
    }
  },
  methods: {
    reset () {
      this.currentValue = '';
      this.valid = true;
    },
    focus () {
      this.$refs.input.focus();
      this.isFocus = true;
      this.$emit('onFocus', this.currentValue);
    },
    blur () {
      this.$refs.input.blur();
      this.isFocus = false;
      this.onValid();
      this.$emit('onBlur', this.currentValue);
    },
    change () {
      this.onValid();
      this.$emit('onChange', this.currentValue);
    },
    enter () {
      this.$emit('enter', this.currentValue);
    },
    // 表单验证，通过isType传递，内部定义phone(国内手机号)，noChinese(不允许中文输入)，支持自定义函数，返回blooean
    onValid () {
      if (this.required) {
        this.valid = !!this.currentValue;
        this.errorMessage = `${this.label}不能为空`;
      }
      if (this.isType) {
        let validFun = null;
        if (typeof this.isType === 'string') {
          validFun = validate(this.isType, this.currentValue);
        } else {
          validFun = this.isType(this.currentValue);
        }
        this.valid = validFun.valid;
        this.errorMessage = validFun.message;
      }
    }
  }
};
</script>

<style lang="less">
@import url("../../assets/css/public.less");
.flex-row {
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;
}
.rx-input {
  width: 100%;
  font-size: 14px;
  padding: 10px 15px;
  background: #fff;
  box-sizing: border-box;
  &.required {
    &::after {
      content: "*";
      position: absolute;
      color: @color-red;
      line-height: 24px;
      top: 59%;
      transform: translateY(-50%);
      left: 5px;
    }
  }
  .flex-row;
  &__title {
    .flex-row;
    max-width: 90px;
    flex: 1;
    &--left {
      margin-right: 5px;
    }
  }
  &__body {
    width: 100%;
    flex: 1;
    padding: 0 10px;
    input {
      border: 0;
      margin: 0;
      padding: 0;
      width: 100%;
      resize: none;
      display: block;
      color: #323233;
      box-sizing: border-box;
      background-color: transparent;
      outline: none;
      line-height: 24px;
      position: relative;
    }
  }
  &__right {
    position: relative;
  }
}
</style>
