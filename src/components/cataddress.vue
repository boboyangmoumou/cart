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
                    <li v-for="(address,index) in tableList.result" :key="index" class="listborder">
                        <div class="list-rect">
                            <span>{{address.userName}}</span>
                            <span>{{address.streetName}}</span>
                            <span>{{address.tel}}</span>
                        </div>
                        <div class="addressOption">
                            <a href="javascript:;" class="icon-pencil"></a>
                        </div>
                        <div class="addressdetele">
                            <a href="javascript:;" class="icon-bin"></a>
                        </div>
                    </li>
                    <li class="add-new">
                        <div class="add-new-inner">
                            <i class="icon-plus"></i>
                            <p>添加新地址</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="add-mare">
                <a href="javascript:;">
                    more
                    <i class="i-up-down"></i>
                </a>
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
        computed:{
            
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
                 display: -ms-flexbox;
                 direction:row;
                 flex-wrap:wrap;
                 li{
                    position: relative;
                    display: inline-block;
                    height: 82px;
                    overflow: hidden;
                    margin: 10px 2% 10px 0;
                    padding: 20px 20px 40px 20px;
                    background-color: #fff;
                    border: 2px solid #e9e9e9;
                    cursor: pointer;
                    width: 23.5%;
                    .list-rect{
                        display: flex;
                        flex-direction: column;
                        span{
                            padding: 8px;
                            color: #605F5F;
                            font-size: 16px;
                            font-family: "微软雅黑";
                            &:first-child{
                                font-size: 20px;
                                padding: 0 8px 8px 8px;
                            }
                            &:last-child{
                                padding: 16px 8px 8px 8px;
                            }
                        }
                    }
                    &.listborder{
                        border-color: #EE7A23;
                        border-width: 2px;
                    }
                    .addressOption{
                        position: absolute;
                        right: 20px;
                        top: 25px;
                        height: 20px;
                        width: 20px;
                        .icon-pencil{
                            color: #333;
                            &:hover{
                                color: #EE7A23;
                            }
                        }
                    }
                    .addressdetele{
                        position: absolute;
                        right: 20px;
                        bottom: 14px;
                        height: 20px;
                        width: 20px;
                        .icon-bin{
                            color: #333;
                            &:hover{
                                color: #EE7A23;
                            }
                        }
                    }
                    .add-new-inner{
                        padding-top:20px;
                        text-align: center;
                        .icon-plus{
                            font-size: 40px;
                            color: #605F5F;
                        }
                        p{
                            margin-top: 10px;
                        }
                    }
                }
             }
             .add-mare{
                 margin-top: 10px;
                 text-align: center;
                 a{
                     color: #EE7A23;
                     text-decoration: none;
                 }
             }
            
         }
    }
   
    
   
    
   
    
</style>
