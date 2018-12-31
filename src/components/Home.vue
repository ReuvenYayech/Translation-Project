<template>
  <div class="hello">
    <input type="button" value="Google Authentication" @click="openGoogleAuth">
    <input type="text" v-model="token" placeholder="Enter the code from that page here:">
    <input type="button" value="Save Token" @click="saveToken">
  </div>
</template>

<script>
export default {
  data() {
    return {
      token:""
    }
  },
  methods: {
    openGoogleAuth() {
       this.$store.dispatch('authentication/openGoogleAuth')
    },
       
    saveToken() {
      this.$store.dispatch('authentication/saveToken',this.token)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
