<template>
  <div>
    <navigation/>
    <loading :active="isLoading" :can-cancel="true" :is-full-page="true" color="steelblue"/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Loading from "vue-loading-overlay/dist/vue-loading.min";
import "vue-loading-overlay/dist/vue-loading.css";
import {Component, Vue} from "vue-property-decorator";
import Navigation from "@/components/Navigation.vue";
import { Action, Getter, Mutation } from "vuex-class";

@Component({
  components: {Navigation, Loading}
})
export default class App extends Vue {
  
  @Getter("isLoading") isLoading!: boolean;
  

  created() {
    return;
  }
  
}
</script>

<style>
.md-card {
  margin-top: 100px;
  margin-inline: 5%;
}
.btn {
  width: 120px;
}
/* .stl {
  background-color: #f3ece5;
}
.stl2 {
  background-color: #e2d4c6;
} */
</style>