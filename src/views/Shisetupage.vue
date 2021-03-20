<template>
  <div>
    <mainmenu judge=1 />
    <h1>施設情報</h1>
  </div>
  <div class="flex2">
      <input type="button" class="simple_square_btn2" value="医科" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 1}})" />
      <input type="button" class="simple_square_btn2" value="歯科" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 2}})" />
      <input type="button" class="simple_square_btn2" value="薬局" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 3}})" />
      <input type="button" class="simple_square_btn2" value="体育施設" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 4}})" />
      <input type="button" class="simple_square_btn2" value="教育施設" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 5}})" />
      <input type="button" class="simple_square_btn2" value="観光施設" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 6}})" />
      <input type="button" class="simple_square_btn2" value="福祉施設" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 7}})" />
      <input type="button" class="simple_square_btn2" value="公園・図書館" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 8}})" />
      <input type="button" class="simple_square_btn2" value="役所" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 9}})" />
      <input type="button" class="simple_square_btn2" value="集会施設" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 10}})" />
      <input type="button" class="simple_square_btn2" value="児童クラブ" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 11}})" />
      <input type="button" class="simple_square_btn2" value="AED設置場所" @click="$router.push({name: 'Shisetu_itiranpage', params: {location_no: 12}})" />
  </div>
</template>

<script>
import mainmenu from '../components/mainmenu.vue'

export default {
  name: 'Shisetupage',
  components: {
    mainmenu,
  }
}
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
.flex2{
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0 2.5%;
  justify-content: center;
}
.simple_square_btn2 {
  display: block;
	position: relative;
	width: 7.5rem;
  height: 4rem;
	padding: 0.5em;
	text-align: center;
	text-decoration: none;
	color: #1B1B1B;
	background: #fff;
	border:1px solid #1B1B1B;
  border-radius: 5px;
  font-size: 1rem;
  margin: 0.5rem auto;
}

.simple_square_btn2:hover {
	background:#1B1B1B;
    color: #fff;
	cursor: pointer;
	text-decoration: none;
}

@media screen and (min-width: 480px){
  h1{
    font-size: 36px;
  }
  .simple_square_btn2 {
    width: 15rem;
    height: 7rem;
    padding: 0.8em;
    border-radius: 5px;
    font-size: 2rem;
    margin: 1rem 1%;
  }
  .flex{
    width: 68%;
    margin: 0 16%;
  }
}

</style>