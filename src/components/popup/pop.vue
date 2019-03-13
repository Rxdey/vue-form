<template>
  <transition :name="position">
    <div ref="popup" v-show="popShow" v-transferDom :class="['rx-pop',position,full&&'full']" @click="clickClose" :style="width? `width:${width}`: ''">
      <slot></slot>
    </div>
  </transition>
</template>
<script>
import rxMask from '../mixin/rxMask';

export default {
  name: 'rxPop',
  mixins: [rxMask],
  props: {
    value: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    width: {
      type: String,
      default: null
    },
    height: {
      type: String,
      default: null
    },
    full: {
      type: Boolean,
      default: false
    },
    clickToClose: {
      type: Boolean,
      default: false
    },
    // whether show mask
    mask: {
      type: Boolean,
      default: true
    },
    // click mask to close
    maskClose: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      popShow: false
    };
  },
  methods: {
    clickClose () {
      if (this.clickToClose) {
        this.close();
      }
    }
  }
};
</script>
<style lang="less">
.rx-pop {
  position: fixed;
  z-index: 2001;
  // text-align: center;
  // height: 100%;
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
    // width: 100%;
    height: 100%;
  }
  &.bottom {
    bottom: 0;
    left: 0;
    width: 100%;
  }
  &.right {
    top: 0;
    right: 0;
    // width: 100%;
    height: 100%;
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

// #rx-mask {
//   position: fixed;
//   z-index: 1000;
//   background: rgba(0, 0, 0, 0.5);
//   width: 100%;
//   height: 100%;
//   top: 0;
//   left: 0;
//   overflow: hidden;
// }
</style>
