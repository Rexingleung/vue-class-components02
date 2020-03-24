// 使用GetterTree定义getters的类型，并将UserState和RootState作为泛型传入GetterTree
// store/user/getters.ts

import { GetterTree } from 'vuex'
import { stateType, RootState } from './types'

const getters: GetterTree<stateType, RootState> = {
  fullName(state): string {
    return `${state.firstName} ${state.lastName}`
  }
}
export default getters