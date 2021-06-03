<template>
  <div class="imageLoader-container">
      <img :src="placeholder" class="img-covered">
      <img :src="src" @load="imgLoad" class="img-cover" ref="img">
  </div>
</template>

<script>
export default {
    props: {
        src:{
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            default: 500
        }
    },
    methods: {
        imgLoad(){
            var timer;
            let opacityNum = 0;
            const oImg = this.$refs.img;
            timer = setInterval(()=>{
                opacityNum += opacityNum * 0.1 + 0.1;
                oImg.style.opacity = opacityNum;

                if(opacityNum >= 1){
                    oImg.style.opacity = 1;
                    clearInterval(timer);
                }
            },this.duration / 5);
        }
    }
}
</script>

<style>
    .imageLoader-container{
        width: 100%;
        height: 100%;
        position: relative;
    }
    .imageLoader-container img{
        width: 100%;
        height: 100%;
    }
    .img-covered{
        position: absolute;
        z-index: 1;
        /* 这个能虚化图片 */
        filter: blur(1vw);
    }
    .img-cover{
        position: absolute;
        z-index: 2;
        opacity: 0;
    }
</style>