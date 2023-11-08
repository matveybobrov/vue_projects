<script>
  import Statistics from './components/Statistics.vue'

  export default {
    components: {
      Statistics,
    },
    data() {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    }
  }
</script>

<template>
  <h2>Give feedback!</h2>
    <button @click="good++">good</button>
    <button @click="neutral++">neutral</button>
    <button @click="bad++">bad</button>
  <h2>Statistics</h2>
  <Statistics :good="good" :neutral="neutral" :bad="bad"/>
</template>
