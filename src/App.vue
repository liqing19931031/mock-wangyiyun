<template>
  <div id="app">
    <header>
        <div class="glyphicon glyphicon-music pull-left"></div><span>盘石芸音乐</span>
        <div class="search">
          <input type="text" name="" value="" placeholder='搜索音乐，歌手，歌词，用户'>
          <i class="glyphicon glyphicon-search"></i>
        </div>
        <div class="set">
          <i class="glyphicon glyphicon-mini"></i>
          <i class="glyphicon glyphicon-tosmall"></i>
          <i class="glyphicon glyphicon-tobig"></i>
          <i class="glyphicon glyphicon-close"></i>
        </div>
        <div class="message">
          <i class="glyphicon glyphicon-theme"></i>
          <i class="glyphicon glyphicon-message"></i>
          <i class="glyphicon glyphicon-setting"></i>
        </div>
        <div class="avantar">
          {{this.user.name}}
          <i class="glyphicon glyphicon-downdrop"></i>
        </div>
        <img v-if='this.user.avantar' :src="this.imgUrl + this.user.avantar" alt="">
    </header>
    <div class="mainbody clearfix">
      <leftNav></leftNav>
      <router-view class="contain"></router-view>
      <div class="footer">
      </div>
    </div>
  </div>
</template>

<script>
import leftNav from '@/components/widget/left-nav'

export default {
  name: 'app',
  data () {
    return {
       user: {
       }
    }
  },
  mounted () { // promise then 的链式调用
    this.$http('get', 'user', {id: 2})
    .then((data) => {
      this.user = data
    })
  },
  components: {
    leftNav
  }
}
</script>

<style lang='less'>
/*引入文件记得加*/
@import './less/panshi.less';

html,body{
  margin: 0;
  padding: 0;
  font-family: '宋体'
}

// 音符动画
@keyframes scroll
{
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
}

::-webkit-scrollbar{
  width: 4px;
}
::-webkit-scrollbar-thumb{
  border-radius: 4px;
  background-color: #e1e1e1;
}
::-webkit-scrollbar-thumb:hover{
  background-color: #ccc;
}
header{
  height: 50px;
  color: white;
  background: linear-gradient(to left, @theme 0%, @themeDark 100%);
  line-height: 50px;
  padding: 0 25px;
  span{
    display: inline-block;
    font-size: 16px;
    float: left;
  }
  .set,
  .message{
      float: right;
      font-size: 18px;
      i{
        cursor: pointer;
        color: #c5e9d7;
        &:hover{
          color: white;
        }
      }
  }
  .message{
    i{
      margin-left: 15px;
      &:nth-child(3) {
        padding-right: 10px;
        margin-right: 10px;
        border-right: 1px solid #999;
      }
    }
  }
  .avantar{
    float: right;
    font-size: 12px;
    color: #c5e9d7;
    cursor: pointer;
    &:hover{
      color: white;
    }
  }
  img{
    float: right;
    margin-right: 5px;
    margin-top: 15px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .search{
    float: left;
    margin-left: 60px;
    width: 220px;
    position: relative;
    ::-webkit-input-placeholder{
      color: #67bd9a;
    }
    input{
      width: 100%;
      padding-left: 10px;
      background-color: @themeLight;
      outline: none;
      border: none;
      height: 20px;
      color: white;
      border-radius: 10px;
    }
    i{
      font-size: 18px;
      position: absolute;
      top: 18px;
      color: #67bd9a;
      right: 0;
      cursor: pointer;
    }
  }
  .glyphicon-music{
    height: 50px;
    font-size: 30px;
    line-height: 50px;
    margin-right: 10px;
    animation: scroll 5s infinite linear;
  }
}
.mainbody{
  overflow: hidden;
  height: ~"calc(100vh - 50px)";
}
.contain{
  float: right;
  height: ~"calc(100vh - 100px)";
  width: ~"calc(100vw - 200px)";
  box-sizing: border-box;
  border-left: 1px solid #dfdfe1;
}
.footer{
  float: left;
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid #dfdfe1;
}
</style>
