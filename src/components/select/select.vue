<template>
  <div class="rx-select" :class="{required: required, 'has-error': !valid}">
    <rx-cell :label="label" @click="handleShow">
      <div class="placeholder" slot="body">
        {{valueFormat || placeholder}}
      </div>
      <div class="right" slot="right">
        <i class="iconfont icon-right"></i>
      </div>
      <p slot="error">{{errorMessage}}</p>
    </rx-cell>
    <popup ref="popup" v-model="popupShow" position="bottom" height="300px" @close="popChange">
      <div class="rx-select__list">
        <div class="rx-select__list--option" v-for="(item, index) in currentData" :key="index" @click="chose(item, index)">
          <p class="option-content">{{item}}</p>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import popup from '../popup/pop.vue';
import rxCell from '../cell/cell.vue';
import Bus from '../tool/bus';

export default {
  name: 'rx-select',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String],
    data: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: ''
    },
    dataKey: {
      type: String,
      default: 'key'
    },
    dataName: {
      type: String,
      default: 'value'
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      popupShow: false,
      currentValue: '',
      valid: true,
      errorMessage: ''
    };
  },
  computed: {
    isDataString () {
      return this.data.some(item => typeof item === 'string');
    },
    currentData () {
      return this.isDataString ? this.data : this.data.map(item => item[this.dataName]);
    },
    valueFormat () {
      if (!this.currentValue) return '';
      if (this.isDataString) return this.currentValue;
      const cur = this.data.filter(item => item[this.dataKey] === this.currentValue);
      return cur[0][this.dataName];
    }
  },
  mounted () {
    this.currentValue = this.value;
    Bus.$emit('addInput', this);
  },
  beforeDestroy () {
    Bus.$emit('removeInput', this);
  },
  watch: {
    value (val) {
      this.currentValue = val;
    },
    currentValue (val) {
      this.$emit('input', val);
      this.onValid();
      this.$emit('change', val);
    }
  },
  methods: {
    chose (item, index) {
      this.popupShow = false;
      this.isDataString ? this.currentValue = item : this.currentValue = this.data[index][this.dataKey];
    },
    popChange (val) {
      this.popupShow = val;
      this.$emit('close', val);
    },
    handleShow () {
      this.popupShow = true;
    },
    blur () {
      this.onValid();
      this.$refs.popup.close();
      this.$emit('onBlur', this.currentValue);
    },
    focus () {
      this.popupShow = true;
      this.$emit('onFocus', this.currentValue);
    },
    reset () {
      this.currentValue = '';
      this.valid = true;
    },
    onValid () {
      if (this.required && !this.currentValue) {
        this.valid = false;
        this.errorMessage = `${this.label}不能为空`;
        return false;
      }
      this.valid = true;
    }
  },
  components: {
    popup,
    rxCell
  }
};
</script>

<style lang="less">
@import url("../../assets/css/public.less");
.rx-select {
  position: relative;
  &.has-error {
    color: @color-red;
    input {
      color: @color-red;
    }
    .error-message {
      display: block;
    }
  }
  &.required {
    &::after {
      content: "*";
      position: absolute;
      color: @color-red;
      top: 59%;
      transform: translateY(-50%);
      left: 5px;
    }
  }
  .placeholder {
    color: #999;
  }
  &__list {
    background: #fff;
    max-height: 40%;
    overflow: auto;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;
    &--option {
      font-size: 16px;
      border-bottom: 1px solid #e5e5e5;
      padding: 10px 15px;
      &:active {
        background: darken(#fff, 5%);
      }
    }
  }
}
</style>
