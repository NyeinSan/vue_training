import Vue from 'vue';
import Vuex from 'vuex';

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
    //Add newitem to todolists
    ADD_ITEM(state,newItem) {
      state.toDoLists.push(newItem);
    },
    //Delete item from todolist
    DELETE_ITEM(state, index) {
      state.toDoLists.splice(index, 1);
    },
     //hide and show input form
    TOGGLE_FORM(state) {
      state.toggleForm =! state.toggleForm
    }
  },
  actions: {
    //Add newitem to todolists
    addItem({commit},newItem) {
      commit('ADD_ITEM', newItem);
    },
    //Delete item from todolist
    deleteItem({commit},index) {
      commit('DELETE_ITEM', index);
    },
    //hide and show input form
    toggle({ commit }) {
      commit('TOGGLE_FORM');
    }
  }
})

