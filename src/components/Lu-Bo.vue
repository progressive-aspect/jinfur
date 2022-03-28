<template>
  <el-carousel :interval="4000" type="card" height="560px">
    <el-carousel-item v-for="(item,index) in atts" :key="index">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>
<script>

export default ({
    name:"Lu-Bo",
    props:["atts"]
})
</script>

<style scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>