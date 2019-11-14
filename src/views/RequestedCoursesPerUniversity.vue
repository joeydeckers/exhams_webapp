<template>
  <div>
    <Navbar class="fixed-top" navbarBackgroundColor="transparent !important" />
    <b-col id="list-requested-courses" lg="4" class="mx-auto">
      <div class="info-container">
          <div class="info" v-for="request in this.requestedCourses" :key = "request.id">
              <h4>{{request.requested_study}}</h4>
              <p>keren aangevraagd: {{request.times_requested}}</p>
          </div>
          <div v-if="!this.requestedCourses.length">
              Nog geen cursussen aangevraagd!
          </div>
      </div>
    </b-col>
  </div>  
</template>

<script>
import { mapActions } from "vuex";  
import {mapGetters} from 'vuex'
import Navbar from "./../components/Navbar";

export default {
  components:{
      Navbar
  }  ,
  methods:{
    ...mapActions(["getAllRequestedCourses"]),
    getRequestedCourses(){
      this.getAllRequestedCourses(this.$route.params.university);
    },
  },
  computed:{
    ...mapGetters({
        requestedCourses: 'getAllRequestedCourses',
    }),
  },
  created(){
    this.getRequestedCourses();
  }
}
</script>

<style>

</style>