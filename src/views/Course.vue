<template>
    <div id="course">
        <Navbar
            style="-webkit-box-shadow:0px 1px 4px  #00000073;-moz-box-shadow:0px 1px 4px #00000073; box-shadow: 0px 1px 4px #00000073; background:#fff;"
            navbarBackgroundColor="#fff !important"
        />
        <b-container>
            <div class="course-container">
                <video :src=specificCourse.course_video_url controls></video>
                <h3><strong>{{specificCourse.course_name}}</strong></h3>
                <button class="button-custom">Curses kopen</button>
                <p><strong>Beschrijving</strong></p>
                <p>{{specificCourse.course_description}}</p>
                <div class="course-subhead">
                    <div class="trainer-container">
                        <p><strong>Trainer:</strong></p>
                        <p class="trainer-name">Joey</p>
                    </div>
                </div>
                <div class="course-subhead">
                    <div class="course-info-container">
                        <p><strong>Universiteit:</strong></p>
                        <p><strong>Schooljaar: </strong></p>
                        <p><strong>Studie:</strong></p>   
                    </div>
                    <div class="course-info-container">
                        <p class="info-item">{{specificCourse.course_school}}</p>
                        <p class="info-item"> {{specificCourse.course_year}}</p>
                        <p class="info-item"> {{specificCourse.course_study}}</p>
                    </div>
                </div>
            </div>
        </b-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";  
import Navbar from "./../components/Navbar";

export default {  
  name: 'app',
  components:{
      Navbar
  },
  methods:{
       ...mapActions(["getSpecificCourse"]),
      getCourse(){
          this.getSpecificCourse(this.$route.path);
      }
  },
  computed:{
    ...mapGetters({
        specificCourse: 'getCourse',
    }),
  },
  created(){
      this.getCourse();
  }
}

</script>