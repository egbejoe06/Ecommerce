import { createStore } from 'vuex';
import productdetails from './modules/productdetails'
import product from './modules/product'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  modules:{
    productdetails,
    product,
  },
  plugins: [createPersistedState()],
});

export default store;
