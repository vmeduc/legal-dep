<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-25">
      <form>
        <md-card>
          <md-card-header>
            <div class="md-title" style="text-align: center">
              Authorization
            </div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Email</label>
                  <md-input type="text" v-model="authParameters.email"></md-input>

                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Password</label>
                  <md-input type="password" v-model="authParameters.password"></md-input>

                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <div class="md-layout md-gutter md-alignment-center">
              <md-button class="md-primary md-raised" @click="onClickLogin">
                Login
              </md-button>
            </div>
          </md-card-actions>
        </md-card>
      </form>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">

import { AuthRequest } from "@/store/auth/types";
import {Component, Vue} from "vue-property-decorator";
import {Action} from "vuex-class";

@Component
export default class Auth extends Vue {

  @Action("login") actionLogin: any;

  private authParameters: AuthRequest = {
    email: undefined,
    password: undefined,
  };

  async onClickLogin() {
    const response = await this.actionLogin(this.authParameters);
    if (response.status === 200) {
      this.$router.push("/");
    }
  }
}
</script>