<template>
  <b-container fluid id="register">
      <b-row style="margin-right:0; margin-left:0;">
        <b-col lg="6" md="6" style="padding:0">
            <div class="register-bg"></div>
        </b-col>
        <b-col lg="6">

            <b-form>
                <b-col lg="7" class="mx-auto">
                    <h2>Registeren</h2>
                    <p>Vul hieronder je gegevens in om te registreren.</p>
                    <p>Email</p>
                    <input v-model="email" class="form-control" type="text">
                    <p>Naam</p>
                    <input v-model="name" class="form-control" type="text">
                    <p>Wachtwoord</p>
                    <input v-model="password" class="form-control" type="password">
                    <p>Wachtwoord herhalen</p>
                    <input v-model="password_confirmation" class="form-control" type="password">
                    <p>Universiteit</p>
                    <input v-model="school" class="form-control" type="text">
                    <p>Studie</p>
                    <input v-model="study" class="form-control" type="text">
                    <p>Cijfer</p>
                    <input v-model="rating" class="form-control" type="text">
                    <p>Geslacht</p>
                    <input v-model="gender" class="form-control" type="text">
                    <p>Geboortedatum</p>
                    <input v-model="birthdate" class="form-control" type="text">
                    <button @click="register" class="button-custom">Registeren</button>
                </b-col>
            </b-form>
        </b-col>
      </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";  
import router from './../router'

export default {
    data(){
        return{
            email:'',
            name: '',
            password: '',
            password_confirmation:'',
            school:'',
            study:'',
            rating: '',
            gender:'',
            birthdate:''
        }
    },
    methods:{
        ...mapActions(["userRegister"]),
        register(){
            this.userRegister({
                email:this.email,
                name:this.name,
                password:this.password,
                password_confirmation:this.password_confirmation,
                school:this.school,
                study:this.study,
                rating:this.rating,
                gender:this.gender,
                birthdate:this.birthdate
            })
        }
    },
    mounted(){
        if(this.$store.getters.getUserToken){
            router.push('/home');
        }
    }
}
</script>

<style>

</style>