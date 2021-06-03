<template>
  <ul>
    <li v-for="(item,index) in list" :key="index">
        <span @click="clickSpan(item)" :class="{active: item.isSelect,twoactive:item.id === categoryId}">{{item.name}}</span>
        <span v-if="item.aside" class="number">{{item.aside}}</span>
        <RecursionList :list="item.children" @active="clickSpan"/>
    </li>
  </ul>
</template>

<script>
export default {
    name: "RecursionList",
    props: {
        // 约定的数据格式  [{name:"",isActive:true,children:[name:"",isActive:true]}]
        list: {
            type: Array,
            default: () => []
        }
    },
    computed:{
        categoryId() {
            return +this.$route.params.categoryId || -1;
        }
    },
    methods: {
        clickSpan(item){
            if(!item.Selected){
                this.$emit("active",item);
            }
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
ul{
    list-style: none;
    margin: 0;
    padding-left: 1rem; 
    li{
        min-height: 40px;
        line-height:40px;
        cursor: pointer;
        .number{
            margin-left: 10px;
            font-size: 12px;
            color: @gray;
        }
    }
    .active,.twoactive {
        color:@primary;
        pointer-events: none;
    }
}
</style>