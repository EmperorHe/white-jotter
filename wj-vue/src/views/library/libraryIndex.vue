<template>
  <div class="lib-outer-div">
    <el-container>
      <el-aside class="lib-left">
        <el-menu
          class="categories"
          :default-active="activeName"
          active-text-color="blue"
        >
          <el-menu-item index="0">
            <i class="el-icon-menu"></i>
            <span slot="title">全部</span>
          </el-menu-item>
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">文学</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">流行</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">文化</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-menu"></i>
            <span slot="title">生活</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-menu"></i>
            <span slot="title">经管</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-menu"></i>
            <span slot="title">科技</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="lib-main-body">
        
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "2",
    };
  },
  methods: {
    handleSelect(tab, event) {
      console.log(tab, event);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.lib-outer-div {
  .lib-left{
    width: 150px !important;
  }
}
</style>