/** 
使用stateType定义storeType模块的state的类型
使用Module定义storeType模块的类型，并将stateType和RootState作为泛型传入Module
*/

import { Module } from 'vuex'
import { stateType, RootState } from './types'
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import state from './state'


const namespaced = true
export const storeType: Module<stateType, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
export default state