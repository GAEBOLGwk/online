<template>
    <div class="Message">
        <div class="my-balls">
            <div class="MessItem" v-for="(ball,index) in randomArr" :key="index"
                  :style="{left: `${ball.left}px`,top:`${ball.top}px`,fontSize:getSize(),fontFamily:getFamily}">
            {{ball.mess}}</div>
        </div>
        <div>
            <button class="top" @click="back">返回</button>
        </div>
        <div>
            <button class="bottom" @click="addMess">留言</button>
        </div>
        <div class="last">FISH AND VISITORS SMELL THREE DAYS   .</div>
    </div>
</template>

<script>
    export default {
        name: "MessageItem",
        props:{
            MeaasgeItem:{
                type:Array,
                default (){
                    return ["生活就是这样又难过又难说",
                        '记得把普通的日子也过得浪漫一-些也过得浪漫一些',
                        '如果不坚强，没人替你勇敢',
                        '窈窕淑女，君子好逑',
                        '醒了给我发消息，我醒了给你回',
                        'WeeP NO MORE,NO SIGH',
                        '记得把普通的日子也过得浪漫一-些也过得浪漫一些',
                        '也过得浪漫一-些也过得浪漫一些',
                        '如果不坚强，没人替你勇敢',
                        '窈窕淑女，君子好逑',
                        '醒了给我发消息，我醒了给你回',
                        'WeeP NO MORE,NO SIGH',
                        '记得把普通的日子也过得浪漫一-些也过得浪漫一些',
                        '如果不坚强，没人替你勇敢',
                        '窈窕淑女，君子好逑',
                        '醒了给我发消息，我醒了给你回',
                        'WeeP NO MORE,NO SIGH',
                        '记得把普通的日子也过得浪漫一-些也过得浪漫一些',
                        '也过得浪漫一-些也过得浪漫一些',
                        '如果不坚强，没人替你勇敢',
                        '窈窕淑女，君子好逑',
                        '醒了给我发消息，我醒了给你回',
                        'WeeP NO MORE,NO SIGH',
                    ]
                },

            }
        },
        data () {
            return {
                fontFamily: ['宋体', '黑体', '楷体', '仿宋',
                    'Arial', 'Candara Light','新宋体','微软雅黑','Calibri','Cnadara'],
                clientWidth: document.documentElement.clientWidth,
                randomArr: [],
                maxCount: 0
            }
        },
        created () {
            this.maxCount = this.MeaasgeItem.length;
            this.createdBalls();

        },
        methods: {
            change() {
                console.log('----');
            },
            back() {
                console.log('back');
                this.$emit('MessBack')
            },
            getSize() {
                return Math.random() * 30 + 5 + 'px'
            },
            getFamily() {
                return this.fontFamily[Math.round(Math.random() * 10)]
            },
            addMess () {
              this.$emit('addMess')  ;
            },
            createdBalls () {
                let count = this.maxCount
                const showHeight = 200  //限制钻石生成区域高度
                const showWidth = this.clientWidth - 150
                while (count > 0) {
                    const row = Math.floor(Math.random() * showHeight * 2)
                    const col = Math.floor(Math.random() * showWidth)
                    if (this.randomArr.length === 0) {
                        this.randomArr.push({
                            left: col,
                            top: row,
                            mess:this.MeaasgeItem[count - 1]
                        })
                        count -= 1
                    } else {
                        const noOverlap = this.randomArr.every(v => Math.hypot(v.left - col, v.top - row) > 120)  //这里的主要目的就是来保证每次随机生成的点确定的图片位置不会有重叠
                        if (noOverlap) {
                            this.randomArr.push({
                                left: col,
                                top: row,
                                mess:this.MeaasgeItem[count - 1]
                            })
                            count -= 1
                        }
                    }
                }
            }
        }
    }
</script>

<style scoped>
    .Message {
        height: 86%;
        width: 96%;
        background-color: #7965c6;
        margin: 15px 20px;
        border: 3px whitesmoke solid;
        display: inline-block;
        border-radius: 90px;
        color: white;
        position: relative;
        opacity: 0.8;

    }

    .MessItem {
        color: white;
        display: inline-block;
        text-align: center;
        position: absolute;
    }

    span {

        color: white;
    }

    .top {
        /* font-family: ; */
        position: absolute;
        right: 80px;
        top: 15px;
        background-color: white;
        margin: 10px;
        padding: 5px 15px;
        border-radius: 15px;
        color: #8870e0;
        font-weight: 900;
        font-size: 16px;
        border: 0 white solid;


    }

    .bottom {
        position: absolute;
        right: 80px;
        bottom: 15px;
        background-color: white;
        margin: 10px;
        padding: 5px 15px;
        border-radius: 15px;
        color: #8870e0;
        font-weight: 900;
        font-size: 16px;
        border: 0 white solid;
    }

    .my-balls {
        position: relative;
    }
    .last{
        position: fixed;
        bottom: 80px;
        left: 60px;
        font-size: 30px;
    }
</style>