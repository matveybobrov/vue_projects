<script>
  export default {
    props: ['name', 'exercises']
  }
</script>

<template>
  <p>
    {{name}} {{exercises}}
  </p>
</template>