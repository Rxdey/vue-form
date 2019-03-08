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
      this.$emit('input', val);
    }
  },
  mounted() {
    this.popShow = this.value;
    this.open();
  },
  methods: {
    maskClick() {
      if (this.maskClose) {
        this.popShow = false;
      }
    },
    open() {
      this.renderMask();
    },
    close() {
      rxMask.close(this);
      this.$emit('close');
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
