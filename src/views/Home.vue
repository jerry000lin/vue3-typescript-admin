<template>
  <div class="Home">
    <v-header />
    <v-sidebar />
    <div class="content-box" :class="{ 'content-collapse': collapse }">
      <div class="content">
        <router-view> </router-view>
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from "@/components/layout/Header";
import vSidebar from "@/components/layout/Sidebar";
export default {
  components: {
    vHeader,
    vSidebar,
  },
  computed: {
    collapse() {
      return this.$store.state.collapse;
    },
  },
};
</script>
<style lang="less">
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
  .content {
    height: 100%;
    overflow: hidden;
    box-sizing: border-box;
  }

  &.content-collapse {
    left: 65px;
  }
}
</style>
