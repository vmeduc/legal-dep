<template>
  <div>
    <navigation/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";

@Component({
  components: {Navigation}
})
export default class App extends Vue {
  

  
}
</script>

<style>
.md-card {
  margin-top: 10%;
}
/* .stl {
  background-color: #f3ece5;
}
.stl2 {
  background-color: #e2d4c6;
} */
</style>