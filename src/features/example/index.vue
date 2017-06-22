<template>
  <view-box body-padding-top="46px">
    <card v-show='!loading'>
      <div slot="header" class="weui-panel__hd">
        <flexbox>
          <flexbox-item :span="10" style="color:#4bb7aa">内容</flexbox-item>
        </flexbox>
      </div>
      <div slot="content">
        <div v-html="Example.stem"></div>
        <div v-if="Example.opt">
          <template v-for="(value, key) in Example.opt">
            <div style="padding-top:5px;">{{ key }}：
              <p v-html="value" style="display:inline-block"></p>
            </div>
          </template>
        </div>
      </div>
    </card>
    <card v-show='!loading'>
      <div slot="header" class="weui-panel__hd" style="color:#4bb7aa">解析</div>
      <div slot="content" v-html="Example.answer"></div>
    </card>
    <div style="text-align:center">
      <spinner v-if="loading" type="dots"></spinner>
      <p v-else-if="Example.length == 0" style="font-size:16px;padding:10px 0;color:#4BB7AA">出错了~</p>
    </div>
  </view-box>
</template>

<script>
import { Card, ViewBox, Spinner, Flexbox, FlexboxItem } from 'vux'
import { mapActions, mapGetters } from 'vuex'
import store from '@/store'
import modules from './modules/store'

export default {
  name: 'example',
  components: {
    Card, ViewBox, Spinner, Flexbox, FlexboxItem
  },
  computed: {
    ...mapGetters(['Example', 'Params'])
  },
  data () {
    return {
      loading: true
    }
  },
  methods: {
    ...mapActions(['getExample', 'exampleClear']),
    _getData () {
      this.loading = true
      this.getExample().then(() => {
        this.loading = false
      }).catch(() => {
        this.loading = false
      })
    }
  },
  beforeCreate () {
    store.registerModule('example', {
      ...modules
    })
  },
  created () {
    this._getData()
  }
}
</script>
