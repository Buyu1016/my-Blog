<template>
  <div class="carouselitem-container" ref="container" @mousemove="pointMove" @mouseleave="pointLeave">
      <div class="carousel-img" :style="imgPosition" ref="img">
          <ImageLoader :src="carousel.bigImg" :placeholder="carousel.midImg" />
      </div>
      <div class="carousel-text" ref="text">
          <h2>{{carousel.title}}</h2>
          <h4> {{carousel.description}} </h4>
      </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader";
export default {
    props: ["carousel"],
    components:{
        ImageLoader
    },
    data(){
        return{
            textWidth:0, 
            containerSize:null,
            imgSize:null,
            moveX:0, //鼠标在容器中的位置X
            moveY:0 //鼠标在容器中的位置Y
        }
    },
    computed:{
        imgPosition(){
            if(!this.containerSize || !this.imgSize){
               return; 
            }
            const differWidth = this.imgSize.width - this.containerSize.width;
            const differHeight = this.imgSize.height - this.containerSize.height;
            let leftX = - differWidth /  this.containerSize.width * this.moveX;
            let topY = - differHeight / this.containerSize.height * this.moveY;
            return{
                transform: `translate(${leftX}px,${topY}px)`,
                transition: `transform 1s ease-out`
            }
        },
        // 将一开始的时候把图片默认在正中心
        defaultValue(){
            return{
                x: this.containerSize.width / 2,
                y: this.containerSize.height / 2
            }
        }
    },
    mounted(){
        this.textWidth = this.$refs.text.clientWidth;
        this.showText();
        this.getSize();
        this.moveX = this.defaultValue.x;
        this.moveY = this.defaultValue.y;
        // 每当浏览器尺寸发生变化时，重新获取Size
        window.addEventListener("resize",this.getSize);
    },
    destroyed() {
        window.removeEventListener("resize", this.getSize);
    },
    methods: {
        showText(){
            this.$refs.text.style.opacity = 1;
            this.$refs.text.style.width = 0;
            this.$refs.text.style.transition = "all 5s 1s";
            this.$refs.text.clientHeight;
            this.$refs.text.style.width = this.textWidth + "px";
        },
        getSize(){
            this.containerSize = {
                width: this.$refs.container.clientWidth,
                height: this.$refs.container.clientHeight
            }
            this.imgSize = {
                width: this.$refs.img.clientWidth,
                height: this.$refs.img.clientHeight
            }
        },
        pointMove(e){
            const boxSize = this.$refs.container.getBoundingClientRect();
            this.moveX = e.clientX - boxSize.left;
            this.moveY = e.clientY - boxSize.top;
        },
        pointLeave(e){
            this.moveX = this.defaultValue.x;
            this.moveY = this.defaultValue.y;
        }
    }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
    .carouselitem-container{
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        .carousel-img{
            width: 110%;
            height: 110%;
            position: absolute;
        }
        .carousel-text{
            position: absolute;
            top: 60%;
            left: 10%;
            z-index: 3;
            text-shadow: 1px 1px 1px rgb(187, 186, 186);
            overflow: hidden;
            white-space: nowrap;
            opacity: 0;
        }
    }
</style>