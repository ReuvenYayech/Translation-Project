<template>
  <div class="setting">
    <h1>Set Sheet Id</h1>
    <input v-model="sheetid" placeholder="edit me">
    <button class="btn-sheet-id" @click="saveSheet(sheetid)">Click me !</button>
    <ul class="message-list" ref="list">
      <li v-for="(sheet) in sheets">{{ sheet.id }} - {{ sheet.name }} - {{ sheet.isValid }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "setting",
  computed: {
    sheets(){
      return this.$store.state.b.sheets;
    }
    
  },
  data: () => {
    return {
      sheetid: ""
    };
  },
  created() {
     console.log("created");
  },
  watch: {
    sheetid() {
      console.log("watch");
    }
  },
  methods: {
     saveSheet({id:sheetid}){
        this.$store.dispatch('saveSheet',sheetid)
     }
  
  }
};
</script>

<style>
.message-list {
  border: 1px solid #ccf;
  font-size: 16px;
  height: 400px;
  margin: 0;
  overflow-y: auto;
  padding: 0;
}
</style>

