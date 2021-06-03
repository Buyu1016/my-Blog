<template>
  <div class="test-container">
    <div v-for="(item,index) in iconObjValue" :key="index" class="icon-box">
      <Icon :type="item"  class="icon-size"/>
      <label>{{item}}</label>
    </div>
  </div>
</template>

<script>
import Icon, { iconObjValue } from "./index.vue";
export default {
  components:{
    Icon
  },
  data() {
    return {
      iconObjValue
    };
  }
}
</script>

<style scoped>
.icon-box {
  width: 80px;
  height: 80px;
  text-align: center;
  border: 3px solid red;
  margin: 2px 5px;
}
.icon-size{
  font-size: 40px;
}
.test-container{
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>