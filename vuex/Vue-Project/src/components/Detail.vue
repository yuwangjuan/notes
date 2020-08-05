<template>
  <div>I am {{name}}</div>
</template>
<script>
import store from '../store'
export default {
  name: "Detail",
  data() {
    return {};
  },
  computed: {
      name(){
          return this.$store.state.status.name
      }
  },
  mounted() {},
  methods: {}
};
</script>

<!-- <style></style>          -->
