<template>
    <div>
        <b-container class="container-custom">
            <div class="login-form">
                <h4>Vul hier je gegevens in om in te loggen.</h4>
                <form>
                    <p class="error" v-if="getError">Je gegevens zijn niet correct</p>
                    <input v-model="email" class="form-control" placeholder="Email" type="text">
                    <input v-model="password" class="form-control" placeholder="Wachtwoord" type="password">
                    <button @click="login" class="btn ">Inloggen</button>
                </form>

            </div>
        </b-container>
        
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from "vuex";  
import router from './../router'

export default {
    data(){
        return{
            email: '',
            password: '',
            error: this.$store.getters.getError
        }
    },
    methods:{
        ...mapActions(["userLogin"]),
        login(){
            this.userLogin({email:this.email, password: this.password});
        },
    },
    computed:{
        getError(){
            return this.$store.getters.getError;
        }
    },
    mounted(){
        if(this.$store.getters.getUserToken){
            router.push('/home');
        }
    }
}
</script>