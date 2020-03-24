
// 声明并暴露 RootState 类型
// import UserState from './user/types'
export interface stateType {
    firstName: string
    lastName: string
    mobile: string
}

export interface RootState {
    stateType: stateType
}