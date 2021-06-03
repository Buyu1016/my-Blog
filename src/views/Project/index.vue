<template>
  <div class="project-container" v-loading="loading" @scroll="handleScroll" ref="container">
      <ul>
        <li v-for="item in data" :key="item.id" class="project-item">
            <a :target="item.url ? '_blank' : '_self' " :href="item.url || `javascript:alert('该项目暂时无法对外进行访问！谢谢您的关注！')`">
              <img v-lazy="item.thumb" alt="item.name" v-if="item.thumb" class="thumb">
            </a>
            <div class="info">
              <h1>{{item.name}}</h1>
              <a class="github" :href="item.github" target="_blank" v-if="item.github">Github：{{item.github}}</a>
              <div class="descripion">{{item.description}}</div>
            </div>
        </li>
      </ul>
      <Empty v-if="data.length === 0 && !loading"/>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Empty from "@/components/Empty"
export default {
  components:{
    Empty
  },
  computed: {
    ...mapState("project",["data","loading"])
  },
  created(){
    this.$store.dispatch("project/asyncSetData")
  },
  methods: {
    handleScroll(){
      this.$eventBus.$emit("allProjectScrollMove",this.$refs.container);
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  overflow-y: auto;
  scroll-behavior: smooth;
}
li{
  list-style: none;
}
.project-item {
  transition: 0.5s;
  padding: 20px;
  display: flex;
  margin-bottom: 20px;
  &:hover {
    box-shadow: -1px 1px 5px #000;
    transform: scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb {
    width: 250px;
    min-height: 150px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }
  .info {
    line-height: 1.7;
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .github {
    font-size: 14px;
    color: @primary;
  }
}
</style>