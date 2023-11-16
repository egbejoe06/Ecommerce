const state =
    {
        quantities: {},
        productDetails: null,
      }
     const mutations = {
        increase(state,productId) {
            state.quantities[productId] = (state.quantities[productId] || 0) + 1;
          },
          decrease(state,productId) {
            if (state.quantities[productId] && state.quantities[productId] > 1) {
                state.quantities[productId]--;
            }
          },
          setProductDetails(state, { productId, data }) {
            state.productDetails = data;
            state.quantities[productId] = 1;
          },
        }
      const actions= {
        async fetchProductDetails({ commit }, productId) {
            try {
              const response = await fetch(`https://dummyjson.com/products/${productId}`);
              if (response.ok) {
                const productData = await response.json();
                commit('setProductDetails', { productId, data: productData });
              } else {
                console.error('API request failed');
              }
            } catch (error) {
              console.error('Error fetching product details:', error);
            }
          },
          increase({ commit, state }) {
            // Pass productId to the increase mutation
            commit('increase', state.productDetails.id);
          },
          decrease({ commit, state }) {
            // Pass productId to the decrease mutation
            commit('decrease', state.productDetails.id);
          },
      }
   const getters= {
        productDetails: state => state.productDetails,
        total: (state, getters) => {
            const normalPrice = parseFloat(getters.normalPrice);
            const quantity = state.quantities[state.productDetails.id] || 0;
    
            if (!isNaN(normalPrice) && !isNaN(quantity)) {
              const result = (normalPrice * quantity).toFixed(2);
              return result;
            } else {
              console.error('Invalid normalPrice or quantity:', normalPrice, quantity);
              return 0;
            }
          },
        normalPrice: state => {
          const discountPercentage = state.productDetails.discountPercentage;
          const price = state.productDetails.price;
      
          if (typeof discountPercentage === 'number' && discountPercentage !== 0) {
            const discountedPrice = price - (price * discountPercentage) / 100;
            return discountedPrice.toFixed(2);
          } else {
            return price?.toFixed(2) || 0;
          }
        },
        number: state => state.quantities[state.productDetails.id] || 0,
      }

      export default {
        namespaced: true,
        state,
        mutations,
        actions,
        getters,
      };