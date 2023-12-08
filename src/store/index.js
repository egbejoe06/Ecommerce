import { createStore } from 'vuex';
import productdetails from './modules/productdetails'
import product from './modules/product'
import VuexPersistence from 'vuex-persist';

const vuexPersist = new VuexPersistence({
  key: 'your-app-key', // Choose a key for your app
  storage: window.localStorage, // Choose the storage method (localStorage in this case)
});

const store = createStore({
  modules:{
    productdetails,
    product,
  },
  plugins: [vuexPersist.plugin],
});

export default store;
