<script>
  export default {
    props: ['text', 'data']
  }
</script>

<template>
  <p>{{text + " : " + data}}</p>
</template>