<template>
  <div class="hello">
    <p @click="postInfo">vuex笔记</p>
  </div>
</template>

<script>
import {createNamespacedHelpers} from 'vuex';
const {mapState,mapActions,mapMutations} =createNamespacedHelpers('status');
const info = {
  name: "syvia",
  age: "18",
  number: "only"
};
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  computed: {
   
  },
  mounted() {
    
  },
  methods: {
    postInfo() {
      let that = this;
      that.$store.commit("getInfo", info); 
      that.$router.push({
        path:'/detail'
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
