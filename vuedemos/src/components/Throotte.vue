<template>
  <!-- // lodash,节流 -->
  <div
    id="container"
    @scroll="scrollUp($event)"
    style="width:100%;height:1400px;"
  ></div>
</template>
<script>
import _ from "lodash-es";
export default {
  data() {
    return {};
  },
  mounted() {
    window.addEventListener("scroll", _.throttle(this.handle, 2000), true);
  },
  methods: {
    handle() {
      console.log(Math.random());
    }
  }
};
</script>
<style scoped></style>
