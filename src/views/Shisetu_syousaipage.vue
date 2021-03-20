<template>
    <mainmenu judge=1 />
    <div class="pagelink">
        <router-link to="/shisetupage">施設情報</router-link>
        <a>＞</a><router-link :to="{name: 'Shisetu_itiranpage', params: {location_no: location_no}}">津山市施設一覧</router-link>
        <a>＞</a><a>施設詳細情報</a>
    </div>
    <h1>施設詳細情報</h1>
    <table v-if="count>=0" class="syousai">
        <tbody>
            <tr>
                <th>施設名</th>
                <td>{{ placeName }}</td>
            </tr>
            <tr>
                <th>電話番号</th>
                <td>{{ placeTEL }}</td>
            </tr>
            <tr>
                <th v-if="location_no==12">設置場所</th>
                <th v-if="location_no==1 || location_no==2 || location_no==3">診療科目</th>
                <th v-else>URL</th>
                <td>
                    <a v-if="location_no==12">{{ placeURL }}</a>
                    <a v-if="location_no==1 || location_no==2 || location_no==3">もうしばらくお待ちください</a>
                    <a v-else :href="toPlace">{{ placeURL }}</a>
                </td>
            </tr>
            <tr>
                <th>住所</th>
                <td>{{ place }}</td>
            </tr>
            <tr>
                <th>地図</th>
                <td v-if="location_no!=1 && location_no!=2 && location_no!=3"><iframe 
                    :src="gMaps"
                    height="450"
                    frameborder="0"
                    style="border: 0"
                    allowfullscreen></iframe>
                </td>
                <td v-else>もうしばらくお待ちください</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import mainmenu from "../components/mainmenu.vue";

export default {
  name: "Shisetu_syousaipage",
  props: {
    no:{
        type: String
    },
    location_no: {
        type: String
    }
  },
  components: { 
      mainmenu,
  },
  data: function() {
      return {
          item: this.$store.state.facilityTableData,
          j: 0,
          i: 0,
          gmaps: {
              type: String,
          },
          count: {
              type: Number
          }
      }
  },
  mounted: function() {
      this.count = this.rowGet();
  },
  computed: {
      toPlace: function(){
          return this.item[this.count]['URL']
      },
      gMaps: function(){
          if(this.location_no=='12'){
            return "https://www.google.com/maps?output=embed&z=15&ll=" + this.item[this.count]['世界_10進_Y'] + "," + this.item[this.count]['世界_10進_X'] + "&q=" + this.item[this.count]['施設名']
          }
          else{
            return "https://www.google.com/maps?output=embed&z=15&ll=" + this.item[this.count]['世界_10進_Y'] + "," + this.item[this.count]['世界_10進_X'] + "&q=" + this.item[this.count]['名称']
          }
      },
      placeName: function(){
          if(this.location_no=='1' || this.location_no=='2' || this.location_no=='3'){
              return this.item[this.count]['Unnamed: 10']
          }
          else if(this.location_no=='12'){
              return this.item[this.count]['施設名']
          }
          else{
              return this.item[this.count]['名称']
          }
      },
      placeTEL: function(){
          if(this.location_no=='1' || this.location_no=='2' || this.location_no=='3'){
              return this.item[this.count]['Unnamed: 18']
          }
          else if(this.location_no=='12'){
              return this.item[this.count]['電話']
          }
          else{
              return this.item[this.count]['TEL']
          }
      },
      placeURL: function(){
          if(this.location_no=='12'){
              return this.item[this.count]['設置場所']
          }
          else{
              return this.item[this.count]['URL']
          }
      },
      place: function(){
          if(this.location_no=='1' || this.location_no=='2' || this.location_no=='3'){
              return this.item[this.count]['Unnamed: 15']
          }
          else{
            return this.item[this.count]['住所']
          }
      },
  },
  methods: {
      rowGet: function() {
        for(this.i=0; this.i<this.item.length; this.i++){
            if(this.location_no=='12' && this.item[this.i]["施設名"]==this.no){
                this.j = this.i
            }else if(this.location_no!='12' && this.item[this.i]["名称"]==this.no){
                this.j = this.i
            }
        }
        return this.j
      }
  }
}
</script>

<style scoped>
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

.syousai{
    width:100%;
    border: 2px solid #d6ceb4;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
}
 
.syousai th{
    padding: 6px 8px 5px;
    border-top: solid 1px #ffffff;
    width: 30%;
    overflow: hidden;
    color: #13131e;
    font-style: normal;
    font-weight: bold;
    font-size: 100%;
    text-align: left;
    word-break: break-all;
    word-wrap: break-word;
    vertical-align: top;
    background-color: #eeece4;
}
 
.syousai td{
    padding: 5px 10px;
    text-align: left;
    vertical-align: top;
    color: #595960;
    background-color: #ffffff;
    border-top: dotted 1px #e0dccc;
    overflow: hidden;
    word-break: break-all;
    word-wrap: break-word;
}
.syousai td iframe{
    width: 100%;
} 
@media (max-width: 480px){
    .syousai th{
        width:95%;
        display:block;
        margin: 0 auto;
        border:none;
        border-radius: 3px;
    }
    .syousai td{
        display: list-item;
        width: 95%;
        border-top: none !important;
    }
}
</style>