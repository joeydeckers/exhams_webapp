<template>
  <div id="course-card">
      <img :src="courseThumbnail" alt="" >
      <div class="course-card-info">
        <h3>{{courseName}}</h3>
        <!-- <p>Docent: {{courseTeacher}}</p> -->
        <p>{{courseSchool}}</p>
        <div class="course-subinfo">
          <p>{{courseStudy}}</p>
          <p class="course-price">€ {{coursePrice}}</p>
        </div>

      </div>

  </div>
</template>

<script>
export default {
    props:['courseThumbnail', 'courseName', 'coursePrice', 'courseTeacher', 'courseSchool', 'courseStudy'],
    data(){
      return{

      }
    }
}
</script>

<style>

</style>