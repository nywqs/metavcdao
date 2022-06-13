import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
import home  from '../pages/home';
import faq  from '../pages/faq';

const routes=[
    {path:'/',component:home},
    {path:"/faq",component:faq},
    //可以配置重定向
    {path:'',redirect:"/"}
]

const router=new VueRouter({
    routes
});

export default router