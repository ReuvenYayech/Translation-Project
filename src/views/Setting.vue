<template>
  <div class="setting">
    <h1>Set Sheet Id</h1>
    <input v-model="sheetid" placeholder="edit me">
    <button class="btn-sheet-id" @click="SetSheetId">Click me !</button>
     <ul class="message-list" ref="list">
     <li v-for="sheetId in SheetIds">
    {{ sheetId.id }} - {{ sheetId.name }} - {{ sheetId.isValid }}
  </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "setting",
  computed: {
    SheetIds() {
      return this.$store.getters.getSheetIds;
    }
  },
  data: () => {
    return {
      sheetid: ""
    };
  },
  methods:{ 
    SetSheetId(){
      var sheet = {
                   id:this.sheetid,
                   name:"V-"+this.sheetid,
                   version:"1.1.95",
                   isValid:false,
                   date:"22/03/2016 14:03:01"
                   }

      this.$store.dispatch('saveFile',sheet)
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

