<template>
  <div class="rx-select" :class="{required: required, 'has-error': !valid}">
    <rx-cell :label="label" @click="handleShow">
      <div class="placeholder" slot="body">
        {{currentValue}}
      </div>
      <div class="right" slot="right">
        <i class="iconfont icon-right"></i>
      </div>
    </rx-cell>
    <popup ref="popup" v-model="popupShow" position="bottom" height="300px" @close="popChange">
      <div class="rx-select__list">
        <div class="rx-select__list--option" v-for="(item,index) in data" :key="index">
          <p class="option-content">{{item}}</p>
        </div>
      </div>
    </popup>
  </div>
</template>
<script>
import popup from '../popup/pop.vue';
import rxCell from '../cell/cell.vue';

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
    required: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      popupShow: false,
      currentValue: '',
      valid: true
    };
  },
  computed: {
  },
  created () {
    this.currentValue = this.value || this.placeholder;
  },
  mounted () {
  },
  watch: {
  },
  methods: {
    getPopup() {
      return this.$refs.popup;
    },
    popChange(val) {
      this.popupShow = val;
      this.$emit('close', val);
    },
    handleShow() {
      this.popupShow = true;
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
  &__list{
    background: #fff;
    max-height: 40%;
    overflow: auto;
    // position: absolute;
    // bottom: 0;
    // left: 0;
    width: 100%;
    &--option{
      font-size: 16px;
      border-bottom: 1px solid #e5e5e5;
      padding: 10px 15px;
      &:active{
        background: darken(#fff,5%);
      }
    }
  }
}
</style>
