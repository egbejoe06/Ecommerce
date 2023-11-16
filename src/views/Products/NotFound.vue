<template>
  <div>
    <div><Header /></div>
    <div>
      <div class="nf1">
        <router-link to="/women"><span>Women</span></router-link>
        <router-link to="/Men"><span>Male</span></router-link>
        <router-link to="/Mother-child"><span>Mother-Child</span></router-link>
        <router-link to="/Home&Furniture"><span>Home & Furniture</span></router-link>
        <router-link to="/Supermarket"><span>Super market</span></router-link>
        <router-link to="/Cosmetics"><span>Cosmetics</span></router-link>
        <router-link to="/Shoe&Bag"><span>Shoe & Bag</span></router-link>
        <router-link to="/Electronics"><span>Electronic</span></router-link>
        <router-link to="/Bestsellers"><span>Best seller</span></router-link>
      </div>
      <div class="nf2">
        <div class="nf3">
          <img src="../../assets/shutterstock-6442990841.png" alt="" />
        </div>
        <div class="nf3">
          <div class="nf31">
            <div class="nf32">
              No results were found for searching " {{ $route.params.catchAll }} ".
            </div>
            <div class="nf33">
              <div class="nf34">
                <span><img src="../../assets/warning-polygon6.svg" alt="" /></span>
                <span class="nf35"
                  >We recommend you to search different clear key words to get the best
                  result.</span
                >
              </div>
              <div class="nf34">
                <span><img src="../../assets/warning-polygon6.svg" alt="" /></span>
                <span class="nf35"
                  >You can see the most related purchased products bellow.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div><Footer /></div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: { Header, Footer },
};
</script>
<style>
.nf35 {
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.nf34 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: var(--spacing-1, 4px);
  align-self: stretch;
}
.nf32 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 125% */
}
.nf31 {
  display: flex;
  padding: var(--spacing-5, 20px);
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3, 12px);
  align-self: stretch;
  border-radius: var(--spacing-2, 8px);
  border: 1.5px solid var(--button-stroke-stroke, #d9d9d9);
}
.nf3 {
  display: flex;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  flex: 1 0 0;
  align-self: stretch;
}
.nf2 {
  display: flex;
  height: 440px;
  padding: var(--spacing-0, 0px) 197px;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-10, 40px);
  flex-shrink: 0;
  align-self: stretch;
}
.nf1 {
  display: flex;
  padding: var(--spacing-4, 16px) 90px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
}
.nf1 span {
  display: flex;
  height: 20px;
  padding-left: 0px;
  justify-content: center;
  align-items: center;
  color: var(--text-color-light-secondary-text, #555);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
</style>
