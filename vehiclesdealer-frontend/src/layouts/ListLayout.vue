<template functional>
  <div class="list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-gap: $small-space;
  padding: $small-space;
}

@media (min-width: $medium-breakpoint) {
  .list {
    grid-gap: $medium-space;
    padding: $medium-space;
  }
}
</style>
