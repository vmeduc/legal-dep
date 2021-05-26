<template>
  <div>
    <Dialog :active.sync="isDialogActive"></Dialog>
    <md-card md-with-hover>
      <md-ripple>
        <div @click="$router.push(`/profile/${legist.name}`)">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title"> {{ legist.name }} </div>
              <div class="md-subhead">{{ legist.email }}</div>
            </md-card-header-text>
            <md-card-media>
              <img src="@/assets/default.jpg" alt="Avatar">
            </md-card-media>
          </md-card-header>
        </div>
        <md-card-actions>
          <md-button @click="isDialogActive = true">Consultation</md-button>
          <md-button @click="$router.push('/chat')">Chat</md-button>
        </md-card-actions>
      </md-ripple>
    </md-card>
  </div>
</template>

<script lang="ts">
import { Legist } from "@/store/legists/types";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import TimeSelector from "@/components/TimeSelector.vue";
import Dialog from "@/components/Dialog.vue";
 
@Component({ components: {TimeSelector, Dialog} })
export default class LegistCard extends Vue {

  @Prop() legist!: Legist;
  
  isDialogActive = false;
  // value = {

  // };

}
</script>

<style lang="scss" scoped>
.dialog {
  width: 35vw;
}
</style>