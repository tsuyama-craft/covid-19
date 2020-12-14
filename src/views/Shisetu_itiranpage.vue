<template>
  <mainmenu judge=1 />
  <div class="pagelink">
    <router-link to="/shisetupage">施設情報</router-link>
    <a>＞</a><a>津山市体育施設一覧</a>
  </div>
  <h1 v-if="location_no==1">津山市医科一覧</h1>
  <h1 v-if="location_no==2">津山市歯科一覧</h1>
  <h1 v-if="location_no==3">津山市薬局一覧</h1>
  <h1 v-if="location_no==4">津山市体育施設一覧</h1>
  <h1 v-if="location_no==5">津山市教育施設一覧</h1>
  <h1 v-if="location_no==6">津山市観光施設一覧</h1>
  <h1 v-if="location_no==7">津山市福祉施設一覧</h1>
  <h1 v-if="location_no==8">津山市公園・図書館一覧</h1>
  <h1 v-if="location_no==9">津山市役所一覧</h1>
  <h1 v-if="location_no==10">津山市集会施設一覧</h1>
  <h1 v-if="location_no==11">津山市児童クラブ一覧</h1>
  <h1 v-if="location_no==12">津山市AED設置場所一覧</h1>
  <table class="table2" v-if="tableData.length>0">
    <thead>
      <tr>
        <th>施設名</th>
        <th>住所</th>
        <th v-if="windowWidth>480">電話番号</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in tableData" :key="row">
        <td v-if="location_no=='12'"><router-link :to="{name: 'Shisetu_syousaipage', params: {no: row.施設名, location_no:location_no}}">{{row.施設名}}</router-link></td>
        <td v-else><router-link :to="{name: 'Shisetu_syousaipage', params: {no: row.名称, location_no:location_no}}">{{row.名称}}</router-link></td>
        <td>{{row.住所}}</td>
        <td v-if="windowWidth>480 && location_no=='12'">{{row.電話}}</td>
        <td v-if="windowWidth>480 && location_no!='12'">{{row.TEL}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import mainmenu from "../components/mainmenu.vue";
import axios from 'axios';
import { parse } from 'csv';
import Encoding from 'encoding-japanese';

export default {
  name: "Shisetu_itiranpage",
  props: {
    location_no:{
      type: String
    }
  },
  components: { 
      mainmenu,
  },
  data: function() {
    return {
      windowWidth: window.innerWidth,
      Sport: [],
      Nursery: [],
      Kind: [],
      Junior: [],
      JuniorHigh: [],
      Sight: [],
      Welfare: [],
      Park: [],
      Library: [],
      Government: [],
      Rally: [],
      Child: [],
      AED: [],
      joinData: [],
      joinData2: [],
      tableData: [],
      Name: ""
    }
  },
  mounted: function() {
    switch(this.location_no){
      case '4':
        this.GetCsvFile("/covid-19/data/Sports_location.csv",true,'SJIS','UNICODE',this.setSports);
        break;
      case '5':
        this.GetCsvFile("/data/Nursery_location.csv",true,'SJIS','UNICODE',this.setNursery);
        this.GetCsvFile("/data/Kindergarten_location.csv",true,'SJIS','UNICODE',this.setKind);
        this.GetCsvFile("/data/JuniorSchool_location.csv",true,'SJIS','UNICODE',this.setJunior);
        this.GetCsvFile("/data/JuniorHighSchool_location.csv",true,'SJIS','UNICODE',this.setJuniorHigh);
        break;
      case '6':
        this.GetCsvFile("/data/Sightseeing_location.csv",true,'SJIS','UNICODE',this.setSight);
        break;
      case '7':
        this.GetCsvFile("/data/Welfare_location.csv",true,'SJIS','UNICODE',this.setWelfare);
        break;
      case '8':
        this.GetCsvFile("/data/Park_location.csv",true,'SJIS','UNICODE',this.setPark);
        this.GetCsvFile("/data/Library_location.csv",true,'SJIS','UNICODE',this.setLibrary);
        break;
      case '9':
        this.GetCsvFile("/data/Government_location.csv",true,'SJIS','UNICODE',this.setGovernment);
        break;
      case '10':
        this.GetCsvFile("/data/Rally_location.csv",true,'SJIS','UNICODE',this.setRally);
        break;
      case '11':
        this.GetCsvFile("/data/Children_location.csv",true,'SJIS','UNICODE',this.setChild);
        break;
      case '12':
        this.GetCsvFile("/data/AED_location.csv",true,'SJIS','UNICODE',this.setAED);
        break;
      default:
        break;
    }
  },
  methods: {
    setSports: function(Sport) {
      this.Sport = Sport
      this.tableData = this.Sport
      this.$store.commit('toStore', this.tableData)
    },
    setNursery: function(Nursery) {
      this.Nursery = Nursery
      if(this.Kind.length>0 && this.Junior.length>0 && this.JuniorHigh.length>0){
        this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh);
        this.tableData =this.joinData
        this.$store.commit('toStore', this.tableData)
      }
    },
    setKind: function(Kind) {
      this.Kind = Kind
      if(this.Nursery.length>0 && this.Junior.length>0 && this.JuniorHigh.length>0){
        this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh);
        this.tableData =this.joinData
        this.$store.commit('toStore', this.tableData)
      }
    },
    setJunior: function(Junior) {
      this.Junior = Junior
      if(this.Nursery.length>0 && this.Kind.length>0 && this.JuniorHigh.length>0){
        this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh);
        this.tableData =this.joinData
        this.$store.commit('toStore', this.tableData)
      }
    },
    setJuniorHigh: function(JuniorHigh) {
      this.JuniorHigh = JuniorHigh
      if(this.Nursery.length>0 && this.Kind.length>0 && this.Junior.length>0){
        this.joinData = this.Nursery.concat(this.Kind, this.Junior, this.JuniorHigh);
        this.tableData =this.joinData
        this.$store.commit('toStore', this.tableData)
      }
    },
    setSight: function(Sight) {
      this.Sight = Sight
      this.tableData =this.Sight
      this.$store.commit('toStore', this.tableData)
    },
    setWelfare: function(Welfare) {
      this.Welfare = Welfare
      this.tableData =this.Welfare
      this.$store.commit('toStore', this.tableData)
    },
    setPark: function(Park) {
      this.Park = Park
      if(this.Library.length>0){
        this.joinData2 = this.Library.concat(this.Park);
        this.tableData =this.joinData2
        this.$store.commit('toStore', this.tableData)
      }
    },
    setLibrary: function(Library) {
      this.Library = Library
      if(this.Park.length>0){
        this.joinData2 = this.Library.concat(this.Park);
        this.tableData =this.joinData2
        this.$store.commit('toStore', this.tableData)
      }
    },
    setGovernment: function(Government) {
      this.Government = Government
      this.tableData =this.Government
      this.$store.commit('toStore', this.tableData)
    },
    setRally: function(Rally) {
      this.Rally = Rally
      this.tableData =this.Rally
      this.$store.commit('toStore', this.tableData)
    },
    setChild: function(Child) {
      this.Child = Child
      this.tableData =this.Child
      this.$store.commit('toStore', this.tableData)
    },
    setAED: function(AED) {
      this.AED = AED
      this.tableData =this.AED
      this.$store.commit('toStore', this.tableData)
    },
    GetCsvFile: function(url,col,from,to,setter) {
      axios
        .get(url,{responseType: 'arraybuffer'})
        .then(response => {
            const buffer = Buffer.from(response.data)
            let csv = Encoding.convert(buffer, {
              from: from,
              to: to,
              type: 'string'
            })
            csv = csv.replace(/^\ufeff/,'')
            parse(csv, {
              columns: col,
              quote: '"',
              ltrim: true,
              rtrim: true,
              delimiter: ',',
              cast: true
            }, (error, output) => {
              setter(Object.freeze(output));
            })
          })
          .catch(error => console.log(error));
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
.table2 {
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 2px solid rgb(29, 23, 23);
}

@media screen and (min-width: 480px){
  .table2 {
    width: 80%;
    font-size: 24px;
  }
  h1{
    font-size: 36px;
  }
  .pagelink{
    font-size: 14px;
  }
}
</style>