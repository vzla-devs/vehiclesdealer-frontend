<template>
  <img :src="src">
</template>

<script>
export default {
  props: {
    src: { type: String, required: true }
  }
}
</script>
