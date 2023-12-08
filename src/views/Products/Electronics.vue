<template>
  <div class="goods">
    <div><Header /></div>
    <div class="subheader1">
      <span>Homepage ></span>
      <span>{{ selectedCategory }}</span>
    </div>
    <div class="subheader">
      <div class="sh1">
        <span class="sh11">Electronics</span>
        <span class="sh12">{{ filteredProducts.length }} items</span>
      </div>
      <div class="sh2">
        <div class="sh21">
          <select>
            <option>Sort by order</option>
          </select>
        </div>
      </div>
    </div>
    <div class="products">
      <div class="sideMenu">
        <div class="smenu1">
          <div class="sm11">
            <div><img src="../../assets/Vector1.svg" alt="" /></div>
            <div class="sm12">All Categories</div>
          </div>
          <div class="sm2">
            <div class="sm21">Brand</div>
            <div class="sm22">
              <div>
                <input
                  class="sm23"
                  type="text"
                  placeholder="search"
                  v-model="searchQuery"
                />
              </div>
              <div><img src="../../assets/search1.svg" alt="" /></div>
            </div>
          </div>
          <div class="sm3">
            <div class="sm31"></div>
            <div class="sm32">
              <div class="sm33">MODEL</div>
              <div class="sm34">
                <span class="sm35" @click="selectCategory('laptops')">Laptops</span>
                <span class="sm35" @click="selectCategory('smartphones')"
                  >Smartphones</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="smenu2">
          <div class="sm31"></div>
          <div class="sm44">
            <div class="sm31"></div>
            <div class="sm21">Price</div>
            <div class="track-container">
              <div class="track-container1">
                <span class="range-value min">${{ minValue }} </span>
                <span class="range-value max">${{ maxValue }}</span>
              </div>
              <div class="track-container2">
                <div class="track" ref="_vpcTrack"></div>
                <div class="track-highlight" ref="trackHighlight"></div>
                <button class="track-btn track1" ref="track1"></button>
                <button class="track-btn track2" ref="track2"></button>
              </div>
              <div class="track-container3">
                <div class="trackmini">
                  <span class="trackmini1">Minimum ${{ minValue }}</span>
                  <span class="trackmini1">Maximum ${{ maxValue }}</span>
                </div>
                <div class="trackmini2">{{ filteredProducts.length }} products found</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainmenu">
        <div
          class="mm"
          v-for="product in filteredProducts.slice(0, 12)"
          :key="product.id"
        >
          <div class="mm-1">
            <router-link :to="{ name: 'Productdetails', params: { id: product.id } }">
              <div>
                <img class="mm-img" :src="product.thumbnail" alt="" />
              </div>
            </router-link>
            <div class="mm1">
              <div class="isFavorite">
                <router-link :to="{ name: 'Productdetails', params: { id: product.id } }">
                  <span class="mm2">{{ product.title }}</span>
                </router-link>
                <div @click="toggleFavorite(product.id)" class="isFavorite1">
                  <img :src="Images[product.id]" alt="" />
                </div>
              </div>
              <div class="isFavorite2">
                <span class="mm3">{{ product.description }}</span>
              </div>
            </div>
            <div>
              <div class="stars">
                <span v-for="n in Math.round(product.rating)" class="star">&#9733;</span>
                <span v-for="n in 5 - Math.round(product.rating)" class="star"
                  >&#9734;</span
                >
              </div>
            </div>
            <div class="mm4">
              <div class="mm5">${{ product.price }}</div>
              <div class="mm7">
                ${{ calculateNormalPrice(product.discountPercentage, product.price) }}
              </div>
              <div class="mm6">-{{ product.discountPercentage }}%</div>
            </div>
          </div>
        </div>
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
      selectedCategory: null,
      searchQuery: "",
      min: 10,
      max: 2100,
      minValue: 255,
      maxValue: 1850,
      step: 5,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
    };
  },
  created() {
    this.$store.dispatch("product/fetchProduct");
  },
  computed: {
    ...mapGetters("product", [
      "products",
      "isFavorite",
      "Images",
      "filteredProducts",
      "favoriteProducts",
    ]),
    filteredProducts() {
      return this.products.filter((product) => {
        const productPrice = parseFloat(product.price);
        const titleMatches = product.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const category = product.category.toLowerCase();

        const issmartphones = category.includes("smartphones");
        const islaptops = category.includes("laptops");
        const isMatchingCategory =
          !this.selectedCategory || category.includes(this.selectedCategory);

        if (
          category.includes(this.selectedCategory) ||
          category.includes("smartphones") ||
          category.includes("laptops")
        ) {
          return (
            titleMatches &&
            productPrice >= this.minValue &&
            productPrice <= this.maxValue &&
            isMatchingCategory
          );
        } else {
          return (
            titleMatches &&
            productPrice >= this.minValue &&
            productPrice <= this.maxValue &&
            (issmartphones || islaptops)
          );
        }
      });
    },
  },

  methods: {
    toggleFavorite(productId) {
      this.$store.dispatch("product/toggleProductFavorite", productId);
    },
    selectCategory(category) {
      this.selectedCategory = category;
      console.log(this.selectedCategory);
    },
    calculateNormalPrice(discountPercentage, discountPrice) {
      if (typeof discountPercentage === "number" && discountPercentage !== 0) {
        const normalPrice = discountPrice / (1 - discountPercentage / 100);
        return normalPrice.toFixed(2);
      } else {
        return discountPrice.toFixed(2);
      }
    },
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx();

      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left);
      let clientX = ev.clientX;
      let moveDiff = clientX - trackX;

      let moveInPct = moveDiff / percentInPx;
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return;
      let value = Math.round(moveInPct / this.percentPerStep) * this.step + this.min;
      if (track === "track1") {
        if (value >= this.maxValue - this.step) return;
        this.minValue = value;
      }

      if (track === "track2") {
        if (value <= this.minValue + this.step) return;
        this.maxValue = value;
      }

      this.$refs[track].style.left = moveInPct + "%";
      this.setTrackHightlight();
    },
    mousedown(ev, track) {
      if (this.isDragging) return;
      this.isDragging = true;
      this.pos.curTrack = track;
    },

    touchstart(ev, track) {
      this.mousedown(ev, track);
    },

    mouseup(ev, track) {
      if (!this.isDragging) return;
      this.isDragging = false;
    },

    touchend(ev, track) {
      this.mouseup(ev, track);
    },

    mousemove(ev, track) {
      if (!this.isDragging) return;
      this.moveTrack(track, ev);
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track);
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep;
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left = this.valueToPercent(this.minValue) + "%";
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) - this.valueToPercent(this.minValue) + "%";
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth;
      let oneStepInPx = trackWidth / this.totalSteps;
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep;

      return percentInPx;
    },

    setClickMove(ev) {
      let track1Left = this.$refs.track1.getBoundingClientRect().left;
      let track2Left = this.$refs.track2.getBoundingClientRect().left;
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("track1", ev);
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("track1", ev);
      } else {
        this.moveTrack("track2", ev);
      }
    },
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step;

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps;
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".track1").style.left =
      this.valueToPercent(this.minValue) + "%";
    // track2 initial position
    document.querySelector(".track2").style.left =
      this.valueToPercent(this.maxValue) + "%";
    // set initila track highlight
    this.setTrackHightlight();

    var self = this;

    ["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack);
        }
      });
    });

    ["mousedown", "mouseup", "mousemove", "touchstart", "touchmove", "touchend"].forEach(
      (type) => {
        document.querySelector(".track1").addEventListener(type, (ev) => {
          ev.stopPropagation();
          self[type](ev, "track1");
        });

        document.querySelector(".track2").addEventListener(type, (ev) => {
          ev.stopPropagation();
          self[type](ev, "track2");
        });
      }
    );

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });

    document.querySelector(".track-highlight").addEventListener("click", function (ev) {
      ev.stopPropagation();
      self.setClickMove(ev);
    });
  },
};
</script>
