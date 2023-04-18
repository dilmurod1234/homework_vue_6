import { createStore } from 'vuex'
export default createStore({
  state: {
    users: [
      { name: "Dilmurod", age: 15, email: "murodxojayevd@gmail.com", address: "Chilonzor" }
    ],
  },
  getters: {
    getUsers(state) {
      return state.users
    }
  },
  mutations: {
    handleSubmit(state, data) {
      let name = data.name
      let age = data.age
      let email = data.email
      let address = data.address
      console.log(data)
      let a = state.users
      a.push({ name: name, age: age, email: email, address: address })
    }
  },
  actions: {
    handleSubmit({ commit }, { value }) {
      commit("handleSubmit", value)
    }
  },
  modules: {
  }
})
