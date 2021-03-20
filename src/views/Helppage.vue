<template>
  <div>
    <mainmenu judge=2 />
    <h1>感染の疑いがある方へ</h1>
  </div>
  <div class="square">
    <h2>
      <img class="corona" v-bind:src="img" style="float:center;"/>
      以下のいずれかに該当する場合は、すぐにこちらに連絡を
    </h2>
    <li class="symptoms">息苦しさ(呼吸困難)、強いだるさ(倦怠感)、高熱等の強い症状がある場合</li>
    <li class="symptoms">重症化しやすい方で、発熱や咳などの比較的軽い風邪の症状がある場合</li>
    <li class="symptoms">上記以外の方で発熱や咳など比較的軽い風邪の症状が続く場合</li>
    <img class="corona2" v-bind:src="img2" />
    <table>
      <tr>
        <th>施設名</th>
        <th>TEL</th>
        <th>FAX</th>
      </tr>
      <tr>
        <td><strong>美作保健所</strong></td>
        <td><strong>0868-23-0163</strong></td>
        <td><strong>0868-23-6129</strong></td>
      </tr>
        <td><strong>美作保健所勝英支所</strong></td>
        <td><strong>0868-73-4054</strong></td>
        <td><strong>0868-72-3731</strong></td>
      <tr>
      </tr>
    </table>
    <p class="taiou"><strong>※24時間対応</strong></p>
  </div>
  <div class="square">
    <h2>
      <img class="corona" v-bind:src="img" style="float:center;"/>
      コロナについてご相談がある方は
    </h2><br>
    <a class="place">&emsp;&emsp;新型コロナウイルス感染症電話相談窓口&emsp;&emsp;</a><br>
    <a class="tel" href="tel:0862267877">TEL.086-226-7877</a>
    <p class="taiou2"><strong>受付時間: 24時間</strong></p><br>
    <a class="place">&emsp;&emsp;厚生労働省でも電話相談窓口を設置&emsp;&emsp;</a><br>
    <a class="tel" href="tel:0120565653">TEL.0120-565653</a>
    <p class="taiou2"><strong>受付時間: 9:00～21:00</strong></p>
  </div>
</template>

<script>
import mainmenu from '../components/mainmenu.vue'

export default {
  name: 'Heplpage',
  components: {
    mainmenu
  },
  data: function(){
      return{
          "img": require("../assets/iconhelp.png"),
          "img2": require("../assets/yajirushi.png")
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
  font-weight: bold;
}
.tel{
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 1.5rem;
}
.place{
  background-color: #007ddc;
  color: white;
  border-radius: 12px;
  font-size: 0.7rem;
  padding: 2px;
}
.corona{
  width: 1rem;
  vertical-align: middle;
}
.corona2{
  width: 7%;
}

h2{
  font-size: 14px;
  text-align: center;
  color: black;
}
.square{
	border: 2px solid #000000;
	width: 70%;
  margin: 3rem auto;
}
.symptoms{
  text-align: left;
  margin: 0 5%;
  font-size: 12px;
}
.taiou{
  text-align: left;
  margin: 0 0 0 10%;
  font-size: 12px;
  color: black;
}
.taiou2{
  text-align: center;
  font-size: 12px;
  color: black;
}
table{
  width: 80%;
  border-collapse:separate;
  border-spacing: 0;
  margin: 3% 10% 0 10%;
}

table th:first-child{
  border-radius: 5px 0 0 0;
}

table th:last-child{
  border-radius: 0 5px 0 0;
  border-right: 1px solid #3c6690;
}

table th{
  text-align: center;
  color:white;
  background: #225588;
  border-left: 1px solid #3c6690;
  border-top: 1px solid #3c6690;
  border-bottom: 1px solid #3c6690;
  width: 25%;
  padding: 10px 0;
  font-size: 0.5rem;
}

table td{
  text-align: center;
  border-left: 1px solid #a8b7c5;
  border-bottom: 1px solid #a8b7c5;
  border-top:none;
  width: 25%;
  padding: 10px 0;
  font-size: 0.5rem;
  font-family: "游ゴシック", Helvetica , sans-serif;
  color: black;
}

table td:last-child{
  border-right: 1px solid #a8b7c5;
}

table tr:last-child td:first-child {
  border-radius: 0 0 0 5px;
}

table tr:last-child td:last-child {
  border-radius: 0 0 5px 0;
}
@media screen and (min-width: 480px){
  h1{
    font-size: 36px;
  }
  table th, table td{
    font-size: 1.2rem;
  }
  h2{
    font-size: 24px;
  }
  .symptoms{
    font-size: 1rem;
    margin: 0 20%;
  }
  .taiou, .taiou2{
    font-size: 1rem;
  }
  .place{
    border-radius: 12px;
    font-size: 1.5rem;
    padding: 5px;
  }
  .tel{
    font-size: 2.5rem;
  }
  .corona{
    width: 3rem;
  }
}
</style>