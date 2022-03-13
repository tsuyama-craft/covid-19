<template>
  <mainmenu judge=0 />
  <div class="pagelink">
    <router-link to="/">新型コロナウイルス情報</router-link><a>＞市町村別コロナ感染者数</a>
  </div>
  <h1>市町村別コロナ感染者数</h1>
  <!--<p>日付を入れたい</p>-->
  <ChartHorBar></ChartHorBar>
</template>


<script>
import ChartHorBar from "../components/ChartHorBar.vue"
import mainmenu from "../components/mainmenu.vue"

export default {
  components: {
    ChartHorBar,
    mainmenu,
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

p{
  padding-right: 5%;
  text-align: right;
  font-size: 20px;
}
</style>