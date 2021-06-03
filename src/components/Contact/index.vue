<template>
    <div class="contact-container">
        <div class="my-warrper my-github">
            <Icon :type="icon[0]"/>
            <a :href="data.github" class="myText">{{data.githubName}}</a>
        </div>
        <div class="my-warrper my-email">
            <Icon :type="icon[1]"/>
            <a :href="`mailto:${data.qq}@qq.com`" class="myText">{{data.mail}}</a>
        </div>
        <div class="my-warrper my-qq">
            <img src="assets/my-qq.PNG" alt="">
            <Icon :type="icon[2]"/>
            <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`" class="myText">{{data.qq}}</a>
        </div>
        <div class="my-warrper my-wechat">
            <img :src="data.weixinQrCode" alt="">
            <Icon :type="icon[3]"/>
            <a href="#" class="myText">{{data.weixin}}</a>
        </div>
    </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    data(){
        return {
            icon: ["&#xe656;","&#xe605;","&#xe615;","&#xe6f2;"],
            text: ["github","2460481461@qq.com","2460481461","CodeGorgeous"],
        }
    },
    props: {
        data:{
            type: Object,
            required: true
        }
    },
    components: {
        Icon
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
    .contact-container{
        font-size: 20px;
        background: transparent;
        color: @lightWords;
        .my-warrper{
            transition:color 1s;
            padding: 3px;
            .myText{
            margin: 0 0 0 5px;
            font-size: 14px;
            text-decoration: none;
            color: @lightWords;
            transition:color 1s;
            text-align: center;
            vertical-align: baseline;
            }
            &:hover .myText,
            &:hover{
                color: @primary;
            }
        }
        .my-qq,.my-wechat{
            position: relative;
            img{
                margin-bottom: 22px;
                width: 100px;
                height: 0px;
                position: absolute;
                border-radius: 5px;
                bottom: 0;
                transform: translate(20%,-8%);
                transition: height 0.5s ease-out;
            }
            &:hover img{
                height: 100px;
            }
            
        }
    }
</style>