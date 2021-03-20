<template>
    <nav>
        <ul v-if="judge==0">
            <li class="main"><router-link to="/">新型コロナウイルス最新情報</router-link></li>
            <li><router-link to="/Shisetupage">施設情報</router-link></li>
            <li><router-link to="/Helppage">感染の疑いがある方</router-link></li>
        </ul>
        <ul v-if="judge==1">
            <li><router-link to="/">新型コロナウイルス最新情報</router-link></li>
            <li class="main"><router-link to="/Shisetupage">施設情報</router-link></li>
            <li><router-link to="/Helppage">感染の疑いがある方</router-link></li>
        </ul>
        <ul v-if="judge==2">
            <li><router-link to="/">新型コロナウイルス最新情報</router-link></li>
            <li><router-link to="/Shisetupage">施設情報</router-link></li>
            <li class="main"><router-link to="/Helppage">感染の疑いがある方</router-link></li>
        </ul>
        <router-view/>
    </nav>
</template>

<script>
export default {
    name: 'mainmenu',
    props:{
        judge:{
            type: String
        }
    }
}
</script>

<style>
nav{
border-bottom: 1px solid #ccc;
}
nav ul{
display: table;
margin: 0 auto;
padding: 0;
width: 100%;
text-align: center;
}
nav ul li{
display: table-cell;
min-width: 50px;
width: 100px;
border-right: 1px solid #ccc;
}
@media screen and (min-width: 480px){
  nav ul li{
    font-size: 1.5rem;
  }
}
nav ul li:first-child{
border-left: 1px solid #ccc;
}
nav ul li a{
display: block;
width: 100%;
padding: 10px 0;
text-decoration: none;
color: #aaa;
}
nav ul li a:hover{
background-color:#F8E750;
border-bottom: 5px solid #F8E750;
}
nav ul li.main{
font-weight: bold;
}
nav ul li.main a{
border-bottom: 5px solid #00B0F0;
color: #00B0F0;
}
</style>