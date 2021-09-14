<template>
  <div>
    <h2>{{$store.state.moduleA.name}}</h2>
    <h2>{{$store.getters.newName}}</h2>

    <h2>{{$store.state.moduleB.name}}</h2>
    <h2>{{$store.getters['moduleB/newName']}}</h2>

    <h2 @click="chageName">点我</h2>
  </div>
</template>
<script>
import { useStore } from "vuex"

export default {
  setup() {
  const store = useStore()
  const chageName = () => {
    //  store.commit('moduleB/chageName')
    store.dispatch('moduleB/layChange')
  }
  return { chageName }
}

}
</script>


<style lang="less">

</style>
