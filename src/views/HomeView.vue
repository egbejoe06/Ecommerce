<template>
  <div class="home">
    <Header />
    <div class="b2w">
      <router-link to="/">
        <div class="b2w1">
          <div><img src="../assets/arrow-left.svg" alt="" /></div>
          <div class="b2w2">Back to the website</div>
        </div>
      </router-link>
    </div>
    <div class="sign" :style="{ opacity: isPopupVisible ? '50%' : '100%' }">
      <div><SignIn /></div>
      <div class="sign1"></div>
      <div><Signup @show-popup="togglePopup" /></div>
    </div>
    <Popup
      v-if="isPopupVisible"
      @close-popup="closePopup()"
      :SignupEmail="SignupEmail"
      :Name="Name"
    />
    <Footer />
  </div>
</template>

<script>
import SignIn from "../views/SignIn.vue";
import Signup from "../views/Signup.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Popup from "@/components/Popup.vue";
export default {
  name: "HomeView",
  data() {
    return {
      isPopupVisible: false,
      Name: "",
      SignupEmail: "",
    };
  },
  components: { SignIn, Signup, Header, Footer, Popup },
  methods: {
    togglePopup(data) {
      this.isPopupVisible = true;
      this.Name = data?.Name;
      this.SignupEmail = data?.SignupEmail;
      setTimeout(() => {
        this.closePopup();
        this.$router.push("/");
      }, 2000);
    },
    closePopup() {
      this.isPopupVisible = false;
    },
  },
};
</script>
<style>
.home {
  position: relative;
}
.sign1 {
  width: 1px;
  height: var(--spacing-0, 390px);
  border-radius: var(--spacing-0, 0px);
  background: var(--button-stroke-stroke, #d9d9d9);
}
.sign {
  display: flex;
  padding: var(--spacing-11, 44px) 90px;
  align-items: flex-start;
  align-content: flex-start;
  gap: 24px var(--spacing-6, 24px);
  align-self: stretch;
  flex-wrap: wrap;
  background: var(--background-color-white, #fff);
  justify-content: center;
}
.ft1 {
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ft2 {
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.ft3 {
  display: flex;
  width: 120px;
  padding: var(--spacing-0, 0px);
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-6, 24px);
}
.footer22 {
  display: flex;
  height: 69px;
  padding: var(--spacing-0, 0px);
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: var(--spacing-4, 16px);
  align-self: stretch;
  flex-wrap: wrap;
}
.footer21 div select {
  color: var(--text-color-light-primary-text, #262626);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  flex: 1 0 0;
  border: none;
  position: relative;
  left: 800px;
}
.footer21 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: center;
  align-content: center;
  gap: var(--spacing-6, 24px) 46px;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: var(--spacing-0, 0px);
}
.pay-m div img {
  opacity: 0.3;
  mix-blend-mode: luminosity;
  width: 62px;
  height: 19px;
  flex-shrink: 0;
}
.pay-m {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: 25px;
}
.footer2 {
  display: flex;
  padding: var(--spacing-6, 24px) 40px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: var(--spacing-3, 12px);
  align-self: stretch;
  border-radius: var(--spacing-0, 0px);
  background: var(--background-color-white, #fff);
}
.F1 {
  width: 135px;
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 142.857% */
}
.f2 {
  align-self: stretch;
  color: var(--text-color-light-secondary-text, #555);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.footer11 {
  display: flex;
  width: 123px;
  padding: var(--spacing-0, 0px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  border-radius: var(--spacing-0, 0px);
}
.footer1 {
  display: flex;
  padding: var(--spacing-0, 0px);
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 20px;
  flex: 1 0 0;
  flex-wrap: wrap;
  border-radius: var(--spacing-0, 0px);
}
.footer {
  margin-top: 30px;
  display: flex;
  padding: var(--spacing-14, 60px) 248px var(--spacing-14, 60px) 303px;
  justify-content: center;
  align-items: center;
  align-content: center;
  gap: var(--spacing-8, 32px) 127px;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: var(--spacing-0, 0px);
  background: var(--background-color-footer, #d1e2eb);
}
.b2w2 {
  width: 141px;
  height: 34px;
  flex-shrink: 0;
  color: var(--text-color-light-secondary-text, #555);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 34.119px; /* 213.242% */
}
.b2w1 {
  display: flex;
  width: 165px;
  height: 34px;
  justify-content: center;
  align-items: center;
}
.b2w {
  display: flex;
  padding: var(--spacing-5, 20px) 90px var(--spacing-0, 0px) 90px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  background: var(--background-color-white, #fff);
  align-self: stretch;
}
.cate3 {
  width: 0.5px;
  height: var(--spacing-0, 62px);
  border-radius: var(--spacing-0, 0px);
  background: var(--color-gray-gray-500, #7b7b7b);
}
.cate23 {
  display: flex;
  padding: 2px var(--spacing-2, 8px);
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  border-radius: 30px;
  background: var(--color-green-green-400, #3dc47e);
  color: var(--text-color-inside-inside, #fff);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.cate22 {
  flex: 1 0 0;
  color: var(--text-color-dark-text-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
a {
  text-decoration: none;
  color: var(--text-color-dark-text-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.cate21 {
  display: flex;
  padding: var(--spacing-0, 0px);
  align-items: flex-start;
  gap: var(--spacing-1, 10px);
  flex: 1 0 0;
  border-radius: var(--spacing-0, 0px);
}
.cate2 {
  display: flex;
  width: 340px;
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: var(--spacing-5, 20px);
  border-radius: var(--spacing-0, 0px);
}
.cate1 {
  display: flex;
  width: 341px;
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: 10px;
  border-radius: var(--spacing-0, 0px);
}
.cate11 {
  color: var(--text-color-dark-text-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 166.667% */
  align-self: stretch;
}
.cate12 {
  color: var(--text-color-dark-text-secondary, #c4c4c4);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  align-self: stretch;
}
.langg select {
  background: transparent;
  color: var(--text-color-dark-text-primary, #fff);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  border: none;
}
.lang {
  display: flex;
  padding: var(--spacing-0, 0px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  border-radius: var(--spacing-0, 0px);
}
.cate {
  display: flex;
  gap: 20px;
}
.usd select {
  border: none;
  background: transparent;
  color: var(--text-color-dark-text-primary, #fff);
  text-align: right;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
}
.categories {
  display: flex;
  width: 125px;
  padding: var(--spacing-0, 0px);
  align-items: center;
  gap: var(--spacing-1, 4px);
  border-radius: var(--spacing-0, 0px);
}
.category {
  color: var(--text-color-dark-text-primary, #fff);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 100% */
}
.logo {
  width: 49px;
  height: 23px;
  border-radius: var(--spacing-0, 0px);
}
.luminae {
  width: 124px;
  color: var(--color-base-black, #000);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px; /* 62.5% */
}
.search {
  display: flex;
  padding: var(--spacing-2, 8px) var(--spacing-3, 12px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  border-radius: var(--spacing-1, 4px);
  border: 1px solid var(--button-stroke-stroke, #d9d9d9);
}
.header {
  display: flex;
  height: 96px;
  padding: var(--spacing-7, 28px) 90px;
  align-items: center;
  align-content: center;
  gap: var(--spacing-3, 12px) 50px;
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: var(--spacing-0, 0px);
  background: var(--background-color-white, #fff);
}
.options {
  display: flex;
  width: 109px;
  padding: var(--spacing-0, 0px);
  justify-content: flex-end;
  align-items: center;
  gap: var(--spacing-0, 0px);
  flex-shrink: 0;
  border-radius: var(--spacing-0, 0px);
}
.nav {
  display: flex;
  padding: var(--spacing-0, 0px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  border-radius: var(--spacing-0, 0px);
}
.search input {
  flex: 1 0 0;
  color: var(--text-color-light-tritary-text, #9d9d9d);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
}
.search select {
  width: 107px;
  flex-shrink: 0;
  color: var(--text-color-light-primary-text, #262626);
  font-feature-settings: "clig" off, "liga" off;
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  border: none;
}
.socials {
  display: flex;
  width: 84px;
  padding: var(--spacing-0, 0px);
  justify-content: center;
  align-items: center;
  gap: var(--spacing-3, 12px);
  border-radius: var(--spacing-0, 0px);
}
.header2 {
  display: flex;
  padding: var(--spacing-2, 8px) 90px;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  row-gap: var(--spacing-3, 12px);
  align-self: stretch;
  flex-wrap: wrap;
  border-radius: var(--spacing-0, 0px);
  background: var(--background-color-gray, #262626);
}
</style>
