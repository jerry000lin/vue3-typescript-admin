<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-menu-item :index="item.index" v-for="item in items" :key="item.index">
        <i :class="item.icon"></i>
        <template #title>{{ item.title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
// import bus from "../common/bus";
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-platform-eleme",
          index: "sumary",
          title: "概览",
        },
        {
          icon: "el-icon-platform-eleme",
          index: "experiment",
          title: "实验管理",
        },
        {
          icon: "el-icon-platform-eleme",
          index: "algorithm",
          title: "算法管理",
        },
        {
          icon: "el-icon-platform-eleme",
          index: "model",
          title: "模型管理",
        },
        {
          icon: "el-icon-platform-eleme",
          index: "dashboard",
          title: "模型管理",
        },
      ],
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    collapse() {
      return this.$store.state.collapse;
    },
  },
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
