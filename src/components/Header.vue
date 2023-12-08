<template>
  <div class="header">
    <div>
      <router-link to="/">
        <img class="logo" src="../assets/Logo.svg" alt="logo" />
        <span class="luminae">Luminae</span>
      </router-link>
    </div>
    <div class="search">
      <input type="text" placeholder="search products" />
      <div class="options">
        <select id="">
          <option value="All categoreies">All categoreies</option>
        </select>
      </div>
      <div>
        <img src="../assets/Search.svg" alt="" />
      </div>
    </div>
    <div class="nav">
      <div>About us</div>
      <div>Blog</div>
      <div>Contact us</div>
      <div>Help & support</div>
    </div>
    <div class="socials">
      <span><img src="../assets/instagram.svg" alt="" /></span>
      <span><img src="../assets/FB.svg" alt="" /></span>
      <span><img src="../assets/telegram.svg" alt="" /></span>
    </div>
    <div></div>
  </div>
  <div class="header2">
    <div class="cate">
      <div class="categories">
        <div><img src="../assets/categories.svg" alt="" /></div>
        <div class="category">Categories</div>
      </div>
      <div class="lang">
        <div class="usd">
          <select>
            <option value="">USD</option>
            <Option>NGN</Option>
          </select>
        </div>
        <div class="langg">
          <select>
            <option>English</option>
          </select>
        </div>
      </div>
    </div>
    <div class="cate3"></div>
    <div>
      <div class="cate1">
        <div><img src="../assets/Mencosmetic.png" alt="" /></div>
        <div>
          <span class="cate11">Weekly Men's Toiletries Coupons.</span><br />
          <span class="cate12">We extend exclusive discounts to our male clientele</span>
        </div>
      </div>
    </div>
    <div class="cate3"></div>
    <div class="cate2">
      <Router-Link :to="{ name: 'Signin' }">
        <div class="cate21">
          <div><img src="../assets/Signin.svg" alt="" /></div>
          <div class="cate22">Sign in</div>
        </div></Router-Link
      >
      <div class="cate21">
        <div><img src="../assets/Favorides.svg" alt="" /></div>
        <div class="cate22">Favorities</div>
      </div>
      <div class="cate21">
        <div>
          <router-link to="/Cart">
            <div class="cate211">
              <div><img src="../assets/Card.svg" alt="" /></div>
              <div class="cate22">Card</div>
            </div></router-link
          >
        </div>
        <div class="cate23">{{ carts.length }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("productdetails", [
      "total",
      "normalPrice",
      "number",
      "productDetails",
      "carts",
    ]),
  },
};
</script>
<style>
.cate211 {
  display: flex;
  gap: 5px;
}
</style>
