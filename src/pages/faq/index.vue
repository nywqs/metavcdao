<template>
  <div class="">
    <div class="faq">
      <div class="box">
        <div class="title">{{$t("faq.title")}}</div>
        <el-collapse
          style="border:none;background-color: transparent;"
          v-model="activeName"
          @change="handleChange"
          :accordion="true"
        >
          <el-collapse-item
            class="item"
            name="1"
          >
           <template slot="title">
             {{$t("faq.one_title")}}
            </template>
            <div class="text___1dS3H medium ">
               {{$t("faq.one_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item
            name="2"
          >
          <template slot="title">
            {{$t("faq.two_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.two_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item
            name="3"
          >
          <template slot="title">
            {{$t("faq.three_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.three_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item name="4">
            <template slot="title">
            {{$t("faq.four_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.four_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item title="5. About Proposal and Vote" name="5">
            <template slot="title">
            {{$t("faq.five_title")}}
          </template>
            <div class="text___1dS3H medium ">
             {{$t("faq.five_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item title="6. About Investments" name="6">
            <template slot="title">
            {{$t("faq.six_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.six_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item title="7. About Invest Token" name="7">
            <template slot="title">
            {{$t("faq.seven_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.seven_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item title="8. Governance Token Issuance" name="8">
            <template slot="title">
            {{$t("faq.eight_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.eight_dec")}}
            </div>
          </el-collapse-item>
          <el-collapse-item title="8. Governance Token Issuance" name="9">
            <template slot="title">
            {{$t("faq.nine_title")}}
          </template>
            <div class="text___1dS3H medium ">
              {{$t("faq.nine_dec")}}
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        showType: 0,
        activeName: ["-1"],
      };
    },
    methods: {
      handleChange(val) {
        console.log("val", val);
        this.activeName = [];
        this.activeName = val;
      },
    },
  };
</script>

<style>
  .faq {
    position: relative;
    padding-top: 4.16667vw;
    height: calc(100vh -8.95vw);
    padding-left: 17.39583vw;
    background: #000 url(../../assets/king.png) no-repeat 100% 100%;
    background-size: 35.66667vw;
    text-align: left;
    overflow: hidden;
  }
  .faq .box {
    height: calc(100vh - 9.29167vw);
    overflow-y: scroll;
  }
  .faq .box .title {
    padding-top: 1.5625vw;
    font-size: 2.60417vw;
    font-weight: 700;
    line-height: 3.75vw;
    color: #fff;
  }
  .faq .box .item {
    flex: 1 1;
  }
  .faq .box .item .title2 {
    cursor: default;
    font-size: 1.35417vw;
    font-weight: 700;
    line-height: 3.75vw;
    color: #fff;
  }
  .el-collapse{
    width: 50%;
  }
  .el-collapse-item__header {
    background-color: transparent !important;
    color: #fff;
    font-size: 1vw;
    font-weight: 700;
    padding: 0vw 0;
    border: none !important;
  }
  .el-collapse-item__content {
    background-color: transparent !important;
    border: none !important;
    color: #989898;
    white-space: pre-line;
  }
  .el-collapse-item__wrap {
    background-color: transparent !important;
    border: none !important;
  }
  .text___1dS3H {
    font-size: 0.82917vw;
      line-height: 1.56666667vw;
    color: #989898;
  }
  .el-collapse-item__arrow {
    display: none;
  }
   .el-collapse-item__header.is-active{
    border: none !important;
  }
  @media screen and (max-width: 980px) {
    .faq {
      background: #000;
      height: calc(100vh - 30.85vw);
      padding-top: 13.33333333vw;
      padding-left: 9.375vw;
    }
    .faq .box {
      height: calc(100vh - 30vw);
      overflow-y: scroll;
      padding-right: 9.375vw;
      width: 90% !important;
    }
    .faq .box .title {
      font-size: 6.66666667vw;
      padding: 5.20833333vw 0;
    }
    .faq .box .item {
      flex: 1;
    }
    .faq .box .item .title2 {
      cursor: default;
      font-family: Poppins-Bold;
      font-size: 10.01041667vw;
      font-weight: 700;
      line-height: 10.20833333vw;
      color: #fff;
      margin: 2.60416667vw 0;
    }
    .text___1dS3H {
      /* height: 0; */
      background: #000;
      font-size: 4.33333333vw;
      line-height: 6.16666667vw;
      color: #989898;
      border: none;
      padding-left: 2.5vw;
    }
  .el-collapse{
    width: 100%;
  }
   .el-collapse-item__header {
      background-color: transparent !important;
      cursor: default !important;
      font-size: 4vw !important;
      line-height: 6vw;
      font-weight: 700;
      color: #fff;
      text-align: left;

   }
    .el-collapse-item__content {
      background: transparent !important;
      border: none !important;
      color: #989898;
    }
  }
</style>
