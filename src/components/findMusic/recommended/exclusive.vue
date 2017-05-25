<template lang="html">
  <div class="exclusive clearfix">
    <div class="header">
      <span>独家放送</span><span class="more">更多></span>
    </div>
    <div class="contents">
      <div class="content" v-for='item in dataList'>
        <img :src="imgUrl + item.pic" alt="">
        <div class="des">
          {{item.des}}
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
      ]
    }
  },
  mounted () {
    this.ajax({
      method: 'get',
      url: 'exclusive',
      async: true,
      callBack: (data) => {
        this.dataList = data.result
      }
    })
  }
}
</script>

<style lang="less">
.exclusive{
  margin-bottom: 25px;
  .contents{
    padding-top: 10px;
    .content{
      width: 335px;
      height: 215px;
      float: left;
      img{
        width: 100%;
        height: 190px;
      }
      .des{
        line-height: 25px;
        color: #333;
        font-size: 14px;
      }
    }
    .content + .content{
      margin-left: 17.5px;
    }
  }
}
</style>
