<template>
  <div class="siteAside-container">
        <template v-if="data">
            <Avatar :url="data.avatar" :size="130" class="my-avatar"/>
            <h3 class="my-name" @click="handleClick">{{data.siteTitle}}</h3>
            <Menu class="my-menu"/>
            <Contact class="my-contact" :data="data" />
            <p class="record">{{data.icp}}</p>
        </template>
    </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Contact from "@/components/Contact";
import Menu from "@/components/Menu";
import { mapState } from "vuex";
export default {
    components: {
        Avatar,
        Contact,
        Menu
    },
    computed: {
        ...mapState("setting",["data"])
    },
    methods:{
        handleClick(){
            console.log(this.data);
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.siteAside-container{
    width: 100%;
    height: 100vh;
    background: @dark;
    .my-avatar{
        text-align: center;
        padding-top: 30px;
    }
    .my-menu{
        padding-left: 15px;
    }
    .my-contact{
        margin-top: 100px;
        padding-left: 10px;
    }
    .my-name{
        text-align: center;
        color: rgb(223, 222, 222);
    }
    .record{
        text-align: center;
        margin-top:50px;
        font-size: 14px;
        color: #444;
    }
}
</style>