import axios from '@/components/axios/'
import * as types from './mutationTypes'

/** 获取人员信息 */
export const getInvite = ({ rootState, commit }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'teacher/share/inviteCode',
      params: {
        inviteCode: rootState.route.query.code
      }
    }).then((response) => {
      commit(types.INVITE_CODE, response.data.data)
      resolve(response)
    }).catch((e) => {
      reject(e)
    })
  })
}
