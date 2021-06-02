<template>
  <div>
    <md-card md-with-hover>

      <md-card-header>
        <md-card-header-text>
          <div class="md-title" :style="`color: ${colorStatusByCode(req.status)};`">{{textStatusByCode(req.status)}}</div>
          <div class="md-subhead">{{textDescriptionByCode(req.status)}}</div>
        </md-card-header-text>

        <md-menu md-size="big" md-direction="bottom-end" v-if="userRole==='LEGIST'">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>
          <md-menu-content>
            <md-menu-item @click="doAction(2)">
              <span>Accept</span>
              <md-icon>add</md-icon>
            </md-menu-item>
            <md-menu-item @click="doAction(3)">
              <span>Complete</span>
              <md-icon>check</md-icon>
            </md-menu-item>
            <md-menu-item @click="doAction(0)">
              <span>Reject</span>
              <md-icon>close</md-icon>
            </md-menu-item>
            <md-menu-item @click="$router.push(`/profile/${req.userId.name}`)">
              <span style="color: green;">{{ req.userId.name }}</span>
              <md-icon>person</md-icon>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </md-card-header>

      <md-card-content>
        <div class="md-subheading">Request from user <span style="color: green;">{{ req.userId.name }}</span></div>
        <div class="md-subhead">{{req.request_text}}</div>
        <div class="md-subheading" style="margin-top: 10px;">Date</div>
        <div class="md-subhead">{{req.meeting_time}}</div>
      </md-card-content>
      
    </md-card>
  </div>
</template>

<script lang="ts">
import { Req } from "@/store/reqs/types";
import { Vue, Component, Prop } from "vue-property-decorator";
import { Action, Getter } from "vuex-class";

 
@Component
export default class ConsultCard extends Vue {

  @Prop() req!: Req;

  @Action('updateReq') actionUpdateReq: any;

  @Getter("role") userRole!: string;

  async doAction(status: number) {
    const data = {
      id: this.req.id,
      req: {
        requesttext: this.req.request_text,
        status: status,
      },
    };
    const response = await this.actionUpdateReq(data);
  }

  textStatusByCode(code: number) {
    switch (code) {
      case 0:
        return 'Rejected';
      case 1:
        return 'Created';
      case 2:
        return 'Accepted';
      case 3:
        return 'Completed';
      default:
        return 'Error';
    }
  }

  colorStatusByCode(code: number) {
    switch (code) {
      case 0:
        return 'red';
      case 1:
        return 'blue';
      case 2:
        return 'green';
      case 3:
        return 'grey';
      default:
        return 'black';
    }
  }

  textDescriptionByCode(code: number) {
    switch (code) {
      case 0:
        return 'The consultation cannot take place';
      case 1:
        return 'Request for consultation submitted';
      case 2:
        return 'The consultation has been approved and is being prepared';
      case 3:
        return 'The consultation took place';
      default:
        return 'black';
    }
  }
}
</script>

<style lang="scss" scoped>
</style>