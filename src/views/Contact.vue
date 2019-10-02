<template>
    <div id="contact">
        <div class="header">
            <NavbarLanding navbarBackgroundColor = "transparent !important"/>
        </div>
        <b-container>
            <b-row> 
                <b-col lg="4">
                    <h2><strong>Heb je vragen? Neem gerust <br>contact op!</strong></h2>
                    <p>Wij nemen contact met onze gebruikers erg serieus. Mocht je vragen of suggesties hebben over ons platform aarzel niet! Wij zullen zo snel mogelijk op je reageren.</p>
                    <div>
                        <p>Email: info@exhams.com</p>
                        <p>Tel: 112</p>
                    </div>
                </b-col>
                <b-col offset-lg="3" lg="5">
                    <form action="">
                        <b-row>
                            <b-col lg="12">
                                <p>Jouw naam</p>
                                <input v-model="name" class="form-control" type="text">
                            </b-col>
                            <b-col lg="12">
                                <p>Jouw email</p>
                                <input v-model="email" class="form-control" type="text">
                            </b-col>
                            <b-col lg="12">
                                <p>Jouw bericht</p>
                                <textarea v-model="message" class="form-control" name="" id="" cols="30" rows="10"></textarea>
                                <Button style="margin-top:10px;" buttontext="bericht versturen"/>
                            </b-col>
                        </b-row>
                    </form>
                </b-col>
            </b-row>

        </b-container>
    </div>
</template>

<script>
import NavbarLanding from './../components/NavbarLanding'
import Button from './../components/Button'

export default {
    components:{
        NavbarLanding,
        Button
    },
    data(){
        return{
            name: '',
            email: '',
            message: ''
        }
    }
}
</script>

<style>

</style>