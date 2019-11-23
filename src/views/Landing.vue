<template>
  <div class="landing">
    <Navbar class="fixed-top" navbarBackgroundColor="transparent !important" />
    <section class="intro">
      <b-container fluid>
        <b-row>
          <b-col lg="6" md="12" sm="12" style="padding:0">
            <div class="intro-text">
              <h2>
                <strong>Online</strong> tentamentrainingen en samenvattingen waardoor 
                <strong>jij</strong> je tentamen haalt
              </h2>
              <p>Zoek hier je tentamentraining die past bij jouw opleiding en universiteit.</p>
              <div class="search">
                <div class="select">
                  <i class="fas fa-school"></i>
                  <select v-model="university" name id>
                    <option value>Kies universiteit</option>
                    <option v-for="university in universities" :key="university.id"  :value="university.url">{{university.name}}</option>
                  </select>
                </div>
                <div class="select">
                  <select v-model="study" name id>
                    <option value>Kies studie</option>
                    <option value="informatica">Informatica</option>
                  </select>
                </div>
                <button @click="searchCourse" class="btn btn-custom">Zoeken</button>
              </div>
              <p class="cta-text">Zelf uploaden? Klik dan hier</p>
            </div>
          </b-col>
          <b-col lg="6" md="6" style="padding:0">
            <div class="landing-bg"></div>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="recent-videos">
      <b-container class="container-custom">
        <h2>Recente tentamentrainingen</h2>
        <div class="videos">
          <b-row>
            <b-col lg="3" v-for="course in this.latestCourses" :key="course.id">
              <router-link class="course-link" :to="`/cursus/${course.id}`">
                <CourseCard
                  courseThumbnail="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  :courseName="course.course_name"
                  coursePrice="100"
                  courseTeacher="Joey Deckers"
                  :courseSchool="course.course_school"
                  :courseStudy="course.course_study"
                />
              </router-link>
            </b-col>
          </b-row>
        </div>
      </b-container>
    </section>
    <section class="features">
      <b-container class="container-custom">
        <h2>Wat kun je verwachten</h2>
        <b-row>
          <b-col lg="3">
            <clock-icon size="2x" class="icon"></clock-icon>
            <h3>
              <strong>Waar en wanneer het jou uitkomt</strong>
            </h3>
            <p>Tentamentrainingen worden geüpload, kun je terugspoelen en kunnen niet worden verwijderd bij te weinig aanmeldingen.Zo kom je niet vlak voor je tentamen voor verassingen te staan.</p>
          </b-col>
          <b-col lg="3">
            <user-icon size="2x" class="icon"></user-icon>
            <h3>
              <strong>Toptrainers</strong>
            </h3>
            <p>
              Trainers hebben een 8 of hoger behaald. Door een transparant reviewsysteem,
              een gratis preview en de mogelijkheid om vragen te stellen aan de trainer ben
              je verzekerd van een goede aanwinst tijdens je tentamens.
            </p>
          </b-col>
          <b-col lg="3">
            <award-icon size="2x" class="icon"></award-icon>
            <h3>
              <strong>Een upload voor twee tentamenkansen</strong>
            </h3>
            <p>
              Zoek het betreffende vak en bekijk hoeveel op geïnteresseerd hebben
              geklikt. Upload vanuit huis en verdien 8 euro p/u bij de eerste aanmelding met een
              maximum van X euro p/u!
            </p>
          </b-col>
          <b-col lg="3">
            <book-icon size="2x" class="icon"></book-icon>
            <h3>
              <strong>Samenvattingen</strong>
            </h3>
            <p>
              Geen zin in een tentamentraining maar wel in studiehulp? Koop
              een online samenvatting van de trainer. 80% van de opbrengsten gaan
              naar de trainer.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="footer-container">
      <b-container class="container-custom">
        <Footer/>
      </b-container>
    </section>
  </div>
</template>


<script>
import Navbar from "./../components/Navbar";
import Video from "./../components/Video";
import router from "./../router";
import { mapActions, mapGetters } from "vuex";
import CourseCard from "./../components/CourseCard";
import Footer from "./../components/Footer";

import { UserIcon, ClockIcon, BookIcon, AwardIcon, } from 'vue-feather-icons'

export default {
  components: {
    Navbar,
    Video,
    CourseCard,
    UserIcon,
    ClockIcon,
    BookIcon,
    AwardIcon,
    Footer   
  },
  data() {
    return {
      university: "",
      study: "",
      universities:[
                {
                    name: 'Leiden Universiteit',
                    url: 'universiteit-leiden',
                },
                {
                    name: 'Universiteit van Amsterdam',
                    url: 'universiteit-van-amsterdam',
                },
                {
                    name: 'Utrecht Universiteit',
                    url: 'universiteit-utrect',
                },
                {
                    name: 'Technische Universiteit Delft',
                    url: 'technische-universiteit-delft',
                },
                {
                    name: 'Technische Universiteit Eindhoven',
                    url: 'technische-universiteit-eindhoven',
                },
                {
                    name: 'Rijksuniversiteit Groningen',
                    url: 'rijksuniversiteit-groningen',
                },
                {
                    name: 'Erasmus Universiteit',
                    url: 'erasmus-universiteit',
                },
                {
                    name: 'Tilburg University',
                    url: 'tilburg-university',
                },
                {
                    name: 'Maastricht University',
                    url: 'maastricht-university',
                },
                {
                    name: 'Radboud Universiteit',
                    url: 'radboud-universiteit',
                },
                {
                    name: 'Vrije Universiteit',
                    url: 'vrije-universiteit',
                },
                {
                    name: 'Wageningen Universiteit',
                    url: 'wageningen-universiteit',
                },
                {
                    name: 'Universiteit Twente',
                    url: 'universiteit-twente',
                },
            ]
    };
  },
  methods: {
    ...mapActions(["getLatestCourses"]),
    getLatestCoursesHome() {
      this.getLatestCourses();
    },
    searchCourse() {
      router.push(`/cursussen/${this.university}/${this.study}`);
    }
  },
  computed: {
    ...mapGetters({
      latestCourses: "getlatestCourses"
    })
  },
  created() {
    this.getLatestCoursesHome();
    if (this.$store.getters.getUserToken) {
      router.push("/home");
    }
  }
};
</script>
