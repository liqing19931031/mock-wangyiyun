<template lang="html">
  <div class="musiclist clearfix">
    <div class="header">
      <span>推荐歌单</span><span class="more">更多></span>
    </div>
    <div class="contents">
      <div class="content">
        <div class="content-body">
          <div class="week">
            星期{{weeks[new Date().getDay()]}}
          </div>
          <div class="day">
            {{new Date().getDate()}}
          </div>
          <div class="description">
            根据您的口味生成每日更新
          </div>
        </div>
        <div class="content-footer">
          每日歌曲推荐
        </div>
      </div>
      <div class="content" v-for='item in dataList'>
        <div class="content-body">
          <img :src='imgUrl + item.pic' alt="">
          <div class="listener">
            <i class="glyphicon glyphicon-headset"></i>  {{dealListener(item.listener)}}
          </div>
          <div class="description">
            {{item.editorrec}}
          </div>
        </div>
        <div class="content-footer">
          {{item.abstract}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [
      ],
      weeks: [
        '',
        '一',
        '二',
        '三',
        '四',
        '五',
        '六',
        '日'
      ],
      arrs: [
        '',
        '编辑推荐：',
        '根据您收藏的歌单推荐：',
        '根据您喜欢的单曲推荐：'
      ]
    }
  },
  mounted () {
    this.$http('get', 'music')
    .then((data) => {
        this.dataList = data.result
    })
  },
  methods: {
    dealListener (listener) {
      return listener > 100000 ? Math.round(listener / 10000) + '万' : listener
    }
  }
}
</script>

<style lang="less">
@import '../../../less/var.less';
// 各个模块公共样式
.header{
    border-bottom: 1px solid #dfdfe1;
    line-height: 40px;
    font-size: 18px;
    color: #555;
    .more{
      float: right;
      font-size: 12px;
      color: #666;
    }
}
.musiclist{
  .contents{
    padding-top: 10px;
    .content{
      width: 194px;
      height: 245px;
      box-sizing: border-box;
      float: left;
      margin-bottom: 25px;
      position: relative;
      .content-body{
        height: 194px;
        border: 1px solid #dfdfe1;
        box-sizing: border-box;
        text-align: center;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        img{
          width: 100%;
          height: 100%;
        }
        .week{
          color: #666;
          font-size: 20px;
          margin-top: 30px;
        }
        .day{
          font-size: 80px;
          color: @theme;
        }
        .description{
          position: absolute;
          width: 192px;
          text-align: left;
          box-sizing: border-box;
          color: white;
          top: -100%;
          font-size: 13px;
          padding: 9px;
          transition: all ease 0.5s;
          background-color: rgba(0, 0, 0, 0.5)
        }
        .listener{
          width: 192px;
          position: absolute;
          box-sizing: border-box;
          top: 0;
          height: 20px;
          color: white;
          padding: 0 7px;
          font-size: 14px;
          line-height: 20px;
          text-align: right;
          background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.3));
        }
        &:hover{
          .listener{
            display: none;
          }
          .description{
            top: 0;
          }
        }
      }
      .content-footer{
        color: #333;
        font-size: 14px;
        padding: 5px 0;
        line-height: 20px;
      }
    }
    .content + .content{
      margin-left: 17.5px;
    }
    .content:nth-child(5n + 1){
      margin-left: 0;
    }
  }
}
</style>
