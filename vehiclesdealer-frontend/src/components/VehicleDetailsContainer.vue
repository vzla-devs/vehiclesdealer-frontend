<template>
  <div class="container">
    <list-layout>
      <v-card class="card">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="headline">
              AUDI R8 COUPE
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-img
          src="https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
        />
        <v-card-text>
          Visit ten places on our planet that are undergoing the biggest changes today.
        </v-card-text>
        <v-card-actions>
          <v-btn
            text
            color="deep-purple accent-4"
          >
            Read
          </v-btn>
          <v-btn
            text
            color="deep-purple accent-4"
          >
            Bookmark
          </v-btn>
          <v-spacer />
          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-card class="card" />
    </list-layout>
  </div>
</template>

<script>
import ListLayout from '@/layouts/ListLayout.vue'
import VehicleCard from '@/components/VehicleCard.vue'

export default {
  components: {
    ListLayout
  },
  props: {
    id: { type: String, required: true }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
}
.card {
  display: grid;
}
</style>
