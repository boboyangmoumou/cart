<template>
    <div class="container">
        <div class="gallery">
            <img :src="result.activeStyleUrl"  class="img-responsive">
        </div>
        <div class="row">
            <div class="detail">
                <h3 class="name">{{result.name}}</h3>
                <div class="options">
                    <dl class="describe">
                        <dt>描述:</dt>
                        <dd><span v-text="result.desc"></span></dd>
                    </dl>
                    <dl class="price">
                        <dt>价格:</dt>
                        <dd  class="pomegranage"><strong>￥</strong><span v-text="result.price"></span></dd>
                    </dl>
                    <div class="guise">
                        <span class="text">外观:</span>
                        <ul>
                            <li v-for="(value,key) in result.style" :key="key" @click="changeStyle(key)" 
                            :class="{active:result.activeStyleUrl == value.url}" class="iphoneColor option">
                                <span v-text="value.color"></span>
                            </li>
                         </ul>
                    </div>
                    <div class="capacity">
                        <span class="text">存储容量:</span>
                        <ul>
                            <li v-for="(value,key) in result.storage" :key="key"  @click="changeSize(key)" 
                            :class="{active:result.price == value.money}" class="iphoneColor option">
                            <span v-text="value.size"></span>
                            
                            </li>
                        </ul>
                    </div>
                </div>
                <button class="btn btn-block" @click="addshopcart()" :disabled="result.isSelected">
                    <span class="add-shopping-cart">加入购物车</span>
                </button>
            </div>
        </div>
        <keep-alive>
        <cart :cart="cart"></cart>
        </keep-alive>
    </div>
</template>
<script>
import Vue from 'vue'
import {bus} from '../Bus'
import cart from '@/components/cart.vue'
    export default{
        props:{
            result:{
                type:Object
            }
        },
        data:function(){
            return {
                flag:false,
                count:1,
                cart:[],
                type:false    
            }
        },
       destroyed(){
            bus.$emit("user_id",this.cart);
       },
       methods:{
           changeStyle(key){
               if(this.flag==false){
                    this.result.activeStyleUrl=this.result.style[key].url;
                    this.result.style.color = this.result.style[key].color;
               }
                  
           },
           changeSize(key){
                if(this.flag==false){
                    this.result.price = this.result.storage[key].money;
                    this.result.size = this.result.storage[key].size;
                    this.result.isSelected=false;
               }
                this.flag==true
           },
           addshopcart(){
                const activeStyle = this.result.style.color === undefined ?  '银色': this.result.style.color;
                const type = this.result.size;
                const price =  this.result.price;
                const cartInfo = {
                    activeStyle,
                    type,
                    count:1,
                    price
                }
                this.cart.push(cartInfo);
                console.log(this.cart);
           }
       },
       components:{
           'cart':cart
       }
    }
</script>
<style>
.container{
    display: flex;
    direction: row;
    /*width: 1000px;*/
    /*margin: 0 auto;*/
}
.container .row{
    margin-top: 100px;
}
.container .row .name{
    text-align: center;
    font-size: 20px;
}
.container .row dl{
    height: 30px;
    line-height: 30px;
}
.container .row dl dt{
    display: inline-block;
    width: 60px;
    text-align: right;
}
.container .row dl dd{
    display: inline-block;
}
.pomegranage span{
    color: #f0595b;
}
.option {
    display: inline-block;
    height: 30px;
    padding:  0 5px;
    line-height: 30px;
    text-align: center;
    border: 1px solid #eee;
    font-size: 13px;
    cursor: pointer;
    margin-left: 5px;
}
.guise, .capacity, .describe, .price{
    padding: 10px 0;
    font-size: 0;
}
.guise ul{
    display: inline-block;
}
.capacity ul{
    display: inline-block;
}
.row .text{
    display: inline-block;
    width: 60px;
    text-align: right;
}
.guise ul .active{
    border:1px solid #f0595b; 
}
.capacity ul .active{
    border:1px solid #f0595b; 
}
.btn-block{
    width: 100%;
    border: none;
    padding: 5px;
    background-color: #f0595b;
    cursor:pointer;
    outline: none;
}
.add-shopping-cart{
    color: #fff;
    font-weight: 600;
    font-size: 14px;
}
.btn[disabled]{
    cursor: not-allowed;
    opacity: .65;
}
</style>
