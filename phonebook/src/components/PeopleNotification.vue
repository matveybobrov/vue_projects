<script>
export default {
  props: {
    message: String || null,
    isError: Boolean,
  },
};
</script>

<template>
  <div :class="isError ? 'error' : 'success'">{{ message }}</div>
</template>

<style scoped>
.error {
  color: red;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
.success {
  color: green;
  background: lightgrey;
  font-size: 20px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
}
</style>
