<script>
  export default {
    props: ['parts']
  }
</script>

<template>
  <p>
    Number of exercises: 
    {{parts.reduce((acc, curr) => acc += curr.exercises, 0)}}
  </p>
</template>