/** 
使用MutationTree定义mutations的类型，并将UserState作为泛型传入MutationTree
MutationTree不需要传入RootState 
 
*/

import { MutationTree } from 'vuex'
import { stateType } from './types'

const mutations: MutationTree<stateType> = {
  changeMobile(state, mobile: string) {
    state.mobile = mobile
  },
  saveUserInfo(state, userInfo) {
    state = Object.assign(state, userInfo)
  }
}
export default mutations