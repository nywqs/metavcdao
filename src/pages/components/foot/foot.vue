<template>
  <div class="foot">
    <div class="hirdContentBox">
      <p class="tipText">© 2022 Meta VC DAO. All Rights Reserved.</p>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style scoped>
  .foot {
    width: 100%;
    height: 2.76042vw;
    background: #0c0c0c;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .foot .hirdContentBox {
    width: calc(100% - 26.04167vw);
  }
  .foot .hirdContentBox .tipText {
    font-size: 0.72917vw;
    font-weight: 500;
    letter-spacing: 0;
    color: #676767;
  }
</style>
<style scoped>
  @media screen and (max-width: 980px) {
    .foot {
      width: 100%;
      height: 12.44791667vw;
      background: #0c0c0c;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .foot .hirdContentBox {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .foot .hirdContentBox .tipText {
      font-size: 2.91666667vw;
      font-weight: 500;
      letter-spacing: 0;
      color: #676767;
    }
  }
</style>
