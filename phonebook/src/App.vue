<script>
export default {
  data() {
    return {
      newName: '',
      newNumber: '',
      filter: '',
      people: []
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
  },
  computed: {
    filteredPeople() {
      return this.people.filter(person => person.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  }
}
</script>

<template>
   <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with: <input v-model="filter">
      </div>
      <h2>Add a new</h2>
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
      <div v-if="people.length === 0">No people in the phonebook</div>
      <div v-else-if="filteredPeople.length === 0">No people with such filter</div>
      <div v-else>
        <div v-for="person in filteredPeople" :key="person.name">
          {{ person.name }} {{ person.number }}
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>
