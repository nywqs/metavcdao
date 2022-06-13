<template>
  <div class="footer">
    © 2022 Meta VC DAO. All Rights Reserved.
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  .footer{
    position: fixed;
    bottom: 0;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background: #333;
    width: 100vw;
    color: #fff;
    font-size: 14px;
    @media screen and (max-width:799px) {
      font-size: 12px;
    }
  }
</style>