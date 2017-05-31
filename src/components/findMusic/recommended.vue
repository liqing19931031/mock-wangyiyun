<template lang="html">
  <div class="recommended">
    <slide :imgList='this.imgList' :autoplay='true' style='margin-top: 20px'></slide>
    <musicList></musicList>
    <exclusive></exclusive>
    <newmusic></newmusic>
    <aboutmv></aboutmv>
    <div class="setting">
        现在根据个人喜好，自由调整首页栏目顺序啦~
        <el-button class='btn' type="text" @click="dialogVisible = true">调整栏目顺序</el-button>
    </div>
    <el-dialog
    title="调整栏目顺序"
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose">
    <span>想调整首页栏目的顺序？按住右边的按钮拖动即可</span>
    <div class="taglist">
      <div class="tag" v-for='tag in menu'>
        {{tag}}
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
import slide from './recommended/slide'
import musicList from './recommended/musicList'
import exclusive from './recommended/exclusive'
import newmusic from './recommended/newmusic'
import aboutmv from './recommended/aboutmv'

export default {
  data () {
    return {
      dialogVisible: false,
      imgList: [
        './static/slide1.jpg',
        './static/slide2.jpg',
        './static/slide3.jpg',
        './static/slide4.jpg',
        './static/slide5.jpg',
        './static/slide6.jpg',
        './static/slide7.jpg',
        './static/slide8.jpg'
      ],
      menu: {
        musicList: '推荐歌单',
        exclusive: '独家放送',
        newmusic: '最新音乐',
        aboutmv: '推荐MV'
      }
    }
  },
  components: {
    slide,
    musicList,
    exclusive,
    newmusic,
    aboutmv
  },
  methods: {
    handleClose (done) {
      done()
    }
  }
}
</script>

<style lang="less">
@import '../../less/var.less';
.el-dialog{
  .el-dialog__header{
    padding: 15px;
    border-bottom: 1px solid #dfdfe1;
  }
  .el-dialog__body{
    span{
      color: #888;
    }
  }
  .el-dialog__footer{
    text-align: center;
  }
}
.recommended{
  width: 1040px;
  margin: 0 auto;
  .taglist{
    padding: 10px 10px;
    font-size: 16px;
    color: #555;
    .tag{
      height: 50px;
      line-height: 50px;
      border-bottom: 1px solid #dfdfe1;
    }
  }
  .setting{
    border-top: 1px solid #dfdfe1;
    margin-top: 20px;
    color: #888;
    padding:20px 0 40px 0;
    font-size: 14px;
    text-align: center;
    .btn{
      color: @theme;
      padding: 6px 1px;
      font-size: 12px;
      display: block;
      border-radius: 5px;
      margin: 10px auto;
      border: 1px solid @themeDark;
      width: 120px;
      cursor: pointer;
      &:hover{
        border-color: @theme;
      }
    }
  }
}
</style>
