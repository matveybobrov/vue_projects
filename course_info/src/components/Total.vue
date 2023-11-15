<script>
  export default {
    props: ['parts'],
    computed: {
      total() {
        return this.parts.reduce((acc, curr) => acc += curr.exercises, 0)
      }
    }
  }
</script>

<template>
  <b>
    Total of {{ total }} exercises
  </b>
</template>