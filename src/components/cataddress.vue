<template>
  <div class="address">
        <div class="check-step">
            <ul>
                <li class="current">地址确认</li>
                <li>查看订单</li>
                <li>支付</li>
                <li>订单确认</li>
            </ul>
        </div>
        <div class="checkout-title">
            <span>配送地址</span>
        </div>
        <div class="address-list-wrap">
            <div class="address-list">
                <ul>
                    <li v-for="(address,index) in tableList.result" :key="index">
                        <div class="list-rect">
                            <span>{{address.userName}}</span>
                            <span>{{address.streetName}}</span>
                            <span>{{address.tel}}</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
import Vue from 'vue'
    export default{
        data:function(){
            return{
                tableList:{}
            }
        },
        mounted:function(){
            this.$nextTick(function(){
                Vue.axios.get('../../static/data.json').then(res=>{
                    console.log(res.data.address[0]);
                    this.tableList=res.data.address[0];
                })
            })
        }
        
    }
</script>
<style lang="less" scoped>
@import "../assets/style.css";
    .address{
        width: 1000px;
        margin: 0 auto;
         .check-step{
            padding: 5px 0;
            ul{
            display: flex;
            direction:row;
            margin: 25px 0 50px 0;
                li{
                    flex: 1;
                    text-align: center;
                    position: relative;
                    padding: 10px;
                    border-bottom:2px solid #ccc;
                    font-size: 16px;
                    &.current{
                        border-color:#ee7a23;
                        color: #ee7a23; 
                        &:after{
                            background: #ee7a23;
                        }
                    }
                    &:after{
                        position: absolute;
                        bottom: -7px;
                        left: 50%;
                        margin-left: -7px;
                        content: "";
                        width: 14px;
                        height: 14px;
                        border-radius:50%;
                        background: #ccc;
                    }
                }
            }
        }
         .checkout-title{
             position: relative;
             margin-bottom:40px;
             text-align:center;
             span{
                 position: relative;
                 padding: 8px;
                 background-color:#fff;
                 font-family: "moderat", sans-serif;
                 font-weight: bold;
                 font-size: 20px;
                 color: #655f5f;
                 z-index:1; 
             }
             &:before{
                 position: absolute;
                 top: 50%;
                 left: 0;
                 content: "";
                 height: 1px;
                 background: #ccc;
                 z-index: 0;
                 width: 100%;
             }
         }
         .address-list-wrap{
             min-height: 300px;
             padding-bottom: 40px;
             ul{
                 display: flex;
                 direction:row;
                 
             }
             li{
                 position: relative;
                 flex: 1;
                 flex-wrap:wrap;
             }
             .address-list{

             }
         }
    }
   
    
   
    
   
    
</style>
