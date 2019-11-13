<template>
  <div>
      hallo
  </div>
</template>

<script>
import { mapActions } from "vuex";  

export default {
  methods:{
    ...mapActions(["getAllRequestedCourses"]),
    getRequestedCourses(){
      this.getAllRequestedCourses("universiteit-leiden");
    },

  },
  created(){
    console.log("asdg");
    this.getRequestedCourses();
  }
}
</script>

<style>

</style>