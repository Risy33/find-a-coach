import { createStore } from 'vuex';
import coachedModules from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coachedModules,
  },
});

export default store;
