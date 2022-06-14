<template>
  <nav class="navbar fixed-top bg-dark navbar-expand-lg navbar-dark fixed">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/images/logo.png"
          alt=""
          height="70"
          class="d-inline-block align-text-top"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">{{
              $t("menu.Home")
            }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/faq">{{ $t("menu.Faq") }}</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">{{ $t("menu.About") }}</a>
          </li>
          <li class="nav-item dropdown" v-if="wallet == ''">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("menu.ConnectWallet") }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item" @click="connect('MetaMask')">
                MetaMask
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" v-if="wallet != ''">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ wallet.substring(0, 10) }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item" @click="connect('MetaMask')">
                我的钱包
              </li>
              <li class="dropdown-item" @click="unconnect('MetaMask')">
                断开链接
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ $t("Language") }}
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li class="dropdown-item" @click="changeLanguage('zh')">
                简体中文
              </li>
              <li class="dropdown-item" @click="changeLanguage('en')">
                Englist
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <VueMetamask
      :initConnect="connectMetaMask"
      @myWallet="myWallet"
      ref="metaMask"
    />
  </nav>
</template>

<script>
import VueMetamask from "./VueMetamask.vue";

export default {
  data() {
    return {
      avtivite: "home",
      connectMetaMask: false,
      wallet: "",
    };
  },
  mounted() {
    console.log(localStorage.name);
    if (localStorage.name) {
      this.wallet = localStorage.name;
    }
  },
  watch: {
    wallet(newData) {
      this.wallet = newData;
    },
    locale(val) {
      this.$i18n.locale = val;
    },
  },
  methods: {
    chaneMenu(name) {
      this.avtivite = name;
      this.$router.push("/" + name);
    },
    changeLanguage(type) {
      this.$i18n.locale = type;
      localStorage.setItem("lang", type);
    },
    async connect(type) {
      await this.$refs["metaMask"].init();
    },
    async  unconnect(type) {
      localStorage.clear();
      await this.$refs["metaMask"].unconnect;
    },
    myWallet(data) {
      localStorage.name = data;
    },
  },
  components: { VueMetamask },
};
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding-top: 0rem;
  padding-bottom: 0rem;
}
.navbar-collapse {
  flex-grow: abs($number: 0);
}
@media (min-width: 992px) {
  .navbar-expand-lg .navbar-nav .nav-link {
    padding-right: 3rem;
    padding-left: 3rem;
  }
}
</style>