<template>
    <div id="contact">
        <div class="header">
            <NavbarLanding navbarBackgroundColor = "transparent !important"/>
        </div>
        <b-container>
            <b-row> 
                <b-col lg="6">
                    <h2>Heb je vragen? Neem gerust <br>contact op!</h2>
                    <p>Wij zullen je bericht zo snel mogelijk behandelen.</p>
                    <div>
                        <p>Email: info@exhams.com</p>
                        <p>Tel: 112</p>
                    </div>
                </b-col>
                <b-col offset-lg="1" lg="5">
                    <form action="">
                        <b-row>
                            <b-col lg="12">
                                <p>Jouw naam</p>
                                <input class="form-control" type="text">
                            </b-col>
                            <b-col lg="12">
                                <p>Jouw email</p>
                                <input class="form-control" type="text">
                            </b-col>
                            <b-col lg="12">
                                <p>Jouw bericht</p>
                                <textarea class="form-control" name="" id="" cols="30" rows="10"></textarea>
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
    }
}
</script>

<style>

</style>