<template>
  <button type="button" v-on:click="Back" :disabled="isTestDisabledBack">前</button>
  <button type="button" v-on:click="Next" :disabled="isTestDisabledNext">次</button>
   <div class=Chart>
    <canvas v-if="isLarge == true" id="chart" height="100" width="300"></canvas>
    <canvas v-else-if="isLarge == false" id="chart"></canvas>
  </div>
</template>


<script>
import Chart from "chart.js"

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

  //"津山市"という単語をカウント、data配列に再代入
  //参考：https://step-learn.com/article/javascript/127-string-count.html
  const extraction = /津山市/g;
  var daily;
  for (var j = 0; j < data.length; j++) {
    var picked = data[j].match(extraction);
    if (picked == null){
      daily = 0;
    }else{
      daily = picked.length;
    }
    data[j] = daily
  } 
  return {
    data: data,
    label: label,
    labelLen: searchWord.length
  };
}

export default {
  data: function(){
    return{
      count: 0,
      isTestDisabledBack: false,
      isTestDisabledNext: true,
      kenDetails: this.$store.state.detaildata
    }
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

    Next: function () {
      this.count = this.count - 1;
      if (this.count<=0){
        this.isTestDisabledNext = true;
        this.isTestDisabledBack = false;
        this.count = 0;
      }else{
        this.isTestDisabledNext = false;
        this.isTestDisabledBack = false;
      }
      this.renderChart();
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
      this.renderChart();
    },
    
    
    renderChart: function() {
      //グラフを描画するために連想配列を普通の配列に変換
      let municipalitiesList = this.listCategoryCreat("市区町村名");
      let dateList = this.listCategoryCreat("集計時点_年月日");
      //"集計時点_年月日"が格納されていない（CSVファイルに空行のデータがある）場合、その空要素を削除する
      dateList = dateList.filter(Boolean);
      const filteredDataSet = DataSet(municipalitiesList, dateList, this.count);

      this.CountLength = filteredDataSet.LabelLen;

      //キャッシュ対策。グラフ描写後、再度グラフを描写する際に一度グラフを消去する。
      if (this.chart) {
        this.chart.destroy();
      }
      const ctx = document.getElementById("chart").getContext("2d");
      this.chart = new Chart(ctx, {
        type: "bar",
        data:{
          labels: filteredDataSet.label,
          datasets: [{
            label: "新規感染者数",
            data: filteredDataSet.data,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgb(54, 162, 235)",
            borderWidth: 1
          }]
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
            xAxes: [{
                stacked: true,
              }],
            yAxes: [{
                ticks: {
                  beginAtZero: true,
                  userCallback: function(label){
                    if(Math.floor(label)===label){
                      return label
                    }
                  },
                  fontSize: 15,
                  suggestedMax: 10,
                  stepSize: 5
                },
              }],
          },
        },
      });
    },
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


/*参考資料
[1]Vue.js＋Chart.jsプロジェクト - Qiita
  https://qiita.com/yoshi0518/items/25d7f7a1568b2cb5c8b4
[2]vue3で生のchart.jsを使いグラフを表示する - Qiita
  https://qiita.com/shira79/items/22e024b24374c0f6c2d7
[3]Wijmo（ウィジモ）デモアプリケーション | Developer Tools〈開発支援ツール〉
  https://demo.grapecity.com/wijmo/demos/Chart/Bar/BasicColumnChart/purejs

＊2021/09/02現在、vue-chartjsはVue3に対応していない。そのため、chart.jsを使用する。
*/
</script>


<style>
.Chart{
  width: 95%;
  margin: 0 auto;
}
</style>