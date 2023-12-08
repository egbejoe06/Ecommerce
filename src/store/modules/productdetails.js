import VuexPersistence from 'vuex-persist'
const state =
    {
        quantities: {},
        productDetails: null,
        comments:[],
        carts:[],
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
          setComment(state,{data}){
            state.comments =data
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
          async fetchComment({ commit }) {
            const url = 'https://dummyjson.com/comments';
            try {
              const response = await fetch(url);
              const data = await response.json();
          
              let commentsWithRating;
          
              if (data.comments && Array.isArray(data.comments)) {
                // Add a random rating (between 1 and 5) to each comment
                commentsWithRating = data.comments.map(comment => ({
                  ...comment,
                  rating: Math.floor(Math.random() * 5) + 1,
                }));
          
                // Commit the data to the store mutation
                commit('setComment', { data: commentsWithRating });
              } else {
                console.error('Invalid or missing data.comments array.');
              }
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          },
          
          increase({ commit, state }) {
            commit('increase', state.productDetails.id);
          },
          decrease({ commit, state }) {
            commit('decrease', state.productDetails.id);
          },
      }
   const getters= {
        carts: state => state.carts,
        productDetails: state => state.productDetails,
        comments: state => state.comments,
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
      const vuexPersist = new VuexPersistence({
        key: 'your-apps-key', // Choose a key for your app
        storage: window.localStorage, // Choose the storage method (localStorage in this case)
      });
      export default {
        namespaced: true,
        state,
        mutations,
        actions,
        getters,
        plugins: [vuexPersist.plugin],
      };