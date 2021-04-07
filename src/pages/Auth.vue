<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-25">
      <form>
        <md-card>
          <md-card-header>
            <div v-if="this.$route.fullPath == '/login'" class="md-title" style="text-align: center">
              Authorization
            </div>
            <div v-if="this.$route.fullPath == '/registration'" class="md-title" style="text-align: center">
              Registration
            </div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Name</label>
                  <md-input type="text" v-model="authParameters.name"></md-input>
                </md-field>
              </div>
              <div class="md-layout-item md-size-100">
                <md-field>
                  <label>Password</label>
                  <md-input type="password" v-model="authParameters.password"></md-input>
                </md-field>
              </div>
              <div v-if="this.$route.fullPath == '/registration'" class="md-layout-item md-size-100">
                <md-field>
                  <label>First name</label>
                  <md-input type="text" v-model="registrationParameters.firstName"></md-input>
                </md-field>
              </div>
              <div v-if="this.$route.fullPath == '/registration'" class="md-layout-item md-size-100">
                <md-field>
                  <label>Last name</label>
                  <md-input type="text" v-model="registrationParameters.lastName"></md-input>
                </md-field>
              </div>
              <div v-if="this.$route.fullPath == '/registration'" class="md-layout-item md-size-100">
                <md-field>
                  <label>Email</label>
                  <md-input type="email" v-model="registrationParameters.email"></md-input>
                </md-field>
              </div>
            </div>
            
          </md-card-content>
          <md-card-actions>
            <div class="md-layout md-gutter md-alignment-center">
              <md-button v-if="this.$route.fullPath == '/login'" class="md-primary md-raised" @click="onClickLogin">
                Login
              </md-button>
              <md-button v-if="this.$route.fullPath == '/registration'" class="md-primary md-raised" @click="onClickRegistration">
                Sign up
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
  @Action("registration") actionRegistration: any;

  created() {
    console.log(this.$route.fullPath);
  }

  private authParameters: AuthRequest = {
    name: undefined,
    password: undefined,
  };

// RegistrationRequest
  private registrationParameters: any = {
    name: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  };

  async onClickLogin() {
    const response = await this.actionLogin(this.authParameters);
    if (response.status === 200) {
      this.$router.push("/");
    }
  }

  async onClickRegistration() {
    const response = await this.actionRegistration(this.registrationParameters);
    if (response.status === 200) {
      this.$router.push("/login&success");
    }
  }
}
</script>

<style scoped>
.md-card {
  margin-top: 15%;
}
.md-field {
  margin: 4px 0 5px
}
</style>