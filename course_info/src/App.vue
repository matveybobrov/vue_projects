<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Total from './components/Total.vue'

export default {
  components: {
    Header,
    Content,
    Total
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
      <Header :name="course.name" />
      <Content :parts="course.parts"/>
      <Total :parts="course.parts" />
    </div>
</template>

<style scoped>
</style>
