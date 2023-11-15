<script>
export default {
  data() {
    return {
      newName: '',
      newNumber: '',
      people: [{
        name: 'Arto Hellas',
        number: '23345'
      }]
    }
  },
  methods: {
    addPerson() {
      let isAlreadyExist = this.people.find(person => person.name === this.newName)
      if (isAlreadyExist) {
        alert(`${this.newName} is already added to the phonebook!`)
        return
      }

      const newPerson = {
        name: this.newName,
        number: this.newNumber
      }
      this.people.push(newPerson)
      this.newName = ''
      this.newNumber = ''
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
          number: <input v-model="newNumber"/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div v-for="person in people" :key="person.name">
        {{ person.name }} {{ person.number }}
      </div>
    </div>
</template>

<style scoped>
</style>
