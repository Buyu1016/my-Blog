<template>
  <div class="blog-container">
      <Layout>
            <template v-slot:default>
                <div class="main">
                  <BlogList />
                </div>
            </template>
            <template v-slot:right>
                <div class="right">
                    <BlogCategory />
                </div>
            </template>
        </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout";
import BlogList from "@/components/BlogList";
import BlogCategory from "@/components/BlogCategory";
export default {
  components: {
    Layout,
    BlogList,
    BlogCategory,
  }
}
</script>

<style scoped>
.main{
  height:100vh;
}
</style>