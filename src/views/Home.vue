<template>
  <div class="page home">
    <div class="test">
      <rx-group ref="group" title="Test">
        <rx-input label="姓名" placeholder="请输入用户名" v-model="value3">
        </rx-input>
        <rx-input label="身份证" placeholder="请输入用户名" v-model="value" required>
        </rx-input>
        <rx-input label="手机号" placeholder="请输入手机号" v-model="phone" required isType="phone" :max="11">
        </rx-input>
        <rx-input label="验证码" placeholder="请输入验证码" v-model="value2" required :isType="isOneTwoThree" :min="3" :max="3">
          <img slot="right" src="https://ws1.sinaimg.cn/large/005O2C54gy1fzf7lrosi8j304n02174i.jpg" alt="" style="padding:5px;">
        </rx-input>
        <rx-select label="类型" placeholder="请选择类型" required v-model="select" @close="selectChange" :data="selectData" dataKey="key" dataName="value"></rx-select>
      </rx-group>
      <div class="btn-box">
        <button class="rx-button" @click="handleSubmit">验证</button>
      </div>
    </div>
  </div>
</template>

<script>
import { rxGroup, rxInput, rxSelect } from '@/components';

export default {
  name: 'home',
  data () {
    return {
      value: '',
      value3: '',
      value2: '',
      phone: '',
      select: '',
      selectData: [
        { key: '01', value: '第一' },
        { key: '02', value: '第二' },
        { key: '03', value: '第三' }
      ],
      isOneTwoThree: (val) => ({
        valid: val === '123',
        message: '请输入123'
      })
    };
  },
  methods: {
    async handleSubmit () {
      const vaild = await this.$refs.group.validate();
      if (!vaild) return false;
      this.toast('校验通过');
    },
    selectChange () {

    }
  },
  components: {
    rxGroup,
    rxInput,
    rxSelect
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
.btn-box {
  padding: 15px;
}
.rx-button {
  width: 100%;
  height: 50px;
  background: #26a2ff;
  border: none;
  outline: none;
  -webkit-appearance: none;
  border-radius: 4px;
  color: #fff;
  font-size: 18px;
  &:active {
    background: fade(#26a2ff, 80%);
  }
}
</style>
