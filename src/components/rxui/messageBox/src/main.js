import Vue from 'vue'
import MessageBox from './messageBox.vue'

function merge(target){
  for(let i=0;i<arguments.length;i++){
    let parme = arguments[i]||{};
    for(let item in parme){
      if(parme.hasOwnProperty(item)){
        let val = parme[item];
        if(val!== undefined){
          target[item] = val
        }
      }
    }
  }
  return target
}

let instance;
let modalBox = Vue.extend(MessageBox)

let initInstance =()=>{
  instance = new modalBox({
    el:document.createElement('div')
  });
  document.body.appendChild(instance.$el)
}
let modal = (opt={})=>{
  initInstance();
  merge(instance,initInstance.$data,opt);
  return new Promise((resolve,reject)=>{
    instance.msgboxShow = true;
    let success = instance.success;
    let cancel = instance.cancel;
    instance.success=()=>{
      success();
      resolve('success')
    }
    instance.cancel=()=>{
      cancel();
      reject('cancel')
    }
  })
}

export default modal