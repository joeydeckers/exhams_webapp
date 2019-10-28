<template>
  <div id="search-page">
    <Navbar
      style="-webkit-box-shadow:0px 1px 4px  #00000073;-moz-box-shadow:0px 1px 4px #00000073; box-shadow: 0px 1px 4px #00000073; background:#fff;"
      navbarBackgroundColor="#fff !important"
    />
    <b-container class="container-custom">
        <div class="search">
          <div class="select">
            <i class="fas fa-school"></i>
              <select v-model="university" name id>
                <option value = "">Kies universiteit</option>
                <option value = "tilburg-university">Tilburg University</option>
                <option value = "helmond">Helmond</option>
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
        <b-row>
            <b-col lg="3" v-for="course in this.searchedCourses" :key="course.id">
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
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Navbar from "./../components/Navbar";
import CourseCard from "./../components/CourseCard";
import router from "./../router";

export default {
  components: {
    Navbar,
    CourseCard
  },
  data(){
    return{
      study: '',
      university: ''
    }
  },
  methods: {
    ...mapActions(["loadSearchedCourses"]),
    initSearchCourse() {
      this.loadSearchedCourses({university: this.$route.params.university, study:this.$route.params.study});
      console.log(this.$route.params.study);
    },
    searchCourse(){
      router.push(`/cursussen/${this.university}/${this.study}`)
      location.reload();
    }
  },
  created() {
      this.initSearchCourse();
  },
  computed:{
      ...mapGetters({
          searchedCourses: "getSearchedCourses"
      })
  }
};
</script>