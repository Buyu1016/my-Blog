<template>
  <RecursionList :list="arr" @active="clickSpan" />
</template>

<script>
import RecursionList from "./index.vue"
export default {
    components:{
        RecursionList
    },
    data(){
        return {
            arr: [{name: 1,isSelect: false},{name:2,isSelect: true,children:[{name:"2-1",isSelect:true},{name:"2-2",isSelect:false}]}]
        }
    },
    methods:{
        clickSpan(item){
            item.isSelect= true;
        }
    }
}
</script>

<style>

</style>