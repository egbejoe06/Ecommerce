import { createStore } from 'vuex';
import productdetails from './modules/productdetails'
import product from './modules/product'

const store = createStore({
  modules:{
    productdetails,
    product,
  }
});

export default store;
