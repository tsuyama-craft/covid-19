<template>
  <mainmenu judge=0 />
  <div class="pagelink">
    <router-link to="/">新型コロナウイルス情報</router-link><a>＞岡山県コロナ感染者詳細情報</a>
  </div>
  <h1 v-if="$store.state.detaildata.length > 0">岡山県コロナ感染者詳細情報</h1>
  <button type="button" v-on:click="Back" :disabled="isTestDisabledBack">前</button>
  <button type="button" v-on:click="Next" :disabled="isTestDisabledNext">次</button>
  <div class=Chart>
    <canvas v-if="isLarge == true" id="chart" height="100" width="300"></canvas>
    <canvas canvas v-else-if="isLarge == false" id="chart"></canvas>
  </div>
  <br><br>
  <div class="filter">
    <span style="white-space: nowrap;" class="filterkeyword">絞り込み<input type="text" v-model="keyword"></span>
  </div>
  <table class="table1">
    <thead>
      <tr>
        <th v-for="head in columnshead" :key="head">
          {{ head }}
        </th>
      </tr>
    </thead>
    <tbody class="detailbody">
      <tr v-for="task in reverseItems" :key="task">
        <td v-for="(value, key) in columns" :key="key">
          {{ task[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Chart from "chart.js";
import mainmenu from "../components/mainmenu.vue";

function DataSet(data, label, count) {
  const search = [];
  //公開日が月だけになるように分ける。
  for (let i = 0; i < label.length; i++) {
    search[i] = label[i].slice(0, 7);
  }

  //重複のない配列にする。参考：https://www.suzu6.net/posts/95-js-duplication/
  const searchWord = search.filter(function (x, i, self) {
    return self.indexOf(x) === i;
  });

  //"日別の月だけデータ"と"グラフで表示したい月"を比較して、表示したい月ではない日付と日別データは削除する
  for (let i = 0; i < label.length; i++) {
    if (label[i].slice(0, 7) != searchWord[searchWord.length - 1 - count]) {
      label.splice(i, 1);
      data.splice(i, 1);
      i = i - 1;
    }
  }
  return {
    data: data,
    label: label,
    LabelLen: searchWord.length
  };
}
function ChangeLabelsDatasets(chart, label, newdata) {
  chart.data.labels = label;
  chart.data.datasets[0].data = newdata;
  chart.update();
}

export default {
  name: "Detailpage",
  components: { 
    mainmenu,
   },
  data: function () {
    const columns = {
      公表年月日: "公表年月日",
      患者＿居住地: "患者＿居住地",
      患者＿年代: "患者＿年代",
      患者＿性別: "患者＿性別",
    };
    
    return {
      columnshead : ["公表年月日","居住地","年代","性別"],
      keyword: '',
      isTestDisabledBack: false,
      isTestDisabledNext: true,
      kenDetails: this.$store.state.detaildata,
      columns: columns,
      tasks: this.$store.state.detaildata2,
      count: 0,
    };
  },
  methods: {
    listCategoryCreat: function (target) {
      for (let i = 0; i < this.kenDetails.length; i++) {
        if (this.kenDetails[i]["日別の感染者数"] == "") {
          this.kenDetails[i]["日別の感染者数"] = 0;
        }
      }
      //グラフを描画するために連想配列を普通の配列に変換
      //参考までに：https://mseeeen.msen.jp/javascript-map-function/
      const targetList = this.kenDetails
        .map(function (arr) {
          return [arr[target]];
        })
        .reduce(function (a, b) {
          return a.concat(b);
        });

      return targetList;
    },
    Next: function () {
      this.count = this.count - 1;
      if (this.count<=0){
        this.isTestDisabledNext = true;
        this.isTestDisabledBack = false;
        this.count = 0
      }else{
        this.isTestDisabledNext = false;
        this.isTestDisabledBack = false;
      }
    },
    Back: function () {
      this.count = this.count + 1;
      if (this.count>=this.CountLength-1){
        this.isTestDisabledBack = true;
        this.isTestDisabledNext = false;
        this.count = this.CountLength-1;
      }else{
        this.isTestDisabledBack = false;
        this.isTestDisabledNext = false;
      }
    },
    CreateChart: function () {
      let labelList = this.listCategoryCreat("集計時点_年月日");
      let dataList = this.listCategoryCreat("日別の感染者数");
      labelList = labelList.filter(Boolean);
      const filteredDataSet = DataSet(dataList, labelList, this.count);

      this.CountLength = filteredDataSet.LabelLen;
      //グラフ描画
      const config = {
        type: "bar",
        data: {
          labels: filteredDataSet.label,
          datasets: [
            {
              data: filteredDataSet.data,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgb(54, 162, 235)",
              borderWidth: 1,
              label: "新規感染者数",
            },
          ],
        },
        options: {
          plugins: {
            pan: {
              enabled: true,
              mode: "xy",
            },
            zoom: {
              enabled: true,
              drag: true,
              mode: "xy",
            },
          },
          scales: {
            yAxes: [{
                ticks:{
                    beginAtZero: true,
                    //Y軸目盛の小数点を消す
                    //参考：https://hacknote.jp/archives/28022/
                    userCallback: function(label){
                      if(Math.floor(label)===label){
                          return label
                      }
                    },
                    fontSize: 15,
                    suggestedMax: 50,
                    stepSize: 10
                }
            }]
          }
        }
      };
      this.Chart = new Chart(
        document.getElementById("chart").getContext("2d"),
        config
      );
    },
  },

  computed: {
    reverseItems() {
      const filteredTable = [];
      for (let i in this.tasks){
        const filteredTables = this.tasks[i];
        if(filteredTables.公表年月日.indexOf(this.keyword) !== -1 ||
            filteredTables.患者＿居住地.indexOf(this.keyword) !== -1 ||
            filteredTables.患者＿年代.indexOf(this.keyword) !== -1 ||
            filteredTables.患者＿性別.indexOf(this.keyword) !== -1 ){
          filteredTable.push(filteredTables)
        }
      }
      return filteredTable.slice().reverse();
    },
    isLarge() {
      if (window.matchMedia("(min-width: 480px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
  watch: {
    count: function () {
      const labelList = this.listCategoryCreat("集計時点_年月日");
      const dataList = this.listCategoryCreat("日別の感染者数");
      const filteredDataSet = DataSet(dataList, labelList, this.count);
      ChangeLabelsDatasets(
        this.Chart,
        filteredDataSet.label,
        filteredDataSet.data
      );
    },
  },
  mounted: function () {
    this.CreateChart();
  },
};
</script>

<style>
.Chart{
  width: 95%;
  margin: 0 auto;
}
.table1 {
  width: 90%;
  margin: 0 auto;
  font-size: 12px;
  border-collapse: collapse;
  border: 2px solid rgb(29, 23, 23);
}
@media screen and (min-width: 480px) {
  .table1 {
    width: 60%;
    font-size: 24px;
  }
}
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

.detailbody {
  height: 38em;
  display: block;
  overflow-y: scroll;
}

tr{
  display: table;
  width: 100%;
  table-layout: fixed;
}
thead{
  display: table;
  table-layout: fixed;
  background-color: rgb(200, 211, 210);
}
@media screen and (min-width: 480px){
  h1{
    font-size: 36px;
  }
  .pagelink{
    font-size: 14px;
  }
  thead{
    width: calc(100% - 1rem);
  }
}
.filterkeyword{
  margin: 0 auto;
}
</style>