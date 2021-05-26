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
            <md-textarea md-autogrow type="text" v-model="request.request_text"></md-textarea>
          </md-field>
        </div>
        <div class="md-layout-item md-size-100">
          <md-datepicker v-model="request.date">
            <label>Date</label>
          </md-datepicker>
        </div>
        <div class="md-layout-item md-size-100">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>hours</label>
                <md-input type="number" v-model="tmpDate.hours"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>seconds</label>
                <md-input type="number" v-model="tmpDate.seconds"></md-input>
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
          <md-button class="md-primary md-raised" @click="onSubmit" style="height: 5vh; width: 9vw;">
            Submit
          </md-button>
        </div>
      </div>
    </div>
  </md-dialog>
</template>

<script lang="ts">
import { User } from "@/store/auth/types";
import Vue from "vue";
import { Component, PropSync } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
 
@Component({ components: {} })
export default class Dialog extends Vue {
  
  @PropSync('active') isDialogActive!: boolean;

  @Action('createRequest') actionCreateRequest: any;

  @Getter('user') user!: User;

  request = {

  };

  tmpDate = {
    hours: 0,
    seconds: 0,
  };

  onSubmit() {
    this.request = {};
    this.tmpDate.hours = 0;
    this.tmpDate.seconds = 0;
    this.isDialogActive = false;
    alert('Request has been sent');
  }

}
</script>

<style lang="scss" scoped>
.dialog {
  width: 40vw;
}
.md-headline {
  margin: 0;
}
</style>