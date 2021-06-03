<template>
  <div>
        <button @click="handleClick" :disabled="isLoading">
          {{isLoading ? "loading" : "submit"}}
        </button>
        <span>{{error}}</span>
  </div>
</template>

<script>
export default {
    data(){
        return {
            count:0,
            isLoading:false,
            error:""
        }
    },
    props: {
        click:{
            type: Function,
        }
    },
    methods:{
        async handleClick(){
            /*
            * 点击次数 +1
            * 错误消息清空
            * 为了防止重复点击，需要先将 isLoading 设置为 true
            * 通知父组件：「我被点击了」，并传递当前的点击次数
            * 等待父组件处理（有可能是异步的），将父组件处理的结果设置到 error
            */
           this.count++;
           this.error = "";
           this.isLoading = true;
        //      第一种利用抛出事件进行传递
        //      this.$emit("active",this.count,(error)=>{
        //          this.isLoading = false;
        //          this.error = error;
        //      })

        //     第二种利用$listeners判断传递的事件
        //      if(this.$listeners.active){
        //      const err = await this.$listeners.active();
        //      this.isLoading = false;
        //      this.error = err;
        //      }
        //      第三种利用props进行传递
                if(this.click){
                    const err = await this.click(this.count);
                    this.isLoading = false;
                    this.error = err;
                }
        }
    }
}
</script>

<style>

</style>