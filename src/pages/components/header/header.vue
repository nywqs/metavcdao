<template>
  <div class="box">
    <div class="header">
      <div class="header-ico">
        <img src="../../../assets/logo.png" alt="" class="logo">
      </div>
      
      <div class="header-right">
        <div class="header-name" :class="tabType == 'HOME' ? 'on' : ''" @click="changeTab('HOME')">
          <p class="linkTitle">
            {{ $t("HOME") }}
          </p>
        </div>
        <div class="header-name" :class="tabType == 'FAQ' ? 'on' : ''" @click="changeTab('FAQ')">
          <p class="linkTitle">
            FAQ
          </p>
        </div>
        <div class="header-name" :class="tabType == 'ABOUT' ? 'on' : ''">
          <a href="http://docs.metavcdao.xyz/" target="_blank">
            <p class="linkTitle">{{ $t("ABOUT") }}</p>
          </a>
        </div>
        <div class="walletBox">
          <el-dropdown trigger="click" @command="changeConnect">
            <span class="el-dropdown-link languageText">
              {{ $t("ConnectWallet") }}
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="metamask">MetaMask</el-dropdown-item>
              <el-dropdown-item command="TokenPocket">TokenPocket</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="iconBox">
          <a href="https://twitter.com/metavcdao" target="_blank"><img src="../../../assets/dove.png"
              class="secondIcon" /></a>
          <a href="https://discord.gg/QQpNG9jUz4" target="_blank"><img src="../../../assets//laugh.png"
              class="fourIcon" /></a>
        </div>
        <div class="selectBox___K1oXF">
          <el-dropdown trigger="click" @command="changeEng">
            <span class="el-dropdown-link languageText">
              LANGUAGE<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="en">{{ $t("ENGLISH") }}</el-dropdown-item>
              <el-dropdown-item command="zh">中文简体</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
        <div class="headerMobileRightBox___2zaiH">
          <el-dropdown placement="bottom" @command="changeConnect">
            <span class="el-dropdown-link languageText">
              <img src="../../../assets/wallet.png" class="rectangleIcon___2YDMr" />
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="metamask">MetaMask</el-dropdown-item>
              <el-dropdown-item command="TokenPocket">TokenPocket</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <img @click="showOpen" src="../../../assets/menu.png" class="nenuIcon___1HdFn" />
        </div>
      </div>
    </div>
    <header-drawer ref="headers" />
  </div>
</template>

<script>
import HeaderDrawer from './headerDrawer.vue';
export default {
  components: { HeaderDrawer },
  data() {
    return {
      activeIndex2: "1",
      tabType: "HOME",
      open: false,
      drawer: false,
      langText: "English"
    };
  },
  created() {
    var path = this.$route.path;
    this.tabType = path.substring(1) == "faq" ? "FAQ" : "HOME"
  },
  methods: {
    showOpen() {
      this.$refs["headers"].show();
    },
    changeEng(lang) {
      this.$i18n.locale = lang;
    },
    changeTab(type) {
      this.tabType = type;
      if (this.tabType == "HOME") {
        this.$router.push({ path: "/" });
      }
      if (this.tabType == "FAQ") {
        this.$router.push({ path: "/faq" });
      }
    },
    changeConnect(type) {
      console.log(type)
    },
  },
};
</script>

<style scoped>
page {
  width: 100%;
}

.logo {
  height: 4.5vw;
  padding-left: 2vw;
}

.el-dropdown-menu__item--divided:before {
  background-color: #1d1d1d !important;
}

.el-dropdown-menu {
  background-color: #000 !important;
  border: none !important;
  color: #fff !important;
}

.el-dropdown-menu__item {
  color: #fff !important;
}

.el-dropdown-menu__item:focus,
.el-dropdown-menu__item:not(.is-disabled):hover {
  background-color: #1d1d1d !important;
  color: #fff !important;
}

.box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 5.20833vw;
  background: #000;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
}

.box .header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.header-left {
  display: flex;
  align-items: center;
}

.header-right .header-name {
  min-width: 6.25vw;
  height: 5.20833vw;
  line-height: 5.20833vw;
  position: relative;
}

.header-right .header-name .linkTitle {
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #d8d8d8;
  text-align: center;
  cursor: pointer;
  margin: 0;
  /* padding: 0; */
}

.header-right {
  display: flex;
  align-items: center;
}

.header-right .walletBox .selectBox {
  width: 10.41667vw;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  margin-left: 2.54583vw;
  position: relative;
}

.header-right .languageBox {
  width: 100%;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
  cursor: pointer;
}

.header-right .languageContainer {
  width: 10.41667vw;
  position: absolute;
  top: 0;
  right: 0;
  background: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 3.64583vw;
}

.header-right .languageContainer .languageFirstBox {
  width: 100%;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0;
  cursor: pointer;
}

