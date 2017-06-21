import * as actions from './actions'
import * as types from './mutationTypes'

const state = {
  example: []
}

const getters = {
  Example: (state) => {
    return state.example
  }
}

const mutations = {
  [types.EXAMPLE] (state, data) {
    state.example = data
  }
}

export default {
  mutations, getters, actions, state
}
