import { createStore } from 'vuex'
import {userModule} from "./modules/userModule.js"
export default createStore({
  state: {
    a:0,
    selected:'/',//底部导航栏当前路由
  },
  mutations: {
    SET_A:(state,value)=>{
      console.log(1,typeof value)
      state.a+=value
    },
    SET_SELECTED:(state,value)=>{
      console.log(1,typeof value)
      state.selected=value
    },
  },
  actions: {
    Add_A:(context,value)=>{
      context.commit("SET_A",value)
    },
  },
  getters:{

  },
  modules: {
    userModule
  }
})
