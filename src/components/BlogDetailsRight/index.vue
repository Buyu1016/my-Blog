<template>
  <div class="blog-details-right-container">
    <RecursionList :list="newToc" @active="handleSelect"/>
  </div>
</template>

<script>
import RecursionList from "@/components/RecursionList";
import { preventShake } from "@/utils"
export default {
  components:{
    RecursionList
  },
  props: {
    blog:{
      type: Array,
      required: true
    }
  },
  data(){
    return {
      // 当前激活的锚点id值 
      currentActivationAnchor: "",
      // 防抖所返回的函数
      newFn:null
    }
  },
  computed:{
    newToc(){
      const getNewArray = (toc = [])=>{
        return toc.map(item=>({
          isSelect:item.anchor === this.currentActivationAnchor,
          ...item,
          children:getNewArray(item.children),
        }));
      };
      return getNewArray(this.blog);
    },
    doms(){
      let doms = [];
      const addDoms = (toc) => {
        for (const iterator of toc) {
          doms.push(document.querySelector(`#${iterator.anchor}`));
          if(iterator.children && iterator.children.length){
            addDoms(iterator.children);
          }
        }
      }
      addDoms(this.blog);
      return doms;
    }
  },
  created() {
    this.newFn = preventShake(this.newAnchor,50);
    this.$eventBus.$on('mainScrollMove',this.newFn);
  },
  destroyed(){
    this.$eventBus.$off('mainScroll',this.newFn)
  },
  methods: {
    handleSelect(item){
      location.hash = item.anchor;
    },
    // 为currentActivationAnchor赋予正确的值
    newAnchor(){
      this.currentActivationAnchor = "";
      for (const iterator of this.doms) {
        if(!iterator){
          continue;
        }
        // 设定判断范围
        const range = 200;
        // 获取dom距离视口的top
        const domTop = iterator.getBoundingClientRect().top;
        // 如果dom在判定范围内部
        if(domTop > 0 && domTop < range){
          this.currentActivationAnchor = iterator.id;
          return;
        }else if(domTop > range){ //如果dom在判定范围下部
          return;
        }else{ //如果dom在判定范围上部
          this.currentActivationAnchor = iterator.id;
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.blog-details-right-container{
  width:100%;
  box-sizing: border-box;
  padding: 20px;
  font-size: 14px;
}
</style>