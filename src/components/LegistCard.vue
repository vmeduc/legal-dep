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
      <md-button @click="active = true">Consultation</md-button>
      <md-button>Chat</md-button>
    </md-card-actions>

    <md-dialog
      :md-active.sync="active"
      v-model="value"
    >
      <md-field>
        <label>Last name</label>
        <md-input type="text" v-model="value"></md-input>
      </md-field>
    </md-dialog>

  </md-card>
</template>

<script lang="ts">
import { Legist } from "@/store/legists/types";
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";

@Component
export default class LegistCard extends Vue {

  @Prop() legist!: Legist;
  
  public active = false;
  public value?: string = undefined;
}
</script>

<style>

</style>