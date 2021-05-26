<template>
  <md-dialog
    :md-active.sync="isDialogActive"
  >
    <div class="dialog">
      <div class="md-layout" style="margin: 5%;">
        <div class="md-layout-item md-size-100" style="margin: 1%">
          <span class="md-headline" style="color: grey;">
            Describe the topic and choose the time
          </span>
        </div>
        <div class="md-layout-item md-size-100">
          <md-field>
            <md-icon>subject</md-icon>
            <label>Subject</label>
            <md-textarea md-autogrow type="text" v-model="value.subject"></md-textarea>
          </md-field>
        </div>
        <div class="md-layout-item md-size-100">
          <md-datepicker v-model="value.date">
            <label>Date</label>
          </md-datepicker>
        </div>
        <div class="md-layout-item md-size-100">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>hours</label>
                <md-input type="number" default="0"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>seconds</label>
                <md-input type="number"></md-input>
              </md-field>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout" style="margin: 5%;">
        <div class="md-layout md-alignment-top-left">
          <md-button class="md-primary md-raised" @click="isDialogActive = false" style="height: 5vh; width: 9vw;">
            Close
          </md-button>
        </div>
        <div class="md-layout md-alignment-top-right">
          <md-button class="md-primary md-raised" style="height: 5vh; width: 9vw;">
            Submit
          </md-button>
        </div>
      </div>
    </div>
  </md-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, PropSync } from "vue-property-decorator";
 
@Component({ components: {} })
export default class Dialog extends Vue {
  
  @PropSync('active') isDialogActive!: boolean;

  value = {

  };

}
</script>

<style lang="scss" scoped>
.dialog {
  width: 35vw;
}
.md-headline {
  margin: 0;
}
</style>