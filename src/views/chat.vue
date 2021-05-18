<template>
    <div id="chat">
        <!-- 头部 -->
         <div class="nav">
            <h1 class="logo">POWEHI</h1>
        </div>
        <div class="chatMain">
            <div class="main" v-show="showMain">
                <!--标签栏  -->
                <div class="title">
                    <span class="title_label">当前标签:旅游</span>
                    <!-- <button class="title_btn" >返回</button> -->
                    <router-link to="/topics" class="back">返回</router-link>
                </div>
                <!--交流栏 -->
                <div class="chat_content">
                   <div class="content">
                     <div class="left">
                        <div class="chat_img">
                        <img src="../assets/logo.png">
                        <span>18:45:34</span>
                        </div>
                        <p>你好阿！ce2e2ffr</p>
                    </div>
                    <div class="right">
                        <div class="chat_img">
                        <span>18:45:38</span>
                        <img src="../assets/logo.png">
                        </div>
                        <p>很高兴认cdwcw</p>
                    </div>
                   </div>
                   <div class="content">
                     <div class="left">
                        <div class="chat_img">
                        <img src="../assets/logo.png">
                        <span>18:45:34</span>
                        </div>
                        <p>你好阿！ce2e2ffr</p>
                    </div>
                    <div class="right">
                        <div class="chat_img">
                        <span>18:45:38</span>
                        <img src="../assets/logo.png">
                        </div>
                        <p>很高兴认cdwcw</p>
                    </div>
                   </div>
                   <div class="content">
                     <div class="left">
                        <div class="chat_img">
                        <img src="../assets/logo.png">
                        <span>18:45:34</span>
                        </div>
                        <p>你好阿！ce2e2ffr</p>
                    </div>
                    <div class="right">
                        <div class="chat_img">
                        <span>18:45:38</span>
                        <img src="../assets/logo.png">
                        </div>
                        <p>很高兴认cdwcw</p>
                    </div>
                   </div>
                   <div class="content">
                     <div class="left">
                        <div class="chat_img">
                        <img src="../assets/logo.png">
                        <span>18:45:34</span>
                        </div>
                        <p>你好阿！ce2e2ffr</p>
                    </div>
                    <div class="right">
                        <div class="chat_img">
                        <span>18:45:38</span>
                        <img src="../assets/logo.png">
                        </div>
                        <p>很高兴认cdwcw</p>
                    </div>
                   </div>
                </div>
                <!-- 断开提示 -->
                <div class="conTip" v-show="isConnect">
                    <p>对方已断开连接，消息发出失败…</p>
                </div>
                <!-- 发送栏 -->
                <div class="footer">
                    <div class="add" @click="showPhoto">
                        <i class="icon iconfont icon-jiahao"></i>
                    </div>
                    <div class="photo" v-show="isPhoto">
                        <i class="icon iconfont icon-tu_pian"></i>
                        
                        <i class="icon iconfont icon-GIF"></i>
                    </div>
                    <div class="send">
                        <input type="text" placeholder="请输入你要说的话">
                        <i class="icon iconfont icon-xiaolian"></i>
                    </div>
                    <div class="btn">
                        <div class="btnSend">
                            <i class="icon iconfont icon-zhifeiji"></i>
                        </div>
                        <button class="shield">屏蔽不雅词汇</button>
                        <button class="like">喜欢</button>
                        <button class="report" @click="showReportGo">举报</button>
                        <button class="connect" @click="showTips">断开连接</button>
                    </div>
                </div>
            </div>
            <!-- 举报 -->
                <div class="reportshow" v-show="showReport">
                    <form class="info">
                        <label>用户：</label>
                        <input type="text"><br/>
                        <label class="reason">原因：</label>
                       <input class="text" type="text">
                       <div class="btn">
                        <button class="forward" @click="forwordGo">返回</button>
                        <button class="forward">提交</button>
                    </div>
                    </form>
                </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isPhoto:false,
            isConnect:false,
            showMain:true,
            showReport:false
        }
    },
    methods:{
        showPhoto(){
            this.isPhoto = !this.isPhoto
        },
        showTips(){
            this.isConnect = true
        },
        showReportGo(){
            this.showMain = false
            this.showReport = true
        },
        forwordGo(){
            this.showMain = true
            this.showReport = false
        },
        toback(){

        }
    }

}
</script>
<style lang="less" scoped>
.back{
    text-decoration: none;
    width: 90px;
    height: 40px;
    background: #fff;
    border-radius: 30px;
    font-size: 20px;
    border: none;
    color: rgba(128,104,202,.8);
    cursor: pointer;
    line-height: 40px;
}
#chat{
    position: fixed;
    width: 100%;
    height: 100%;
    background-image:url(../../static/img/3.jpg);
    background-size: 100% 100%;
    .nav{
    height: 60px;
    width: 100%;
    // background: #8580FE;
    background: linear-gradient(to right,#8580FE,#DFA4FF);
    .logo{
    position: relative;
    font-size: 40px;
    color: #FBFBFC;
    float: left;
    line-height: 60px;
    margin-left: 50px;
       }
    }
    .chatMain{
        height: calc(100vh - 100px);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px 0;
        .main{
            width: (1810px / (1920px / 1400px));
            height: calc(100vh - 100px);
            background: rgba(128,104,202,.5);
            box-sizing: border-box;
            border: 2px solid #fff;
            border-radius: 100px;
            padding: 24px 40px;
            position: relative;
            .title{
                margin: 0 auto;
                width: (1700px / (1920px / 1400px));
                height: (75px / (1080px / 900px));
                border: 2px solid #fff;
                border-radius: 50px;
                box-sizing: border-box;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding:0 15px;
                .title_label{
                    font-size: 20px;
                    color: #fff;
                }
                .title_btn{
                    width: 90px;
                    height: 40px;
                    background: #fff;
                    border-radius: 30px;
                    font-size: 20px;
                    border: none;
                    color: rgba(128,104,202,.8);
                    cursor: pointer;
                }
            }
            .chat_content{
                width: 100%;
                margin-top:12px ;
               .content{
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  img{
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }
                p{
                    color:#fff;
                    font-size: 20px;
                    line-height: 40px;
                }
                .chat_img{
                    display: flex;
                    align-items: center;
                }
                .right{
                    display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-items: flex-end;
                    margin-top: 30px;
                    span{
                        color: #fff;
                        font-size: 12px;
                        margin-right: 9px;
                    }
                }
                .left{
                     display: flex;
                    flex-direction: column;
                    flex-wrap: nowrap;
                    align-items: flex-start;
                    span{
                        color: #fff;
                        font-size: 12px;
                        margin-left: 9px;
                    }
                }
               }
            }
            .conTip{
                width: 100%;
                position: absolute;
                bottom: 95px;
                color: #fff;
                font-size: 16px;
                display: flex;
                justify-content: center;
            }
            .footer{
                width: (1700px / (1920px / 1400px));
                height: (75px / (1080px / 900px));
                position: absolute;
                bottom: 20px;
                display: flex;
                align-items: center;
                justify-content: space-around;
                box-sizing: border-box;
                cursor: pointer;
                .icon{
                    font-size: 30px;
                    color: #fff;
                }
                .icon-tu_pian{
                    font-size: 25px;
                }
                .icon-GIF{
                    font-size: 26px
                }
                .add{
                    margin: 0 5px 0 0;
                }
                .photo{
                    i{
                        margin: 0 5px;
                    }
                }
                .send{
                    width:65%;
                    height: 35px;
                    border: 2px solid #fff;
                    border-radius: 30px;
                    margin-left: 4px;
                    padding: 0 15px;
                    box-sizing: border-box;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    input{
                        background: none;
                        border: none;
                        width: 70%;
                        height: 35px;
                        line-height: 35px;
                        outline: none;
                        color: #fff;
                        font-size: 15px;
                        &::-webkit-input-placeholder {
                                color: #fff;
                             }
                    }
                    .icon-xiaolian{
                        font-size: 25px;
                    }
                }
                .btn{
                    display: flex;
                    align-items: center;
                    width: 34%;
                    .btnSend{
                        margin: 0 9px;
                    }
                    button{
                        cursor: pointer;
                        height: 35px;
                        padding: 5px 10px;
                        background: #fff;
                        border-radius: 20px;
                        border: none;
                        color: rgba(128,104,202,.8);
                        margin: 0 8px;
                    }
                }
            }
        }
        .reportshow{
             width: (1090px / (1920px / 1400px));
             height: (610px / (1080px / 900px));
             border: 2px solid #fff;
             background: rgba(128,104,202);
             box-sizing: border-box;
             border-radius: 50px;
             text-align:left;
             display: flex;
             align-items: flex-start;
             .info{
                 padding: 30px 70px 20px 100px;
                 width: 100%;
                 height: 100%;
                 box-sizing: border-box;
                 label{
                     display: inline-block;
                     color: #fff;
                     font-size: 20px;
                     vertical-align: top;
                 }
                 .reason{
                     margin-top: 20px;
                 }
             input{
                 width: 80%;
                 background: none;
                 border: 1px solid #fff;
                 outline: none;
                 color: #fff;
                 font-size: 20px;
                 height: 50px;
                 vertical-align:top;
                 border-radius: 10px;
                 padding: 0 10px;
             }
             .text{
                 height: 300px;
                 margin-top: 20px;
             }
             .btn{
                 margin-top: 20px;
                 text-align: right;
                 margin-right:40px ;
                 button{
                     cursor: pointer;
                     line-height: 35px;
                     background: #fff;
                     font-size: 20px;
                     padding: 5px 15px;
                     color:rgba(128,104,202);
                     margin: 0 5px;
                     border: none;
                     border-radius: 30px;
                 }
             }
             }
        }
    }
}
</style>