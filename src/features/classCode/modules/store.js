import * as actions from './actions'
import * as types from './mutationTypes'

const state = {
  code: []
}

const getters = {
  Code: (state) => {
    return state.code
  }
}

const mutations = {
  [types.CODE] (state, data) {
    state.code = data
  }
}

export default {
  mutations, getters, actions, state
}
