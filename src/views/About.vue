
<template>



  <div class="about">
    <top/>
        <div class="about-con">
          <div class="mask"></div>
              <div class="about-panel">

                <div class="aboutpanel-mask"></div>

                <div class="detail">
                     <div class="detail-title">关于我们
                     </div>
                     <div class="website">POWEHI
                     </div>
                     <div class="version">version 1.0
                     </div>
                     <div class="intro1">我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们我们
                     </div>
                     <div class="intro2">开发：开发人员，开发人员，开发人员，开发人员，开发人员，开发人员，开发人员，开发人员，开发人员
                     </div>
                     <div class="sns">
                       <div class="qq icon">
                         <div class="qrcode" style="display:inline-block;vertical-align:middle;  background-size: cover; height: 30px;width: 33px;">
                            <img  src="../../static/img/qq-brands.png" height="2rem" width="1rem">
                        </div>
                       </div>
                       <div class="wechat icon">
                         <div class="qrcode" style="display:inline-block;vertical-align:middle;  background-size: cover; height: 30px;width: 33px;">
                           <img  src="../../static/img/weixin-brands.png">
                         </div>
                       </div>
                       <div class="weibo icon">
                         <div class="qrcode" style="display:inline-block;vertical-align:middle;  background-size: cover; height: 30px;width: 33px;">
                           <img  src="../../static/img/weibo-brands.png">
                         </div>
                       </div>


                     </div>
<!--                     <link rel="stylesheet" href="https://cdn.staticfile.org/font-awesome/4.7.0/css/font-awesome.css">-->
                   </div>
                  <div class="advice">
                     <div class="advice-title">意见建议
                     </div>
                    <div class="advice-border">
                      <div class="advice-label">我要建议：
                      </div>
                      <div class="advice-text">
                        <input type="text" placeholder="请输入您想对我们说的话" >

                      </div>
                      <a href="">
                      <div class="advice-submit" href="">提交



                      </div>
                      </a>

                    </div>

                  </div>

              </div>
         </div>

  </div>

</template>

<script>
import Top from'../components/top'
    export default {
        components: {
            Top,
        },
    }
</script>

<style lang="less" scoped>
.detail{
  width: 90%;
}
img{
  max-width:100%; /*不使用width:100% 是因避免圖片解析度不好，隨父元素被放大時會糊掉*/
  height:auto;
}

.about-con{
  position: fixed;
  top:0;
  left: 0;
  height: 100%;
 width: 100%;
  background: url('../../static/img/1.jpg');
  background-size:100% 100%;
  background-size: cover;
 //background-size:1980px 1080px;
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
  background:#8870df;
  opacity: .4;
  z-index: -9;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: white;

}
.about-panel{
  position: relative;
  width:96%;
  height: 87%;
  margin: 5rem auto;
  border-radius: 2.1rem;
  z-index: -6;

}

.aboutpanel-mask{
  height: 100%;
  width: 100%;
  position: absolute;
  background:#8870df;
  border-radius: 2.1rem;
  opacity: .6;
  z-index: -7;

}
.advice{
  position: absolute;
  right:5rem ;
  width: 50%;
  background: #999;


}
.advice-title{

  display: block;
  position: absolute;
  right: 43%;
  top: 4rem;
  background: #ffffff;
  color: #5726ca;
  width: 7rem;
  height: 2rem;
  border-radius: 4rem;
  font-size: 1.5rem;
  margin: 0 auto;

}

.detail {
  display: block;
  position: absolute;
  left: 5rem;
  width: 32%;
  background: #999;
}


.detail-title{
  display: block;
  position: absolute;
  left: 33%;
  top: 4rem;
  background: #ffffff;
  color: #5726ca;
  width: 7rem;
  height: 2rem;
  border-radius: 4rem;
  font-size: 1.5rem;
  margin: 0 auto;
}
.website{

  display: block;
  position: absolute;
  left: 16%;
  top: 8rem;
  color: #ffffff;
  font-size: 4rem;
  font-weight: bold;
  margin: 0 auto;
}
.version{

  display: block;
  position: absolute;
  left: 28%;
  top: 13rem;

  color: #ffffff;

  font-size: 2rem;
}
.intro1{

   display: block;
   position: absolute;
   left: 12%;
   top:17rem;
   width: 18rem;
   color: #ffffff;
   height: 6rem;
   border-radius: 4rem;
   font-size:1rem;
   text-align: left;
 }
.intro2{
  display: block;
  position: absolute;
  left: 12%;
  top:24rem;
  height: 6rem;
  width: 18rem;
  text-align: left;
  color: #ffffff;
  font-size:1rem;
}
.sns{
  display: block;
  position: absolute;
  left: 10%;
  top:35rem;
  color: #ffffff;
  height: 1.7rem;
  border-radius: 4rem;
  font-size:2rem;
}

.icon{
  display: inline-block;
  position: relative;
  left: 1rem;
  color: white;
  margin-left:0.2rem;
  margin-right: 0.5rem;

  //filter: brightness(100);
}

.qrcode {
  position: relative;
}

.qrcode::after {
  content: url('../../static/img/qrcode.png');
  position: absolute;
  top: -6.25rem;
  left: -3rem;
  width: 140px;
  height: 140px;
  transform-origin: bottom;
  transform: scale(0);
  opacity: 0;
  -webkit-transition: all .4s ease-in-out;
  -o-transition: all .4s ease-in-out;
  transition: all .4s ease-in-out;
}

.qrcode:hover::after {
  transform: scale(1);
  opacity: 1;
}

 .qq img{
   height: 1.7rem;
   width: 1.6rem;
   margin-top: 0.4rem;
}

.advice-border{
  position: absolute;
  border-style:solid;
  width: 100%;
  height: 32rem;
  top:7rem;
  border-radius: 4rem;
  z-index: 3;
}

.advice-label{
  position: absolute;
  font-size: 1.2rem;
  left: 1rem;
  top: 3rem;
  font-weight: bold;

}
.advice-text{
  position: absolute;
  right: 1rem;
  border-style:solid;
  border-radius: 2rem;
  width:80%;
  height:25rem;
  top:2rem;

}
.advice-text input{
  position: absolute;
  left: 1rem;
  top: 1.1rem;
  width: 90%;
  hight:10rem;
  background-color:transparent;
  outline: none; /* 外框效果 */
  color: white;
  font-size: 1.2rem;
}
.advice-submit{
  display: block;
  position: absolute;
  right: 2rem;
  bottom: 1rem;
  background: #ffffff;
  color: #5726ca;
  width: 7rem;
  height: 2rem;
  border-radius: 4rem;
  font-size: 1.5rem;
  margin: 0 auto;
}

</style>
