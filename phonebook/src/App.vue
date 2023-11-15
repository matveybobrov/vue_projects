<script>
import personService from "./services/people";

import PeopleFilter from "./components/PeopleFilter.vue";
import PeopleForm from "./components/PeopleForm.vue";
import PeopleList from "./components/PeopleList.vue";
import PeopleNotification from "./components/PeopleNotification.vue";

export default {
  components: {
    PeopleFilter,
    PeopleForm,
    PeopleList,
    PeopleNotification,
  },
  data() {
    return {
      filter: "",
      people: [],
      notification: {
        message: null,
        isError: false,
      },
    };
  },
  methods: {
    addPerson(newPerson) {
      let isAlreadyExist = this.people.find((person) => person.name === newPerson.name);
      if (isAlreadyExist) {
        const shouldUpdate = confirm(
          `${newPerson.name} is already added to the phonebook! Should update?`
        );
        shouldUpdate && this.updatePerson(newPerson);
        return;
      }

      personService.create(newPerson).then((createdPerson) => {
        this.people.push(createdPerson);
      });
      this.showNotification(`${newPerson.name} was sucessfully added to the phonebook!`);
    },
    removePerson(person) {
      const id = person.id;
      personService
        .remove(id)
        .then(() => {
          this.people = this.people.filter((person) => person.id !== id);
        })
        .catch(() => {
          this.people = this.people.filter((person) => person.id !== id);
        });
      this.showNotification(`${person.name} was sucessfully removed from the phonebook!`);
    },
    updatePerson(personToUpdate) {
      const id = this.people.find((person) => person.name === personToUpdate.name).id;
      personToUpdate.id = id;

      personService.update(personToUpdate).then((updatedPerson) => {
        const updatedPeople = this.people.map((person) =>
          person.id === updatedPerson.id ? updatedPerson : person
        );
        this.people = updatedPeople;
      });

      this.showNotification(`Number of ${personToUpdate.name} was successfully updated!`);
    },
    showNotification(message, isError = false) {
      this.notification = {
        message,
        isError,
      };
      setTimeout(() => {
        this.notification.message = null;
      }, 2000);
    },
  },
  mounted() {
    personService.getAll().then((initialPeople) => {
      this.people = initialPeople;
    });
  },
};
</script>

<template>
  <div>
    <h2>Phonebook</h2>
    <PeopleNotification
      v-if="notification.message"
      :message="notification.message"
      :isError="notification.isError"
    />
    <PeopleFilter v-model:filter="filter" />

    <h2>Add a new</h2>
    <PeopleForm @addPerson="addPerson" />

    <h2>Numbers</h2>
    <PeopleList @removePerson="removePerson" :people="people" :filter="filter" />
  </div>
</template>

<style scoped></style>
