<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      isLoading: true,
      deviceIsPC: isPC()
    };
  },
  computed: {}
};
</script>
<style lang="less">
@import url("./assets/css/public.less");
#app {
}
</style>
