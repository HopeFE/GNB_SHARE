import Vue from 'vue'
import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.baseURL = 'https://www.guinaben.com/'

axios.interceptors.response.use((res) => {
  if (res.data.code !== 200) {
    Vue.$vux.toast.show({text: res.data.msg, type: 'text', time: 1500, position: 'bottom'})
    return Promise.reject(res)
  }
  return res
}, (error) => {
  Vue.$vux.toast.show({text: '网络异常', type: 'text', time: 1500, position: 'bottom'})
  return Promise.reject(error)
})

export default axios
