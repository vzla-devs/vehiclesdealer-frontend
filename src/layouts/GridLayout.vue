<template functional>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: $small-space;
}

@media (min-width: $small-breakpoint) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}

@media (min-width: $medium-breakpoint) {
  .grid {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: $medium-space;
  }
}
</style>
