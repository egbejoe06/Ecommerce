<template>
  <div class="productdetails">
    <div><Header /></div>
    <div>
      <div v-if="productDetails">
        <div class="productdetails1">
          <div class="pd1">
            <div class="pd1-img">
              <div class="pd1-img1">
                <span v-for="(image, index) in productDetails.images" :key="index">
                  <img @click="swap(index)" :src="image" alt="" />
                </span>
              </div>
              <div class="pd1-img2">
                <img :src="productDetails.thumbnail" alt="" />
              </div>
            </div>
          </div>
          <div class="pd2">
            <div class="pd21">
              <div class="pd3">
                <h3>{{ productDetails.title }}</h3>
                <h4>${{ normalPrice }}</h4>
              </div>
              <div @click="toggleFavorite(productDetails.id)" class="isFavorite1 isFav1">
                <img class="isFav2" :src="Images[productDetails.id]" alt="" />
              </div>
            </div>
            <div class="pd4">
              <div class="pd41">
                <div>Shipping</div>
                <div class="pd42">
                  <span class="pd43">Free Shipping to Victoria teritory</span>
                  <span class="pd44">Delivery Time: 14–17 days</span>
                </div>
              </div>
              <div class="pd41">
                <div>Quantity</div>
                <div class="pd5">
                  <img
                    style="cursor: pointer"
                    @click="decrease()"
                    src="../../assets/Minus.svg"
                    alt=""
                  />
                  <span class="pd52">{{ number }}</span>
                  <img
                    style="cursor: pointer"
                    @click="increase()"
                    src="../../assets/Plus.svg"
                    alt=""
                  />
                </div>
                <div class="pd51">{{ productDetails.stock }} available</div>
              </div>
            </div>
            <div class="pd6">
              <div class="pd3">
                <h3 class="pd64">${{ total }}</h3>
                <div class="pd65"></div>
                <div class="pd61">
                  <div><img src="../../assets/Plus1.png" alt="" /></div>
                  <div>
                    Add shipping insurance for $9<span class="pd62"
                      >( declared value only if the package gets lost, stolen or
                      damaged.)</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="buy">
              <div><button class="buy1">Shop now</button></div>
              <div>
                <button class="buy2">
                  <div class="buy3">
                    <span><img src="../../assets/1.svg" alt="" /></span
                    ><span>Add to basket</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="productdetail2">
          <div class="pd8">
            <div class="pd81">
              <div :class="{ pd82: sProduct }" @click="showProduct()">
                Product details
              </div>
              <div :class="{ pd82: sReview }" @click="showReview()">
                Review({{ randomComments.length }})
              </div>
              <div :class="{ pd82: sshipping }" @click="showShipping()">
                Shipping & Payment
              </div>
            </div>
            <div class="pd65"></div>
          </div>
          <div v-show="sProduct" class="pd7">
            <div>
              <span><h4>Product Description</h4></span>
              <span>{{ productDetails.description }}</span>
            </div>
            <div>
              <span><h4>Product Brand</h4></span>
              <span>{{ productDetails.brand }}</span>
            </div>
          </div>
          <div v-show="sReview" class="review">
            <div class="rating-summary">
              <div class="average-rating">
                <h4>Total review rate</h4>
                <div class="average">
                  <div class="stars">
                    <span v-for="n in Math.round(averageRating)" class="star"
                      >&#9733;</span
                    >
                    <span v-for="n in 5 - Math.round(averageRating)" class="star"
                      >&#9734;</span
                    >
                  </div>
                  <p class="average1">{{ averageRating }}/5</p>
                </div>
                <div class="newcomment">Write a customer review</div>
              </div>
              <div class="star-distribution">
                <div>
                  <div v-for="star in 5" :key="star">
                    <span
                      >{{ star }} stars
                      <progress
                        :value="getStarPercentage(star)"
                        max="100"
                        class="star-progress"
                      ></progress>
                      {{ getStarPercentage(star) }}%</span
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="pd65"></div>
            <div class="com4">
              <div class="com-ments" v-for="comment in randomComments" :key="comment.id">
                <div class="stars">
                  <span v-for="n in Math.round(comment.rating)" class="star"
                    >&#9733;</span
                  >
                  <span v-for="n in 5 - Math.round(comment.rating)" class="star"
                    >&#9734;</span
                  >
                </div>
                <div class="com1">
                  <span id="com2">{{ comment.body }}</span>
                  <span id="com3">by {{ comment.user.username }}</span>
                </div>
              </div>
            </div>
          </div>
          <div v-show="sshipping" class="shipping">
            <div class="ship1">
              <div class="ship2">
                <span class="ship21">Shipping</span>
                <span class="ship22">Calculate the shipping cost by region</span>
              </div>
              <div class="ship3">
                <div class="ship31">Shipping to</div>
                <div class="ship33">
                  <span>
                    <select
                      class="ship32"
                      v-model="selectedCountry"
                      @change="updateCities"
                    >
                      <option value="">Select a country</option>
                      <option
                        v-for="country in countries"
                        :value="country.country"
                        :key="country.country"
                      >
                        {{ country.country }}
                      </option>
                    </select></span
                  >
                  <span>
                    <select class="ship32" v-model="selectedCity">
                      <option value="">Select a city</option>
                      <option v-for="city in cities" :value="city" :key="city">
                        {{ city }}
                      </option>
                    </select></span
                  >
                </div>
              </div>
            </div>
            <div class="ship4">
              <table>
                <thead>
                  <tr>
                    <th class="ship41">Shipping Company</th>
                    <th class="ship41">Shipping Cost</th>
                    <th class="ship41">Estimated Delivery Time</th>
                    <th class="ship41">Packet Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="company in shippings" :key="company.id">
                    <td><img class="ship42" :src="company.image" alt="" /></td>
                    <td class="ship43">{{ company.cost }}</td>
                    <td class="ship44">{{ company.deliveryTime }}</td>
                    <td class="ship45">
                      <input
                        type="checkbox"
                        :disabled="true"
                        v-if="company.insurance === 'Unavailable'"
                      />
                      <input type="checkbox" :disabled="true" v-else checked />
                      {{ company.insurance }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="ship1">
              <div class="ship2">
                <span class="ship21">Payment</span>
                <span class="ship22">Payment methods supported with our platform</span>
              </div>
              <div class="ship3">
                <div><img src="../../assets/image-095.png" alt="" /></div>
                <div><img src="../../assets/image-094.png" alt="" /></div>
                <div><img src="../../assets/image-096.png" alt="" /></div>
              </div>
            </div>
          </div>
          <div class="siproduct">
            <div class="sip1">You might also like</div>
            <div class="sip11">
              <div
                class="sip2"
                v-for="product in siproducts.slice(0, 3)"
                :key="product.id"
              >
                <div><img class="sip3" :src="product.thumbnail" alt="" /></div>
                <div class="sip4">
                  <router-link
                    @click="goToProductDetails()"
                    :to="{ name: 'Productdetails', params: { id: product.id } }"
                  >
                    <div class="sip5">
                      {{ product.title }}
                    </div></router-link
                  >
                  <div class="sip6">
                    <div class="sip7">
                      ${{
                        calculateNormalPrice(product.discountPercentage, product.price)
                      }}
                    </div>
                    <div class="sip71">${{ product.price }}</div>
                    <div class="sip8">{{ product.discountPercentage }}%</div>
                  </div>
                  <div class="sip9">Add to cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Product not found</p>
      </div>
    </div>
    <div><Footer /></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
  data() {
    return {
      countries: [],
      cities: [],
      selectedCountry: "",
      selectedCity: "",
      sProduct: true,
      sReview: false,
      sshipping: false,
      shippings: [
        {
          id: 1,
          image: require("../../assets/1582.png"),
          cost: "Free",
          deliveryTime: "14-21 days",
          insurance: "Unavailable",
        },
        {
          id: 2,
          image: require("../../assets/22.png"),
          cost: "$15",
          deliveryTime: "7-14 days",
          insurance: "Available",
        },
        {
          id: 3,
          image: require("../../assets/23.gif"),
          cost: "$21",
          deliveryTime: "3-7 days",
          insurance: "Available",
        },
      ],
    };
  },
  computed: {
    siproducts() {
      const currentProductId = this.productDetails.id;
      return this.products.filter((product) => {
        const category = product.category.toLowerCase();
        const siproduct = category.includes(this.productDetails.category);
        return siproduct && product.id !== currentProductId;
      });
    },
    ...mapGetters("productdetails", [
      "total",
      "normalPrice",
      "number",
      "productDetails",
      "comments",
    ]),
    ...mapGetters("product", ["products", "isFavorite", "Images"]),
    randomComments() {
      try {
        const shuffledComments = [...this.comments];
        for (let i = shuffledComments.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledComments[i], shuffledComments[j]] = [
            shuffledComments[j],
            shuffledComments[i],
          ];
        }

        return shuffledComments.slice(0, 4);
      } catch (error) {
        console.error("Error in randomComments:", error);
        return [];
      }
    },
    averageRating() {
      if (this.comments.length === 0) return 0;

      const totalRating = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
      const average = totalRating / this.comments.length;

      // Format the average rating with 2 decimal places
      return average.toFixed(2);
    },

    // Calculate the percentage of comments for each star rating
    starDistribution() {
      const distribution = Array(5).fill(0);

      this.comments.forEach((comment) => {
        distribution[Math.round(comment.rating) - 1]++;
      });

      return distribution;
    },
  },
  created() {
    const productId = this.$route.params.id;
    this.$store.dispatch("productdetails/fetchProductDetails", productId);
    this.$store.dispatch("productdetails/fetchComment");
    this.$store.dispatch("product/fetchProduct");
    this.shipping();
  },
  watch: {
    "$route.params.id": function (newProductId, oldProductId) {
      this.$store.dispatch("productdetails/fetchProductDetails", newProductId);
    },
  },

  methods: {
    shipping() {
      fetch("https://countriesnow.space/api/v0.1/countries")
        .then((response) => response.json())
        .then((data) => {
          if (!data.error) {
            this.countries = data.data;
            this.displayCities(this.countries[0].cities);
          } else {
            console.error("Error fetching data:", data.msg);
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    displayCities(cities) {
      this.cities = cities;
    },
    updateCities() {
      const selectedCountryData = this.countries.find(
        (country) => country.country === this.selectedCountry
      );
      this.displayCities(selectedCountryData.cities);
    },
    goToProductDetails() {
      console.log("hello");
    },
    calculateNormalPrice(discountPercentage, discountPrice) {
      if (typeof discountPercentage === "number" && discountPercentage !== 0) {
        const normalPrice = discountPrice - (discountPercentage / 100) * discountPrice;
        return normalPrice.toFixed(2);
      } else {
        return discountPrice.toFixed(2);
      }
    },
    showProduct() {
      this.sProduct = !this.sProduct;
      if ((this.sProduct = true)) {
        this.sReview = false;
        this.sshipping = false;
      } else {
        this.sReview = true;
      }
    },
    showReview() {
      this.sReview = !this.sReview;
      if ((this.sReview = true)) {
        this.sProduct = false;
        this.sshipping = false;
      } else {
        this.sProduct = true;
      }
    },
    showShipping() {
      this.sshipping = !this.sshipping;
      if ((this.sshipping = true)) {
        this.sProduct = false;
        this.sReview = false;
      } else {
        this.sProduct = true;
      }
    },
    getStarPercentage(star) {
      const totalComments = this.randomComments.length;

      // Count the number of comments for the specific star rating
      const starCount = this.randomComments.filter(
        (comment) => Math.round(comment.rating) === star
      ).length;

      // Calculate the percentage for the specific star rating
      const percentage = (starCount / totalComments) * 100;

      // If there are no comments for the star rating, return 0%
      // Otherwise, return the rounded percentage
      return starCount === 0 ? 0 : Math.round(percentage);
    },
    toggleFavorite(productId) {
      this.$store.dispatch("product/toggleProductFavorite", productId);
    },
    increase() {
      const productId = this.productDetails.id;
      this.$store.commit("productdetails/increase", productId);
    },
    decrease() {
      const productId = this.productDetails.id;
      this.$store.commit("productdetails/decrease", productId);
    },
    swap(index) {
      if (this.productDetails.images.length > index) {
        const clickedImage = this.productDetails.images[index];
        this.productDetails.images[index] = this.productDetails.thumbnail;
        this.productDetails.thumbnail = clickedImage;
      }
    },
  },
};
</script>
<style>
.ship4 {
  padding-left: 200px;
}
.ship45 {
  position: relative;
  left: -20px;
  color: var(--text-color-light-primary-text, #262626);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
tbody {
  position: relative;
  left: 27px;
}
.ship41 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ship42 {
  width: 165px;
  height: 38px;
}
.ship43 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ship44 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ship33 {
  display: flex;
  gap: 5px;
}
.ship31 {
  color: var(--base-grey-85, #4b5157) !important;
  text-align: right !important;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px !important;
  font-style: normal !important;
  font-weight: 400 !important;
  line-height: 20px; /* 142.857% */
}
.ship3 {
  display: flex;
  align-items: center;
  gap: var(--spacing-6, 24px);
}
.ship32 option {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ship32 {
  display: flex;
  width: 200px;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #c4c4c4;
}
.shipping {
  display: flex;
  padding: var(--spacing-6, 24px) var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-11, 44px);
}
.ship1 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
}
.ship2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3, 12px);
}
.ship21 {
  color: var(--text-color-light-primary-text, #262626) !important;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato !important;
  font-size: 16px !important;
  font-style: normal !important;
  font-weight: 800 !important;
  line-height: 20px !important; /* 125% */
}
.ship22 {
  color: var(--text-color-light-secondary-text, #555) !important;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px !important;
  font-style: normal;
  font-weight: 400 !important;
  line-height: 20px; /* 142.857% */
}
.pd82 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sip71 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}
.sip11 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.siproduct {
  display: flex;
  padding: var(--spacing-6, 24px) 90px;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3, 12px);
  align-self: stretch;
}
.sip6 {
  display: flex;
  width: 151px;
  padding: var(--spacing-0, 0px);
  gap: 10px;
  align-items: center;
  align-content: center;
  row-gap: 9px;
}
.sip7 {
  color: var(--text-color-light-text-off-proces, #ff2e00);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.sip8 {
  color: var(--text-color-inside-inside, #fff);
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  border-radius: 2.057px;
  padding: 3px 6px;
  justify-content: center;
  align-items: center;
  background: var(--tag-notif-off-tag, #ff2e00);
}
.sip9 {
  display: flex;
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--icon-color-secondary, #7b7b7b);
  color: var(--text-color-light-primary-text, #262626);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.sip5 {
  cursor: pointer;
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.sip3 {
  width: 90px;
  height: 135px;
}
.sip4 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-3, 12px);
}
.sip1 {
  color: var(--text-color-light-primary-text, #262626);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sip2 {
  display: flex;
  width: 300px;
  align-items: center;
  gap: 12px;
}
.review {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.com4 {
  padding-left: 190px;
}
.com-ments {
  display: flex;
  padding: 10px;
  align-items: center;
  gap: var(--spacing-6, 24px);
}
.com1 {
  display: flex;
  width: 260px;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-1, 4px);
}
#com2 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
#com3 {
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}
.average-rating {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.newcomment {
  cursor: pointer;
  display: flex;
  width: 185px;
  padding: 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--button-stroke-cartd-stroke-pressed, #434343);
  color: var(--text-color-light-secondary-text, #555);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.average1 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.average {
  display: flex;
  height: var(--spacing-6, 24px);
  padding: var(--spacing-0, 0px);
  align-items: center;
  align-content: center;
  gap: var(--spacing-2, 8px) var(--spacing-4, 16px);
  flex-wrap: wrap;
}
.average-rating h4 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 156.25% */
}
.rating-summary {
  display: flex;
  padding: var(--spacing-0, 0px) 200px;
  align-items: flex-start;
  gap: 176px;
}
.star {
  color: #ffc000 !important;
}
.pd21 {
  display: flex;
  gap: 35px;
}
.isFav1 {
  border: 1px solid #d9dadb;
  width: 32px;
  height: 32px;
  border-radius: 100%;
}
.isFav2 {
  position: relative;
  top: 6px;
  left: 4px;
}
.buy1 {
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2, 8px);
  flex: 1 0 0;
  border-radius: var(--spacing-1, 4px);
  background: var(--button-default, #4172dc);
  color: var(--text-color-inside-inside, #fff);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  text-transform: uppercase;
  width: 200px;
}
.buy2 {
  display: flex;
  height: 56px;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-2, 8px);
  flex: 1 0 0;
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--button-stroke-cartd-stroke-pressed, #434343);
  color: var(--text-color-light-secondary-text, #555);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
  text-transform: uppercase;
}
.buy3 {
  display: flex;
  gap: 5px;
}
.buy {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px var(--spacing-5, 20px);
  align-self: stretch;
  flex-wrap: wrap;
}
.pd8 {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-5, 20px);
  align-self: stretch;
}
.pd81 div {
  cursor: pointer;
}
.pd81 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  gap: var(--spacing-15, 64px);
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.pd81 div {
  display: flex;
  height: 20px;
  justify-content: center;
  align-items: center;
}
.pd7 {
  display: flex;
  padding: 0px 90px;
  align-items: flex-start;
  gap: var(--spacing-5, 20px);
  align-self: stretch;
}
.productdetail2 span h4 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px; /* 156.25% */
}
.productdetail2 span {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.productdetail2 {
  display: flex;
  padding: var(--spacing-0, 0px) 90px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
}
.pd65 {
  display: flex;
  height: 1px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: var(--spacing-0, 0px);
  background: var(--button-stroke-card-stroke-disabled, #c4c4c4);
}
.pd64 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 18px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px; /* 166.667% */
}
.pd61 {
  color: var(--text-color-light-secondary-text, #555);
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  align-content: flex-start;
  gap: 5px;
  align-self: stretch;
  flex-wrap: wrap;
}
.pd62 {
  color: var(--text-color-light-secondary-text, #555);
  font-family: Lato;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.pd6 {
  display: flex;
  padding: var(--spacing-3, 12px) var(--spacing-6, 18px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2, 8px);
  align-self: stretch;
  border-radius: var(--spacing-1, 4px);
  background: var(--background-color-top-category, #e9e9e9);
}
.pd51 {
  color: var(--text-color-light-secondary-text, #555);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.pd52 {
  color: var(--text-color-light-primary-text, #262626);
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.pd5 {
  display: flex;
  padding: 10px var(--spacing-4, 16px);
  align-items: flex-start;
  gap: 10px;
  border-radius: var(--spacing-1, 4px);
  border: 1px solid #c4c4c4;
}
.productdetails1 {
  display: flex;
  padding: 0px 90px;
  align-items: center;
  align-self: stretch;
}
.pd44 {
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}
.pd43 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
}
.pd42 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-0, 0px);
}
.pd41 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: center;
  align-content: center;
  gap: 16px var(--spacing-4, 16px);
  align-self: stretch;
  flex-wrap: wrap;
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.pd4 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-5, 20px);
  align-self: stretch;
}
.pd3 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-2, 8px);
}
.pd3 h3 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
}
.pd3 h4 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 140% */
}
.pd1 {
  display: flex;
  padding: 0px 90px;
  align-items: center;
  align-self: stretch;
  border-radius: 8px;
  background: var(--background-color-white, #fff);
}
.pd1-img {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-end;
}
.pd1-img1 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
}
.pd1-img1 span img {
  display: flex;
  width: 100px;
  height: 70px;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-0, 0px);
  align-self: stretch;
}
.pd1-img2 img {
  height: 350px;
  width: 250px;
}
.productdetails {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: 21px;
}
.pd2 {
  display: flex;
  padding: 58px var(--spacing-0, 0px) 58px var(--spacing-14, 60px);
  flex-direction: column;
  gap: var(--spacing-8, 32px);
  flex: 1 0 0;
  align-self: stretch;
  border-radius: var(--spacing-0, 0px) var(--spacing-2, 8px) var(--spacing-2, 8px)
    var(--spacing-0, 0px);
  background: #fff;
}
</style>
