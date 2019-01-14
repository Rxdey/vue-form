import wx from 'weixin-js-sdk';
// import { rxLocalStorage } from './util';
import http from './server/index';
import api from './interface/index';

const url = window.location.href.split('#')[0];
const obj = {
  title: '',
  desc: '',
  shareUrl: url,
  imgUrl: ''
};
export const wxShare = (cb = () => {}) => {
  http(api.wechat, { url }).then(res => {
    const data = res.data.data;
    wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.noncestr,
      signature: data.signature,
      jsApiList: ['chooseImage', 'uploadImage', 'downloadImage', 'previewImage', 'getLocation', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone', 'hideMenuItems']
    });
    cb();
  });
};

export const wxShareConfig = (options = obj) => {
  wx.ready(() => {
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: options.title,
      desc: options.desc,
      link: options.shareUrl,
      imgUrl: options.imgUrl,
      success() {}
    });
    // 分享给朋友
    wx.onMenuShareAppMessage({
      title: options.title,
      desc: options.desc,
      link: options.shareUrl,
      imgUrl: options.imgUrl,
      success() {}
    });
    // 分享给QQ
    wx.onMenuShareQQ({
      title: options.title,
      desc: options.desc,
      link: options.shareUrl,
      imgUrl: options.imgUrl,
      success() {}
    });
    // 分享给微博
    wx.onMenuShareWeibo({
      title: options.title,
      desc: options.desc,
      link: options.shareUrl,
      imgUrl: options.imgUrl,
      success() {}
    });
    // 分享给空间
    wx.onMenuShareQZone({
      title: options.title,
      desc: options.desc,
      link: options.shareUrl,
      imgUrl: options.imgUrl,
      success() {}
    });
  });
};
