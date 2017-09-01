import * as types from './mutations-type'

const matutions = {
    [types.ADD_SHOPCART](state, cart) {
        //接收两个参数，第一个是state，第二个是我们提交mutation是的参数payload
        state.cart = Object.assign([], cart)
    },
    [types.DELETEGOOD](state, index) { //这里index就是payload所要删除的索引数，在cart.vue可以看到参
        state.cart.splice(state.cart.indexOf(index), 1)
    }
}
export default matutions