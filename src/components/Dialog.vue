<template>
  <md-dialog
    :md-active.sync="isDialogActive"
  >
    <div class="dialog">
      <div class="md-layout" style="margin: 5%;">
        <div class="md-layout-item md-size-100" style="margin: 1%">
          <span class="md-headline" style="color: grey;">
            Describe the topic and choose the date
          </span>
        </div>
        <div class="md-layout-item md-size-100">
          <md-field>
            <md-icon>subject</md-icon>
            <label>Subject</label>
            <md-textarea md-autogrow type="text" v-model="req.request_text"></md-textarea>
          </md-field>
        </div>
        <div class="md-layout-item md-size-100">
          <md-datepicker v-model="tmpDate">
            <label>Date</label>
          </md-datepicker>
        </div>
        <div class="md-layout-item md-size-100">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>hours</label>
                <md-input type="number" :max="24" :min="1" :value="0"></md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <md-icon>schedule</md-icon>
                <label>seconds</label>
                <md-input type="number" :max="60" :min="0" :value="0"></md-input>
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
import { Vue, Component, Prop, PropSync, Watch } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";
import { Req } from "@/store/reqs/types";
import { DateTime } from "luxon";

 
@Component({ components: {} })
export default class Dialog extends Vue {
  
  @PropSync('active') isDialogActive!: boolean;
  @Prop() legist!: User;

  @Action('createRequest') actionCreateRequest: any;
  @Action('getReqs') actionGetReqs: any;

  @Getter('user') user!: User;
  @Getter('reqs') reqs!: Req[];

  req: Req = new Req();
  tmpDate: string = DateTime.now().toFormat('yyyy-LL-dd');

  async created() {
    this.req.userSpecialistId.name = this.legist.name;
    this.req.request_text = 'Some req text2!';
    this.req.meeting_time = DateTime.now().toFormat('yyyy-LL-dd'); // HH:mm:ss
    await this.actionGetReqs();
  }

  async onSubmit() {
    // this.isDialogActive = false;
    await this.actionCreateRequest(this.req);

    this.isDialogActive = false;
    alert('Request has been sent');
  }

  @Watch('tmpDate', {immediate: true})
  onMeetingDateChanged(newV: string) {
    this.req.meeting_time = DateTime.fromISO(newV).toFormat('yyyy-LL-dd HH:mm:ss')
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