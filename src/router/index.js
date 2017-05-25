import Vue from 'vue'
import Router from 'vue-router'

// 发现音乐
import music from '@/components/findMusic/music'
import musicList from '@/components/findMusic/musicList'
import recommended from '@/components/findMusic/recommended'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Music'
    },
    {
      path: '/Music',
      component: music,
      children: [
        {
          path: '/',
          redirect: 'recommended'
        },
        {
          path: 'recommended',
          name: 'recommended',
          component: recommended
        },
        {
          path: 'musicList',
          name: 'musicList',
          component: musicList
        }
      ]
    }
  ]
})
