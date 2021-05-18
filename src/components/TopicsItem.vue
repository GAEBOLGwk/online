<template>
    <div>
        <div class="topics">
            <div class="topic">
                <div class="topic-item" v-for="(item,index) in items" :key="index">
                    <div class="item" :class="{active:((index + 1) % 4) === 0}">
                        <div id="text">{{item.topic }}</div>
                        <router-link to="/chat" replace>加入小馆</router-link>
                    </div>
                </div>
            </div>
            <div class="TY">
                <button class="graffiti" @click="Giff">心情涂鸦墙</button>
                <button class="create" @click="change">创建小馆</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ToppisItem",
        props: {
            items: {
                type: Array,
                default() {
                    return [
                        {topic: "西藏旅游", id: 0},
                        {topic: "王者荣耀", id: 1},
                        {topic: "武汉 ", id: 2},
                        {topic: "圣托里尼", id: 3},
                        {topic: "蜘蛛侠", id: 4},
                        {topic: "锤子手机", id: 5},
                        {topic: "健身", id: 6},
                        {topic: "游泳", id: 7},
                        {topic: "粉色回忆", id: 8},
                        {topic: "手绘教学", id: 9},
                        {topic: "吉他自学", id: 10},
                        {topic: "金融工作", id: 11},

                    ]
                }
            },
            data() {
                return {
                    index: 4,
                    showItem: true,
                    showCreaItem: false,
                    showMess: false
                }
            }

        },
        methods: {
            change() {
                // console.log('点击了'+ this.showItem);
                this.$emit('clickitem');
            },
            Giff () {
              this.$emit('clickmess');

            }
        }

    }
</script>

<style scoped>
    .topics {
        position: relative;
        height: calc(100vh - 130px);
        border: 3px white solid;
        border-radius: 50px;
        margin: 30px;
        /*background-color: #8580FE;*/
        /*opacity:0.2;*/

    }

    .topic {
        height: calc(100vh - 300px);
        width: calc(100% - 50px);
        overflow: auto;
        margin: 50px 40px 50px 40px;
        scroll-snap-type: y mandatory;

    }

    .topic-item {
        display: inline-block;
        width: 250px;
        height: 130px;
        border: 1px white solid;
        background-color: #7b7bff;
        margin-right: 100px;
        margin-bottom: 60px;
        border-radius: 30px;
        text-align: center;
        font-size: 30px;
        color: white;
        position: relative;
    }

    .active {
        display: inline-block;
        width: 250px;
        height: 130px;
        border: 1px white solid;
        background-color: #7b7bff;
        margin-right: 0;
        margin-bottom: 60px;
        border-radius: 30px;
        text-align: center;
        font-size: 30px;
        color: white;
        position: relative;
    }

    .TY {
        position: absolute;
        bottom: 30px;
        right: 30px;
        font-weight: 800;
    }

    .graffiti {
        display: inline-block;
        background-color: white;
        border: solid;
        border-radius: 30px;
        margin-right: 20px;
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
    }

    .create {
        display: inline-block;
        background-color: white;
        border: solid;
        border-radius: 30px;
        font-size: 20px;
        padding: 10px;
        text-decoration: none;
    }

    .item #text {
        font-size: 35px;
        margin-top: 15px;
        margin-bottom: 20px;

    }

    .item a {
        text-decoration: none;
        background-color: white;;
        border-radius: 30px;
        font-size: 13px;
        padding: 7px;


    }

    /*定义滚动条样式 */
    ::-webkit-scrollbar {
        width: 10px;
        height: 1px;
        opacity: 0.4;
    }

    /* 定义滚动条轨道 内阴影+圆角
    ::-webkit-scrollbar-track {

    } */

    /*定义滑块 内阴影+圆角*/
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: whitesmoke;
    }
</style>