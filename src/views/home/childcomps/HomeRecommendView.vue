<!-- 推荐信息组件-->
<template>
 <div class="recommend">
    <div v-for="item in recommends" class="recommend-item">
        <a :href="item.link">
            <img :src="item.image">
            <p>{{item.title}}</p>
            </a>
        </div>
 </div>
</template>

  <script>
   
    export default {
      name: "Profile",
      props:{
          recommends:{
              type:Array
          }
      }
     
    }
  </script>

<style scoped>
.recommend{
    display:flex;
    justify-content:center;
    width:100%;
    text-align:center;
    font-size:12px;
     border-bottom:10px solid #eee;
     padding:6px 0 10px;

}
.recommend-item{
    margin:5px;
    border-radius:50%;
    overflow:hidden;
   
   
}
.recommend-item img{
    width:70px;
    height:70px;
}
</style>