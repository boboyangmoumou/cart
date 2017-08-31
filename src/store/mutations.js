import * as types from './mutations-type'

const matutions = {
    [types.ADD_SHOPCART](state, cartInfo) {
        //接收两个参数，第一个是state，第二个是我们提交mutation是的参数payload
        state.cartInfo = cartInfo
    }
}
export default matutions