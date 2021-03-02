import Vue from 'vue';
import App from './App'

new Vue({
    //el:'#app', //mount vue to app id element
    render:h => h(App) //h stands for createElement function. pass h to your function,than pass App to it in your func
}).$mount('#app') //another way of mounting vue