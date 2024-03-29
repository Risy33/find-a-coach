import { createStore } from 'vuex';
import coachedModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coachedModules,
  },
  state() {
    return {
      userId: 'c3',
    };
  },
  getters: {
    userId(state) {
      return state.userId;
    },
  },
});

export default store;
