import {createRouter,crateWebHashHistory} from 'vue-router';
 import test from '@components/test';
exports default new Router({

 })//之前写法
 const router = createRouter({
     history:crateWebHashHistory(),
     routes:[
         {
             path:'/',
             component:HelloWorld
         }
     ]
 })
 export default router;