<template>
  <div id="home">
    <Navbar
      style="-webkit-box-shadow:0px 1px 4px  #00000073;-moz-box-shadow:0px 1px 4px #00000073; box-shadow: 0px 1px 4px #00000073; background:#fff;"
      navbarBackgroundColor="#fff !important"
    />
    <b-container class="container-custom">
      <section class="my-courses">
        <h2>Jouw cursussen</h2>
        <p>Bekijk jouw cursussen</p>
          <carousel :per-page="5" :mouse-drag="true">
            <slide v-for="course in this.userCourses" :key = "course.id">
              <router-link class="course-link" :to = "`/cursus/${course.id}`">
                <CourseCard
                  courseThumbnail="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  :courseName= course.course_name
                  coursePrice="100"
                  courseTeacher="Joey Deckers"
                  :courseSchool= course.course_school
                  :courseStudy = course.course_study
                />
              </router-link>
            </slide>
          </carousel>
      </section>
      <section class="university-courses">
        <h2>Bekijk cursussen van Tilburg University</h2>
          <carousel :per-page="5" :mouse-drag="true">
            <slide v-for="course in this.universityCourses" :key = "course.id">
              <router-link class="course-link" :to = "`/cursus/${course.id}`">
                <CourseCard
                  courseThumbnail="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                  :courseName= course.course_name
                  coursePrice="100"
                  courseTeacher="Joey Deckers"
                  :courseSchool= course.course_school
                  :courseStudy = course.course_study
                />
              </router-link>
            </slide>
          </carousel>
      </section>

    </b-container>
  </div>
</template>

<script>
import Navbar from "./../components/Navbar";
import CourseCard from "./../components/CourseCard";
import { Carousel, Slide } from "vue-carousel";
import { mapActions } from "vuex";  
import {mapGetters} from 'vuex'

export default {
  components: {
    Navbar,
    CourseCard,
    Carousel,
    Slide
  },
  computed:{
    ...mapGetters({
        universityCourses: 'getUniversityCourses',
        userInfo: 'getUserInfo',
        userCourses: 'getAllUserCourses'
    }),
  },
  methods:{
    ...mapActions(["getCoursesByUniversity", "getUserCourses"]),
    getCoursesByUniversityForUser(){
      this.getCoursesByUniversity("tilburg-university");
    },
    getAllUserCourses(){
      let id = JSON.parse(localStorage.getItem('userInfo'));
      this.getUserCourses(id);
    }
  },
  created(){
    this.getCoursesByUniversityForUser();
    this.getAllUserCourses();
  }
};
</script>

<style>
</style>