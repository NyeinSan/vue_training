import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'ToDo App',
    toggleForm: true,
    toDoLists:[],
  },
  getters: {
    //get title name from state
    getTitle(state) {
      return state.name;
    },
    //get toggleform
    toggleForm(state) {
      return state.toggleForm;
    },
    //get todolists from state
    toDoLists(state) {
      return state.toDoLists;
    },
  },
  mutations: {
    getTodos(state, toDoLists) {
      state.toDoLists=toDoLists
    },
    //Add newitem to todolists
    ADD_ITEM(state,newItem) {
      state.toDoLists.push(newItem);
    },
    //Delete item from todolist
    DELETE_ITEM(state, removeId) {
      state.toDoLists = state.toDoLists.filter(toDoList =>{
        return toDoList.id != removeId
    });
    },
     //hide and show input form
    TOGGLE_FORM(state) {
      state.toggleForm =! state.toggleForm
    }
  },
  actions: {
    async getTodos({commit}) {
      let res =await axios.get("http://localhost:3000/posts")
      commit('getTodos',res.data)
  },
    //Add newitem to todolists
    async addItem({commit},newItem) {
      let res =await axios.post("http://localhost:3000/posts",newItem)     
      commit('ADD_ITEM', res.data);
  },
    
    //Delete item from todolist
    async deleteItem({commit},removeId) {
      await axios.delete(`http://localhost:3000/posts/${removeId}`)
      commit('DELETE_ITEM',removeId)
  },
    
    //hide and show input form
    toggle({ commit }) {
      commit('TOGGLE_FORM');
    }
  }
})

