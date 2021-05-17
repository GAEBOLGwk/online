<template>
    <div class="match">
        <top/>
        <div class="match-con">
            <div class="mask"></div>
            <div class="match-center">
                <div class="match-center-glass"></div>            
                <div class="match-start">
                    开始匹配
                </div>
                <div class="match-add" @click="showPopupLabel">添加标签</div>
                <div class="add-label" :class="addLabelShow?'show-label':''">
                    <input type="text" placeholder="请输入标签" v-model="labelContent">
                    <button class="addbtn add-cancel" @click="addCancel">取消</button>
                    <button class="addbtn add-confirm" @click="addConfirm">确定</button>
                </div>
            </div>
            <div class="match-label" v-for="(item, index) in labels" :class="'label'+index" :key="'l'+index">{{item.text}}</div>
        </div>
    </div>
</template>

<script>
import Top from'../components/top'
    export default {
        data(){
            return{
                labels:[
                    {
                        id:1,
                        text:'秘密'
                    },
                    {
                        id:2,
                        text:'肥宅快乐'
                    },
                    {
                        id:3,
                        text:'影迷角落'
                    },
                    {
                        id:4,
                        text:'同性恋'
                    },
                    {
                        id:5,
                        text:'午夜失眠'
                    },
                    {
                        id:6,
                        text:'我是美女'
                    },
                    {
                        id:7,
                        text:'王者荣耀'
                    },
                    {
                        id:8,
                        text:'我是帅哥'
                    },
                ],
                addLabelShow:false,
                labelContent:''
            }
        },
        components: {
            Top,
        },
        created(){
            
        },
        methods:{
            showPopupLabel() {
                //当点击按钮时，显示弹出框
                this.addLabelShow = true;
            },
            addConfirm(){
                this.addLabelShow = false;
                this.addLabel(this.labelContent)
                this.labelContent=''
                console.log(this.labels)
            },
            addCancel(){
                this.addLabelShow = false;
            },
            addLabel(d){
                if(d){
                    let length = this.labels.length;
                    this.labels.push({
                        id: length+1,
                        text: d
                    })
                }
                
            }
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
    .rem(@px) {
        unit(@px / 100, rem);
     }
     body{
        min-width: 960px;
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
    .match-con{
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
    .mask{
        height: 100%;
        width: 100%;
        position: absolute;
        background:linear-gradient(to right,#8580FE  20%,#DFA4FF 100%) ;
        opacity: .7;
        z-index: -9;
    }
    .match-center{
        position: relative;
        width:34.666667rem;
        height: 24rem;
        background: #9063dd;
        margin: 10.54rem auto;
        border-radius: 2.1rem;
        box-shadow:0 0 16px rgba(255, 255, 255, 0.4);
    }
    .match-center-glass{
        position: absolute;
        left: 0;
        top: 0;
        width:34.666667rem;
        height: 24rem;
        background: #29e4f1;
        border-radius: 2.1rem;
        opacity: .1;

    }
    .match-start{
        position: absolute;
        width:16.75rem;
        height: 5.333rem;
        top: 6.625rem;
        left: 8.9583rem;
        border: 3px solid #ffffff;
        border-radius: 2.6666rem;
        line-height: 5.3333rem;
        font-size: 3.3rem;
    }
    .match-add{
        position: absolute;
        left: 14.083rem;
        bottom: 6.8333rem;
        width:6.5rem;
        text-align: center;
        height: 1.5416rem;
        line-height: 1.5416rem;
        border-radius: 0.77rem;
        border: 1px solid #ffffff;
    }
    .add-label{
        display: none;
    }
    .show-label{
        display: block;
        position: absolute;
        left: 20%;
        top:25%;
        background:#5726ca;
        width: 24rem;
        height: 14rem;
        border-radius: 4rem;
    }
    .show-label input{
        margin: 4rem auto 2rem;
        height: 2rem;
        line-height: 2rem;
        font-size: 1rem;
        border-radius: 1rem;
        padding: 0 1em;
        outline: none;
        display: block;
    }
    .show-label .addbtn{
        width:5rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        background: transparent;
        border: 1px solid #fff;
        border-radius: 1rem;
        outline: none;
        color: #fff;

    }
    .show-label .add-cancel{
        margin-right: 2rem;
    }
    .match-label{
        position: absolute; 
        height: 2rem;
        min-width: 3rem;
        line-height: 2rem;
        border-radius: 1.15rem;
        font-size: 1rem;
        padding: 0 1rem;
        z-index: 10;
        background:radial-gradient(farthest-corner at 40% 50%,#8870df 40%, #5726ca 90%, #C0C0C0 100%);
        animation: heartbeat 1200ms linear infinite alternate;
    }
    
    @keyframes heartbeat {
        0% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
        100% {
            -webkit-transform: scale(1.3);
            transform: scale(1.3);
            font-size:scale(1.3);
        }
    }
    .label0{
        position: absolute;
        top: 14.6667rem;
        left:10.5rem;
    }
    .label1{
        top: 20.58333rem;
        left:3.58333rem;
    }
    .label2{
        top: 31rem;
        left:10rem;
    }
    .label3{
        top: 40.24rem;
        left:23.16667rem;
    }
    .label4{
        top: 37rem;
        right: 21.5rem;
    }
    .label5{
        top: 23rem;
        right: 9.541rem;
    }
    .label6{
        top: 9rem;
        right: 13.25rem;
    }
    .label7{
        top: 37rem;
        right:3rem;
    }
    .label8{
        top: 13rem;
        right:5rem;
    }
    .label9{
        top: 43rem;
        right:7rem;
    }
    .label10{
        top: 35rem;
        left:4rem;
    }
    .label11{
        top: 16rem;
        right:6rem;
    }
    .label12{
        top: 28rem;
        left:8rem;
    }
    .label13{
        top: 11rem;
        left:5rem;
    }
    .label14{
        top: 24rem;
        left:7rem;
    }
    .label15{
        top: 38rem;
        left:8rem;
    }
    .label16{
        top: 6rem;
        right:20rem;
    }
    .label17{
        top: 8rem;
        right:6rem;
    }
    .label18{
        top: 34rem;
        right:8rem;
    }
    .label19{
        top: 40rem;
        left:8rem;
    }
</style>