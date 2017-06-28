<template lang="html">
  <div class="recommended">
    <slide :imgList='this.imgList' :autoplay='true' style='margin-top: 20px'></slide>
    <div v-for='item in menu' :is='item.key'>
    </div>
    <div class="setting">
        现在根据个人喜好，自由调整首页栏目顺序啦~
        <el-button class='btn' type="text" @click="dialogVisible = true">调整栏目顺序</el-button>
    </div>
    <el-dialog
    title="调整栏目顺序"
    :visible.sync="dialogVisible"
    size="tiny"
    :before-close="handleClose">
    <span class="tip">想调整首页栏目的顺序？按住右边的按钮拖动即可</span>
    <div class="taglist">
      <draggable :list="menu">
        <transition-group>
          <div class="tag noselect" v-for='tag in menu' :key='tag.key'>
            <div class="pull-left">
              {{tag.value}}
            </div>
            <div class="pull-right">
              <i class="glyphicon-menu glyphicon"></i>
            </div>
          </div>
        </transition-group>
      </draggable>
      <div class="paixu">
        <a href='#'>恢复默认排序</a>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button class='el-button--small' type="primary" @click="dialogVisible = false">确 定</el-button>
      <el-button class='el-button--small' @click="dialogVisible = false">取 消</el-button>
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
import draggable from 'vuedraggable'

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
      menu: [
        {key: 'musicList', value: '推荐歌单'},
        {key: 'exclusive', value: '独家放送'},
        {key: 'newmusic', value: '最新音乐'},
        {key: 'aboutmv', value: '推荐MV'}
      ]
    }
  },
  components: {
    slide,
    musicList,
    exclusive,
    newmusic,
    aboutmv,
    draggable
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

// .flip-list-move{
//   transition: transform 1s;
// }
.recommended{
  width: 1040px;
  margin: 0 auto;
  .taglist{
    padding: 10px 10px;
    padding-bottom: 0;
    font-size: 16px;
    color: #555;
    .tag{
      height: 50px;
      line-height: 50px;
      cursor: pointer;
      border-bottom: 1px solid #ededf9;
      &:focus{
        cursor: move;
      }
    }
    .paixu{
      text-align: center;
      font-size: 12px;
      line-height: 50px;
      a{
        color: #888;
      }
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
