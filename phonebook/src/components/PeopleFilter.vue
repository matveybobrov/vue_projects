<script>
export default {
  props: {
    filter: String
  },
  emits: ['update:filter']
}
</script>

<template>
  <div>
    filter shown with: <input :value="filter" @input="$emit('update:filter', $event.target.value)">
  </div>
</template>