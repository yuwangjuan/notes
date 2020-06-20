1.vue3.0 核心源码变动
2.写法上的变动
3.一些相关变动
核心源码变动：
<!-- 双向绑定 -->
vue2--defineProperty，如果有数组，不好处理
vue3-proxy，不改变源对象，新建一个对象
defineProperty缺点：
var a={
    b:{
        c:1
    }
}
for(var item in data){
    Object.defineProperty(a,"b",{
    set:
})
}


vue2
(function(global,factory){
    typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():
    typeof define ==='function'&&define.amd?
})(this.function(){
    
})
函数式：利于tree shaking(删除不用的函数)
写法上的变动：composition api
1.vue create my-app
2.cd my-app
3.vue add vue/@next
<h1>{{state.a}}</h1>
{{num}}//1.自由暴露,可不用标签
import {reactive,ref,onMounted,watch,watchEffect,computed} from 'vue'//2.需要import
vue3移除create ，使用setup(){//3.setup(){}
    var state=reactive({//4.data使用reactive
        a:123
    })
    var num = ref(33);、、5.响应监听
    watch(num,function(newNum,oldNum){//监听数据改变

    });
    watchEffect(()=>{//6.监听改变，只要数据改变，就会触发
        consoel.log(state.a);
        consoel.log(state.b);
    });
    var num = computed(()=>{
        return num.value+33
    })
    onMounted(()=>{
        setTimeout(()=>{
            state.a = 333;
            num.value = 222;//ref改变值,必须要加value
        })
    })
    return{
        state,
        num
    }
}
<!-- 相关全家桶 -->
vue-router 在vue3中安装vue-router   npm i vue-router next
vuex


