<template>
  <div>
    <grid-layout>
      <v-card class="card">
        <v-img
          src="https://images.unsplash.com/photo-1558548724-6caa2e9f0314?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
        />
        <v-list-item>
          <v-list-item-title class="headline">
            AUDI R8 COUPE
          </v-list-item-title>
        </v-list-item>
      </v-card>
      <v-card class="card">
        <v-tabs
          v-model="tab"
          background-color="primary"
          dark
          grow
        >
          <v-tab
            :key="0"
          >
            Descripción
          </v-tab>
          <v-tab
            :key="1"
          >
            Detalles
          </v-tab>
        </v-tabs>
        <v-tabs-items v-model="tab">
          <v-tab-item
            :key="0"
          >
            <v-card flat>
              <v-card-text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor diam sit amet diam commodo pharetra vitae eget turpis. Duis ac varius quam. Cras quam turpis, porta nec egestas vel, accumsan in felis. Aliquam erat volutpat. Vestibulum non purus aliquet neque mattis cursus. Quisque eu ante ultrices, luctus neque id, tempor metus. Nulla et sodales sem, id imperdiet mi.
                Nullam pulvinar in felis nec scelerisque. Sed lobortis feugiat turpis, non aliquet sem dapibus ut. Donec in libero sed ex venenatis elementum. Proin commodo at neque a varius. Cras massa massa, suscipit id ligula sed, ultricies suscipit orci. Morbi ac lacus lectus. Duis pellentesque elit id sollicitudin lacinia. Quisque semper semper orci at finibus. Vivamus facilisis, eros quis venenatis ultrices, quam augue condimentum ipsum, id bibendum diam metus ut elit. Curabitur tempor nunc diam, sit amet malesuada enim bibendum et. Proin quis viverra magna. Donec convallis eros erat, eget tempus erat lobortis eget.
                Etiam eleifend laoreet turpis, vitae efficitur metus varius a. Proin gravida imperdiet magna, vitae gravida magna maximus eu. Nam ipsum nisl, posuere bibendum feugiat et, sollicitudin ac elit. Aliquam posuere, tellus a sollicitudin pretium, diam dolor viverra nisl, vitae venenatis turpis augue ut est. Integer ut viverra tellus. Donec fermentum et massa vel accumsan. Ut hendrerit pretium aliquam. Aliquam cursus, nibh sit amet maximus ullamcorper, purus quam aliquam elit, ac vestibulum sapien erat id neque. Pellentesque sit amet faucibus nunc. Etiam vestibulum eros quis aliquam mattis. Pellentesque eu molestie tellus. Nunc euismod cursus mi.
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item
            :key="1"
          >
            <v-card flat>
              <v-card-text class="scrolltest2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tempor diam sit amet diam commodo pharetra vitae eget turpis. Duis ac varius quam. Cras quam turpis, porta nec egestas vel, accumsan in felis. Aliquam erat volutpat. Vestibulum non purus aliquet neque mattis cursus. Quisque eu ante ultrices, luctus neque id, tempor metus. Nulla et sodales sem, id imperdiet mi.
                Nullam pulvinar in felis nec scelerisque. Sed lobortis feugiat turpis, non aliquet sem dapibus ut. Donec in libero sed ex venenatis elementum. Proin commodo at neque a varius. Cras massa massa, suscipit id ligula sed, ultricies suscipit orci. Morbi ac lacus lectus. Duis pellentesque elit id sollicitudin lacinia. Quisque semper semper orci at finibus. Vivamus facilisis, eros quis venenatis ultrices, quam augue condimentum ipsum, id bibendum diam metus ut elit. Curabitur tempor nunc diam, sit amet malesuada enim bibendum et. Proin quis viverra magna. Donec convallis eros erat, eget tempus erat lobortis eget.
                Etiam eleifend laoreet turpis, vitae efficitur metus varius a. Proin gravida imperdiet magna, vitae gravida magna maximus eu. Nam ipsum nisl, posuere bibendum feugiat et, sollicitudin ac elit. Aliquam posuere, tellus a sollicitudin pretium, diam dolor viverra nisl, vitae venenatis turpis augue ut est. Integer ut viverra tellus. Donec fermentum et massa vel accumsan. Ut hendrerit pretium aliquam. Aliquam cursus, nibh sit amet maximus ullamcorper, purus quam aliquam elit, ac vestibulum sapien erat id neque. Pellentesque sit amet faucibus nunc. Etiam vestibulum eros quis aliquam mattis. Pellentesque eu molestie tellus. Nunc euismod cursus mi.
                Nunc pellentesque pulvinar ipsum sed porttitor. Etiam consequat ornare libero, a efficitur lectus sodales nec. Aliquam non odio enim. Suspendisse congue erat non ex mollis fermentum. Nullam est mauris, vestibulum at arcu in, suscipit scelerisque nisl. In luctus convallis libero et suscipit. Aliquam lobortis varius arcu at efficitur. Curabitur quis elit rhoncus, lacinia nisl vitae, gravida elit. Vivamus et erat at urna egestas viverra eu ac erat.
                Vestibulum dignissim auctor risus, et consequat felis pulvinar id. Morbi eu pretium erat. Aenean non lacus faucibus, elementum tellus vel, malesuada eros. Nullam tempor pharetra interdum. Ut dictum, enim et imperdiet vulputate, nulla elit eleifend risus, ultricies rhoncus lorem dolor sed lectus. Aliquam erat volutpat. Quisque eu lobortis arcu. Nunc venenatis orci quis ex tristique volutpat. Vestibulum tincidunt eros in finibus consequat. Nunc id purus bibendum, tristique justo non, tempor mauris. Cras luctus tempus libero, quis ultricies mauris. Nam consectetur a urna non vestibulum.
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </grid-layout>
  </div>
</template>

<script>
import GridLayout from '@/layouts/GridLayout.vue'

export default {
  components: {
    GridLayout
  },
  props: {
    id: { type: String, required: true }
  },
  data () {
    return {
      tab: 0
    }
  }
}
</script>

<style scoped>
.card {
  display: grid;
}
.scrolltest2 {
  overflow: scroll;
}
</style>
