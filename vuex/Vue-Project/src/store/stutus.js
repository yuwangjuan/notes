const state = {
  name: null,
  age: null,
  number: null,

}
const mutations = {
    getInfo(state, payload) {
        console.log('我走了')
    console.log(payload, 'payload');
    state.name = payload.name;
    state.age = payload.age;
    state.number = payload.number;
  }
}
const actions = {
  agetInfo({commit}) {
    return new Promise(resolve=> {
        setTimeout(()=>{
            commit('getInfo');
      resolve();
        },1000)
    })
  }
}
export default {
    namespaced: true,
  state,
  mutations,
  actions,
  
}
