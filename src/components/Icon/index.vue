<template>
<div class="icon-container">
  <span class="iconfont" v-html="type">{{type}}</span>
</div>
</template>

<script>
const iconObj = {
    error: "&#xe60c;",
    home: "&#xe692;",
    blog: "&#xe6c2;",
    warning: "&#xe6bb;",
    leavingMessage: "&#xe600;",
    correct: "&#xe8d7;",
    wechart: "&#xe6f2;",
    empty: "&#xe601;",
    important: "&#xe602;",
    downArrow: "&#xe603;",
    code: "&#xec1c;",
    email: "&#xe605;",
    upArrow: "&#xe604;",
    github: "&#xe656;",
    close: "&#xefe5;",
    qq: "&#xe615;"
}
const iconObjKey = Object.keys(iconObj);
export const iconObjValue = iconObjKey.map((item) => {
    return iconObj[item];
});
export default {
    props:{
        type:{
            type:String,
            required: true,
        }
    }
}
</script>

<style scoped>
    @font-face {
        font-family: 'iconfont';  /* project id 2508228 */
        src: url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.eot');
        src: url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.woff') format('woff'),
        url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_2508228_vrj6hr1ms8q.svg#iconfont') format('svg');
    }
    .icon-container{
        display:inline-block;
    }
    .iconfont{
        font-family: "iconfont";
    }
</style>