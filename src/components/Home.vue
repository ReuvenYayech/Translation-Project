<template>
  <div class="hello">
    <input type="button" value="Google Authentication" @click="openGoogleAuth">
    <input type="text" v-model="token" placeholder="Enter the code from that page here:">
    <input type="button" value="Save Token" @click="saveToken">
    <loading ></loading>

  </div>
</template>

<script>
import Loading from '@/components/Loading.vue' 

export default {
  components: {
    'loading':Loading
   },
  data() {
    return {
      token:""
    }
  },
  methods: {
   
    openGoogleAuth() {
      
      this.$eventBus.$emit('show-loading');
      this.$store.dispatch('authentication/openGoogleAuth')
      this.$eventBus.$emit('show-loading');
    },
       
    saveToken() {
      this.$store.dispatch('authentication/saveToken',
      {token:this.token})
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
