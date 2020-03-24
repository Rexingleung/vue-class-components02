/** 
使用StoreOptions类型定义Vuex.Store构造器选项的类型，并将RootState作为泛型传入StoreOptions，用来定义根状态的类型
将RootState作为泛型，传入Vuex.Store构造器 

*/
import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from './storeType/types'
import { storeType } from './storeType/index'
Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  modules: {
    storeType,
  }
}
export default new Vuex.Store<RootState>(store)