

<template>
<!-- // lodash,防抖 -->
    <div>
       <input type="text" v-model="val" @input="getData($event)">     
    </div>
</template>
<script>
import _ from "lodash-es"
export default {
    data(){
        return{
            val:''
        }
    },
    mounted(){
        this.getData = _.debounce(this.getData, 5000)
    },
    methods:{
        getData(e){
            console.log(e,this.val,'e')
        }
    }
}
</script>
<style scoped>

</style>