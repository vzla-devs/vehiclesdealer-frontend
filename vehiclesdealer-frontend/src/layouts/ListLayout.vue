<template functional>
  <div class="grid">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-gap: $small-space;
  padding: $small-space;
}
</style>
