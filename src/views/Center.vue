<template>
    <div class="center">
        <top/>
        <div class="center-con">
            <div class="center-mask"></div>
            <div class="center-content">
                <div class="center-tip">消息只保留三天，请及时查看哦！</div>
                <div class="center-icon">
                    <div class="icon-person">
                        <div class="icon-person-img">
                            <img src="../../static/img/personal-center/liao1@2x.png" alt="">
                        </div>
                        <div class="icon-person-name">
                            SAKURA
                        </div>
                        <div class="icon-person-area">
                            广东省
                        </div>
                    </div>
                    <div class="icon-like" @mouseenter='showScore' @mouseleave='noScore'>
                        <img src="../../static/img/personal-center/like1@2x.png" alt="" srcset="">
                        <span class="icon-like-score" v-show="show">当前星值：{{score}}</span>
                    </div>
                </div>
                <div class="center-list">
                    <vue-scroll :ops="ops" class="con">
                        <div class="container" v-for="(item, index) in list" :key="'item'+index"> 
                            <div class="con-li">
                                <div class="con-li-img">
                                    <img :src="item.imgUrl" alt="">
                                    <i class="icon-msg" v-show="item.statue"></i>
                                </div>
                                
                                <div class="con-li-text">
                                    {{item.text}}
                                </div>
                                <div class="con-li-right">
                                    <div class="con-li-type">
                                    {{item.type}}
                                    </div>
                                    <div class="con-li-date">
                                        {{item.date}}
                                    </div>
                                    <div class="con-li-link">
                                        重连
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </vue-scroll>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Top from'../components/top';
    import vueScroll from 'vuescroll';
    export default {
        data(){
            return{
                score:'95',
                list:[
                    {
                        id: 1,
                        imgUrl:require('../../static/img/personal-center/liao2@2x.png'),
                        text:'来自景天的验证消息',
                        type:'系统',
                        date:'2021-04-01',
                        statue:true
                    },
                    {
                        id: 2,
                        imgUrl:require('../../static/img/personal-center/liao2@2x.png'),
                        text:'来自逍遥的验证消息',
                        type:'系统',
                        date:'2021-04-01',
                        statue:true
                    },
                    {
                        id: 3,
                        imgUrl:require('../../static/img/personal-center/liao3@2x.png'),
                        text:'景天：天气真好。',
                        type:'西藏旅游',
                        date:'2021-04-01',
                        statue:false
                    },
                    {
                        id: 4,
                        imgUrl:require('../../static/img/personal-center/liao3@2x.png'),
                        text:'派大星：谢谢你。',
                        type:'吉他自学',
                        date:'2021-04-01',
                        statue:true
                    },
                    {
                        id: 5,
                        imgUrl:require('../../static/img/personal-center/liao1@2x.png'),
                        text:'喜羊羊：我在青青草地等你。',
                        type:'旅游',
                        date:'2021-04-01',
                        statue:false
                    },
                    {
                        id: 6,
                        imgUrl:require('../../static/img/personal-center/liao3@2x.png'),
                        text:'逍遥：天气真好。',
                        type:'西藏旅游',
                        date:'2021-04-01',
                        statue:true
                    },
                    {
                        id: 7,
                        imgUrl:require('../../static/img/personal-center/liao3@2x.png'),
                        text:'派大星：谢谢你。',
                        type:'吉他自学',
                        date:'2021-04-01',
                        statue:true
                    },
                    {
                        id: 8,
                        imgUrl:require('../../static/img/personal-center/liao1@2x.png'),
                        text:'喜羊羊：我在青青草地等你。',
                        type:'旅游',
                        date:'2021-04-01',
                        statue:false
                    },
                    {
                        id: 9,
                        imgUrl:require('../../static/img/personal-center/liao3@2x.png'),
                        text:'逍遥：天气真好。',
                        type:'西藏旅游',
                        date:'2021-04-01',
                        statue:true
                    }
                ],
                ops: {
                    vuescroll: {},
                    scrollPanel: {
                        speed:3000,
                        scrollingY: true,
                        keepShow:true,
                    },
                    rail: {
                        background:'#fff',
                        size: '0.75rem',
                        opacity:0,
                    },
                    bar: {
                        onlyShowBarOnScroll:false,
                        background: '#ede7fd',
                        keepShow: true,
                        minSize: 0.3,
                        size: '.75rem',

                    }
                },
                show:false
            }
        },
        components: {
            Top,
            vueScroll
        },
        methods:{
            showScore(){
                this.show = true;
            },
            noScore(){
                this.show = false;
            }
        }
        
    }
