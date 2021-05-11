<template>
  <div class="md-toolbar main-header md-elevation-2">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <span class="md-headline">
          Legal Department
        </span>
        <template v-if="isAuth">
          <router-link to="/">
            <md-button>home</md-button>
          </router-link>
          <router-link to="/legists">
            <md-button>legists</md-button>
          </router-link>
          <router-link to="/chat">
            <md-button>chat</md-button>
          </router-link>
        </template>
      </div>
      <div class="md-toolbar-section-end">
        <div style="margin-right: 3%; color: green;">
          <h3>{{ this.user ? this.user.name : '' }}</h3>
        </div>
        <router-link v-if="isAuth" to="/login">
          <md-button class="md-icon-button" @click="exit()">
            <md-icon>exit_to_app</md-icon>
          </md-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import { Action, Getter } from "vuex-class";
import {Component, Vue} from "vue-property-decorator";
import { User } from "@/store/auth/types";

@Component
export default class Navigation extends Vue {

  @Getter("isAuthenticated") isAuth: any;
  @Getter("user") user?: User;

  @Action("logout") actionLogout: any;

  exit() {
    this.actionLogout();
  }

  created() {
    console.log(this.user);
  }
}
</script>

<style>
.md-headline {
  margin-left: 20px;
  margin-right: 30px;
}
</style>