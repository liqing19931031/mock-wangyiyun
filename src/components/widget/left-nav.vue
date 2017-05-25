<template lang="html">
  <div class="left-nav">
    <div class="navs" v-for='nav in navs'>
      <div style="padding-left: 10px">{{nav.name}}</div>
      <div class="nav" v-for='item in nav.children'>
        <router-link :to='item.route'><i class="glyphicon" :class="'glyphicon-' + item.icon"></i> &nbsp&nbsp{{item.name}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'left-nav',
  data () {
    return {
      navs: [
        {
          name: '推荐',
          children: [
            {name: '发现音乐', route: '/Music', icon: 'findmusic'},
            {name: '私人FM', route: '/1', icon: 'brodcast'},
            {name: 'MV', route: '/2', icon: 'video'},
            {name: '朋友', route: '/3', icon: 'friend'}
          ]
        },
        {
          name: '我的音乐',
          children: [
            {name: '本地音乐', route: '/4', icon: 'localmusic'},
            {name: '下载管理', route: '/5', icon: 'upload'},
            {name: '我的音乐云盘', route: '/6', icon: 'yun'},
            {name: '我的歌手', route: '/7', icon: 'singer'},
            {name: '我的电台', route: '/8', icon: 'diantai'}
          ]
        },
        {
          name: '创建的歌单',
          children: [
            {name: '我喜欢的音乐', route: '/9', icon: 'like'},
            {name: '汪苏泷', route: '/10', icon: 'musiclist'},
            {name: '吴青峰', route: '/11', icon: 'musiclist'},
            {name: '怀旧', route: '/12', icon: 'musiclist'},
            {name: '甜美欧美', route: '/13', icon: 'musiclist'}
          ]
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import '../../less/var.less';

.left-nav{
  float: left;
  height: ~"calc(100vh - 100px)";
  width: 200px;
  .navs{
    color: #999;
    font-size: 14px;
    line-height: 35px;
    .nav{
      line-height: 30px;
      a{
        color: #666;
        text-decoration: none;
        border-left: 3px solid white;
        display: block;
        box-sizing: border-box;
        padding: 0 15px;
        &.router-link-active{
          border-left: 3px solid @themeDark;
          background-color: #e6e7eb;
          color: #000;
        }
      }
      a:hover{
        color: #000;
      }
    }
  }
  .navs + .navs{
    margin-top: 10px;
  }
}
</style>
