<template>
  <button id="button1" @click="push1">新規</button>
  <button id="button2" @click="push2">累計</button>

  <div class=HorChart>
    <!-- <canvas v-if="isLarge == true" id="chart" height="100" width="300"></canvas> 
    <canvas v-else-if="isLarge == false" id="chart"></canvas>-->
    <canvas id="chart"></canvas>
  </div>
  
</template>


<script>
import Chart from "chart.js";

function extractionNew(data, word){
  //単語をカウント、chartData配列に代入
  //参考：https://step-learn.com/article/javascript/127-string-count.html
  let extraction = word;
  let daily;
  let chartData;

  var picked = data[data.length - 1].match(extraction);
  if (picked == null){
    daily = 0;
  }else{
    daily = picked.length;
  }
  chartData = daily;

  return chartData;
}

function extractionTotal(data, word){
  let extraction = word;
  let daily;
  let count = 0;
  let chartData;

  for (let j = 0; j < data.length; j++) {
    var picked = data[j].match(extraction);
    if (picked == null){
      daily = 0;
    }else{
      daily = picked.length;
    }
    count += daily;
  }
  chartData = count;

  return chartData;
}

function DataSet(data){
  let word;
  let NewData = [];
  let TotalData = [];

  for(let count = 0; count < 27; count++){
    switch(count){
      case 0:
        word = /津山市/g;
        break;
      case 1:
        word = /鏡野町/g;
        break;
      case 2:
        word = /勝央町/g;
        break;
      case 3:
        word = /奈義町/g;
        break;
      case 4:
        word = /久米南町/g;
        break;
      case 5:
        word = /美咲町/g;
        break;
      case 6:
        word = /岡山市/g;
        break;
      case 7:
        word = /倉敷市/g;
        break;
      case 8:
        word = /玉野市/g;
        break;
      case 9:
        word = /笠岡市/g;
        break;
      case 10:
        word = /井原市/g;
        break;
      case 11:
        word = /総社市/g;
        break;
      case 12:
        word = /高梁市/g;
        break;
      case 13:
        word = /新見市/g;
        break;
      case 14:
        word = /備前市/g;
        break;
      case 15:
        word = /瀬戸内市/g;
        break;
      case 16:
        word = /赤磐市/g;
        break;
      case 17:
        word = /真庭市/g;
        break;
      case 18:
        word = /美作市/g;
        break;
      case 19:
        word = /浅口市/g;
        break;
      case 20:
        word = /和気町/g;
        break;
      case 21:
        word = /早島市/g;
        break;
      case 22:
        word = /里庄町/g;
        break;
      case 23:
        word = /矢掛町/g;
        break;
      case 24:
        word = /新庄村/g;
        break;
      case 25:
        word = /西粟倉村/g;
        break;
      case 26:
        word = /吉備中央町/g;
        break;
    }
    NewData[count] = extractionNew(data, word);
    TotalData[count] = extractionTotal(data, word);
  }

  return{
    NewData: NewData,
    TotalData: TotalData,
  };
}

//チャートの色変更を行う（津山圏域定住自立圏とそれ以外）
/*function ChartColor(){
  let backgroundColor = [];
  let borderColor = [];
    
  for (let i = 0; i < 27; i++) {
    if(i < 6){
      backgroundColor[i] = "rgba(153, 102, 255, 0.2)"; //定住自立圏なら紫
      borderColor[i] = "rgb(153, 102, 255)";
    }else{
      backgroundColor[i] = "rgba(75, 192, 192, 0.2)"; // それ以外なら緑
      borderColor[i] = "rgb(75, 192, 192)";
    }
  }
  
  return{
    backgroundColor: backgroundColor,
    borderColor: borderColor,
  };
}*/



export default {
  name: "ChartHorBar",
  data(){
    return{
      kenDetails: this.$store.state.detaildata,
    };
  },
  methods: {
    listCategoryCreat: function (target) {
      //グラフを描画するために連想配列を普通の配列に変換
      const targetList = this.kenDetails
        .map(function (arr) {
          return [arr[target]];
        })
        .reduce(function (a, b) {
          return a.concat(b);
        });

      return targetList;
    },

    renderChart: function() {
      let municipalitiesList = this.listCategoryCreat("市区町村名");
      let filteredDataSet = DataSet(municipalitiesList);
      //let Coloring = ChartColor;

      //キャッシュ対策。グラフ描写後、再度グラフを描写する際に一度グラフを消去する。
      if (this.chart) {
        this.chart.destroy();
      }
      const ctx = document.getElementById("chart").getContext("2d");
      this.chart = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
          labels: ["津山市","鏡野町","勝央町","奈義町","久米南町","美咲町","岡山市","倉敷市","玉野市","笠岡市","井原市","総社市","高梁市","新見市",
                   "備前市","瀬戸内市","赤磐市","真庭市","美作市","浅口市","和気町","早島町","里庄町","矢掛町","新庄村","西粟倉村","吉備中央町"],
          datasets:[{
            label: "感染者数",
            data: filteredDataSet.NewData,
            backgroundColor: "rgba(75, 192, 192, 0.2)"/*,ChartColor.backgroundColor*/,
            borderColor: "rgb(75, 192, 192)"/*,ChartColor.borderColor*/,
            borderWidth: 1
          }],
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
          tooltips: {
            mode: 'index',
            axis: 'y',
          },
          scales: {
            yAxes: [{
              stacked: true,
              ticks: {
                fontSize: 15,
              }
            }],
            xAxes: [{
              ticks: {
                beginAtZero: true,
                fontSize: 15,
                suggestedMax: 100,
                stepSize: 50
              },
            }],
          },
        },
      });
    },

    push1: function(){
      let municipalitiesList = this.listCategoryCreat("市区町村名");
      let filteredDataSet = DataSet(municipalitiesList);
      this.chart.data.datasets[0].data = filteredDataSet.NewData;
      this.chart.options.scales.xAxes[0].ticks.suggestedMax = 100;
      this.chart.options.scales.xAxes[0].ticks.stepSize = 50;
      this.chart.update();
    },
    push2: function(){
      let municipalitiesList = this.listCategoryCreat("市区町村名");
      let filteredDataSet = DataSet(municipalitiesList);
      this.chart.data.datasets[0].data = filteredDataSet.TotalData;
      this.chart.options.scales.xAxes[0].ticks.suggestedMax = 30000;
      this.chart.options.scales.xAxes[0].ticks.stepSize = 2000;
      this.chart.update();
    }
  },
  computed: {
    isLarge() {
      if (window.matchMedia("(min-width: 480px)").matches) {
        return true;
      } else {
        return false;
      }
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>

<style>
.HorChart{
  width: 95%;
  margin: 0 auto;
}
</style>