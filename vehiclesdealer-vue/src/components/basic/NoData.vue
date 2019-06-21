<template>
<div>
  <div id="no-data">{{ message }}</div>
</div>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style scoped>
#no-data {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
