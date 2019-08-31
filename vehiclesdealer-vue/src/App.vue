<template>
  <div>
    <router-view />
    <error-banner
      v-if="showError"
      class="error-message"
      :message="errorMessage"
      @onClose="onCloseErrorMessage"
    />
  </div>
</template>

<script>
import { ERROR_MESSAGE } from '@/store/getters/getterTypes'
import { CLEAR_MESSAGE } from '@/store/actions/actionTypes'
import { mapGetters, mapActions } from 'vuex'
import { MESSAGE_TYPES } from '@/constants/enums'
import ErrorBanner from '@/components/basic/ErrorBanner'

export default {
  components: {
    ErrorBanner
  },
  computed: {
    ...mapGetters({
      error: ERROR_MESSAGE
    }),
    errorMessage () {
      return this.error.message
    },
    showError () {
      return this.error.show
    }
  },
  methods: {
    ...mapActions({
      clearMessage: CLEAR_MESSAGE
    }),
    onCloseErrorMessage () {
      this.clearMessage(MESSAGE_TYPES.ERROR)
    }
  }
}
</script>
