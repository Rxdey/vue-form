import toast from './toast/index';
import rxGroup from './group/index';
import rxInput from './input/index';
import rxSelect from './select/index';

const components = [rxGroup, rxInput];

const install = function(Vue) {
  if (install.installed) return;
  components.map(component => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  rxGroup,
  toast,
  rxInput,
  rxSelect
};
export default install;
