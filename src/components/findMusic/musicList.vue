<template lang="html">
  <div class="musicList">
    <el-popover
      ref="tags"
      placement="bottom-start"
      width="500"
      trigger="click">
      <div class="tag-modal">
        <div class="tag-modalHeader">
          选择标签
        </div>
        <div class='all-tagModal'>
          <div class="all-tags" :class='currentTag === "全部歌单" ? "one-tag--active" : ""' @click='changeTag("全部歌单")'>
            全部歌单
          </div>
          <div class="other-tags">
              <div class="tags clearfix" v-for='(item, index) in STYLE'>
                <div class="tag-title">
                  <i class="glyphicon" :class="`glyphicon-${ICONS[index]}`"></i><span style="float: right">{{item}}</span>
                </div>
                <div class="tag">
                  <div class="one-tag" :class='tag.name === currentTag ? "one-tag--active" : ""' v-for='tag in tagList' v-if='tag.type === index + 1' @click='changeTag(tag.name)'>
                    {{tag.name}}
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </el-popover>
    <el-button v-popover:tags>{{currentTag}}<i class="glyphicon glyphicon-spread"></i></el-button>
    <div class="hot-tags">
      <div class="pull-left">
        热门标签：
      </div>
      <div class="pull-left hot-tag" v-for='item in hotTagList'>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentTag: '全部歌单',
      tagList: [],
      hotTagList: [],
      STYLE: [
        '语种',
        '风格',
        '场景',
        '情感',
        '主题'
      ],
      ICONS: [
        'language',
        'style',
        'scene',
        'emotion',
        'subject'
      ]
    }
  },
  mounted () {
    this.$http('get', 'tags')
    .then((data) => {
      this.tagList = data.result
    })
    this.$http('get', 'tags', {ishot: 1})
    .then((data) => {
      this.hotTagList = data.result
    })
  },
  methods: {
    changeTag (name) {
      this.currentTag = name
    }
  }
}
</script>

<style lang="less">
@import '../../less/var.less';

.el-popover{
  padding: 0!important;
}
.musicList{
  width: 1040px;
  padding-top: 20px;
  margin: 0 auto;
  button{
    font-family: '宋体';
    font-size: 12px;
    padding: 5px 10px;
    border-color: #d9d9d9;
    color: #333;
    &:hover,
    &:active,
    &:focus{
      background-color: #f4f2f2;
      color: #333;
      border-color: #dbdbdb;
    }
  }
}
.tag-modal{
  width: 500px;
  height: 420px;
  font-size: 16px;
  user-select: none;
  ::-webkit-scrollbar{
    width: 3px;
  }
  ::-webkit-scrollbar-thumb{
    border-radius: 3px;
    background-color: #e1e1e1;
  }
  ::-webkit-scrollbar-thumb:hover{
    background-color: #ccc;
  }
  .tag-modalHeader{
    padding: 15px;
     border-bottom:1px solid #f4f2f2;
  }
  .all-tagModal{
    overflow: auto;
    height: 300px;
    padding: 10px 15px;
    .all-tags{
      border: 1px solid #f4f2f2;
      text-align: center;
      line-height: 35px;
      font-size: 14px;
      color: #777;
      cursor: pointer;
      &.one-tag--active{
        border-color: @theme;
        color: #333;
      }
      &:hover{
        color: #333;
        background-color: #fcfcfc;
      }
    }
    .other-tags{
      padding: 10px 0;
      color: #777;
      .tags{
        & + .tags{
          margin-top: 10px;
        }
        .tag-title{
          width: 65px;
          margin-right: 10px;
          float: left;
          line-height: 35px;
          color: @theme;
        }
        .tag{
          float: left;
          width: 380px;
          .one-tag{
            width: 75px;
            float: left;
            font-size: 14px;
            line-height: 35px;
            box-sizing: border-box;
            cursor: pointer;
            text-align: center;
            border: 1px solid #f4f2f2;
            & + .one-tag{
              margin-left: -1px;
            }
            &:nth-child(5n + 1){
              margin-left: 0;
            }
            &:hover{
              color: #333;
              background-color: #fcfcfc;
            }
            &.one-tag--active{
              border-color: @theme;
              color: #333;
              position: relative;
              overflow: hidden;
              &:before{
                content: '';
                width: 22px;
                height: 22px;
                background-color: @theme;
                position: absolute;
                right: -11px;
                bottom: -11px;
                transform: rotate(45deg);
              }
              &:after{
                content: '√';
                width: 20px;
                height: 20px;
                position: absolute;
                color: white;
                font-size: 14px;
                transform: rotate(15deg);
                right: -5px;
                bottom: 1px;
              }
            }
          }
        }
      }
    }
  }
}
.hot-tags{
  font-size: 14px;
  margin-top: 10px;
  .hot-tag{
    color: #888;
    padding: 0 20px;
    cursor: pointer;
    font-size: 12px;
    line-height: 16px;
    &:hover{
      color: #333;
    }
    & + .hot-tag{
      border-left: 1px solid #888;
    }
  }
}
</style>
