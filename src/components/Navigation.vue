<template>
  <div class="md-toolbar main-header md-elevation-2">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <span class="md-headline">
          Legal Department
        </span>
        <template v-if="isAuth">
          <router-link to="/">
            <md-button>news</md-button>
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
        <div v-if="isAuth" style="color: green;">
          <h3>{{ userName }}</h3>
        </div>
        <div v-if="isAuth" style="margin-right: 2%;">
          <md-button class="md-icon-button" @click="$router.push(`/profile/${userName}`)">
            <md-icon>person</md-icon>
          </md-button>
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

  get userName() {
    return this.user ? this.user.name : 'none';
  }

  exit() {
    this.actionLogout();
  }
}
</script>

<style>
.md-headline {
  margin-left: 20px;
  margin-right: 30px;
}
</style>