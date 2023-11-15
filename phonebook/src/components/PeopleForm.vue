<script>
export default {
  emits: ['addPerson'],
  data() {
    return {
      newName: '',
      newNumber: ''
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('addPerson', {name: this.newName, number: this.newNumber})
      this.newName = ''
      this.newNumber = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
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
</template>