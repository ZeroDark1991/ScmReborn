<style>
  .v-link-active {

  }
  [v-cloak] {
    display: none;
  }
</style>

<template>
    <div>
        <router-view keep-alive></router-view>
    </div>  
</template>

<script>
import store from './vuex/store'
export default {
  store: store,
  data () {
    return {
      authenticating: false,
    }
  }
}
</script>
