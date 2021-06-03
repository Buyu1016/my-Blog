<template>
  <div class="message-container" v-loading="isLoading">
      <div class="container" ref="messageContainer">
        <CommentModule :list="data.rows" :title="'留言板'" :subTitle="data.total" :isListLoading="isCommentLoading" @submitData="handleCheck"/>
        <div class="my-style" v-if="isLock">主人，已经没有更多留言了~_~</div>
      </div>
  </div>
</template>

<script>
import CommentModule from "@/components/CommentModule"
import remoteGetData from "@/mixins/remoteGetData.js"
import { getMessageData,postMessage } from "@/api/message.js"
export default {
  mixins:[remoteGetData({total:0,rows:[]})],
  components: {
    CommentModule
  },
  data(){
    return {
      page:1,
      limit:10,
      isLock: false,
      isCommentLoading: false
    }
  },
  computed: {
    isHasData(){
        return this.data.total >= this.data.rows.length;
    },
    oDiv(){
      return document.querySelector(".comment-module-container");
    }
  },
  methods: {
    handleScrollMove(){
      this.print([this.$refs.messageContainer,this.oDiv]);
    },
    async getAwaitData(){
      return await getMessageData(this.page,this.limit);
    },
    async handleCheck(data,callback){
      const resp = await postMessage(data);
      this.data.rows.unshift(resp);
      this.data.total++;
      callback("留言成功！");
    }, 
    async addMessageData(){
        if(!this.isHasData){
            // 已拿到所有数据
            this.isLock = true;
            return;
        }
        this.isCommentLoading = true;
        this.page ++;
        const resp = await this.getAwaitData();
        this.data.total = resp.total;
        this.data.rows = this.data.rows.concat(resp.rows);
        this.isCommentLoading = false;
    },
    async print(data){
        this.scrollDom = data[0];
        if(this.isCommentLoading){
            // 表示目前正在加载更多的数据，禁止在加载途中再次触发加载
            return;
        }
        const scrollTop = data[0].scrollTop;
        const bodyTop = document.body.clientHeight;
        const mainHeight = data[1].clientHeight + 40;
        // 误差值
        const errorValue = 50;
        if(scrollTop + bodyTop > mainHeight - errorValue){
            this.addMessageData();
        }
    },
  },
  mounted() {
    this.$refs.messageContainer.addEventListener("scroll",this.handleScrollMove);
  },
  beforeDestroy(){
    this.$refs.messageContainer.removeEventListener("scroll",this.handleScrollMove);
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.message-container{
  width: 100%;
  height: 100vh;
  background-size: cover;
  position: relative;
  img{
    position: absolute;
  }
  .container{
    width: 75%;
    height: 100%;
    overflow-y: auto;
    margin: 0 auto;
    box-sizing: border-box;
    background: transparent;
  }
  .my-style{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: @gray;
}
}
</style>