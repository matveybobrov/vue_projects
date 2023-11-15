<script>
export default {
  data() {
    return {
      newName: '',
      people: [{
        name: 'Arto Hellas'
      }]
    }
  },
  methods: {
    addPerson() {
      const newPerson = {
        name: this.newName
      }
      this.people.push(newPerson)
      this.newName = ''
    }
  }
}
</script>

<template>
   <div>
      <h2>Phonebook</h2>
      <form @submit.prevent="addPerson">
        <div>
          name: <input v-model="newName"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div v-for="person in people" :key="person.name">{{ person.name }}</div>
    </div>
</template>

<style scoped>
</style>
