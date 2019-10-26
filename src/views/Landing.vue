<template>
  <div class="landing">
    <NavbarLanding class="fixed-top" navbarBackgroundColor="transparent !important" />
    <section class="intro">
      <b-container fluid>
        <b-row>
          <b-col lg="6" md="12" sm="12" style="padding:0">
            <div class="intro-text">
              <h2>
                Het
                <strong>online</strong> tentamentraining platform waardoor
                <strong>jij</strong> je tentamen haalt
              </h2>
              <p>Zoek hier je tentamentraining die past bij jouw opleiding en universiteit.</p>
              <div class="search">
                <div class="select">
                  <i class="fas fa-school"></i>
                  <select v-model="university" name id>
                    <option value = "">Kies universiteit</option>
                    <option value = "tilburg-university">Tilburg University</option>
                    <option value>Kies universiteit</option>
                    <option value>Kies universiteit</option>
                    <option value>Kies universiteit</option>
                  </select>
                </div>
                <div class="select">
                  <select v-model="study" name id>
                    <option value>Kies studie</option>
                    <option value = "informatica">Informatica</option>
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
      <b-container>
        <h2>Wat kun je verwachten</h2>
        <b-row></b-row>
      </b-container>
    </section>
  </div>
</template>


<script>
import NavbarLanding from "./../components/NavbarLanding";
import Video from "./../components/Video";
import router from "./../router";
import { mapActions, mapGetters } from "vuex";
import CourseCard from "./../components/CourseCard";

export default {
  components: {
    NavbarLanding,
    Video,
    CourseCard
  },
  data(){
    return{
      university: '',
      study: ''
    }
  },
  methods: {
    ...mapActions(["getLatestCourses"]),
    getLatestCoursesHome() {
      this.getLatestCourses();
    },
    searchCourse(){
      router.push(`/cursussen/${this.university}/${this.study}`)
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
