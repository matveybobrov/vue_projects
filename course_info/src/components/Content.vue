<script>
import Part from './Part.vue'

  export default {
    components: {
      Part
    },
    props: ['parts']
  }
</script>

<template>
  <div v-for="part in parts">
    <Part :name="part.name" :exercises="part.exercises"/>
  </div>
</template>