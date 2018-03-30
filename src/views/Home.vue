<template>
  <div class="home wrapper">
    <div class="sidebar">
      <datepicker placeholder="Start Date"></datepicker>
      
      <datepicker placeholder="End Date"></datepicker>

      <v-select :options="books"></v-select>
      
      <v-select :options="countries"></v-select>
      
    </div>

    <div class="header">
      <h1>Singings!</h1>
    </div>

    <div class="list-holder">
      <p v-for="i in 10" :key="i">{{ i*i }}</p>
    </div>
  </div>
</template>

<style>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 3fr;
}

.sidebar {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 5;
  background-color: lightpink;
}

.header {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: lightblue;
}

.list-holder {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 5;
  background-color: lightgoldenrodyellow;
}
</style>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Datepicker from 'vuejs-datepicker';


export default {
  name: "home",
  data: () => ({
    books: ['Denson Sacred Harp', 'Shenandoah Harmony', 'Christian Harmony', 'Cooper Sacred Harp'],
    bookSelected: '',
  }),
  components: {
    Datepicker,
  }
};
</script>
