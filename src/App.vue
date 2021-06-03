<template>
  <div class="html-container">
    <Layout>
      <template v-slot:left>
        <div class="left">
          <SiteAside/>
        </div>
      </template>
      <template v-slot:default>
        <div class="main">
          <!-- 当vue-router匹配到这个组件就会将内容渲染在这里 -->
          <RouterView />
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./components/Layout";
import SiteAside from "./components/SiteAside";
export default {
  components: {
    Layout,
    SiteAside
  },
}
</script>

<style scoped>
.html-container{
  width: 100%;
  height: 100%;
}
.left{
  width: 300px;
  height: 100%;
}
.main{
  width: 100%;
  height: 100%;
}
</style>