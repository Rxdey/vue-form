<template>
  <transition :name="position">
    <div ref="popup" :class="['rx-pop',position,full&&'full']" @click="clickClose" v-if="popShow">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
export default {
  name: "rxPop",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    full: {
      type: Boolean,
      default: false
    },
    clickToClose: {
      type: Boolean,
      default: false
    },
    mask:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      popShow: false
    }
  },
  mounted() {
    if (this.value) this.popShow = true;
  },
  methods: {
    clickClose() {
      if (this.clickToClose) {
        this.close()
      }
    }
    ,
    close() {
      this.popShow = false
    }
  },
  computed: {
  },
  watch: {
    'value'(val) {
      this.popShow = val
    },
    'popShow'(val) {
      this.$emit('input', val);
    }
  },
  components: {

  }
}
</script>
<style lang="less">
.rx-pop {
  position: fixed;
  z-index: 2001;
  text-align: center;
  &.full {
    height: 100%;
  }
  &.top {
    top: 0;
    width: 100%;
  }
  &.left {
    top: 0;
    left: 0;
    width: 100%;
  }
  &.bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &.right {
    top: 0;
    right: 0;
    width: 100%;
  }
}
.top-enter-active,
.top-leave-active {
  // opacity: 1;
  transition: 0.3s;
  transform: translateY(0);
}
.top-enter,
.top-leave-to {
  // opacity: 0;
  transition: 0.3s;
  transform: translateY(-100%);
}
.left-enter-active,
.left-leave-active {
  // opacity: 1;
  transition: 0.3s;
  transform: translateX(0);
}
.left-enter,
.left-leave-to {
  // opacity: 0;
  transition: 0.3s;
  transform: translateX(-100%);
}
.right-enter-active,
.right-leave-active {
  // opacity: 1;
  transition: 0.3s;
  transform: translateX(0%);
}
.right-enter,
.right-leave-to {
  // opacity: 0;
  transition: 0.3s;
  transform: translateX(100%);
}
.bottom-enter-active,
.bottom-leave-active {
  transition: 0.3s;
  transform: translateY(0%);
}
.bottom-enter,
.bottom-leave-to {
  transition: 0.3s;
  transform: translateY(100%);
}
</style>