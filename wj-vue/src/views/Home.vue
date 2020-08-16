<template>
  <div class="home">
    <nav-menu ></nav-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import NavMenu from '../components/common/navMenu'
// import IndexPage from './index/IndexPage'
export default {
  name: 'Home',
  components: {
    NavMenu,
    // IndexPage
  },
  data() {
    return {
    }
  },
}
</script>
