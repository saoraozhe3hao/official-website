import  "babel-polyfill"      // 兼容IE
import '../assets/mixin.less'
import '../assets/font/iconfont.css'
import Vue from 'vue'
import Vuex from 'vuex'
import Router from 'vue-router'
import router from './router'
import App from './App'
import I18n from './i18n'

Vue.use(Router);
Vue.use(Vuex);
Vue.prototype.$i18n = I18n;
Vue.prototype.$infinite = function () {
    let htmlElem = document.getElementsByTagName("html")[0];
    let htmlWidth = htmlElem.offsetWidth;
    let fontSize = (htmlWidth / 10).toFixed(2);
    htmlElem.style.fontSize = fontSize + "px"
};
Vue.prototype.$infinite();

const store = new Vuex.Store({
    state: {
        resize: 0,
        scroll: 0
    },
    mutations: {
        change (state) {}
    }
});
window.onresize = ()=>{
    Vue.prototype.$infinite();
    store.state.resize++;
    store.commit("change");
};
window.onscroll = ()=>{
    store.state.scroll++;
    store.commit("change");
};

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',         // 用template填充el
    components: {App}        // 列举 component，用于 template
});