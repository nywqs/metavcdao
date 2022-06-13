<template>
  <div class="list">
    <div class="list-one">
      <div class="one-left">
        <img src="../../assets/king.png" class="kingImg" />
      </div>
      <div style="width:50px"></div>
      <div class="ont-right">
        <div class="vc-name">{{ $t('banner.title') }}</div>
        <div class="eligible-name">{{ $t('banner.desp') }}</div>
        <div class="num-list">
          <div class="tiger">{{ $t("NFT") }}</div>
        </div>
        <div class="approve">
          <div class="approve-bth">{{ $t("banner.btn") }}</div>
        </div>
        <div class="ont-right-bottom">
          <div class="bottom_item">
            <div class="name">{{ $t("banner.presaleDate") }}</div>
            <div class="num">{{$t('datetime')}}</div>
          </div>
          <!-- <div class="bottom_item">
            <div class="name">{{ $t("banner.price") }}</div>
            <div class="num">500 USDT</div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="introduce">
      <div class="introduce-one">Meta VC DAO</div>
      <div class="introduce-two">
        <p> {{ $t("aboutUs_one") }}</p>
      </div>
      <div class="introduce-two">
        <p>{{ $t("aboutUs_two") }}</p>
      </div>
    </div>

    <div class="builder">
      <span class="title___3rZju bold">{{ $t("builder.title") }}</span>
      <ul class="identity_type">
        <li>
          <div class="ico_box">
            <img src="../../assets/gold.png" class="goldImg img" />
          </div>
          <h5>
            {{ $t('builder.one_title') }}
          </h5>
          <p>
            {{ $t('builder.one_dec') }}
          </p>
        </li>
        <li>
          <div class="ico_box">
            <img src="../../assets/silver.png" class="goldImg img" />
          </div>
          <h5>
            {{ $t("builder.two_title") }}
          </h5>
          <p>
            {{ $t('builder.two_dec') }}
          </p>
        </li>
        <li>
          <div class="ico_box">
            <img src="../../assets/copper.png" class="goldImg img" />
          </div>
          <h5>
            {{ $t("builder.three_title") }}
          </h5>
          <p>
            {{ $t("builder.three_dec") }}
          </p>
        </li>
      </ul>
    </div>
    <div class="firstBox">
      <div class="firstContentBox">
        <img class="footerLogo" src="../../assets/logo.png" />
        <p class="contentText">{{ $t("banner.title") }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
    };
  },
  methods: {
    startHacking() {
      this.$notify({
        title: "It works!",
        type: "success",
        message:
          "We've laid the ground work for you. It's time for you to build something epic!",
        duration: 5000,
      });
    },
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
  background: #000;
}

.list {
  width: 100%;
  background: #000;
  color: #fff;
}

.list-one {
  display: flex;
  background: #000;
  /* height: 44.27083vw; */
  padding-top: 6.35417vw;
}

.one-left {
  /* width: 400px; */
  width: 100%;
  flex: 1;
  margin-left: 16.97917vw;
}

.one-left .kingImg {
  /* width: 500px; */
  width: 100%;
  flex: 1;
  /* height: 100%; */
}

.ont-right {
  /* width: 400px; */
  flex: 1;
  text-align: left;
  margin-left: 1.97917vw;
}

.ont-right .vc-name {
  /* margin-top: 40px;
    font-size: 35px;
    line-height: 50px; */
  margin-top: 3.07292vw;
  color: #fff;
  font-weight: 700;
  font-size: 2.33333vw;
  line-height: 4.58333vw;
  width: 32.1875vw;
}

.ont-right .eligible-name {
  /* margin-top: 40px;
    font-size: 25px; */
  margin-top: 2.86458vw;
  color: #fff;
  font-size: 1.58333vw;
}

.ont-right .num-list {
  margin-top: 40px;
  display: flex;
  align-items: center;
}

