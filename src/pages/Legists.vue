<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <div class="md-layout">
        <div v-for="legist in legistsList" :key="legist.id" class="md-layout-item md-size-50">
          <legist-card :legist="legist"/>
        </div>
        <legist-card :legist="temp"></legist-card>
      </div>

    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Action, Getter } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
import { Legist } from "@/store/legists/types";
import LegistCard from "@/components/LegistCard.vue";

@Component({ components: {LegistCard} })
export default class Legists extends Vue {

  @Action("getLegists") actionGetLegists: any;

  @Getter("legists") legistsList!: Legist[];

  temp: Legist = {
    id: 'jj1',
    name: 'vlad',
    firstName: 'Vlad',
    lastName: 'Vovis',
    email: 'v@mail.com',
  }

  created() {
    this.actionGetLegists();
  }
}
</script>