<template>
  <div class="home">
    <LunBo :arrs="arrs"></LunBo>
    <div class="res">
      <div class="pad">
        <i class="el-icon-user-solid"></i
        >&nbsp;在线咨询&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;档期报价
      </div>
      <div>
        <img src="http://bj.121314.com/static/images/index/title1.png" alt="" />
      </div>
    </div>
    <div class="kuai">
      <div class="yuan" v-for="(item, index) in attr" :key="index">
        <img :src="item" alt="" />
      </div>
    </div>
    <div class="shu">
      <div>
        <img
          src="http://bj.121314.com/static/images/index/golden_icon.png"
          alt=""
        />
      </div>
      <div>
        <img
          src="http://bj.121314.com/static/images/index/yang_tit1.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="bgcol">
      <lunbo :atts="atts"></lunbo>
    </div>
    <div class="marg">
      <img src="http://bj.121314.com/static/images/more_1.jpg" alt="" />
    </div>
    <div class="qukuai">
      <div class="bg_qu">我们愿用一生的彼此陪伴 来许愿婚姻的美满</div>
      <div class="hengflex">
        <div v-for="(item, index) in shuju" :key="index">
          <div class="zhezhao">
            <img :src="item.image" alt="" />
          </div>
          <h4>{{ item.title }}</h4>
          <p>{{ item.pro }}</p>
        </div>
      </div>
    </div>
    <div class="marg">
      <img src="http://bj.121314.com/static/images/more_1.jpg" alt="" />
    </div>
    <div class="shu">
      <img src="http://bj.121314.com/static/images/c-1.jpg" alt="">
    </div>
    <div class="bac">
      <div class="d_top">
        <div>
          <img src="http://bj.121314.com/data/upload/image/20210704/2106061313174661.jpg" alt="">
        </div>
        <div class="left_d">
          <img src="http://bj.121314.com/data/upload/image/20210704/2106061030032035.jpg" alt="">
          <img src="http://bj.121314.com/static/images/yp_ico_2.jpg" alt="">
        </div>
      </div>
      <div class="d_bom">
        <img src="http://bj.121314.com/static/images/yp_ico_1.jpg" alt="">
      </div>
    </div>
    <div class="marg">
      <img src="http://bj.121314.com/static/images/c-2.jpg" alt="">
    </div>
    <div class="hengzhed">
      <div class="shuzhed" v-for="(item,index) in shuju1" :key="index">
        <div>
          <img :src="item.image" alt="">
        </div>
        <div>
          <img :src="item.img" alt="">
        </div>
        <div class="sizes">
          <h2>{{item.title}}</h2>
          <p>{{item.pro}}</p>
        </div>
      </div>
    </div>
    <div class="marg">
      <img src="http://bj.121314.com/static/images/youth2.png" alt="">
    </div>
    <DiBu></DiBu>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
import LunBo from "../components/LunBo.vue";
import lunbo from "../components/Lu-Bo.vue";
import DiBu from '../components/DiBu.vue';
export default {
  name: "HomeView",
  data() {
    return {
      arrs: null,
      attr: null,
      atts: null,
      shuju: null,
      shuju1:null,
    };
  },
  components: {
    LunBo,
    lunbo,
    DiBu
  },
  methods: {
    async fn1() {
      let { data } = await axios.get("/api/home");
      this.arrs = data;
      console.log(this.arrs);
    },
    async fn2() {
      let { data } = await axios.get("/api/home1");
      this.attr = data;
      console.log(this.attr);
    },
    async fn3() {
      let { data } = await axios.get("/api/home2");
      this.atts = data;
      console.log(this.atts);
    },
    async fn4() {
      let { data } = await axios.get("/api/home3");
      this.shuju = data;
      console.log(this.shuju);
    },
    async fn5() {
      let { data } = await axios.get("/api/home4");
      this.shuju1 = data;
      console.log(this.shuju1);
    },
  },
  created() {
    this.fn1();
    this.fn2();
    this.fn3();
    this.fn4();
    this.fn5();

  },
};
</script>
<style scoped>
.pad {
  padding: 25px 0;
}
.res {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}
.kuai {
  width: 1450px;
  height: 860px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.yuan {
  border-radius: 30px;
  overflow: hidden;
}
.bgcol {
  background: url("http://bj.121314.com/static/images/index/icon_tit2.jpg")
    no-repeat;
  height: 772px;
  padding: 30px 0;
}
.marg {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 50px 0; 
}
.shu {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}
.qukuai {
  background-color: #efefef;
  padding-top: 80px;
}
.bg_qu {
  background: url("http://bj.121314.com/static/images/index/ke_title.png");
  padding-top: 60px;
  font-size: 18px;
  min-height: 120px;
  color: #000;
  text-align: center;
  margin-bottom: 80px;
  background-position: top center;
  background-repeat: no-repeat;
}
.hengflex {
  width: 1450px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
}
.hengflex div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.zhezhao {
  border-radius: 20px;
  overflow: hidden;
}
.hengflex h4 {
  padding: 10px 0;
}
.hengflex p {
  padding: 10px 0;
}
.d_top{
  width: 1450px;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
}
.left_d{
  display: flex;
  flex-direction: column;
}
.bac{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.d_bom{
  width: 1350px;
}
.hengzhed{
  width: 1450px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
}
.shuzhed{
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.sizes h2{
  padding: 20px 0 ;
}
</style>
