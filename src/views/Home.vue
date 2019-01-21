<template>
  <div class="page home">
    <div class="test">
      <rx-group title="group">
        <rx-input label="身份证" placeholder="请输入用户名" v-model="value" required>
        </rx-input>
      </rx-group>
    </div>
  </div>
</template>

<script>
import { rxGroup, rxInput } from '@/components';

export default {
  name: 'home',
  props: {},
  data () {
    return {
      value: ''
    };
  },
  computed: {},
  created () { },
  mounted () { },
  watch: {},
  methods: {
  },
  components: {
    rxGroup,
    rxInput
  }
};
</script>

<style lang="less">
.getCode {
  background: #26a2ff;
  outline: none;
  // width: 80px;
  border: 1px solid #e5e5e5;
  color: #fff;
  padding: 10px 15px;
  border-radius: 4px;
}
</style>
