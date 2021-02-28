
<template>
 <div id="home">
     <NavBar class="home-nav"><div slot='center'>购物街</div></NavBar>
     <!-- 轮播图组件 -->
       <HomeSwiper :banners="banners"/>
      
      <!-- 推荐信息组件 -->
      <HomeRecommendView :recommends="recommends"/>

      <!-- 本周流行组件 -->
      <FeatureView :features="recommends"/>

     </div>
</template>

  <script>
    import NavBar from "components/common/navbar/NavBar.vue"
    import HomeSwiper from"./childcomps/HomeSwiper"  //引入轮播图组件
    import HomeRecommendView from "./childcomps/HomeRecommendView"  //引入推荐信息组件
    import FeatureView from "./childcomps/FeatureView" //引入本周流行组件


    import {getHomeMultidata} from "network/home.js"

    export default {
      name: "Home",
      components:{NavBar,HomeSwiper,HomeRecommendView,FeatureView},
      data(){
          return {
             banners:[],
             recommends:[],

          }
      },
      created(){
          //组件创建好发送网络请求
          getHomeMultidata().then(res=>{
              console.log('----首页请求到的数据如下----',res)
              this.banners=res.data.data.banner.list
              this.recommends=res.data.data.banner.list
          })
      }
     
    }
  </script>

<style scoped>
.home-nav{
    background-color:var(--color-tint);
    color:#fff;
    
}
</style>