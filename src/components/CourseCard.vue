<template>
  <div id="course-card">
      <img :src="courseThumbnail" alt="" >
      <div class="course-card-info">
        <h3>{{courseName}}</h3>
        <p>{{courseTeacher}}</p>
        <p>{{courseSchool}}</p>
        <p>{{coursePrice}}</p>
      </div>

  </div>
</template>

<script>
export default {
    props:['courseThumbnail', 'courseName', 'coursePrice', 'courseTeacher', 'courseSchool']
}
</script>

<style>

</style>