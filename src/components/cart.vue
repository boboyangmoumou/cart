<template>
  <div class="cart">
      <div class="cart-heading">
          <span class="headcart">购物车</span>
          <span class="pull-right"><strong>总计:{{acountPrice | Currency}}</strong></span>
      </div>
      <div class="cartBody">
          <ul>
              <li v-for="(value,index) in cart" :key="index">
                  <span>Apple/苹果 iphone6s</span>
                  <div class="type">
                        <span v-text="value.type"></span>
                        <span v-text="value.activeStyle"></span>
                  </div>
                  <div class="count">
                        <span v-text="value.count"></span>
                  </div>
                  <div class="price">
                        <span>{{value.price | Currency}}</span>
                  </div>
                  <div class="delete" @click="deletegood(index)">X</div>
              </li>
          </ul>
      </div>
      <div class="footer-btn" @click="clearing()" v-if="cart.length">
          <button class="btn-block">
              结算
          </button>
      </div>
      <div v-else class="shopcartEmpty">
            <span>这里啥都没有~~~</span>
      </div>
  </div>
</template>
<script>
import Vue from 'vue'
import {mapGetters,mapMutations} from 'vuex'
    export default{
        data:function(){
            return{
                value:[],
                user_id:[]
            }
        },
        computed:{
            acountPrice:function(){
                let totalPrice=0;
                for(let i in this.cart){
                    totalPrice +=this.cart[i].price;
                }
                return totalPrice
            },
              ...mapGetters([
                    'cart'
                ])
        },
        created(){
            console.log(this.cart);
        },
        methods:{
            deletegood(index){
                this.Setdeletegood(index);
            },
            clearing(){
                window.location="http://localhost:8080/#/cataddress";
            },
            ...mapMutations({
                 Setdeletegood:'DELETEGOOD'
            })
        },
        filters:{
            Currency:function(val){
                return val + "元";
            }
        }
    }

</script>
<style>
.cart{
    width: 1000px;
    margin: 20px auto;
    border-color: #ebccd1;
}
.cart-heading{
    display: flex;
    direction: row;
    line-height: 20px;
    padding: 10px;
    background-color: #ebccd1;
    color: #a94442;
}
.cart-heading .headcart{
    flex: 1;
}
.cart-heading .pull-right{
    flex: 0 0 1;
}
.cartBody{ 
    padding: 5px;
}
.cartBody ul li{
    padding: 4px 8px;
}
.footer-btn{
    margin: 0 auto;
}
.cartBody {
    min-height: 40px;
}
.cartBody li{
   display: flex;
   direction: row;
}
.cartBody li .type{
    flex: 1 0 0;
    text-align: center;
    background-color: #5cb85c;
    margin-left: 20px;
    color: #fff;
    border-radius: 6px;
}
.cartBody li .count{
    width: 20px;
    text-align: center;
    color: #fff;
    background-color: #d9534f;
    margin-left: 10px;
    border-radius: 6px;
}
.cartBody li .price{
    flex: 1 0 0;
    padding: 0;
    text-align: center;
    color: #f0595b;
} 
.cartBody li .delete{
    color: #f0595b;
    width: 20px;
    text-align: center;
    background: #f0595b;
    color: #fff;
    border-radius: 6px;
    font-weight: 600;
    cursor: pointer;
}
.shopcartEmpty{
    text-align: center;
}
</style>
