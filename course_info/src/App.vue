<script>
import Course from './components/Course.vue'

export default {
  components: {
    Course
  },
  data() {
    return {
      course: {
        name: 'Half Stack application development',
        parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of component',
          exercises: 14
        }
        ]
      }
    }
  }
}
</script>

<template>
  <div>
    <Course :course="course"/>
  </div>
</template>

<style scoped>
</style>
