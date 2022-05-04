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
    getTitle(state) {
      return state.name;
    },
    toggleForm(state) {
      return state.toggleForm;
    },
    toDoLists(state) {
      return state.toDoLists;
    },
  },
  mutations: {
    ADD_ITEM(state,newItem) {
      state.toDoLists.push(newItem);
    },
    DELETE_ITEM(state, index) {
      state.toDoLists.splice(index, 1);
    },
    TOGGLE_FORM(state) {
      state.toggleForm =! state.toggleForm
    }
  },
  actions: {
    addItem({commit},newItem) {
      commit('ADD_ITEM', newItem);
    },
    deleteItem({commit},index) {
      commit('DELETE_ITEM', index);
    },
    toggle({ commit }) {
      commit('TOGGLE_FORM');
    }
  }
})

