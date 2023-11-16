<template>
  <div class="goods">
    <div><Header /></div>
    <div class="subheader1">
      <span>Homepage ></span>
      <span>{{ selectedCategory }}</span>
    </div>
    <div class="subheader">
      <div class="sh1">
        <span class="sh11">Women</span>
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
                <span class="sm35" @click="selectCategory('womens-dresses')">Dress</span>
                <span class="sm35" @click="selectCategory('womens-shoes')">Shoes</span>
                <span class="sm35" @click="selectCategory('womens-watches')">Watch</span>
                <span class="sm35" @click="selectCategory('womens-jewellery')"
                  >Jewellery</span
                >
                <span class="sm35" @click="selectCategory('womens-bags')">Bag</span>
              </div>
            </div>
          </div>
        </div>
        <div class="smenu2">
          <div class="sm31"></div>
          <div>
            <div class="sm43">
              <div class="sm44">
                <div class="sm21">Style</div>
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Casual</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46"
                    >Business casual</span
                  ></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Bohemian</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Minimalist</span></span
                >
              </div>
              <div class="sm44">
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Uniqlo</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Zara</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Uniqlo</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Mango</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Ralph Lauren</span></span
                >
                <span class="sm45"
                  ><input type="checkbox" /><span class="sm46">Calvin Klein</span></span
                >
              </div>
              <div class="sm44">
                <div class="sm31"></div>
                <div class="sm21">Color</div>
                <div class="checkbox-container">
                  <div class="row">
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox1" />
                      <span class="checkmark" style="background-color: red"></span>
                      <span class="color-name">Red</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox2" />
                      <span class="checkmark" style="background-color: blue"></span>
                      <span class="color-name">Blue</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox3" />
                      <span class="checkmark" style="background-color: green"></span>
                      <span class="color-name">Green</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox4" />
                      <span class="checkmark" style="background-color: yellow"></span>
                      <span class="color-name">Yellow</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox5" />
                      <span class="checkmark" style="background-color: orange"></span>
                      <span class="color-name">Orange</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox6" />
                      <span class="checkmark" style="background-color: purple"></span>
                      <span class="color-name">Purple</span>
                    </label>
                  </div>
                  <div class="row">
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox7" />
                      <span class="checkmark" style="background-color: pink"></span>
                      <span class="color-name">Pink</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox8" />
                      <span class="checkmark" style="background-color: brown"></span>
                      <span class="color-name">Brown</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox9" />
                      <span class="checkmark" style="background-color: cyan"></span>
                      <span class="color-name">Cyan</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox10" />
                      <span class="checkmark" style="background-color: magenta"></span>
                      <span class="color-name">Magenta</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox11" />
                      <span class="checkmark" style="background-color: gray"></span>
                      <span class="color-name">Gray</span>
                    </label>
                    <label class="checkbox-label">
                      <input type="checkbox" class="color-checkbox" id="checkbox12" />
                      <span class="checkmark" style="background-color: black"></span>
                      <span class="color-name">Black</span>
                    </label>
                  </div>
                </div>
              </div>
              <div class="sm44">
                <div class="sm31"></div>
                <div class="sm21">size</div>
                <div class="checkbox-container">
                  <div class="row">
                    <span class="size-name">2XS</span>
                    <span class="size-name">XS</span>
                    <span class="size-name">S</span>
                    <span class="size-name">M</span>
                  </div>
                  <div class="row">
                    <span class="size-name">L</span>
                    <span class="size-name">XL</span>
                    <span class="size-name">2XL</span>
                    <span class="size-name">3XL</span>
                  </div>
                </div>
              </div>
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
                    <div class="trackmini2">
                      {{ filteredProducts.length }} products found
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainmenu">
        <div
          class="mm"
          v-for="(product, index) in filteredProducts.slice(0, 12)"
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
                <router-link :to="{ name: 'Productdetails', params: { id: product.id } }"
                  ><span class="mm2">{{ product.title }}</span></router-link
                >
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
      minValue: 10,
      maxValue: 1000,
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
    ...mapGetters("product", ["products", "isFavorite", "Images", "filteredProducts"]),
    filteredProducts() {
      return this.products.filter((product) => {
        const productPrice = parseFloat(product.price);
        const titleMatches = product.title
          .toLowerCase()
          .includes(this.searchQuery.toLowerCase());
        const category = product.category.toLowerCase();

        const isWomenDress = category.includes("women-dress");
        const isWomenShoes = category.includes("women-shoes");
        const isWomensWatches = category.includes("womens-watches"); // Corrected category name
        const isWomensBags = category.includes("womens-bags");
        const isWomensJewellery = category.includes("womens-jewellery");
        const isMatchingCategory =
          !this.selectedCategory || category.includes(this.selectedCategory);

        if (
          category.includes(this.selectedCategory) ||
          category.includes("womens-bags") ||
          category.includes("womens-jewellery") ||
          category.includes("womens-shoes") ||
          category.includes("womens-watches") ||
          category.includes("womens-dress")
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
            (isWomenDress ||
              isWomenShoes ||
              isWomensWatches ||
              isWomensBags ||
              isWomensJewellery)
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
<style>
.isFavorite2 {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.isFavorite {
  width: 260px;
}
.isFavorite1 {
  float: right;
}
.goods {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.subheader1 {
  display: flex;
  padding: var(--spacing-6, 24px) var(--spacing-0, 0px) var(--spacing-6, 24px) 90px;
  align-items: flex-start;
  gap: var(--spacing-0, 0px);
  align-self: stretch;
  border-radius: var(--spacing-0, 0px);
  background: #fff;
  color: var(--text-color-light-secondary-text, #555);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.sh1 {
  display: flex;
  padding: var(--spacing-6, 24px) 90px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--background-color-top-category, #e9e9e9);
  gap: 20px;
}
.sh11 {
  color: var(--text-color-light-primary-text, #262626);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
}
.sh12 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 125% */
}
.sh2 select {
  background-color: transparent;
  border: none;
}
.sh2 {
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--button-stroke-card-stroke-hover, #7b7b7b);
  color: var(--text-color-light-secondary-text, #555);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.subheader {
  display: flex;
  padding: var(--spacing-6, 2px) 90px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background: var(--background-color-top-category, #e9e9e9);
}
.stars {
  color: gold;
}
.star {
  font-size: 1.2em;
}
.mm-1 {
  display: flex;
  flex-direction: column;
  padding: 10px;
}
.mm7 {
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.mm6 {
  color: var(--text-color-light-text-off-proces, #ff2e00);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 142.857% */
}
.mm5 {
  color: var(--text-color-light-text-off-proces, #ff2e00);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 142.857% */
}
.mm4 {
  display: flex;
  height: var(--spacing-5, 20px);
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: var(--spacing-3, 12px);
  align-self: stretch;
}
.mm3 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mm2 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
}
.mm1 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-1, 4px);
  flex: 1 0 0;
  width: 260px;
}
.mm-img {
  height: 150px;
  width: 100%;
  margin-bottom: 10px;
}
.mm {
  display: flex;
  padding: 10px;
  max-width: auto;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 0 0;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
.mainmenu {
  display: grid;
  padding: 80px var(--spacing-0, 0px) var(--spacing-5, 20px) var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8, 32px);
  flex: 1 0 0;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  padding-right: 25px;
  padding-left: 20px;
}
.track-container3 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4, 16px);
}
.trackmini {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  gap: var(--spacing-5, 20px);
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.trackmini2 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.range-value {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -2rem;
  width: 87px;
  height: var(--spacing-10, 40px);
  flex-shrink: 0;
  border-radius: var(--spacing-0, 5px);
  border: 1px solid var(--button-stroke-stroke, #d9d9d9);
  background: #fff;
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.range-value.min {
  left: 0;
}

.range-value.max {
  right: 0;
}
.track-container {
  width: 100%;
  position: relative;
  cursor: pointer;
  height: 0.5rem;
  margin-top: 20px;
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4, 20px);
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
}

.track {
  background-color: #ddd;
}

.track-highlight {
  background-color: #4172dc;
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 1.2rem;
  height: 1.2rem;
  top: 14.8px;
  margin-left: -1rem;
  border: none;
  background-color: #4172dc;
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
  border-radius: 20px;
}

.size-name {
  width: 50px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: var(--button-stroke-stroke, #d9d9d9);
  color: var(--text-color-light-secondary-text, #555);
  text-align: center;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
  border: 1px solid gray;
  border-radius: 5px;
  padding: 2px;
  cursor: pointer;
}
.sm46 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
.sm45 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  gap: 10px;
}
.sm44 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-6, 24px);
}
.sm43 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  gap: var(--spacing-7, 28px);
}
.smenu2 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-7, 28px);
}
.sideMenu {
  display: flex;
  width: 320px;
  height: 1659px;
  padding: var(--spacing-9, 36px) var(--spacing-9, 36px) 132px 64px;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  background: var(--background-color-white, #fff);
  overflow-y: auto;
  height: 100%;
  overflow-x: hidden;
}
.smenu1 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  gap: var(--spacing-5, 20px);
}
.sm11 {
  display: flex;
  gap: 10px;
}
.sm12 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 800;
  line-height: 20px; /* 125% */
}
.sm2 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3, 12px);
}
.sm21 {
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
.sm22 {
  display: flex;
  padding: var(--spacing-2, 8px) var(--spacing-4, 16px);
  align-items: center;
  gap: 20px;
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--button-stroke-stroke, #d9d9d9);
}
.sm23 {
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  outline: none;
  border: none;
}
.sm31 {
  width: 220px;
  height: 1px;
  flex-shrink: 0;
  border-radius: var(--spacing-0, 0px);
  background: var(--button-stroke-stroke, #d9d9d9);
}
.sm3 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  gap: var(--spacing-7, 28px);
}
.sm32 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-6, 24px);
}
.sm33 {
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
.sm34 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-5, 20px);
}
.sm35 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  cursor: pointer;
}
.checkbox-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.row {
  display: flex;
  gap: 5px;
}

.checkbox-label {
  position: relative;
  cursor: pointer;
}

.color-checkbox {
  display: none;
}

.checkmark {
  width: 30px;
  height: 30px;
  border: 2px solid #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
}

.color-name {
  display: none;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #000;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  white-space: nowrap;
}

.checkbox-label:hover .color-name {
  display: block;
}

.color-checkbox:checked + .checkmark::before {
  content: "\2713"; /* Unicode checkmark character */
  font-size: 20px;
  color: #fff;
}
</style>
