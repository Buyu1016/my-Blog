<template>
  <div class="blog-category-container" v-if="!isLoading">
    <h2>文章分类</h2>
    <RecursionList :list="list" @active="handleSelect" />
  </div>
</template>

<script>
import remoteGetData from "@/mixins/remoteGetData.js";
import RecursionList from "@/components/RecursionList";
import { getBlogTypes } from "@/api/blog.js";
export default {
  mixins: [remoteGetData([])],
  components:{
    RecursionList
  },
  computed: {
    categoryId(){
      return this.$route.params.categoryId || -1;
    },
    list() {
      const totalArticleCount = this.data.reduce(
        (a, b) => a + b.articleCount,
        0
      );

      const result = [
        { name: "全部", id: -1, articleCount: totalArticleCount },
        ...this.data,
      ];
      return result.map((it) => ({
        ...it,
        isSelect: it.id === this.categoryId,
        aside: `${it.articleCount}篇`,
      }));
    },
    limit(){
      return +this.$route.query.limit || 10;
    }
  },
  methods:{
      async getAwaitData(){
        return await getBlogTypes();
      },
      handleSelect(item){
        const query = {
          page: 1,
          limit: this.limit,
        };
        // 跳转到 当前的分类id  当前的页容量  newPage的页码
        if (item.id === -1) {
          this.$router.push({
            name: "Blog",
            query,
          });
        } else {
          this.$router.push({
            name: "BlogChildren",
            query,
            params: {
              categoryId: item.id,
            },
          });
        }
      }
  }
}
</script>

<style scoped lang="less">
.blog-category-container{
  width: 250px;
  height: 100vh;
  padding-left: 20px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>