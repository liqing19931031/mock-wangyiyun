<template lang="html">
  <div class="recommended">
    <slide :imgList='this.imgList' :autoplay='true' style='margin-top: 20px'></slide>
    <musicList></musicList>
    <exclusive></exclusive>
    <newmusic></newmusic>
    <aboutmv></aboutmv>
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
      imgList: [
        './static/slide1.jpg',
        './static/slide2.jpg',
        './static/slide3.jpg',
        './static/slide4.jpg',
        './static/slide5.jpg',
        './static/slide6.jpg',
        './static/slide7.jpg',
        './static/slide8.jpg'
      ]
    }
  },
  components: {
    slide,
    musicList,
    exclusive,
    newmusic,
    aboutmv
  }
}
</script>

<style lang="less">
.recommended{
  width: 1040px;
  margin: 0 auto;
}
</style>
