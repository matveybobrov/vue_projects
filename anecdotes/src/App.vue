<script>
  export default {
    data() {
      return {
        anecdotes: [
          'If it hurts, do it more often.',
          'Adding manpower to a late software project makes it later!',
          'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
          'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
          'Premature optimization is the root of all evil.',
          'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
          'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
          'The only way to go fast, is to go well.'
        ],
        votes: [],
        selected: 0
      }
    },
    methods: {
      setRandom() {
        const id = Math.floor(Math.random() * this.anecdotes.length)
        this.selected = id
      },
      getMostVoted() {
        const mostVotesId = this.votes.indexOf(Math.max(...this.votes))
        const mostVoted = this.anecdotes[mostVotesId]
        return mostVoted
      }
    },

    mounted() {
      this.votes = Array(this.anecdotes.length).fill(0)
    }

  }
</script>

<template>
  <h2>Anecdote of the day</h2>
  <div>
    <div>
      {{anecdotes[selected]}}
    </div>
    <div>
      has {{votes[selected]}} votes
    </div>
    <button @click="() => votes[selected]++">vote</button>
    <button @click="setRandom">next anecdote</button>
  </div>

  <h2>Anecdote with most votes</h2>
  <div>
    {{getMostVoted()}}
  </div>
</template>

<style>
</style>
