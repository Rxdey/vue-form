import rxMask from './rx-mask';

export default {
  props: {
    maskState: true
  },
  watch: {
    mask() {
      this.renderMask(this);
    },
    value(val) {
      this.popShow = val;
      this[val ? 'open' : 'close']();
    },
    popShow(val) {
      this.$emit('change', this.popShow);
    }
  },
  methods: {
    open() {
      this.renderMask();
    },
    close() {
      this.renderMask();
      rxMask.close(this);
    },
    renderMask() {
      if (this.mask) {
        rxMask.open(this);
      } else {
        rxMask.close(this);
      }
    }
  }
};
