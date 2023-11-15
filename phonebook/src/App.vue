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
        alert(`${newPerson.name} is already added to the phonebook!`)
        return
      }

      personService.create(newPerson)
      .then(createdPerson => {
        this.people.push(createdPerson)
      })
    },
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
      <PeopleList :people="people" :filter="filter"/>
    </div>
</template>

<style scoped>
</style>
