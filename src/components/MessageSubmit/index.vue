<template>
  <form id="message-submit-container" ref="container" @submit.prevent="handleClick" class="message-submit-container">
      <input type="text" maxlength="10" placeholder="用户呢称" class="UserName" v-model="fromData.userName">
      <div class="username-error">{{dataError.userNameError}}</div>
      <textarea rows="5" cols="50" maxlength="200" placeholder="用户评论" class="UserComment" v-model="fromData.userComment"></textarea>
      <div class="usercomment-error">{{dataError.userCommentError}}</div>
      <button type="submit" value="提交" :class="{
          disabled:isLoading
      }">{{isLoading ? "正在提交..." : "提交" }}</button>
  </form>
</template> 

<script>
export default {
    data(){
        return{
            fromData:{
                userName: "",
                userComment: ""
            },
            dataError:{
                userNameError: "",
                userCommentError: ""
            },
            isLoading: false
        }
    },
    methods: {
        async handleClick(){
            // username的校验规则
            // const userNameReg = /^[\u4e00-\u9fa5_a-zA-Z0-9]+$/;
            // if(!this.fromData.username){
            //     this.dataError.userNameError = "名字不符合规范";
            //     return;
            // }
            this.dataError.userNameError = this.fromData.userName ? "" : "名字不符合规范";
            // if(!this.fromData.userComment){
            //     this.dataError.userCommentError = "请填写内容";
            //     return;
            // }
            this.dataError.userCommentError = this.fromData.userComment ? "" : "请填写内容";
            if(this.dataError.userNameError || this.dataError.userCommentError){
                return;
            }
            this.isLoading = true;
            this.$emit("submitData",this.fromData,(success)=>{
                this.$showMessage({
                    content:success,
                    type: "success",
                    duration: 1000,
                    container: this.$refs.container
                });
                this.isLoading = false;
                this.fromData.userName = "";
                this.fromData.userComment = "";
            })
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.message-submit-container{
    padding-top: 20px;
    .UserName{
        width: 200px;
        height: 30px;
        padding: 0 0 0 5px;
        border: 1px dashed @gray;
        border-radius: 5px;
        outline: 0;
    }
    .UserComment{
        border: 1px dashed @gray;
        border-radius: 5px;
        padding: 5px;
        font-size: 20px;
        outline: 0;
    }
    .username-error,.usercomment-error{
        height: 20px;
        color: @danger;
        margin: 2px 0 5px 0;
    }
    button{
        font-weight: bold;
        padding: 5px 20px;
        border-radius: 5px;
        border: 1px solid @gray;
        cursor: pointer;
        background: @primary;
        font-weight: 100;
        color: #fff;
        &.disabled{
            pointer-events: none;
            background: @gray;
        }
    }
}
</style>