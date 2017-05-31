<template lang="html">
  <div class="aboutmv clearfix">
    <div class="header">
      <span>推荐MV</span><span class="more">更多></span>
    </div>
    <div class="contents">
      <div class="content" v-for='item in dataList'>
        <div class="content-body">
          <img :src='imgUrl + item.pic' alt="">
          <div class="listener">
            <i class="glyphicon glyphicon-vedio"></i>  {{dealListener(item.listener)}}
          </div>
          <div class="description">
            {{item.des}}
          </div>
        </div>
        <div class="content-footer">
          {{item.name}}
        </div>
        <div class="singer">
          {{item.singer}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.$http('get', 'mvlist')
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
.aboutmv{
  .contents{
    padding-top: 10px;
    .content{
      width: 250px;
      height: 180px;
      box-sizing: border-box;
      float: left;
      .content-body{
        overflow: hidden;
        cursor: pointer;
        height: 140px;
        border: 1px solid #dfdfe1;
        position: relative;
        img{
          width: 100%;
          height: 100%;
        }
        .description{
          position: absolute;
          text-align: left;
          width: 248px;
          box-sizing: border-box;
          color: white;
          top: -100%;
          font-size: 13px;
          padding: 9px;
          transition: all ease 0.5s;
          background-color: rgba(0, 0, 0, 0.5)
        }
        .listener{
          width: 248px;
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
    }
    .content-footer{
      font-size: 12px;
      color: #333;
    }
    .singer{
      color: #888;
      font-size: 12px;
    }
    .content + .content{
      margin-left: 13.333px;
    }
  }
}
</style>
