<template>
  <div class="loading">
    <img v-show="isLoading==true" src="../static/loader.gif" alt="HTML5 Icon">
  </div>
</template>
<script>
export default {
  name: "loading",
  data() {
    return {
      isLoading: false
    };
  },
  created() {
    this.$eventBus.$on("show-loading", () => {
      this.isLoading = this.isLoading ? false : true; 
    });
  }
};
</script>