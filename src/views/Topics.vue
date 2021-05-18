<template>
    <div id="im">
        <top></top>
        <div class="mask"></div>
        <!-- 传入话题小馆的标签信息以及其他的-->
        <topics-item ItemData="ItemData" @clickitem="change" @clickmess="message"  v-if="showItem"></topics-item>
        <item-crea  v-if="showItemCrea" @back="toback"></item-crea>
        <message-item v-if="showMessageItem" @MessBack="messback" @addMess="addMess"></message-item>
        <message-create v-if="showMesscrea" @messTotopic="messTotopic"></message-create>
    </div>
</template>
<script>
    import Top from "../components/top";
    import TopicsItem from "../components/TopicsItem";
    import axios from "axios";
    import ItemCrea from "../components/ItemCreate";
    import MessageItem from "../components/MessageItem";
    import MessageCreate from "../components/MessageCreate"

    export default {
        name: "topics",
        components: {
            TopicsItem,
            Top,
            ItemCrea,
            MessageItem,
            MessageCreate,
        },
       data () {
            return {
                ItemData:Array,
                showItem:true,
                showItemCrea:false,
                showMessageItem:false,
                showMesscrea:false,
            }
       },
        //请求小馆的名称及其他的值，传给TopicsItem组件来展示
        mounted () {
            axios.get('小馆数据')
                .then(response => (this.ItemData = response))
        },
        methods:{
            change () {
                this.showItem = !this.showItem;
                this.showItemCrea = !this.showItemCrea;
                // console.log('接受到了' + showItem);
            },
            toback () {
                this.showItem = !this.showItem;
                this.showItemCrea = !this.showItemCrea;
                // console.log('有返回来了');
            },
            message () {
                // console.log('gii接受好了');
                this.showItem = !this.showItem;
                this.showMessageItem = !this.showMessageItem;
                document.getElementById('im').backgroundImage="url(/img/2.304753e6.jpg)";          
            },
            messback () {
                this.showItem = !this.showItem;
                this.showMessageItem = !this.showMessageItem
                document.getElementById('im').style.backgroundImage = "url(/img/4.67fa1fb8.jpg)"

            },
            addMess () {
                console.log('留言');
                this.showItem = false;
                this.showMessageItem = !this.showMessageItem;
                this.showMesscrea = !this.showMesscrea;
                document.getElementById('im').style.backgroundImage = "url(/img/4.67fa1fb8.jpg)"
            },
            messTotopic () {
                this.showMessageItem = !this.showMessageItem;
                this.showMesscrea = !this.showMesscrea;
            }
        }
    }
</script>

<style scoped>
.mask{
  height: calc(100vh - 60px);
  width: 100%;
  position: absolute;
  background:linear-gradient(to right,#8580FE  20%,#DFA4FF 100%) ;
  opacity: .5;

}
#im {
    background-image: url("../../static/img/4.jpg");
    background-size: 100% 100%;
    background-position: center 0;
    height: 100vh;
    /*opacity: 0.5;*/
}

</style>
