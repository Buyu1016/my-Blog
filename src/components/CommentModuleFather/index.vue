<template>
  <div>
      <CommentModule :isListLoading="isLoading" :list="data.rows" :title="'博客评论'" :subTitle="data.total" @submitData="handleCheck"/>
      <div class="my-style" v-if="isLock">主人，已经没有更多评论了~_~</div>
      <BackTop />
  </div>
</template>

<script>
import remoteGetData from "@/mixins/remoteGetData.js";
import { getPageComments,postComments } from "@/api/blog.js";
import CommentModule from "@/components/CommentModule";
import BackTop from "@/components/BackTop";
export default {
    mixins: [remoteGetData({total: 0,rows: []})],
    components:{
        CommentModule,
        BackTop
    },
    data(){
        return {
            page: 1,
            limit:20,
            isLock: false,
            scrollDom: null
        }
    },
    created() {
        this.$eventBus.$on('mainScrollMove',this.print);
    },
    destroyed() {
        this.$eventBus.$off('mainScrollMove',this.print);
    },
    computed:{
        isHasData(){
            return this.data.total >= this.data.rows.length;
        }
    },
    methods:{
        async getAwaitData(){
            return await getPageComments(this.page,this.limit,this.$route.params);
        },
        async handleCheck(data,callback){
            const resp = await postComments({
                nickname: data.userName,
                content: data.userComment,
                blogId: this.$route.params.id
            });
            this.data.rows.unshift(resp);
            this.data.total++;
            callback("提交评论成功！");
        }, 
        async addMessageData(){
            if(!this.isHasData){
                // 已拿到所有数据
                this.isLock = true;
                return;
            }
            this.isLoading = true;
            this.page ++;
            const resp = await this.getAwaitData();
            this.data.total = resp.total;
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
        async print(data){
            this.scrollDom = data[0];
            if(this.isLoading){
                // 表示目前正在加载更多的数据，禁止在加载途中再次触发加载
                return;
            }
            const scrollTop = data[0].scrollTop;
            const bodyTop = document.body.clientHeight;
            const mainHeight = data[1].clientHeight + 40;
            // 误差值
            const errorValue = 100;
            if(scrollTop + bodyTop > mainHeight - errorValue){
                this.addMessageData();
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.my-style{
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: @gray;
}
</style>