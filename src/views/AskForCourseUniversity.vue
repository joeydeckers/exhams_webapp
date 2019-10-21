<template>
  <b-col lg = "3" class="mx-auto request-course">
       <NavbarLanding class="fixed-top" navbarBackgroundColor="transparent !important" />
       <b-form>
           <p>Cursus aanvragen</p>
           <p class="sucess" v-if="sucess">Cursus aangevraagd</p>
           <p class="failed" v-if="failed">Er is iets fout gegaan!</p>
           <b-input v-model="courseName" placeholder="Studie"/>
           <button  style="margin-top:15px;" @click="askForCourse" class="button-custom">Cursus aanvragen</button>
       </b-form>  
  </b-col>
</template>

<script>
import router from './../router'
import axios from 'axios';
import NavbarLanding from "./../components/NavbarLanding";

export default {
    components:{
        NavbarLanding
    }, 
    data(){
        return{
            universiteis:['universiteit-van-amsterdam', 'universiteit-utrect', 'universiteit-leiden', 'technische-universiteit-delft', 'technische-universiteit-eindhoven', 'rijksuniversiteit-groningen', 'erasmus-universiteit', 'tilburg-university', 'maastricht-university', 'radboud-universiteit', 'vrije-universiteit', 'wageningen-universiteit', 'universiteit-twente'],
            courseName: '',
            sucess:false,
            failed:false
        }
    },
    methods:{
        askForCourse(){
            axios.post('http://127.0.0.1:8000/api/askforcourse',{
                requested_study: this.courseName,
                university: this.$route.params.university
            })
            .then((reponse) =>{
                console.log(response.data.requested_study);
                this.sucess = true
            })
            .catch((error)=>{
                this.failed = true
            })
        }
    },
    mounted(){
        if(!this.universiteis.includes(this.$route.params.university)){
            router.push('/cursus-aanvragen')
        }
    }
}
</script>

<style>

</style>