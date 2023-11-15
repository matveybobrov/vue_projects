<script>
import Course from './components/Course.vue'

export default {
  components: {
    Course
  },
  data() {
    return {
      courses: [
        {
          name: 'Half Stack application development',
          id: 1,
          parts: [
            {
              name: 'Fundamentals of React',
              exercises: 10,
              id: 1
            },
            {
              name: 'Using props to pass data',
              exercises: 7,
              id: 2
            },
            {
              name: 'State of a component',
              exercises: 14,
              id: 3
            },
            {
              name: 'Redux',
              exercises: 11,
              id: 4
            }
          ]
        }, 
        {
          name: 'Node.js',
          id: 2,
          parts: [
            {
              name: 'Routing',
              exercises: 3,
              id: 1
            },
            {
              name: 'Middlewares',
              exercises: 7,
              id: 2
            }
          ]
        }
      ]
    }
  }
}
</script>

<template>
  <div>
    <h1>Web development curriculum</h1>
    <Course v-for="course in courses" :course="course"/>
  </div>
</template>

<style scoped>
</style>
