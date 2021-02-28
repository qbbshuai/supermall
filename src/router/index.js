import Vue from"vue"
import VueRouter from "vue-router"
//安装插件
Vue.use(VueRouter)


const Cart= ()=> import ("views/cart/Cart.vue")
const Category= ()=> import ("views/category/Category.vue")
const Detail= ()=> import ("views/detail/Detail.vue")
const Home= ()=> import ("views/home/Home.vue")
const Profile=()=> import ("views/profile/Profile.vue")
//创建router
const routes=[
    {
        path:'/',
        redirect:'/Home'
    },
    {
        path:'/cart',
        component:Cart
    },
    {
        path:'/category',
        component:Category
    },
    {
        path:'/home',
        component:Home
    },
    {
        path:'/profile',
        component:Profile
    }

]
const router=new VueRouter({
routes,
mode:'history'

})

export default router