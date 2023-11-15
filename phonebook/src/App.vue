<script>
import personService from './services/people'

import PeopleFilter from './components/PeopleFilter.vue'
import PeopleForm from './components/PeopleForm.vue'
import PeopleList from './components/PeopleList.vue'

export default {
  components: {
    PeopleFilter,
    PeopleForm,
    PeopleList
  },
  data() {
    return {
      filter: '',
      people: []
    }
  },
  methods: {
    addPerson(newPerson) {
      let isAlreadyExist = this.people.find(person => person.name === newPerson.name)
      if (isAlreadyExist) {
        const shouldUpdate = confirm(`${newPerson.name} is already added to the phonebook! Should update?`)
        shouldUpdate && this.updatePerson(newPerson)
        return
      }

      personService.create(newPerson)
      .then(createdPerson => {
        this.people.push(createdPerson)
      })
    },
    removePerson(id) {
      personService.remove(id)
      .then(() => {
        this.people = this.people.filter(person => person.id !== id)
      })
    },
    updatePerson(personToUpdate) {
      const id = this.people.find(person => person.name === personToUpdate.name).id
      personToUpdate.id = id

      personService.update(personToUpdate)
      .then(updatedPerson => {
        const updatedPeople = this.people.map(person => person.id === updatedPerson.id ? updatedPerson : person)
        this.people = updatedPeople
      })
    }
  },
  mounted() {
    personService.getAll()
    .then(initialPeople => {
      this.people = initialPeople
    })
  }
}
</script>

<template>
   <div>
      <h2>Phonebook</h2>
      <PeopleFilter v-model:filter="filter"/>

      <h2>Add a new</h2>
      <PeopleForm @addPerson="addPerson"/>

      <h2>Numbers</h2>
      <PeopleList @removePerson="removePerson" :people="people" :filter="filter"/>
    </div>
</template>

<style scoped>
</style>
