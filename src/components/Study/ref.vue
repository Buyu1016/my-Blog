<template>
  <div>
        <p ref="my-ref">Hello Vue!</p>
        <Icon type="&#xe60c;" ref="my-icon"/>
        <button @click="handleClick">获取ref</button>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
    components: {
        Icon
    },
    methods:{
        handleClick(){
            console.log(this.$refs);
        }
    }
}
</script>

<style>

</style>