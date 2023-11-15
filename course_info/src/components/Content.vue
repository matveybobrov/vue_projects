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
  <div>
    <Part v-for="part in parts" :name="part.name" :exercises="part.exercises"/>
  </div>
</template>