<template>
  <view-box ref="about" body-padding-top="46px">
    <div v-show='!loading'>
      <flexbox justify='center' class='tip'>
        <flexbox-item :span="11">
          <h4>提示:</h4>
          <p>同学们，我刚创建了一个班级，大家快加进来，下面是我们的班级码</p>
          <b></b>
          <b>by 王建新老师</b>
        </flexbox-item>
      </flexbox>
      <flexbox justify='center'>
        <flexbox-item :span="10" class='code' @click.native='showAction = true'>
          <x-button type="primary" plain mini>还未装归纳本?</x-button>
        </flexbox-item>
      </flexbox>
    </div>
    <div style="text-align:center">
      <spinner v-if="loading" type="dots"></spinner>
      <!--<p v-else-if="Example.length == 0" style="font-size:16px;padding:10px 0;color:#4BB7AA">出错了~</p>-->
    </div>
  </view-box>
</template>

<script>

import { XHeader, XButton, ViewBox, Flexbox, FlexboxItem, Spinner } from 'vux'
import { mapGetters, mapActions } from 'vuex'
import store from '@/store'
import modules from './modules/store'
store.registerModule('code', {
  ...modules
})

export default {
  name: 'invite',
  components: {
    XHeader, XButton, ViewBox, Flexbox, FlexboxItem, Spinner
  },
  computed: {
    ...mapGetters(['Invite'])
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['getInvite'])
  },
  created () {
    this.getInvite()
  }
}
</script>
<style lang="less" scoped>
.tip {
  padding: 1rem 0;
  font-size: normal;
  h4 {
    font-size: .75rem;
    color: #4BB7AA
  }
  p {
    font-size: .8rem;
  }
}

.code {
  text-align: center;
  padding: 1.5rem 0;
  line-height: 2rem;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 3rem;
  border: 2px dashed #ccc;
}
</style>
