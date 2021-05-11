<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-25">
      <div class="md-layout md-gutter md-alignment-center">
        <div class="md-layout-item md-size-100">
          <form>
            <md-card>
              <md-card-header>
                <div v-if="this.$route.fullPath.includes('/login')" class="md-title" style="text-align: center">
                  Authorization
                </div>
                <div v-if="this.$route.fullPath.includes('/registration')" class="md-title" style="text-align: center">
                  Registration
                </div>
              </md-card-header>
              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-size-100">
                    <md-field>
                      <label>Name</label>
                      <md-input type="text" v-model="requestParams.name"></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-100">
                    <md-field>
                      <label>Password</label>
                      <md-input type="password" v-model="requestParams.password"></md-input>
                    </md-field>
                  </div>
                  <div v-if="this.$route.fullPath.includes('/registration')" class="md-layout-item md-size-100">
                    <md-field>
                      <label>First name</label>
                      <md-input type="text" v-model="requestParams.firstName"></md-input>
                    </md-field>
                  </div>
                  <div v-if="this.$route.fullPath.includes('/registration')" class="md-layout-item md-size-100">
                    <md-field>
                      <label>Last name</label>
                      <md-input type="text" v-model="requestParams.lastName"></md-input>
                    </md-field>
                  </div>
                  <div v-if="this.$route.fullPath.includes('/registration')" class="md-layout-item md-size-100">
                    <md-field>
                      <label>Email</label>
                      <md-input type="email" v-model="requestParams.email"></md-input>
                    </md-field>
                  </div>
                </div>
                
              </md-card-content>
              <md-card-actions>
                <div class="md-layout md-gutter md-alignment-center">
                  <md-button v-if="this.$route.fullPath.includes('/login')" class="md-primary md-raised btn" @click="onClickLogin">
                    Log in
                  </md-button>
                  <md-button v-if="this.$route.fullPath.includes('/registration')" class="md-primary md-raised btn" @click="onClickRegistration">
                    Sign up
                  </md-button>
                </div>
              </md-card-actions>
            </md-card>
          </form>
        </div>
        <div v-if="this.$route.fullPath.includes('/login')" class="md-layout-item md-size-100">
          <div class="md-layout md-alignment-center">
            <div class="md-layout-item md-size-100">
              <div style="margin-top: 15%; text-align: center;">
                <span class="md-subheading">Not registered?</span>
              </div>
            </div>
            <div class="md-layout md-alignment-center">
              <md-button class="md-primary md-raised btn" @click="onClickSignup">
                Sign Up
              </md-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">

// import { AuthRequest } from "@/store/auth/types";
import { Component, Vue } from "vue-property-decorator";
import { Action } from "vuex-class";

@Component
export default class Auth extends Vue {

  @Action("login") actionLogin: any;
  @Action("registration") actionRegistration: any;

  created() {
    console.log(this.$route.fullPath);
  }

  private requestParams: any = {
    name: undefined,
    password: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  };

  async onClickLogin() {
    const response = await this.actionLogin(this.requestParams);
    if (response.status === 200) {
      this.$router.push("/");
    }
  }

  async onClickRegistration() {
    const response = await this.actionRegistration(this.requestParams);
    if (response.status === 201) {
      this.$router.push("/login?success");
    }
  }

  onClickSignup() {
    this.$router.push("/registration");
  }
}
</script>

<style scoped>

</style>