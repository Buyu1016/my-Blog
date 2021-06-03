<template>
    <div class="menu-container">
        <!-- RouterLink为路由插件提供的全局注册，作用为无刷新跳转页面 -->
        <RouterLink :exact="item.exact" v-for="(item) in datas" :key="item.path" :to="{name:item.name}" active-class="active" exact-active-class="">
            <Icon :type="item.icon" class="my-icon"/>
            <span>{{item.text}}</span>
        </RouterLink>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components:{
        Icon
    },
    data(){
        return {
            icon:["&#xe692;","&#xe6c2;","&#xe602;","&#xec1c;","&#xe600;"],
            text:["首页","文章","关于我","项目&效果","留言版"],
            datas:[
                {
                    icon:"&#xe692;",
                    text:"首页",
                    name:"Home",
                    exact: true
                },
                {
                    icon:"&#xe6c2;",
                    text:"文章",
                    name:"Blog",
                    // 表示只要以/blog开头即可
                    exact: false
                },
                {
                    icon:"&#xe602;",
                    text:"关于我",
                    name:"About",
                    exact: true
                },
                {
                    icon:"&#xec1c;",
                    text:"项目&效果",
                    name:"Project",
                    exact: true
                },
                {
                    icon:"&#xe600;",
                    text:"留言板",
                    name:"Message",
                    exact: true
                },
            ]
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container{
    color: @gray;
    a{
        margin-left: 5px;
        text-decoration: none;
        color: @gray;
        display: block;
        padding: 9px 0 9px 15px;
        .my-icon{
            margin-right: 7px;
        }
        &:hover{
            color: #fff;
        }
    }
    // 路由匹配到的路径和自己设置的路径相同则会自动增加一个class为router-link-active
    // 精确匹配到自己的路径会自动增加一个class为router-link-exact-active
    // 例如当前地址为localhost:8080/blog
    //      则会路径为/的那个标签会增加一个router-link-active
    //      路径为/blog的那个标签会增加两个router-link-active  router-link-exact-active
    // 前提为RouterLink标签没开启exact
    // 这个写active的原因是我把exact打开了，
    //      并且把router-link-active这个class类名通过设置换成了active
    a.active {
        color: #fff;
        background:rgba(170, 170, 170, 0.3);
        border-top-left-radius:5px;
        border-bottom-left-radius:5px;
    }
}
</style>