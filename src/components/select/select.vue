<template>
  <div class="rx-select">
    <rx-cell :label="label" :value="currentValue"></rx-cell>
    <popup v-model="popupShow" position="bottom" height="300px"></popup>
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
    }
  },
  data () {
    return {
      popupShow: false,
      currentValue: ''
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
  },
  components: {
    popup,
    rxCell
  }
};
</script>

<style lang="less">
</style>
