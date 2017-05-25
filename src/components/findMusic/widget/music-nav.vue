<template lang="html">
  <div class="music-nav clearfix">
    <div class="navs">
      <div class="nav clearfix" v-for='nav in navs'>
        <router-link :to='nav.route'>{{nav.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navs: [
        {name: '个性推荐', route: 'recommended'},
        {name: '歌单', route: 'musicList'},
        {name: '主播电台', route: 'c'},
        {name: '排行榜', route: 'd'},
        {name: '歌手', route: 'e'},
        {name: '最新音乐', route: 'f'}
      ]
    }
  }
}
</script>

<style lang="less">
@import '../../../less/var.less';

.music-nav{
  border-bottom: 1px solid #dfdfe1;
  .navs{
    width: 480px;
    margin: 0 auto;
  }
  .nav{
    margin-bottom: -4px;
    display: inline-block;
  }
  .nav + .nav{
    margin-left: 30px;
  }
  a{
    text-decoration: none;
    color: #333;
    float: left;
    line-height: 44px;
    border-bottom: 3px solid white;
    &.router-link-active{
      color: @themeDark;
      border-bottom: 3px solid @themeDark;
    }
  }
  a:hover{
    color: @themeDark;
  }
}
</style>
