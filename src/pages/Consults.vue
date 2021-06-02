<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <div class="md-layout">
        <div class="md-layout-item md-size-50" v-for="req in reqs" :key="req.id">
          <ConsultCard :req="req"/>
        </div>
      </div>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import ConsultCard from "@/components/ConsultCard.vue";
import { Action, Getter } from "vuex-class";
import { Req } from "@/store/reqs/types";
 
@Component({ components: {ConsultCard} })
export default class Consults extends Vue {

  @Action('getReqs') actionGetReqs: any;

  @Getter('reqs') reqs!: Req[];

  created() {
    this.actionGetReqs();
  }


}
</script>

<style lang="scss" scoped>

</style>