<template>
  <div id="home">
    <NavbarLanding
      style="-webkit-box-shadow:0px 1px 4px  #00000073;-moz-box-shadow:0px 1px 4px #00000073; box-shadow: 0px 1px 4px #00000073; background:#fff;"
      navbarBackgroundColor="#fff !important"
    />
    <b-container class="container-custom">
      {{getUserInfo }}
      <section class="my-courses">
        <h2>Jouw cursussen</h2>
        <p>Bekijk jouw cursussen</p>
          <carousel :per-page="5" :mouse-drag="true">
            <slide>
              <CourseCard
                courseThumbnail="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                courseName="Advanced datastructures"
                coursePrice="100"
                courseTeacher="Joey Deckers"
                courseSchool="Tilburg University"
                courseStudy = "Informatica"
              />
            </slide>
          </carousel>
      </section>
      <section class="university-courses">
        <h2>Bekijk cursussen van Tilburg University</h2>
          <carousel :per-page="5" :mouse-drag="true">
            <slide>
              <CourseCard
                courseThumbnail="https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                courseName="Advanced datastructures"
                coursePrice="100"
                courseTeacher="Joey Deckers"
                courseSchool="Tilburg University"
                courseStudy = "Informatica"
              />
            </slide>
          </carousel>
      </section>

    </b-container>
  </div>
</template>

<script>
import NavbarLanding from "./../components/NavbarLanding";
import CourseCard from "./../components/CourseCard";
import { Carousel, Slide } from "vue-carousel";

export default {
  components: {
    NavbarLanding,
    CourseCard,
    Carousel,
    Slide
  },
  computed:{
    getUserInfo(){
      return this.$store.getters.getUserInfo;
    }
  }
};
</script>

<style>
</style>