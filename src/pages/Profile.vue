<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-40">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">User profile</div>
          </md-card-header-text>
          <md-card-media md-medium>
            <img src="@/assets/default.jpg" alt="User picture">
          </md-card-media>
        </md-card-header>
        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Login</label>
                <md-input id="name" :disabled="!isEditable" v-model="user.name"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Email</label>
                <md-input id="email" :disabled="!isEditable" v-model="user.email"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>First Name</label>
                <md-input id="first-name" :disabled="!isEditable" v-model="user.firstName"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Last name</label>
                <md-input id="last-name" :disabled="!isEditable" v-model="user.lastName"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Gender</label>
                <md-input id="gender" :disabled="!isEditable" v-model="user.gender"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Locale</label>
                <md-input id="locale" :disabled="!isEditable" v-model="user.locale"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-50">
              <md-field>
                <label>Last visit</label>
                <md-input id="last-visit" :disabled="!isEditable" v-model="user.lastVisit"/>
              </md-field>
            </div>
            <div v-if="isEditable" class="md-layout-item md-size-50">
              <md-field>
                <label>Password</label>
                <md-input id="password" type="password" v-model="user.password"/>
              </md-field>
            </div>
          </div>
        </md-card-content>
        <md-card-actions md-alignment="space-between">
          <md-button v-if="!isEditable" @click="isEditable = true">edit</md-button>
          <md-button v-if="isEditable" @click="isEditable = false">back</md-button>
          <md-button v-if="isEditable" @click="onClickSave">save</md-button>
        </md-card-actions>
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
  @Action("editUser") actionEditUser: any;

  @Getter("user") user!: User;
  
  isEditable = false;

  onClickSave() {
    this.actionEditUser();
  }

  created() {
    this.actionGetUser();
  }
}
</script>