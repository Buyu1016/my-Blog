<template>
  <div class="xx">
      <ImageLoader 
	src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
  :duration="1000"
/>
  </div>
</template>

<script>
import ImageLoader from "./index.vue";
export default {
    components:{
        ImageLoader
    }
}
</script>

<style>
    .xx {
        width: 1000px;
        height: 800px;
    }
</style>