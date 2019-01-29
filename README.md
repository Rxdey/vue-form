## vue-from 表单组件

### 适用于移动端

> 紧(san)锣(xin)密(er)鼓(yi)的开发中 😆😆😆

```html
<rx-group ref="group" title="Test">
  <rx-input label="姓名" placeholder="请输入用户名" v-model="value3"></rx-input>
</rx-group>
```

> rxInput 组件需放置在 rxGroup 中

![大概长这样](https://ws1.sinaimg.cn/large/005O2C54gy1fziwui469xj30bc0ciaa9.jpg)

> 验证

```javascript
 async handleSubmit() {
      const vaild = await this.$refs.group.validate();
      if (!vaild) return false;
      this.toast('校验通过');
    }
```

## example

[这里](https://rxdey.github.io/vue-form/example/index.html)
