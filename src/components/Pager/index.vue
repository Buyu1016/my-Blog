<template>
  <div class="pager-container" v-if="pageTotal > 1">
      <a href="#" :class="{disabled:current === 1}" @click="handleClick(1)">| &lt;&lt;</a>
      <a href="#" :class="{disabled:current === 1}" @click="handleClick(current - 1)">&lt;&lt;</a>
      <a href="#" v-for="(n,i) in pageArrs" :key="i" :class="{active: n === current}" @click="handleClick(n)">{{n}}</a>
      <a href="#" :class="{disabled: current === pageTotal}" @click="handleClick(current + 1)">&gt;&gt;</a>
      <a href="#" :class="{disabled: current === pageTotal}" @click="handleClick(pageTotal)">&gt;&gt; |</a>
  </div>
</template>

<script>
export default {
    props: {
        // 当前页码
        current: {
            type: Number,
            default: 1
        },
        // 总数据量
        total: {
            type: Number,
            default: 0
        },
        // 页容量
        limit: {
            type: Number,
            default:10
        },
        // 可见页码数
        visible: {
            type: Number,
            default:10
        }

    },
    computed: {
        // 总页数
        pageTotal(){
            return Math.ceil(this.total/this.limit);
        },
        // 展示的最小页码数
        showMinPage(){
            let pageMin = this.current - Math.ceil(this.visible / 2);
            // 过界判定
            return pageMin <1 ? 1 : pageMin;
        },
        // 最大展示页码数
        showMaxPage(){
            let pageMax = this.showMinPage + this.visible -1;
            // 过界判定
            return pageMax > this.pageTotal ? this.pageTotal : pageMax;
        },
        // 当前显示页码数据
        pageArrs(){
           let arr = [];
           for(let i = this.showMinPage; i <= this.showMaxPage; i++){
               arr.push(i);
           }
           return arr;
        },
    },
    methods:{
        handleClick(newPage){
            if(newPage < 1){
                newPage = 1;
            }else if(newPage > this.pageNumber){
                newPage = this.pageNumber;
            }
            if(newPage === this.current){
                return;
            }
            // 抛出事件，向父组件传递参数newpage
            this.$emit("pageChange",newPage);
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
// ~@代表src这个文件夹
// 设置lang="less"之后，在style内写less代码
.pager-container{
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a{
        color: @primary;
        margin: 0 6px;
        &.disabled{
            color: @gray;
            cursor: not-allowed;
        }
        &.active{
            color: @pink;
            font-weight: bold;
            cursor: text;
        }
    }
}
</style>