<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/index">首页</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/cart">购物车<span class="goodCount" v-if="cart.length">{{cart.length}}</span></router-link>
    </div>
    <div class="tab-item">
      <router-link to="/cataddress">配送地址</router-link>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed:{
      ...mapGetters([
      'cart'
    ])
  },
  created(){
    console.log(this.cart.length);
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab{
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid rgba(7,17.27.0.1);
  background: #eee;
}
.tab-item{
  flex:1;
  text-align: center;
}
.tab-item a{
  text-decoration: none;
  display: block;
  color: #000;
  font-size: 14px;
  line-height: 40px;
  position: relative;
}
.tab-item a:active{
  color: rgb(240,20,20);
}
.goodCount{
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  width: 24px;
  height: 20px;
  line-height: 20px;
  border-radius:8px;
  background-color: #d9534f;
  color: #fff; 
  display: inline-block;
  margin-left: 8px;
  position: absolute;
  top: 11px;
}
.goodCount:before{
  font-size: 0;
}
</style>
