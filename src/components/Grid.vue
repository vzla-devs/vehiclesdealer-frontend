<template>
<div class="grid">
  <slot></slot>
</div>
</template>

<script>
export default {
  name: 'Grid'
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-auto-rows: 400px;
  grid-gap: $small-gap;
  margin: $small-gap;
}

@media (min-width: $small-breakpoint) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: $medium-breakpoint) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: $medium-gap;
    margin: $medium-gap;
  }
}

@media (min-width: $large-breakpoint) {
  .grid {
    justify-content: center;
    grid-template-columns: repeat(4, minmax(400px, 540px));
  }
}
</style>
