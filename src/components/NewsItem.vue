<template>
  <md-card>
    <md-card-header>
      <md-avatar class="md-large">
        <img src="@/assets/default.jpg" alt="Avatar">
      </md-avatar>
      <md-card-header-text>
        <div class="md-title">Legist</div>
        <div class="md-subhead">2020-01-01</div>
      </md-card-header-text>
    </md-card-header>
    <md-card-content>
      <span class="md-title">News topic</span>
      <p>Some news content. Some news content. Some news content. Some news content. Some news content. Some news content. </p>
      <p>Some news content. Some news content. Some news content. Some news content. Some news content. Some news content. Some news content. Some news content. Some news content. </p>
    </md-card-content>
  </md-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator';

@Component
export default class NewsItem extends Vue {
  
}
</script>

<style lang="scss" scoped>

</style>