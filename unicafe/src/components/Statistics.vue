<script>
  import StatisticsLine from './StatisticsLine.vue'

  export default {
    components: {
      StatisticsLine
    },
    props: ['good', 'neutral', 'bad'],
    methods: {
      calculateTotal() {
        return this.good + this.neutral + this.bad
      },
      calculateAverage() {
        const average = (this.good - this.bad) / this.calculateTotal()
        return Number.isNaN(average) ? 0 : average
        return 
      },
      calculatePositive() {
        const positive = this.good / this.calculateTotal() * 100
        return Number.isNaN(positive) ? 0 : positive
      }
    }
  }
</script>

<template>
  <div v-if="calculateTotal()">
    <StatisticsLine text="good" :data="good"/>
    <StatisticsLine text="neutral" :data="neutral"/>
    <StatisticsLine text="bad" :data="bad"/>
    <StatisticsLine text="all" :data="calculateTotal()"/>
    <StatisticsLine text="average" :data="calculateAverage()"/>
    <StatisticsLine text="positive" :data="calculatePositive() + '%'"/>
  </div>
  <div v-else>
    No feedback given
  </div>
</template>
