<template>
  <b-container fluid id="register">
    <b-row style="margin-right:0; margin-left:0;">
      <b-col lg="6" md="6" style="padding:0">
        <div class="register-bg"></div>
      </b-col>
      <b-col lg="6">
        <b-col lg="7" class="mx-auto">
          <b-form>
            <h2>Registeren</h2>
            <p>Vul hieronder je gegevens in om te registreren.</p>
            <p>Email</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <mail-icon size="1.5x" class="icon"></mail-icon>
              <input v-model="email" class type="text" />
            </div>
            <p>Naam</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <user-icon  size="1.5x" class="icon"></user-icon >
              <input v-model="name" type="text" />
            </div>
            <p>Wachtwoord</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <lock-icon size="1.5x" class="icon"></lock-icon>
              <input v-model="password" type="password" />
            </div>
            <p>Wachtwoord herhalen</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <lock-icon size="1.5x" class="icon"></lock-icon>
              <input v-model="password_confirmation" type="password" />
            </div>
            <p>Universiteit</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <book-icon size="1.5x" class="icon"></book-icon>
              <input v-model="school" type="text" />
            </div>
            <p>Studie</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <book-icon size="1.5x" class="icon"></book-icon>
              <input v-model="study" type="text" />
            </div>
            <p>Cijfer</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <user-icon size="1.5x" class="icon"></user-icon>
              <input v-model="rating" type="text" />
            </div>
            <p>Geslacht</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <user-icon size="1.5x" class="icon"></user-icon>
              <input v-model="gender" type="text" />
            </div>
            <p>Geboortedatum</p>
            <div class="input-container form-control" style="height: calc(1.5em + 0.75rem + 5px); !important">
              <award-icon size="1.5x" class="icon"></award-icon>
              <input v-model="birthdate" type="text" />
            </div>
          </b-form>
          <button @click="register" class="button-custom">Registeren</button>
        </b-col>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from "vuex";
import router from "./../router";
import { UserIcon, MailIcon, LockIcon, BookIcon, AwardIcon  } from "vue-feather-icons";

export default {
  components: {
    UserIcon,
    MailIcon,
    LockIcon,
    BookIcon,
    AwardIcon   
  },
  data() {
    return {
      email: "",
      name: "",
      password: "",
      password_confirmation: "",
      school: "",
      study: "",
      rating: "",
      gender: "",
      birthdate: ""
    };
  },
  methods: {
    ...mapActions(["userRegister"]),
    register() {
      this.userRegister({
        email: this.email,
        name: this.name,
        password: this.password,
        password_confirmation: this.password_confirmation,
        school: this.school,
        study: this.study,
        rating: this.rating,
        gender: this.gender,
        birthdate: this.birthdate
      });
    }
  },
  mounted() {
    // if(this.$store.getters.getUserToken){
    //     router.push('/home');
    // }
  }
};
</script>

<style>
</style>