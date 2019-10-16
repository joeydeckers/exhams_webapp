<template>
  <div id ="navbarLanding">
    <b-navbar  :style = "{backgroundColor: navbarBackgroundColor}" toggleable="lg" type="light" variant="info">
      <b-navbar-brand href="#">Exhams</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <!-- Using 'button-content' slot -->
            <b-navbar-nav v-if="!loggedIn">
                <b-nav-item href="#">Over Exhams</b-nav-item>
                <b-nav-item to="/contact">Contact</b-nav-item>
                <b-nav-item to="/login">Login</b-nav-item>
                <b-nav-item class="accent-color" href="#">Wordt een trainer</b-nav-item>
            </b-navbar-nav>
            <b-navbar-nav v-if="loggedIn">
                <b-nav-item to="/home">Mijn dashboard</b-nav-item>
                <b-nav-item to="/contact">Contact</b-nav-item>
                <b-nav-item @click = "logout" to="/">Logout</b-nav-item>
                <b-nav-item class="accent-color" href="#">Wordt een trainer</b-nav-item>
            </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import { mapActions } from "vuex";  

  export default {
      props: ['navbarBackgroundColor'],
      data(){
        return{
          loggedIn: this.getLoggin()
        }
      },
      methods:{
        ...mapActions(["userLogout"]),
        logout(){
          this.userLogout();
        },
        getLoggin(){
          return this.$store.getters.getUserToken;
        }
      },
  }
</script>

