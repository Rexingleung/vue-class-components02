// 使用ActionTree定义actions的类型，并将UserState和RootState作为泛型传入ActionTree
// store/user/actions.ts

import { stateType, RootState } from './types'
import { ActionTree } from 'vuex'

const actions: ActionTree<stateType, RootState> = {
  fetchData({ commit }, userInfo: stateType): void {
    commit('saveUserInfo', userInfo)
  }
}
export default actions