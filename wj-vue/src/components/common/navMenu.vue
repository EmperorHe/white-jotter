<template>
<!-- 导航栏 -->
  <div>
    <el-menu
      :default-active="activePath"
      :router="true"
      class="el-menu"
      mode="horizontal"
      active-text-color="red"
      @select="handleSelect"
      text-color="#222"
    >
      <el-menu-item v-for="(item,index) in navList" :index="item.path" :key="index">
        <i :class="item.class"></i>{{item.itemName}}
      </el-menu-item>
      <el-menu-item index="/" class="more">
        <i class="el-icon-menu"></i>更多功能(待开发)
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "NavMenu",
  data() {
    return {
      activePath: '',
      navList: [
        { path: "/indexPage", class: 'el-icon-star-on', itemName: "首页" },
        { path: "/notebook", class: 'el-icon-edit', itemName: "笔记本" },
        { path: "/library", class: 'el-icon-document', itemName: "图书馆" },
        { path: "/person", class: 'el-icon-view', itemName: "个人中心" },
      ],
    };
  },
  created(){
    this.activePath = window.location.pathname;
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu{
}
.more {
  i{
    font-size: 24px;
  }
  position: absolute;
  right: 0;
  cursor: pointer;
}
</style>