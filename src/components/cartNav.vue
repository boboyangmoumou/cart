<template>
  <div class="tab">
    <div class="tab-item">
      <router-link to="/index">首页</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/cart">购物车</router-link>
    </div>
    <div class="tab-item">
      <router-link to="/cataddress">配送地址</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
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
}
.tab-item a:active{
  color: rgb(240,20,20);
}
</style>