</script>

<style lang="less" scoped>    
    body{
        min-width: 960PX;
     }
     
    @media screen and (min-width: 1920px){
        html{
            font-size: 24px !important;
        }        
    }
    @media screen and(min-width: 960px) and (max-width: 1200px){
        html{
            font-size: 15px !important;
        }
    }
    @media screen and (min-width: 960px){
        html{
            font-size: 12px !important;            
        }
    }
    .center-con{
        position: fixed;
        top:0;
        left: 0;
        height: 100%;
        width: 100%;
        background: url('../../static/img/2.jpg');
        background-size:100% 100%;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center 0;
        z-index: -10;
        zoom: 1;
        color: #ffffff;
        
    }
    .center-mask{
        height: 100%;
        width: 100%;
        position: absolute;
        background:linear-gradient(to right,#8580FE  20%,#DFA4FF 100%) ;
        opacity: .7;
        z-index: -9;
    }
    .center-content{
        width: 71.5rem;
        height: 30rem;
        margin: 4.5rem auto;
    }
    .center-tip{
        height: 2rem;
        line-height: 2rem;
        text-align: right;
        margin-bottom: .5rem;

    }
    .center-icon{
        float: left;
        width: 5rem;
        padding: 2rem 0;
    }
    .icon-person-img{
        width: 3.4rem;
        height: 3.4rem;
        background: #e2dddf;
        border-radius: 1.7rem;
        margin: 0 auto;
    }
    .icon-person-img img{
        width: 3.4rem;
        height: 3.4rem;
    }
    .icon-person-name{
        margin-top: 1rem;
        text-align: center;
        width: 5rem;
        line-height: 1rem;
    }
    .icon-person-area{
        margin-top: .5rem;
        text-align: center;
    }
    .icon-like{
        width:3.4rem;
        height: 3.4rem;
        margin: 1rem auto;
        position: relative;
    }
    .icon-like-score{
        position: absolute;
        display: block;
        min-width: 7rem;        
        bottom: -2rem;
        left: -1.5rem;
    }
    .icon-like img{
        width:3.4rem;
        height: 3.4rem;
    }
    .center-list{
        float: right;
        width: 59.2rem;
        height: 24rem;
        border: 2px solid #ffffff;
        border-radius: 5rem;
        background: rgba(155,134,244,.85);
        overflow: hidden;
        padding: 2rem 2rem;
    }
    .con{
        width: 57.2rem;
    }
    .con-li{
        height: 2.54rem;
        width: 100%;
        overflow: hidden;
        padding: .4rem 0;
    }
    .con-li-img{
        float: left;
        margin-right: 0.8333rem;
        width: 2.54rem;
        height: 2.54rem;
        position: relative;
    }
    .con-li-img img{
        width: 2.54rem;
        height: 2.54rem;
        
    }
    .icon-msg{
        position: absolute;        
        top: 0;
        right: 0;
        display: block;
        width: .8rem;
        height: .8rem;
        border-radius: .4rem;
        background: #fff;
    }
    .con-li-text{
        float: left;
        text-align: left;
        height: 2.54rem;
        line-height: 2.54rem;
        width: 20rem;
    }
    .con-li-right{
        float: right;
        overflow: hidden;
        margin-right: 2rem;
    }    
    .con-li-type{
        float: left;
        width: 7rem;
        text-align: center;
        height: 2.54rem;
        line-height: 2.54rem;
    }
    .con-li-date{
        width:7rem;
        float: left;
        text-align: center;
        height: 2.54rem;
        line-height: 2.54rem;
    }
    
    .con-li-link{
        width:4rem;
        float: left;
        height: 1.625rem;
        line-height: 1.625rem;
        margin: 0.4575rem 0;
        background: #fff;
        border-radius: .8125rem;
        text-align: center;
        color: rgba(155,134,244,.85);
        cursor: pointer;
    }
    
</style>