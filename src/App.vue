<template>
  <div id="app">
    <cartNav></cartNav>
    <transition name="slide-down">
             <router-view :result="result"  keep-alive></router-view>
    </transition>
  </div>
</template>

<script>
import cartNav from '@/components/cartNav.vue'
import Vue from 'vue'
export default {  
  data:function(){
    return{
        result:{}
    }
  },
  mounted:function(){
           var _this = this;
           Vue.axios.get('../../static/data.json').then(res=>{
               console.log(res.data.iPhone6S[0]);
               this.result=res.data.iPhone6S[0];
           }).catch(err=>{
               console.log(err)
           })
  },
  components:{
    'cartNav':cartNav
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  list-style: none;
  font-weight: 200;
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  text-decoration: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.slide-down-enter-active,.slide-down-leave-active{
  transition: 1.8s all ease;
  opacity: 0.6;
  transform: translate3d(0,-150px,0);
}
.slide-down-enter,.slide-down-leave{
  opacity: 1;
  transform: translate3d(0,150px,0);
}
</style>
