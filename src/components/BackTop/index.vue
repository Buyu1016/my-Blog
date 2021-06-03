<template>
  <div v-show="isShow" @click="handleClick" class="backtop-container">
      <span>Top</span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            isShow: false,
            dom:null
        }
    },
    created() {
        this.$eventBus.$on('mainScrollMove',this.handleOn);
    },
    destroyed(){
        this.$eventBus.$off('mainScrollMove',this.handleOn);
    },
    methods: {
        handleOn(data){
            this.dom = data[0];
            if(data[0].scrollTop > data[0].clientHeight){
                this.isShow = true;
            }else{
                this.isShow = false;
            }
        },
        handleClick(){
            this.dom.scrollTop = 0; 
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.backtop-container{
    cursor: pointer;
    span{
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 0;
        right: 0;
        background-color:@primary;
        border-radius: 50%;
        margin:0 20px 20px 0;
        animation:run 2s infinite;
        z-index: 99;
    }
    @keyframes run {
        0%{
            transform: translate(0,-30%);
        }
        50%{
            transform: translate(0,0);
        }
        100%{
            transform: translate(0,-30%);
        }
    }
}
</style>