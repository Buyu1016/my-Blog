<template>
  <div class="home-container" ref="container" @wheel="wheelPage" v-loading="loading">
    <ul class="home-content" :style="{marginTop}" @transitionend="effectOver">
      <li v-for="item in data" :key="item.id" >
        <Carouselitem :carousel="item" />
      </li>
    </ul>
    <div class="icon-up" @click="index--" v-show="index>=1">
      <Icon type="&#xe604;" />
    </div>
    <div class="icon-down" @click="index++" v-show="index < data.length-1">
      <Icon type="&#xe603;" />
    </div>
    <ul class="home-dort">
      <li @click="dortTo(i)" v-for="(item,i) in data" :key="item.id" :class="{active:i===index}"></li>
    </ul>
  </div>
</template>

<script>
import Carouselitem from "@/views/Home/Carouselitem.vue";
import Icon from "@/components/Icon";
import { mapState } from "vuex"
export default {
  components: {
    Carouselitem,
    Icon
  },
  data(){
    return {
      index:0, //当前页
      containerHeight:0, //容器高度
      isPageing:false,
    }
  },
  computed:{
    marginTop(){
      return -this.index * this.containerHeight + "px";
    },
    ...mapState("banner",["loading","data"])
  },
  methods: {
    dortTo(index){
      this.index = index;
    }, 
    wheelPage(e){
      if(this.isPageing){
        return;
      }
      if(e.deltaY > 0 && this.index < this.data.length - 1){
        this.index ++;
        this.isPageing = true;
      }else if(e.deltaY < 0 && this.index > 0){
        this.index --;
        this.isPageing = true;
      }
    },
    effectOver(){
      this.isPageing = false;
    },
    againGetHeight(){
      this.containerHeight = this.$refs.container.clientHeight;
    }
  },
  // 如果直接操作DOM则可以在mounted()钩子函数中获取DOM然后操作DOM

  created() {
    this.$store.dispatch("banner/asyncSetData");
  },
  mounted() {
    this.containerHeight = this.$refs.container.clientHeight;
    // 这个事件用于当浏览器的大小发生改变时，需要重新获取容器的height才可以
    window.addEventListener("resize",this.againGetHeight);
  },
  destroyed() {
    window.removeEventListener("resize",this.againGetHeight);
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.home-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow:hidden;
  .home-content{
    width: 100%;
    height: 100%;
    margin-top:0px;
    transition: margin-top 1s ease-in-out;
    li{
      width: 100%;
      height: 100%;
      list-style: none;
    }
  }
  .icon-up,.icon-down{
    font-size: 40px;
    color: @gray;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
    opacity: 0.6;
    cursor: pointer;
    z-index: 5;
  }
  @gap:20px;
  .icon-up{
    top: @gap;
    animation: jumpUp 2s infinite;
  }
  .icon-down{
    bottom: @gap;
    animation: jumpDown 2s infinite;
  }
  @jump:10px;
  @keyframes jumpUp{
    0%{
      transform: translate(-50%,0);
    }
    50%{
      transform: translate(-50%,-@jump);
    }
    100%{
      transform: translate(-50%,0);
    }
  }
  @keyframes jumpDown{
    0%{
      transform: translate(-50%,0);
    }
    50%{
      transform: translate(-50%,@jump);
    }
    100%{
      transform: translate(-50%,0);
    }
  }
  .home-dort{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-100%,-50%);
    z-index: 5;
    li{
      list-style: none;
      cursor: pointer;
      width: 7px;
      height: 7px;
      border: 1px solid #fff;
      background: #333;
      border-radius: 50%;
      margin-bottom: 10px;
      transition: all 0.5s;
      box-sizing: border-box;
      &.active{
        background: #fff;
      }
    }
  }
}
</style>