.ont-right .num-list .addBox {
  width: 2.03125vw;
  height: 2.03125vw;
  border-radius: 1.25vw;
  font-size: 1.27448vw;
  font-weight: 700;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.ont-right .num-list .img {
  width: 100%;
  height: 100%;
  /* width: 25px;
    height: 25px;
    padding-right: 30px; */
}

.ont-right .num-list .num {
  width: 5.20833vw;
  text-align: center;
  font-size: 1.27448vw;
  font-weight: 700;
  line-height: 2.12396vw;
  letter-spacing: 0;
  color: #fff;
}

.ont-right .num-list .tiger {
  font-size: 1.27448vw;
  font-weight: 700;
  line-height: 2.12396vw;
  letter-spacing: 0;
  color: #fff;
  margin-left: 1.45833vw;
}

.ont-right .approve {
  cursor: pointer;
  width: 15.625vw;
  height: 2.5vw;
  border-radius: 1.25vw;
  background: hsla(0, 0%, 100%, 0.04);
  box-sizing: border-box;
  border: 1px solid #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3.64583vw;
}

.ont-right .approve-bth {
  font-size: 0.9375vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
}

.ont-right .ont-right-bottom {
  /* margin-top: 60px; */
  margin-top: 5.20833vw;
}

.ont-right .ont-right-bottom .bottom_item {
  display: flex;
  /* align-items: center; */
  /* margin-top: 30px; */
  /* font-size: 18px; */
}

.ont-right .ont-right-bottom .bottom_item .name {
  /* width: 200px; */
  width: 10.41667vw;
  font-size: 1.25vw;
  font-weight: 700;
  line-height: 2.12396vw;
  letter-spacing: 0;
  color: #fff;
}

.ont-right .ont-right-bottom .bottom_item .num {
  font-size: 1.25vw;
  font-weight: 700;
  line-height: 2.12396vw;
  letter-spacing: 0;
  color: #fff;
  margin-left: 3.64583vw;
}

.introduce {
  width: 100%;
  text-align: left;
  padding-top: 3.51042vw;
}

.introduce .introduce-one {
  font-size: 2.60417vw;
  font-weight: 700;
  line-height: 3.75vw;
  letter-spacing: 0;
  color: #fff;
  margin-left: 16.97917vw;
}

.introduce .introduce-two {
  margin-top: 1.45833vw;
  margin-left: 16.97917vw;
  line-height: 2.08333vw;
  font-size: 1.25vw;
  font-weight: 500;
  color: #989898;
  width: 65.02083vw;
}


.matchingBox .characterContainer {
  height: 520px;
}

.matchingBox .characterContainer .boxImg {
  width: 520px;
  height: 520px;
}


.builder {
  padding: 6.14583vw 16.97917vw 7.41667vw;
  padding: 3.14583vw 16.97917vw 3.41667vw;
  text-align: left;
}

.builder .title___3rZju {
  display: block;
  font-size: 2.5vw;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
}

.builder .identity_type {
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  margin-top: 5vw;
}

ul {
  list-style: none;
}

.identity_type li {
  width: 18vw;
  padding: 2vw;
  color: #fff;
  text-align: center;
  border-radius: 1vw;
  -webkit-transition: all 0.8s ease-in-out;
  transition: all 0.8s ease-in-out;
  background-size: 0%;
}

.identity_type li:hover {
  background: #1c2434;
  background-size: 100%;
}
.builder .identity_type .ico_box {
  padding: 2vw;
  width: 12vw;
  height: 12vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  
}

.builder .identity_type .ico_box .img {
  width: 14vw;
  border-radius: 50%;
  padding: 0.5vw;
  background: rgb(88, 88, 236);
}

.builder .identity_type h5 {
  margin-top: 2vw;
  font-size: 1.5vw;
  line-height: 2vw;
  color: #fff;
  padding: 0.5vw;
}

.identity_type li p {
  font-size: 0.9vw;
  font-weight: 400;
}

.builder .box___20hny {
  display: flex;
  margin-top: 5.46875vw;
  flex-wrap: wrap;
  /* height: 59vw; */
  padding-left: 2.2vw;
}

.builder .box___20hny .gold {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-right: 6.25vw;
  width: 20vw;
}

.builder .box___20hny .name {
  padding-top: 1.2vw;
  font-size: 1.2vw;
}

.builder .box___20hny .conent {
  padding-top: 0.25vw;
  font-size: 0.58vw;
}

.builder .box___20hny .silver {
  margin-right: 6.25vw;
  width: 20vw;
}

.builder .box___20hny .img {
  border-radius: 100%;
  width: 15.375vw;
  height: 15.375vw;
}

.builder .box___20hny .copper {
  margin-right: 6.25vw;
  width: 20vw;
}

.firstBox {
  width: 100%;
  height: 3.76042vw;
  background: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1vw 0;
}

.firstBox .firstContentBox {
  width: calc(100% - 35.04167vw);
  height: 5.03125vw;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.firstBox .firstContentBox .footerLogo {
  height: 3.03125vw;
  padding: 1vw;
}

.firstBox .firstContentBox .contentText {
  font-size: 1.25vw;
  line-height: 5.03125vw;
  font-weight: 700;
  letter-spacing: 0;
  color: #727272;
}

.secondBox {
  width: 100%;
  height: 10.46875vw;
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.secondBox .secondContentBox {
  width: calc(100% - 35.04167vw);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.secondBox .secondContentBox .linkBox {
  display: flex;
}

.secondBox .secondContentBox .linkBox .linkContentBox {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  margin-right: 3.125vw;
}

.secondBox .secondContentBox .linkBox .linkContentBox .linkeImg {
  text-align: center;
  width: 2.50625vw;
  height: 2.15vw;
}

.secondBox .secondContentBox .linkBox .linkContentBox .linkListText {
  font-size: 0.72917vw;
  font-weight: 500;
  letter-spacing: 0;
  color: #fff;
}
@media screen and (max-width: 980px) {
  .box{
    width: 100%;
  }
  .list {
    width: 100%;
    background: #000;
    color: #fff;
  }

  .list-one {
    position: relative;
    width: 90vw;
    height: auto;
    background: #000;
    display: flex;
    flex-direction: column;
  }

  .one-left {
    width: 100%;
    flex: 1;
    order: 0;
    margin-left: 3vw;
  }

  .one-left .kingImg {
    width: 100%;
    flex: 1;
  }

  .ont-right {
    order: 1;
    width: 90vw;
    padding-left: 5vw;
  }

  .ont-right .vc-name {
    width: auto;
    margin-top: 8.85416667vw;
    color: #fff;
    font-weight: 700;
    font-size: 6.92708333vw;
    line-height: 9.58333333vw;
  }

  .ont-right .eligible-name {
    margin-top: 7.8125vw;
    color: #fff;
    font-size: 5.3125vw;
  }

  .ont-right .num-list {
    display: flex;
    margin-top: 3.125vw;
  }

  .ont-right .num-list .addBox {
    width: 8.03125vw;
    height: 8.03125vw;
    border-radius: 1.25vw;
    font-size: 3.27448vw;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .ont-right .num-list .addBox .img {
    width: 100%;
    height: 100%;
  }

  .ont-right .num-list .num {
    width: 10.20833vw;
    text-align: center;
    font-size: 4.27448vw;
    font-weight: 700;
    line-height: 2.12396vw;
    letter-spacing: 0;
    color: #fff;
  }

  .ont-right .num-list .tiger {
    font-size: 3.27448vw;
    font-weight: 700;
    line-height: 2.12396vw;
    letter-spacing: 0;
    color: #fff;
    margin-left: 4.45833vw;
  }

  .ont-right .approve {
    cursor: pointer;
    width: 77.34375vw;
    height: 10.67708333vw;
    border-radius: 102px;
    background: hsla(0, 0%, 100%, 0.04);
    box-sizing: border-box;
    border: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4.01041667vw;
  }

  .ont-right .approve .approve-bth {
    font-size: 3.39583333vw;
    font-weight: 500;
    letter-spacing: 0;
    color: #fff;
  }

  .ont-right .ont-right-bottom {
    /* margin-top: 2.36979167vw; */
    margin-top: 5.20833vw;
  }

  .ont-right .ont-right-bottom .bottom_item {
    display: flex;
  }

  .ont-right .ont-right-bottom .bottom_item .name {
    width: 26.04166667vw;
    font-size: 3.28125vw;
    font-weight: 700;
    line-height: 5.41666667vw;
    letter-spacing: 0;
    color: #fff;
  }

  .ont-right .ont-right-bottom .bottom_item .num {
    font-size: 3.28125vw;
    font-weight: 700;
    line-height: 5.41666667vw;
    letter-spacing: 0;
    color: #fff;
    margin-left: 8.85416667vw;
  }

  .introduce {
    padding-top: 9.375vw;
  }

  .introduce .introduce-one {
    font-size: 6.66666667vw;
    font-weight: 700;
    line-height: 9.375vw;
    letter-spacing: 0;
    color: #fff;
    margin-left: 0;
    padding-left: 20px;
  }

  .introduce .introduce-two {
    margin: 3.75vw 11.19791667vw;
    line-height: 5.3125vw;
    font-size: 3.48958333vw;
    font-weight: 500;
    color: #989898;
    margin-left:5vw ;
    width: 90vw;
  }

  .builder {
    padding: 0;

  }

  .builder .title___3rZju {
    padding-left: 6.17708333vw;
    display: block;
    font-size: 6.40625vw;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
  }

  .builder .identity_type {
    display: block;
    margin-top: 5vw;
  }

  ul {
    list-style: none;
  }

  .identity_type li {
    /* width: 18vw; */
    width: 90vw;
    padding: 10vw 5vw;
    color: #fff;
    text-align: center;
  }

  .identity_type li:hover {
    background: #1c2434;
    border-radius: 1vw;
  }

  .builder .identity_type .ico_box {
    padding: 2vw;
    width: 60vw;
    height: 60vw;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .builder .identity_type .ico_box .img {
    width: 60vw;
  }

  .builder .identity_type h5 {
    font-size: 4.8vw;
    line-height: 5vw;
    color: #fff;
    padding: 4.25vw 0;
  }

  .identity_type li p {
    font-size: 4.0vw;
    font-weight: 400;
  }

  .firstBox {
    height: 17.4375vw;
    padding-top: 10vw;
  }

  .firstBox .firstContentBox {
    width: calc(100% - 14.58333vw);
    height: 11.875vw;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .firstBox .firstContentBox .footerLogo {
    height: 80px;
    width: 80vw;
    padding-left: calc(100vw - 80vw)/2;
  }

  .firstBox .firstContentBox .contentText {
    display: none;
  }
}
</style>
