<template>
  <view-box ref="ClassCode" body-padding-top="46px">
    <div class='icon'>
      <img src="../../assets/icon.png" width='100' height='100' alt="icon">
    </div>
    <flexbox justify='center'>
      <flexbox-item :span="11" class='code'>
        <p style='line-height:30px;text-align:left;'>同学们，我刚创建了一个班级，大家快加进来，下面是我们的班级码</p>
        <p style='font-size:1.5rem;color:blue;padding:.25rem;'>{{code}}</p>
        <p style='text-align:right'>
          <b>by {{ClassInfo.teacherName}}</b>
        </p>
      </flexbox-item>
    </flexbox>
    <flexbox justify='center'>
      <flexbox-item :span="10">
        <x-button type="primary" @click.native="_open('http://a.app.qq.com/o/simple.jsp?pkgname=com.sanbao.guinaben.student')">下载归纳本</x-button>
      </flexbox-item>
    </flexbox>
  </view-box>
</template>

<script>
import { XHeader, XButton, ViewBox, Flexbox, FlexboxItem, Spinner } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'
import modules from './modules/store'

export default {
  name: 'ClassCode',
  components: {
    XHeader, XButton, ViewBox, Flexbox, FlexboxItem, Spinner
  },
  computed: {
    ...mapGetters(['ClassInfo']),
    code () {
      return this.$route.query.code
    }
  },
  data () {
    return {
      meta: `加入班级`
    }
  },
  methods: {
    ...mapActions(['getCode']),
    _getData () {
      return new Promise((resolve, reject) => {
        this.getCode().then((res) => {
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
    store.registerModule('code', {
      ...modules
    })
  },
  beforeRouteUpdate (to, from, next) {
    this._getData()
    next()
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
