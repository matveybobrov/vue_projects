<script>
export default {
  props: {
    people: Array,
    filter: String
  },
  emits: ['removePerson'],
  computed: {
    filteredPeople() {
      return this.people.filter(person => person.name.toLowerCase().includes(this.filter.toLowerCase()))
    }
  }
}
</script>

<template>
  <div v-if="people.length === 0">No people in the phonebook</div>
  <div v-else-if="filteredPeople.length === 0">No people with such filter</div>
  <div v-else>
    <div v-for="person in filteredPeople" :key="person.id">
      {{ person.name }} {{ person.number }}
      <button @click="$emit('removePerson', person.id)">remove</button>
    </div>
  </div>
</template>