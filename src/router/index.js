import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import cart from '@/components/cart'
import cataddress from '@/components/cataddress'
Vue.use(Router)
Vue.config.debug = true;
export default new Router({
    routes: [{
        path: '/index',
        name: 'index',
        component: index
    }, {
        path: '/cart',
        name: 'cart',
        component: cart
    }, {
        path: '/cataddress',
        name: 'cataddress',
        component: cataddress
    }]
})