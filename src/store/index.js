import {
  createStore
} from 'vuex'

const moduleA = {
  state: {
    name: 'moduleA张三'
  },
  getters: {
    newName(state) {
      return state.name + '新的'
    }
  },
  mutations: {
    chageName(state) {
       state.name = 'moduleA李四' 
    }
  }
}

const moduleB = {
  // 命名空间
  namespaced: true,
  state: {
    name: 'moduleB张三'
  },
  getters: {
    newName(state) {
      return state.name + '新的'
    }
  },
  mutations: {
    chageName(state) {
     state.name = 'moduleB李四'
    }
  },
  actions: {
    layChange(context) {
      setTimeout(() => {
        context.commit('chageName')
      },1000)
    }
  }
}

export default createStore({
  // state: {
  //   name: '张三'
  // },
  // getters: {
  //   // newName(state) {
  //   //   return state.name + '!!!'
  //   // }
  // },
  // mutations: {
  //   updateName(state) {
  //     state.name = 'ls'
  //   }
  // },
  // actions: {
  //   layUpdate(context) {
  //     setTimeout(() => {
  //       context.commit('updateName')
  //     }, 1000)
  //   }
  // },
  modules: {
    moduleA,
    moduleB
  }
})