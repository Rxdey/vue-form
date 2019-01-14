<template>
<transition name="fade">
  <div :class="['rx-msgbox',center&&'is-center']" v-if="msgboxShow">
    <div class="rx-msgbox--content">
      <div class="rx-msgbox--content__title">
        <h4>{{title}}</h4>
      </div>
      <div class="rx-msgbox--content__body">
        <p>{{message}}</p>
        <div class="rx-msgbox--confirm">
          <!-- <input type="text"> -->
        </div>
      </div>
      <div class="rx-msgbox--content__foot">
        <button class="rx-msgbox--sure" @click="success">{{sureName}}</button>
        <button v-if="isCancel" class="rx-msgbox--close" @click="cancel">{{closeName}}</button>
      </div>
    </div>
  </div>
</transition>
</template>

<script type="text/ecmascript-6">
export default {
  name:'msgbox',
  data() {
    return {
      message:'',
      title:'',
      msgboxShow:false,
      btnSureName:'确定',
      btnCloseName:'取消',
      options:'',
      isCancel:true,
      center:false
    }
  },
  computed:{
    sureName(){
      if(this.btnSureName.trim()!=''){
        return this.btnSureName
      }else{
        return '确定'
      }
    },
    closeName(){
      if(this.btnSureName.trim()!=''){
        return this.btnCloseName
      }else{
        return '取消'
      }
    }
  },
  methods:{
    success(e){
      this.hide()
    },
    cancel(e){
      this.hide()
    },
    show(){
      this.msgboxShow=true;
    },
    hide(){
      this.msgboxShow=false;
    }
  }
}
</script>

<style lang="less">
@import url("../../style/default.less");
.rx-btn {
  border: none;
  outline: none;
  background: #fff;
  width: 50%;
  padding: 10px;
  &:nth-child(2){border-left: 1px solid #ddd}
  flex: 1;
  box-sizing: border-box;
}
.rx-msgbox {
  opacity: 1;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-size: 16px;
  transition: 0.5s;
  &.is-center{text-align: center}
  &--content {
    min-width: 70%;
    max-width: 80%;
    background: #fff;
    border-radius: 4px;
    padding: 10px 0 0 0;
    overflow: hidden;
    &__title {
      padding: 5px 15px 0 15px;
    }
    &__body {
      font-size: 1em;
      padding: 15px;
      p{margin: 0}
    }
    &__foot {
      display: flex;
      flex-flow: row;
      border-top: 1px solid #ddd
    }
    h4 {
      margin: 0;
    }
  }
  &--sure {
    .rx-btn;
    &:active{background: #eee}
  }
  &--close {
    .rx-btn;
    background: @color-red;
    color: #fff;
    &:active{background: darken(@color-red,-10%)}
  }
}
.fade-enter-active,
.fade-leave-active {
  opacity: 1;
  // transition: 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  // transition: 0.3s;
}

</style>
