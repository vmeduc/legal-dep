<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-card-header-text>
        <div class="md-title"> {{ legist.name }} </div>
        <div class="md-subhead">{{ legist.email }}</div>
      </md-card-header-text>

      <md-card-media>
        <img src="@/assets/default.jpg" alt="Avatar">
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button @click="isDialogActive = true">Consultation</md-button>
      <md-button @click="$router.push('/chat')">Chat</md-button>
    </md-card-actions>

    <md-dialog
      :md-active.sync="isDialogActive"
    >
      <div class="md-layout" style="margin: 4%;">
        <div class="md-layout-item">
          <md-field>
            <md-icon>subject</md-icon>
            <label>Subject</label>
            <md-input type="text" v-model="value.subject"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-100">
          <datetime v-model="value.date">
            <label>Date</label>
          </datetime>
        </div>
      </div>
      <div class="md-layout" style="margin: 4%;">
        <div class="md-layout md-alignment-top-left">
          <md-button class="md-primary md-raised" @click="isDialogActive = false">
            Close
          </md-button>
        </div>
        <div class="md-layout md-alignment-top-right">
          <md-button class="md-primary md-raised">
            Submit
          </md-button>
        </div>
      </div>
    </md-dialog>

  </md-card>
</template>

<script lang="ts">
import { Legist } from "@/store/legists/types";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
import { Datetime } from "vue-datetime";
 
@Component({ components: {Datetime} })
export default class LegistCard extends Vue {

  @Prop() legist!: Legist;
  
  isDialogActive = false;
  value = {

  };
}
</script>

<style scope>
</style>