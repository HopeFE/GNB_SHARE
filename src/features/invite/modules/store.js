import * as actions from './actions'
import * as types from './mutationTypes'

const state = {
  user: []
}

const getters = {
  Invite: (state) => {
    return state.user
  }
}

const mutations = {
  [types.INVITE_CODE] (state, data) {
    state.user = data
  }
}

export default {
  mutations, getters, actions, state
}
