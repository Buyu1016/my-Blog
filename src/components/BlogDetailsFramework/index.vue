<template>
  <div class="blog-details-framework-container">
    <Layout>
      <template v-slot:default>
          <div class="main" ref="mainContainer"  v-loading="isLoading">
              <div ref="mainContainerDiv">
                <BlogDetailsMain :blog="data"  v-if="data" class="demo"/>
                <CommentModuleFather v-if="!isLoading" class="demo"/>
              </div>
          </div>
      </template>
      <template v-slot:right>
          <div class="right">
              <BlogDetailsRight :blog="data.toc"  v-if="data"/>
          </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import remoteGetData from "@/mixins/remoteGetData.js";
import { getBlogMessages } from "@/api/blog.js";
import Layout from "@/components/Layout";
import BlogDetailsMain from "@/components/BlogDetailsMain";
import BlogDetailsRight from "@/components/BlogDetailsRight"
import CommentModuleFather from "@/components/CommentModuleFather"
import { setTitle } from "@/utils";
export default {
  mixins: [remoteGetData()],
  components:{
    Layout,
    BlogDetailsMain,
    BlogDetailsRight,
    CommentModuleFather
  },
  computed:{
    id() {
      return this.$route.params.id || 1;
    }
  },
  methods:{
    async getAwaitData(){
      let resp = await getBlogMessages(this.id);
      // 如果文章不存在
      if(!resp){
        this.$router.push("/404");
        return;
      }
      setTitle.setRouteTitle(resp.title);
      return resp;
    },
    handleScrollMove(){
      this.$eventBus.$emit('mainScrollMove',[this.$refs.mainContainer,this.$refs.mainContainerDiv]);
    }
  },
  mounted(){
    this.$refs.mainContainer.addEventListener("scroll",this.handleScrollMove);
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() =>{
      location.hash = hash;
    },50);
  },
  beforeDestroy(){
    this.$refs.mainContainer.removeEventListener("scroll",this.handleScrollMove);
  }
}
</script>

<style scoped lang="less">
.blog-details-framework-container{
  position: relative;
  height: 100%;
}
.main {
  overflow-y: auto;
  overflow-x:hidden;
  height: 100vh;
  box-sizing: border-box;
  padding: 20px;
  scroll-behavior: smooth;
  position:relative;
}
.right {
  width: 200px;
}
</style>