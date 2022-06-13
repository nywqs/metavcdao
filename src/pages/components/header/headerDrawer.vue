<template>
  <el-drawer
    title="标题"
    size="60%"
    :append-to-body="true"
    :withHeader="false"
    :visible.sync="drawer"
    :direction="direction"
    :show-close="false"
    :wrapperClosable="true"
  >
    <div class="nenuBox___SVE03">
      <div class="linkBox___3cHc0">
        <div
          class=""
          :class="
            tabType == 'HOME' ? 'linkActiveList___ximqS' : 'linkList___2Zz4D'
          "
          @click="changeTab('HOME')"
        >
          <p class="linkTitle___3Tc4F">{{$t("HOME")}}</p>
        </div>
        <div
          class="linkList___2Zz4D"
          :class="tabType == 'FAQ' ? 'linkActiveList___ximqS' : ''"
          @click="changeTab('FAQ')"
        >
          <p class="linkTitle___3Tc4F">{{$t("FAQ")}}</p>
        </div>
        <div
          class="linkList___2Zz4D"
          :class="tabType == 'ABOUT' ? 'linkActiveList___ximqS' : ''"
          @click="changeTab('ABOUT')"
        >
            <p class="linkTitle___3Tc4F">{{$t("ABOUT")}}</p>
        </div>
      </div>
      <div class="languageContainer___23hNx">
        <div class="languageBox___2I_Mb" @click="changeEng('en')">
          <p class="languageText___3p3Jq">ENGLISH</p>
          <img
            src="../../../assets/down.png"
            v-if="langType == 'en'"
            class="iconCheck___3-mfq"
          />
        </div>
        <div class="languageBox___2I_Mb" @click="changeEng('zh')">
          <p class="languageText___3p3Jq">简体中文</p>
          <img
            src="../../../assets/down.png"
            v-if="langType == 'zh'"
            class="iconCheck___3-mfq"
          />
        </div>
      </div>
      <div class="languageContainer___23hNx">
        <div class="languageBox___2I_Mb" @click="linkto('https://twitter.com/metavcdao')">
          <p class="languageText___3p3Jq">Twitter</p>
        </div>
        <div class="languageBox___2I_Mb" @click="linkto('https://discord.gg/QQpNG9jUz4')">
          <p class="languageText___3p3Jq">Discord</p>
        </div>
      </div>
    </div>
  </el-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      tabType: "HOME",
      langType: "en",
    };
  },
  created() {
    var path = this.$route.path;
    this.tabType = path.substring(1) == "faq" ? "FAQ" : "HOME";
  },
  methods: {
    show() {
      this.drawer = true;
    },
    changeTab(type) {
      this.tabType = type;
      if (this.tabType == "HOME") {
        this.$router.push({ path: "/" });
      }
      if (this.tabType == "FAQ") {
        this.$router.push({ path: "/faq" });
      }
      if(this.tabType == "ABOUT"){
        window.location.href  = "https://docs.metavcdao.xyz/"
      }
      this.drawer = false;
    },
    changeEng(lang) {
      this.langType = lang;
      this.$i18n.locale = lang;
    },
    linkto(url){
      window.location.href  = url
    }
  },
};
</script>

<style>
@media screen and (max-width: 980px) {
  .nenuBox___SVE03 {
    height: 100%;
    background: rgba(0, 0, 0, 0.80000001);
  }

  .linkList___2Zz4D {
    width: 100%;
    height: 11.97916667vw;
    display: flex;
    align-items: center;
    position: relative;
  }

  .linkTitle___3Tc4F {
    font-size: 3.48958333vw;
    padding-left: 10.41666667vw;
    font-weight: 500;
    color: #d8d8d8;
  }

  .linkActiveList___ximqS {
    width: 100%;
    height: 11.97916667vw;
    background: #1d1d1d;
    display: flex;
    align-items: center;
    position: relative;
  }

  .languageContainer___23hNx {
    margin-top: 10.41666667vw;
    border-top: 1px solid #3a3a3a;
    padding-top: 2.60416667vw;
  }

  .languageBox___2I_Mb {
    width: 100%;
    height: 11.97916667vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  .iconCheck___3-mfq {
    width: 4.27083333vw;
    height: 4.27083333vw;
    margin-right: 8.33333333vw;
  }

  .languageText___3p3Jq {
    font-size: 3.48958333vw;
    padding-left: 10.41666667vw;
    font-weight: 500;
    color: #d8d8d8;
  }

  .contact {
    position: fixed;
    bottom: 0;
  }
  .contact ul{
    padding: 0;
    margin: 0;
  }
  .contact ul li{
    list-style: none;
    padding: 10px 10.41666667vw;
    color: #fff;
    font-size: 3.48958333vw;
    width: 100vw;
    border-bottom: 1px solid rgb(68, 67, 67);
  }
  .contact ul li:last-child{
    border-bottom: none;
  }
}
</style>
