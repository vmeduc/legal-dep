<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <md-card>
        <md-card-header>
          <div class="md-title">User profile</div>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>First Name</label>
                <md-input id="first-name" :disabled="true">
                  
                </md-input>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Last name</label>
                <md-input id="last-name" :disabled="true"/>
              </md-field>
            </div>
          </div>
        </md-card-content>
      </md-card>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { User } from '@/store/auth/types';
import { Component, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';


@Component
export default class Profile extends Vue {
  
  @Action("getUser") actionGetUser: any;

  @Getter("user") user!: User;

  created() {
    this.actionGetUser();
  }
}
</script>