<template>
  <div class="find-music">
    <musicNav></musicNav>
    <router-view></router-view>
  </div>
</template>

<script>
import musicNav from './widget/music-nav'

export default {
  name: 'music',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    musicNav
  }
}
</script>

<style lang='less'>
  .find-music{
    overflow: auto;
    padding: 0 30px;
    box-sizing: border-box;
  }
</style>
