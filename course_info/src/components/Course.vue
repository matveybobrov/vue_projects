<script>
import Header from './Header.vue'
import Content from './Content.vue'
import Total from './Total.vue'

export default {
  props: {
    course: Object
  },
  components: {
    Header,
    Content,
    Total
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
