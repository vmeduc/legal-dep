<template>
  <div>
    <md-card>
      <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar style="background: #f3f3f3;">
          <span class="md-title">{{this.name}}</span>
        </md-app-toolbar>

        <md-app-drawer md-permanent="full">
          <md-toolbar class="md-transparent" md-elevation="0">
            Dialogs
          </md-toolbar>

          <md-list>
            <md-list-item @click="name = 'legist1'">
              <md-avatar>
                <img src="@/assets/default.jpg" alt="Avatar">
              </md-avatar>
              <span class="md-list-item-text">legist1</span>
            </md-list-item>

            <md-list-item @click="name = 'legist2'">
              <md-avatar>
                <img src="@/assets/default.jpg" alt="Avatar">
              </md-avatar>
              <span class="md-list-item-text">legist2</span>
            </md-list-item>

            <md-list-item @click="name = 'legist3'">
              <md-avatar>
                <img src="@/assets/default.jpg" alt="Avatar">
              </md-avatar>
              <span class="md-list-item-text">legist3</span>
            </md-list-item>

            <md-list-item @click="name = 'legist4'">
              <md-avatar>
                <img src="@/assets/default.jpg" alt="Avatar">
              </md-avatar>
              <span class="md-list-item-text">legist4</span>
            </md-list-item>
          </md-list>
        </md-app-drawer>

        <md-app-content>
          
        </md-app-content>
      </md-app>
    </md-card>
  </div>
</template>

<script lang="ts">
import { Component } from "vue-property-decorator";
import Vue from "vue";

@Component
export default class Chat extends Vue {

  name = '';

}
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 60vh;
    border: 1px solid rgba(#000, .12);
  }

   // Demo purposes only
  .md-drawer {
    width: 300px;
    max-width: calc(100vw - 125px);
  }
</style>