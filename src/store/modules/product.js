const state =
    {
        Images: [],
        isFavorite: true,
        products: [],
      }
     const mutations = {
        setProduct(state, { data }) {
            state.products = data.products;
            state.Images = {};
            state.isFavorite = {};
            state.products.forEach((product) => {
              state.Images[product.id] = require("../../assets/favorite2.svg");
              state.isFavorite[product.id] = false;
            });
          },
          toggleFavorite(state, productId) {
            state.isFavorite[productId] = !state.isFavorite[productId];
            if (state.isFavorite[productId]) {
              state.Images[productId] = require("../../assets/favorite1.svg");
            } else {
              state.Images[productId] = require("../../assets/favorite2.svg");
            }
          },
        }
      const actions= {
        async fetchProduct({ commit }) {
            const skip = 0;
            const limit = 100;
            const url = `https://dummyjson.com/products?skip=${skip}&limit=${limit}`;
        
            try {
                const response = await fetch(url);
                const data = await response.json();
                commit('setProduct', { data });
              } catch (error) {
                console.error("Error fetching data:", error);
              }
          },
          toggleProductFavorite({ commit }, productId) {
            commit('toggleFavorite', productId);
          },
      }

   const getters= {
        products: state => state.products,
        isFavorite: state => state.isFavorite,
        Images: state => state.Images,
        searchQuery: state => state.searchQuery,
        selectedCategory: state => state.selectedCategory,
      }


      export default {
        namespaced: true,
        state,
        mutations,
        actions,
        getters,
      };