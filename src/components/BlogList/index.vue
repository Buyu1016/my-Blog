<template>
    <div class="blog-list-container" v-loading="isLoading" ref="container">
        <ul v-show="!isLoading">
            <li v-for="(item) in data.rows" :key="item.id">
                <div class="thumb">
                    <RouterLink :to="{
                      name:'BlogDetails',
                      params:{
                        id:item.id
                      }
                    }">
                        <img
                        v-lazy:src="item.thumb"
                        :alt="item.title"
                        :title="item.title"
                        v-if="item.thumb"
                        />
                    </RouterLink>
                    </div>
                    <div class="main">
                    <RouterLink :to="{
                      name:'BlogDetails',
                      params:{
                        id:item.id
                      }
                    }">
                        <h2>{{item.title}}</h2>
                    </RouterLink>
                    <div class="aside">
                        <span>日期：{{item.createDate}}</span>
                        <span>浏览：{{item.scanNumber}}</span>
                        <span>评论：{{item.commentNumber}}</span>
                        <RouterLink :to="{
                          name:'BlogChildren',
                          params:{
                            categoryId:item.category.id
                          }
                        }">{{item.category.name}}</RouterLink>
                    </div>
                    <div class="desc">
                        {{item.description}}
                    </div>
                </div>
            </li>
        </ul>
        <Empty v-if="data.rows.length === 0 && !isLoading" />
        <Pager v-show="!isLoading" :total="data.total" :current="routeUrl.page" @pageChange="handleChangePage" />

    </div>
</template>

<script>
import Pager from "@/components/Pager";
import remoteGetData from "@/mixins/remoteGetData.js";
import { getBlogs } from "@/api/blog.js";
import Empty from "@/components/Empty"
export default {
    mixins: [remoteGetData({total: 0,rows: []})],
    components: {
        Pager,
        Empty
    },
    computed:{
      routeUrl(){
        const crtegoryId = +this.$route.params.categoryId || -1;
        const page = +this.$route.query.page || 1;
        const limit = +this.$route.query.limit || 10;
        return {
          crtegoryId,
          page,
          limit
        }
      }
    },
    mounted(){
      this.$refs.container.addEventListener("scroll",this.handleScrollMove);
    },
    beforeDestroy(){
      this.$refs.container.removeEventListener("scroll",this.handleScrollMove);
    },
    methods: {
      async getAwaitData(){
          return await getBlogs(this.routeUrl.page,this.routeUrl.limit,this.routeUrl.categoryId);
      },
      handleChangePage(newPage){
        if(this.routeUrl.crtegoryId === -1){ // 判断当前是否在分类
          // route提供的跳转
          this.$router.push({
            // 跳转的组件
            name:"Blog",
            // url相关配置
            query:{
              page: `${newPage}`,
              limit: `${this.routeUrl.limit}`
            }
          })
        }else{ // 在分类之中
          this.$router.push({
            // 跳转的组件
            name:"BlogChildren",
            // url相关配置
            query:{
              page: `${newPage}`,
              limit: `${this.routeUrl.limit}`
            },
            params:{
              categoryId: `${this.routeUrl.crtegoryId}`
            }
          })
        }
      },
      handleScrollMove(){
        this.$eventBus.$emit("allBlogsScrollMove",this.$refs.container);
      }
    },
    watch: {
      // 观察$route,监控路由变化
      async $route(newValue,oldValue){
        this.isLoading = true;
        // 滚动条回到顶部
        document.querySelector(".blog-list-container").scrollTop = 0;
        this.data = this.data = await this.getAwaitData();
        this.isLoading = false;
      }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: auto;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}
li {
  display: flex;
  padding: 15px 0;
  border-bottom: 1px solid @gray;
  .thumb {
    flex: 0 0 auto;
    margin-right: 15px;
    img {
      display: block;
      max-width: 200px;
      border-radius: 5px; 
      height: 150px;
    }
  }
  .main {
    flex: 1 1 auto;
    h2 {
      margin: 0;
    }
  }
  .aside {
    font-size: 12px;
    color: @gray;
    span {
      margin-right: 15px;
    }
  }
  .desc {
    margin: 15px 0;
    font-size: 14px;
  }
}
</style>