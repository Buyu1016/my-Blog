<template>
    <MySlot>
        <template v-slot:default>
            <div>Hello World!</div>
        </template>
        <template v-slot:header>
            <div>CodeGorgeous</div>
        </template>
    </MySlot>
</template>

<script>
import MySlot from "./my-slot.vue";
export default {
    components:{
        MySlot
    }
}
</script>

<style>

</style>