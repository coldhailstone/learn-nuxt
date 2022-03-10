<template>
  <div>
    <input type="text" :value="searchKeyword" @input="$emit('input', $event.target.value)" />
    <button type="button" @click="$emit('search')">search</button>
  </div>
</template>

<script>
export default {
  props: {
    searchKeyword: {
      type: String,
      default: () => ''
    }
  },
}
</script>

<style>

</style>