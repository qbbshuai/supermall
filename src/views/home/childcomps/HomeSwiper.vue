
<!-- 轮播图组件-->
<template>
 <div> 
      <Swiper>
          <SwiperItem v-for="item in banners">
              <a :href="item.link">
                  <img :src="item.image">
              </a>
          </SwiperItem>
      </Swiper>
      </div>
</template>

  <script>
      import {Swiper,SwiperItem} from "components/common/swiper/index.js"
   
    export default {
      name: "HomeSwiper",
      components:{
          Swiper,
          SwiperItem
      },
      props:{
          banners:{
              type:Array,
          },
      }
     
    }
  </script>

<style scoped>
</style>