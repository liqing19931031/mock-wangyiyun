<template lang="html">
  <div class="left-nav">
    <div class="allnav">
      <div class="navs" v-for='nav in navs'>
        <div style="padding-left: 10px">{{nav.name}}</div>
        <div class="nav" v-for='item in nav.children'>
          <router-link :to='item.route'><i class="glyphicon" :class="'glyphicon-' + item.icon"></i> {{item.name}}</router-link>
        </div>
      </div>
    </div>
    <div class="playing">
      <div class="pic">
        <img :src='this.imgUrl + this.playing.pic' alt="">
      </div>
      <div class="right-content">
        <div class="musicname">
          {{this.playing.name}}
          <i class="glyphicon glyphicon-like"></i>
        </div>
        <div class="singer">
          {{this.playing.singer}}
          <i class="glyphicon glyphicon-share"></i>
        </div>
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
      ],
      playing: {
      }
    }
  },
  mounted () {
    this.$http('get', 'newmusic', {id: 1})
    .then((data) => {
      this.playing = data.result
    })
  }
}
</script>

<style lang="less">
@import '../../less/var.less';

.left-nav{
  float: left;
  height: ~"calc(100vh - 100px)";
  width: 200px;
  position: relative;
  .allnav{
    height:  ~"calc(100vh - 160px)";
    overflow: auto;
  }
  .navs{
    color: #999;
    font-size: 12px;
    line-height: 35px;
    .nav{
      line-height: 30px;
      i{
        font-size: 16px;
      }
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
  .playing{
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 60px;
    color: #333;
    border-top: 1px solid #dfdfe1;
    .pic{
      width: 60px;
      float: left;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .right-content{
      width: 140px;
      box-sizing: border-box;
      padding:10px 8px;
      float: left;
      i{
        padding-top: 2px;
      }
    }
    .musicname{
      width: 100%;
      float: left;
      font-size: 14px;
      height: 20px;
      i{
        cursor: pointer;
        float: right;
      }
    }
    .singer{
      width: 100%;
      float: left;
      height: 20px;
      font-size: 12px;
      i{
        cursor: pointer;
        float: right;
        font-size: 14px;
      }
    }
  }
}
</style>
