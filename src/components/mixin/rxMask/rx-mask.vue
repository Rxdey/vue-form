<template>
  <transition name="fade">
    <div id="rx-mask" v-show="show" @click="()=>{$emit('maskClick')}"></div>
  </transition>
</template>

<script>

export default {
  name: 'rx-mask',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    };
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  watch: {
  },
  methods: {
  },
  components: {
  }
};
</script>

<style lang="less">
.rx-mask {
  z-index: 2000;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
