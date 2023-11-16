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
            <div class="pd3">
              <h3>{{ productDetails.title }}</h3>
              <h4>${{ normalPrice }}</h4>
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
              <div>Product details</div>
              <div>Review</div>
              <div>Shipping & Payment</div>
            </div>
            <div class="pd65"></div>
          </div>
          <div class="pd7">
            <div>
              <span><h4>Product Description</h4></span>
              <span>{{ productDetails.description }}</span>
            </div>
            <div>
              <span><h4>Product Brand</h4></span>
              <span>{{ productDetails.brand }}</span>
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
    return {};
  },
  computed: {
    ...mapGetters("productdetails", ["total", "normalPrice", "number", "productDetails"]),
  },
  created() {
    const productId = this.$route.params.id;
    this.$store.dispatch("productdetails/fetchProductDetails", productId);
  },
  methods: {
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
.pd81 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  gap: var(--spacing-15, 64px);
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
  gap: var(--spacing-0, 0px);
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
