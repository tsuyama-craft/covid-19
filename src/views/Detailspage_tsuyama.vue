<template>
  <mainmenu judge=0 />
  <div class="pagelink">
    <router-link to="/">新型コロナウイルス情報</router-link><a>＞津山市コロナ感染者詳細情報</a>
  </div>
  <h1>津山市コロナ感染者詳細情報</h1>
  <ChartBar></ChartBar>
</template>


<script>
import ChartBar from "../components/ChartBar.vue"
import mainmenu from "../components/mainmenu.vue"

export default {
  components: {
    ChartBar,
    mainmenu
  },
};
</script>


<style>
h1{
  position: relative;
  color: #6eb0f9;
  line-height: 1.4;
  -webkit-box-reflect: below -10px -webkit-linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0) 10%,rgba(0, 0, 0, 0.6));
  margin: 30px 0;
  font-size: 24px;
}
.pagelink{
  text-align: left;
  margin: 10px 0;
  font-size: 10px;
}
@media screen and (min-width: 480px){
  h1{
    font-size: 36px;
  }
  .pagelink{
    font-size: 14px;
  }
}
</style>