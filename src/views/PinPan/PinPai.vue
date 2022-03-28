<template>
  <div class="PinPai">

    <div v-for="(item,index) in arr "
         :key="index">
      <ul>
        <li>
          <img :src='item'
               alt="">
        </li>
      </ul>

    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: "PinPan",
  data () {
    return {
      arr: null
    }
  },
  methods: {
    async getPin () {
      let { data } = await axios.get("/api/PinPai")
      this.arr = data
    }
  },
  created () {
    this.getPin()
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
li {
  list-style: none;
}
</style>