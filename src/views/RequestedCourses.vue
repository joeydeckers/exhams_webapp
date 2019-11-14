<template>
  <div id="request-course-select-page">
      <Navbar class="fixed-top" navbarBackgroundColor="transparent !important" />
      <b-container>
          <h2>Selecteer een universiteit</h2>
          <b-row>
              <b-col class="university" v-for="university in universities" :key = "university.id" lg="3" md="6">
                  <router-link :to="`/aangevraagde-cursussen/${university.url}`">
                    <h3>{{university.name}}</h3>
                    <img v-bind:src="university.img">
                  </router-link>
              </b-col>

          </b-row>
      </b-container>
  </div>
</template>

<script>
import router from './../router'
import Navbar from "./../components/Navbar";

export default {
    components:{
      Navbar
    },
   data(){
      return{
          universities:[
              {
                  name: 'Leiden Universiteit',
                  url: 'universiteit-leiden',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Universiteit van Amsterdam',
                  url: 'universiteit-van-amsterdam',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Utrecht Universiteit',
                  url: 'universiteit-utrect',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Technische Universiteit Delft',
                  url: 'technische-universiteit-delft',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Technische Universiteit Eindhoven',
                  url: 'technische-universiteit-eindhoven',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Rijksuniversiteit Groningen',
                  url: 'rijksuniversiteit-groningen',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Erasmus Universiteit',
                  url: 'erasmus-universiteit',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Tilburg University',
                  url: 'tilburg-university',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Maastricht University',
                  url: 'maastricht-university',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Radboud Universiteit',
                  url: 'radboud-universiteit',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Vrije Universiteit',
                  url: 'vrije-universiteit',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Wageningen Universiteit',
                  url: 'wageningen-universiteit',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
              {
                  name: 'Universiteit Twente',
                  url: 'universiteit-twente',
                  img: require('../assets/images/leiden-universiteit.jpg')
              },
          ]
      }
  }
}
</script>

<style>

</style>