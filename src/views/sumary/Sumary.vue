<template>
  <div class="view-container Sumary">
    <el-button>tst</el-button>
  </div>
</template>
<script lang="ts">
import useCouter from "@/hook/useCouter";

export default {
  setup() {
    const { count, add } = useCouter();
    return {
      count,
      add,
    };
  },
};
</script>
<style lang="less"></style>
