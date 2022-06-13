<template>
  <div>
    <div class="Bigtitle">NFT</div>
    <div class="nft">
      <div class="nft-item">
        <img class="avatar" src="../assets/images/gold.png" alt="" />
        <div class="title">Gold NFT</div>
        <div class="desc">
          A total of 21 gold nft will be issued, with a price of 10000USDT:
          participating in governance, proposal, voting, dividends distribution,
          project follow-up management, exit decision, etc
        </div>
      </div>
      <div class="nft-item">
        <img class="avatar" src="../assets/images/silver.png" alt="" />
        <div class="title">Gold NFT</div>
        <div class="desc">
          A total of 21 gold nft will be issued, with a price of 10000USDT:
          participating in governance, proposal, voting, dividends distribution,
          project follow-up management, exit decision, etc
        </div>
      </div>
      <div class="nft-item">
        <img class="avatar" src="../assets/images/copper.png" alt="" />
        <div class="title">Gold NFT</div>
        <div class="desc">
          A total of 21 gold nft will be issued, with a price of 10000USDT:
          participating in governance, proposal, voting, dividends distribution,
          project follow-up management, exit decision, etc
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.Bigtitle {
  line-height: 5vw;
  text-align: left;
  font-size: 2vw;
  color: #fff;
  @media screen and (max-width: 799px) {
        font-size: 10vw;
        line-height: 20vw;
      }
}
.nft {
  display: flex;
  @media screen and (max-width: 799px) {
    display: block;
  }
  .nft-item {
    padding: 2vw;
    flex: 1;
    transition: all 0.8s ease-in-out;
    background-size: 0;
    .avatar {
      width: 15vw;
      height: 15vw;
      background: #5858ec;
      border-radius: 8vw;
      padding: 1vw 0 0 0;
      @media screen and (max-width: 799px) {
        width: 55vw;
        height: 55vw;
        border-radius: 28vw;
      }
    }
    .title {
      font-size: 1.8vw;
      line-height: 5vw;
      color: #fff;
      @media screen and (max-width: 799px) {
        font-size: 5vw;
        line-height: 10vw;
      }
    }
    .desc {
      font-size: 1.1vw;
      color: #fff;
      @media screen and (max-width: 799px) {
        font-size: 4vw;
        line-height: 5vw;
      }
    }
  }
  .nft-item:hover {
    background: #333;
    border-radius: 1vw;
  }
}
</style>