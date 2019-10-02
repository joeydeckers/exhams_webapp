<template>
    <div>
        <b-container class="container-custom">
            <div class="login-form">
                <h4>Vul hier je gegevens in om in te loggen.</h4>
                <input class="form-control" placeholder="Email" type="text">
                <input class="form-control" placeholder="Wachtwoord" type="password">
                <button @click="login" class="btn ">Inloggen</button>
            </div>
        </b-container>
        
    </div>
</template>

<script>
import axios from 'axios'
import { mapActions } from "vuex";

export default {
    methods:{
        ...mapActions(["userLogin"]),
        login(){
            //this.userLogin({email:'deckersjoey@gmail.com', password: 'test123'})
            this.$store.dispatch('userLogin', {email:'deckersjoey@gmail.com', password: 'test123'})

        }
    }
}
</script>