.header-right .languageContainer .ButtonArrowPressed {
  width: 0.625vw;
  height: 0.625vw;
  margin-left: 0.41667vw;
}

.languageText {
  margin-left: 1.04167vw;
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
  margin-left: 0.52083vw;
  cursor: pointer;
}

.header-right .languageBox .languageText {
  margin-left: 1.04167vw;
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
  cursor: pointer;
}

.header-right .dropIcon {
  width: 0.41667vw;
  height: 0.20833vw;
  margin-left: 0.41667vw;
  cursor: pointer;
}

.header-right .languageContainer .languageBox {
  width: 100%;
  height: 3.125vw;
  padding-left: 1.5625vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0;
  cursor: pointer;
}

.header-right .languageContainer .languageBox .languageText {
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
  margin-left: 1.04167vw;
  cursor: pointer;
}

.connect-name {
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
}

.dropImg {
  width: 10px;
  height: 5px;
  margin-left: 5px;
}

.name-up {
  width: 150px;
  height: 180px;
  text-align: center !important;
  background-color: #1d1d1d;
  cursor: pointer;
  margin: 0 auto;
}

.connect-name-up {
  width: 100%;
  display: flex;
  align-items: center;
  height: 100px;
  line-height: 100px;
  margin-left: 15px;
}

.metamask {
  width: 100%;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}

.headerMobileRightBox___2zaiH {
  display: none;
}

.header-right .iconBox {
  display: flex;
  align-items: center;
}

.header-right .iconBox .secondIcon {
  width: 1.19792vw;
  height: 0.88542vw;
  margin-left: 2.60417vw;
  cursor: pointer;
}

.header-right .iconBox .firstIcon {
  width: 1.04167vw;
  height: 0.83333vw;
  margin-left: 2.60417vw;
  cursor: pointer;
}

.header-right .iconBox .fourIcon {
  width: 1.04167vw;
  height: 0.9375vw;
  margin-left: 2.60417vw;
  cursor: pointer;
}

.header-right .img {
  width: 20px;
  height: 15px;
  margin-left: 40px;
  cursor: pointer;
}

.header-right .engLish {
  width: 100px;
  height: 100%;
  margin-left: 80px;
  margin-right: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.header-right .engLish-up {
  width: 120px;
  height: 220px;
  text-align: center !important;
  margin-left: 80px;
  margin-right: 40px;
  background-color: #1d1d1d;
  cursor: pointer;
}

.header-right .engLish-name-up {
  display: flex;
  align-items: center;
  height: 100px;
  line-height: 100px;
  margin-left: 15px;
}

.header-right .engLish-up-name {
  height: 60px;
  line-height: 60px;
}

.on {
  background-color: #1d1d1d;
}

.header-right .selectBox___K1oXF {
  width: 9.8125vw;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  margin-left: 3.64583vw;
  position: relative;
}

.header-right .languageBox___2I_Mb {
  width: 100%;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin-left: 0;
  cursor: pointer;
}

.header-right .languageBox___2I_Mb .languageText___3p3Jq {
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
  margin-left: 0.52083vw;
  cursor: pointer;
}

.header-right .languageContainer___23hNx {
  width: 7.60417vw;
  height: 13.02083vw;
  position: absolute;
  top: 0;
  right: 0;
  background: #1d1d1d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-left: 3.64583vw;
}

.header-right .languageFirstBox___X3RJL {
  width: 100%;
  height: 5.20833vw;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 0;
  cursor: pointer;
}

.header-right .languageFirstBox___X3RJL .languageText___3p3Jq {
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
  margin-left: 0.52083vw;
  cursor: pointer;
}

.header-right .languageFirstBox___X3RJL .ButtonArrowPressed {
  width: 0.625vw;
  height: 0.625vw;
  margin-left: 0.41667vw;
}
@media screen and (max-width: 980px) {
  .logo{
    height: 12vw;
  }
.box {
    width: 90vw;
    height: 13.33333333vw;
    padding: 0 5vw;
  }

  .box .header {
    display: flex;
    align-items: center;
  }

  .box .header .header-right .header-name {
    display: none;
  }

  .box .header .header-right .walletBox {
    display: none;
  }

  .header-right .iconBox {
    display: none;
  }

  .header-right .selectBox___K1oXF {
    display: none;
  }

  .header-right .headerMobileRightBox___2zaiH {
    align-items: center;
    display: flex;
  }

  .header-right .headerMobileRightBox___2zaiH .rectangleIcon___2YDMr {
    width: 5.88541667vw;
    height: 5.88541667vw;
  }

  .header-right .headerMobileRightBox___2zaiH .nenuIcon___1HdFn {
    width: 5.88541667vw;
    height: 5.88541667vw;
    margin-left: 20px;
  }
}
</style>
>
