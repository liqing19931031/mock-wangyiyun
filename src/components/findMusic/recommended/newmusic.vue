<template lang="html">
  <div class="newmusic clearfix">
    <div class="header">
      <span>最新音乐</span><span class="more">更多></span>
    </div>
    <div class="contents">
      <div class="content">
        <div class="newList">
          <div class="new-music" v-for='(item, index) in dataList' v-if='index < 5'>
            <div class="xuhao">
              {{index + 1 < 10 ? '0' + (index + 1) : (index + 1)}}
            </div>
            <div class="playing">
              <img :src="imgUrl + item.pic" alt="">
              <i class="glyphicon-play glyphicon"></i>
            </div>
            <div class="musicname">
              {{item.name}}<span v-if='item.content'>({{item.content}})</span>
            </div>
            <div class="singer">
              {{item.singer}}
            </div>
          </div>
        </div>
        <div class="newList">
          <div class="new-music" v-for='(item, index) in dataList' v-if='index >= 5'>
            <div class="xuhao">
              {{index + 1 < 10 ? '0' + (index + 1) : (index + 1)}}
            </div>
            <div class="playing">
              <img :src="imgUrl + item.pic" alt="">
              <i class="glyphicon-play glyphicon"></i>
            </div>
            <div class="musicname">
              {{item.name}}<span v-if='item.content'>({{item.content}})</span>
            </div>
            <div class="singer">
              {{item.singer}}
            </div>
          </div>
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
    this.$http('get', 'newmusic')
    .then((data) => {
      this.dataList = data.result
    })
  }
}
</script>

<style lang="less">
.newmusic{
  margin-bottom: 20px;
  .contents{
    padding-top: 10px;
    .content{
      border: 1px solid #dfdfe1;
      height: 300px;
      .newList{
          width: 50%;
          float: left;
        .new-music{
          height: 60px;
          width: 100%;
          float: left;
          padding: 10px 10px;
          box-sizing: border-box;
          &:nth-child(2n){
            background-color: #fafafa;
          }
          &:hover{
            background-color: #f5f5f7;
          }
          img{
            margin:0 15px;
            width: 40px;
            float: left;
            height: 40px;
          }
          .xuhao{
            line-height: 40px;
            color: #888;
            font-size: 14px;
            float: left;
          }
          .playing{
            cursor: pointer;
            float: left;
            position: relative;
            i{
              color: white;
              font-size: 20px;
              position: absolute;
              top: 10px;
              left: 25px;
            }
          }
          .musicname{
            font-size: 14px;
            height: 20px;
            span{
              font-size: 13px;
              color: #888;
            }
          }
          .singer{
            height: 20px;
            color: #888;
            font-size: 13px;
          }
        }
      }
      .newList + .newList{
        border-left: 1px solid #dfdfe1;
        box-sizing: border-box;
      }
    }
  }
}
</style>
