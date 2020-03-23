<template>
  <list-layout>
    <v-img
      src="https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    />
    <v-img
      src="https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    />
    <v-img
      src="https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    />
  </list-layout>
</template>

<script>
import ListLayout from '@/layouts/ListLayout.vue'

export default {
  components: {
    ListLayout
  },
  props: {
    id: { type: String, required: true }
  }
}
</script>

<style>

</style>
