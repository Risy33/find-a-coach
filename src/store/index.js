import { createStore } from 'vuex';
import coachedModules from './modules/coaches/index';
import requestsModule from './modules/requests/index'

const store = createStore({
  modules: {
    coaches: coachedModules,
    requests:requestsModule
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
