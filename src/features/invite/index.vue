<template>
  <view-box ref="Invite" body-padding-top="46px">
    <div class='icon'>
      <img src="../../assets/icon.png" width='100' height='100' alt="icon">
    </div>
    <flexbox justify='center'>
      <flexbox-item :span="10" class='code'>
        <h3>这是我的邀请码,快来下载归纳本吧</h3>
        <p style='font-size:1.5rem;color:blue;padding:.25rem;'>{{code}}</p>
        <p style='text-align:right'>
          <b>by {{Invite.name}}</b>
        </p>
      </flexbox-item>
    </flexbox>
    <flexbox justify='center'>
      <flexbox-item :span="10">
        <x-button type="primary" @click.native="_open('http://a.app.qq.com/o/simple.jsp?pkgname=com.sanbao.guinaben.student')">下载归纳本-学生端</x-button>
      </flexbox-item>
    </flexbox>
    <flexbox justify='center' style='margin-top:1rem;'>
      <flexbox-item :span="10">
        <x-button type="primary" @click.native="_open('http://a.app.qq.com/o/simple.jsp?pkgname=com.sanbao.guinaben.teacher')">下载归纳本-教师端</x-button>
      </flexbox-item>
    </flexbox>
  </view-box>
</template>

<script>
import { XHeader, XButton, ViewBox, Flexbox, FlexboxItem } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'
import modules from './modules/store'

export default {
  name: 'Invite',
  components: {
    XHeader, XButton, ViewBox, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['Invite']),
    code () {
      return this.$route.query.code
    }
  },
  data () {
    return {
      meta: `邀请好友`
    }
  },
  methods: {
    ...mapActions(['getInvite']),
    _getData () {
      return new Promise((resolve, reject) => {
        this.getInvite().then((res) => {
          resolve(res)
        }).catch((e) => {
          reject(e)
        })
      })
    },
    _open (url) {
      window.location.href = url
    }
  },
  metaInfo () {
    return {
      title: this.meta
    }
  },
  beforeCreate () {
    store.registerModule('Invite', {
      ...modules
    })
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this._getData()
  },
  created () {
    this._getData()
  }
}
</script>
<style lang="less" scoped>
.icon{
  text-align:center;
  margin:1rem 0;
}
.code {
  text-align: center;
  padding: 1rem .5rem;
  line-height: 2rem;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 2rem;
  border: 2px solid #ccc;
  border-radius: 5px;
  h3 {
    font-size:.9rem;
    color: #8a7b65
  }
  p {
    font-size: .8rem;
    color:#8a7b65
  }
}
</style>
