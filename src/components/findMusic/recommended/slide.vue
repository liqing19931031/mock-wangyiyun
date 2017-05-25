<template lang="html">
  <div class="slides">
    <div class="slide">
        <div class="imggroup" v-for='(item, index) in this.imgList' :class='imgClass(index)'>
          <img :src="item" alt="">
          <div class="imgblank">

          </div>
        </div>
        <!-- <div class="turnRect" @click='changeImg(currentPage - 1, true)'>
          <div class="glyphicon-turnleft glyphicon">

          </div>
        </div>
        <div class="turnRect" @click='changeImg(currentPage + 1, true)' style="right: 0">
          <div class="glyphicon-turnright glyphicon">

          </div>
        </div> -->
    </div>
    <div class="dots">
      <div class="dot" v-for='(item, index) in this.imgList' :class='index === currentPage ? "on" : ""' ref='dot'>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgList: { // 图片列表
      type: Array,
      default: []
    },
    width: { // 轮播宽
      type: Number,
      default: 540
    },
    height: { // 轮播高
      type: Number,
      default: 200
    },
    autoplay: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentPage: 0
    }
  },
  methods: {
    startSlide () { // 方法容器 用来承载定时器方法
    },
    changeImg (index, manual) {
      (manual && this.autoplay) && (() => {
        clearInterval(this.startSlide)
        setTimeout(() => { // 检测是手动操作时 启动定时器
          this.startSlide = setInterval(() => {
            this.changeImg(this.currentPage + 1)
          }, 5000)
        })
      })()
      index = index < 0 ? this.imgList.length - 1 : index
      index = index > this.imgList.length - 1 ? 0 : index
      this.$set(this, 'currentPage', index)
    },
    imgClass (index) {
      if (index === this.currentPage) {
        return 'left'
      }
      if (this.currentPage === this.imgList.length - 2) {
        if (index === 0) {
          return 'right'
        } else {
          if (index === this.currentPage + 1) {
            return 'on'
          } else {
            return 'neither'
          }
        }
      } else {
        if (this.currentPage === this.imgList.length - 1) {
          if (index === 0) {
            return 'on'
          } else {
            if (index === 1) {
              return 'right'
            } else {
              return 'neither'
            }
          }
        } else {
          if (index === this.currentPage + 1) {
            return 'on'
          } else {
            if (index === this.currentPage + 2) {
              return 'right'
            } else {
              return 'neither'
            }
          }
        }
      }
    }
  },
  mounted () {
    this.$refs.dot.forEach((item, index) => {
      item.addEventListener('mouseover', () => {
        this.changeImg(index, true)
      })
    })
    this.startSlide = this.autoplay ? setInterval(() => {
      this.changeImg(this.currentPage + 1)
    }, 5000) : () => {}
  }
}
</script>

<style lang="less" scoped>
@import '../../../less/var.less';

.slides{
  width: 100%;
  position: relative;
  &:hover{
    .slide{
      .turnRect{
        display: block;
      }
    }
  }
  .slide{
      width: 100%;
      height: 200px;
      float: left;
      position: relative;
      .turnRect{
        display: none;
        color: #333;
        cursor: pointer;
        position: absolute;
        width: 40px;
        height: 30px;
        top: 50%;
        margin-top: -15px;
        background-color: rgba(0, 0, 0, 0.3);
        text-align: center;
        line-height: 30px;
        &:hover{
          background-color: rgba(0, 0, 0, 0.6);
        }
        .glyphicon{
          font-weight: bold;
          color: white;
        }
      }
      .imggroup{
        position: absolute;
        transition: all ease 0.4s;
        width: 459px;
        height: 190px;
        bottom: 0;
        &.on{
          width: 540px;
          left: 252px;
          height: 200px;
          z-index: 10;
          img{
            width: 540px;
            height: 200px;
          }
          .imgblank{
            width: 540px;
            height: 200px;
            opacity: 0;
          }
        }
        &.left{
          z-index: 9;
          left: 0;
          bottom: 0;
        }
        &.right{
          left: 585px;
          z-index: 9;
          bottom: 0;
        }
        &.neither{
          left: 252px;
        }
      }
      img{
        transition: all ease 0.4s;
        position: absolute;
        width: 459px;
        height: 190px;
        bottom: 0;
      }
      .imgblank{
        position: absolute;
        width: 459px;
        bottom: 0;
        height: 190px;
        background-color: #333;
        opacity: 0.5;
      }
  }
  .dots{
    border-radius: 12px;
    z-index: 1;
    padding: 0px 8px;
    text-align: center;
    .dot{
      width: 17px;
      height: 2px;
      background-color: #cacaca;
      display: inline-block;
      transition: all ease 0.4s;
      cursor: pointer;
      &.on{
        background-color: @themeDark;
      }
    }
    .dot + .dot{
      margin-left: 10px;
    }
  }
}
</style>
