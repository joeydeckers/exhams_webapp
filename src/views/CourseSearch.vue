<template>
  <div>
      {{$route.params}}
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    data(){
        return{
            university: '',
            study: ''
        }
    },
    methods:{
        ...mapActions(["getSearchedCourses"]),
        searchCourse(){
            this.getSearchedCourses(this.university, this.study);
        },
        created(){
            this.searchCourse();
        }
    }
}
</script>

<style>

</style>