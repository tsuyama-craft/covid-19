<template>
  <mainmenu judge=1 />
  <div class="pagelink">
    <router-link to="/shisetupage">施設情報</router-link>
    <a>＞</a><a>津山市施設一覧</a>
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
  <br>
  <div class="filter2">
    <span style="white-space: nowrap;" class="filterkeyword2">絞り込み<input type="text" v-model="keyword2"></span>
  </div>
  <table class="table2" v-if="tableData.length>0" rules="rows">
    <thead>
      <tr>
        <th>施設名</th>
        <th>住所</th>
        <th v-if="windowWidth>480">電話番号</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="row in reverseItems" :key="row">
        <td v-if="location_no=='1' || location_no=='2' || location_no=='3'"><router-link :to="{name: 'Shisetu_syousaipage', params: {no: row['Unnamed: 10'], location_no:location_no}}">{{row['Unnamed: 10']}}</router-link></td>
        <td v-if="location_no=='12'"><router-link :to="{name: 'Shisetu_syousaipage', params: {no: row.施設名, location_no:location_no}}">{{row.施設名}}</router-link></td>
        <td v-if="location_no!='12' && location_no!='1' && location_no!='2' && location_no!='3'"><router-link :to="{name: 'Shisetu_syousaipage', params: {no: row.名称, location_no:location_no}}">{{row.名称}}</router-link></td>

        <td v-if="location_no=='1' || location_no=='2' || location_no=='3'">{{row['Unnamed: 15']}}</td>
        <td v-else>{{row.住所}}</td>

        <td v-if="windowWidth>480 && (location_no=='1' || location_no=='2' || location_no=='3')">{{row['Unnamed: 18']}}</td>
        <td v-if="windowWidth>480 && location_no=='12'">{{row.電話}}</td>
        <td v-if="windowWidth>480 && location_no!='12' && location_no!='1' && location_no!='2' && location_no!='3'">{{row.TEL}}</td>
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
      keyword2: '',
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
      Iryou: [],
      Shika: [],
      Yakkyoku: [],
      joinData: [],
      joinData2: [],
      tableData: [],
      Name: "",
    }
  },
  computed: {
    reverseItems() {
      const filteredTable = [];
      for (let i in this.tableData){
        const filteredTables = this.tableData[i];
        if(this.location_no=='12'){
          if(filteredTables["施設名"].indexOf(this.keyword2) !== -1 ||
              filteredTables["住所"].indexOf(this.keyword2) !== -1 ||
              filteredTables["電話"].indexOf(this.keyword2) !== -1 ){
            filteredTable.push(filteredTables)
          }
        }
        else if(this.location_no=='1' || this.location_no=='2' || this.location_no=='3'){
          if(filteredTables["Unnamed: 10"].indexOf(this.keyword2) !== -1 ||
              filteredTables["Unnamed: 15"].indexOf(this.keyword2) !== -1 ||
              filteredTables["Unnamed: 18"].indexOf(this.keyword2) !== -1 ){
            filteredTable.push(filteredTables)
          }
        }
        else{
          if(filteredTables["名称"].indexOf(this.keyword2) !== -1 ||
              filteredTables["住所"].indexOf(this.keyword2) !== -1 ||
              filteredTables["TEL"].indexOf(this.keyword2) !== -1 ){
            filteredTable.push(filteredTables)
          }
        }
      }
      return filteredTable;
    },
  },
  mounted: function() {
    switch(this.location_no){
      case '1':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Okayama_iryou.csv",true,'UTF8','UNICODE',this.setIryou);
        break;
      case '2':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Okayama_shika.csv",true,'UTF8','UNICODE',this.setShika);
        break;
      case '3':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Okayama_yakkyoku.csv",true,'UTF8','UNICODE',this.setYakkyoku);
        break;
      case '4':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Sports_location.csv",true,'UTF8','UNICODE',this.setSports);
        break;
      case '5':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Nursery_location.csv",true,'UTF8','UNICODE',this.setNursery);
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Kindergarten_location.csv",true,'UTF8','UNICODE',this.setKind);
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/JuniorSchool_location.csv",true,'UTF8','UNICODE',this.setJunior);
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/JuniorHighSchool_location.csv",true,'UTF8','UNICODE',this.setJuniorHigh);
        break;
      case '6':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Sightseeing_location.csv",true,'UTF8','UNICODE',this.setSight);
        break;
      case '7':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Welfare_location.csv",true,'UTF8','UNICODE',this.setWelfare);
        break;
      case '8':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Park_location.csv",true,'UTF8','UNICODE',this.setPark);
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Library_location.csv",true,'UTF8','UNICODE',this.setLibrary);
        break;
      case '9':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Government_location.csv",true,'UTF8','UNICODE',this.setGovernment);
        break;
      case '10':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Rally_location.csv",true,'UTF8','UNICODE',this.setRally);
        break;
      case '11':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/Children_location.csv",true,'UTF8','UNICODE',this.setChild);
        break;
      case '12':
        this.GetCsvFile("https://tsuyama-craft.github.io/covid-19/data/AED_location.csv",true,'UTF8','UNICODE',this.setAED);
        break;
      default:
        break;
    }
  },
  methods: {
    setIryou: function(Iryou) {
      this.Iryou = Iryou
      this.tableData = this.Iryou
      this.tableData = this.tableData.filter(function(each){
        if ((each['Unnamed: 10'] != '') && (each['Unnamed: 15'].indexOf('津山')!=-1)) return true
      });
      
      for(let i=0; i<this.tableData.length; i++){
        const smp = this.tableData[i]['Unnamed: 15'].split('\n');
        const tmp = this.tableData[i]['Unnamed: 18'].split('\n');
        this.tableData[i]['Unnamed: 15'] = smp[1]
        this.tableData[i]['Unnamed: 18'] = tmp[0]
      }

      this.$store.commit('toStore', this.tableData)
    },
    setShika: function(Shika) {
      this.Shika = Shika
      this.tableData = this.Shika
      this.tableData = this.tableData.filter(function(each){
        if ((each['Unnamed: 10'] != '') && (each['Unnamed: 15'].indexOf('津山')!=-1)) return true
      });
      
      for(let i=0; i<this.tableData.length; i++){
        const smp = this.tableData[i]['Unnamed: 15'].split('\n');
        const tmp = this.tableData[i]['Unnamed: 18'].split('\n');
        this.tableData[i]['Unnamed: 15'] = smp[1]
        this.tableData[i]['Unnamed: 18'] = tmp[0]
      }
      this.$store.commit('toStore', this.tableData)
    },
    setYakkyoku: function(Yakkyoku) {
      this.Yakkyoku = Yakkyoku
      this.tableData = this.Yakkyoku
      this.tableData = this.tableData.filter(function(each){
        if ((each['Unnamed: 10'] != '') && (each['Unnamed: 15'].indexOf('津山')!=-1)) return true
      });
      
      for(let i=0; i<this.tableData.length; i++){
        const smp = this.tableData[i]['Unnamed: 15'].split('\n');
        const tmp = this.tableData[i]['Unnamed: 18'].split('\n');
        this.tableData[i]['Unnamed: 15'] = smp[1]
        this.tableData[i]['Unnamed: 18'] = tmp[0]
      }
      this.$store.commit('toStore', this.tableData)
    },
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
.filterkeyword2{
  margin: 0 auto;
}
.table2 {
  width: 100%;
  margin: 0 auto;
  border-collapse: collapse;
  border: 2px solid rgb(29, 23, 23);
}
.table2 thead{
  background-color: #eeece4;
}
.table2 td {
  width: 33%;
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