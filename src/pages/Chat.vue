<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-25">
      <md-card>
        <md-card-content>
          <h2 style="text-align: center; color: blue;">Chat</h2>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Chat extends Vue {

}
</script>