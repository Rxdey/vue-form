import rxMaskComponent from './rx-mask.vue';
import mount from './mount';
import Bus from '../../tool/bus';

export default {
  open(vm, config = {}) {
    this.update(config);
  },
  close(vm) {},
  update(config = {}) {
    let { $mask } = Bus;
    if (!$mask) {
      $mask = mount(rxMaskComponent, config);
      Bus.$mask = $mask;
    }
  }
};
