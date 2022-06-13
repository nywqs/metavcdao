<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-lg-6">
        <img src="../assets/images/king.png" class="king" alt="" width="100%" srcset="" />
      </div>
      <div class="col-sm-12 col-lg-6 front-color">
        <div class="title">Let ordinary investor become a real VC</div>
        <div class="desc">YOU ARE ELIGIBLE TO MINT</div>
        <button type="button" class="btn btn-dark">Mint</button>
        <div class="info">
          <div class="label">PRESALE DATE:</div>
          <div class="value">2022.06.01</div>
        </div>
        <div class="info">
          <div class="label">PRESALE DATE:</div>
          <div class="value">2022.06.01</div>
        </div>
      </div>
    </div>
    <About />
    <Nft />
  </div>
</template>

<script>
import About from "../components/about.vue";
import Nft from "../components/nft.vue";
export default { components: { About, Nft } };
</script>

<style scoped lang="scss">
    .title {
      font-size: 3rem;
      text-align: left;
      line-height: 5rem;
      padding: 1rem 0;
      margin-top: 4rem;
      @media screen and(max-width:799px) {
        font-size: 2rem;
        line-height: 3rem;
        margin-top: 0rem;
      }
    }
    .desc {
      font-size: 2rem;
      text-align: left;
      @media screen and(max-width:799px) {
        font-size: 1.5rem;
      }
    }
    .btn{
      width: 100%;
      border-radius: 2rem;
      height: 4rem;
      margin: 2rem 0;
       @media screen and(max-width:799px) {
        margin:  2rem 0;
        height: 3rem;
      }
    }
    .info {
      font-size: 2rem;
      display: flex;
      text-align: left;
       @media screen and(max-width:799px) {
        font-size: 1.5rem;
      }
      .value {
        padding-left: 1rem;
      }
    }
</style>