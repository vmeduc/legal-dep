<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-40">
      <md-card>
        <md-card-header>
          <md-card-header-text>
            <div v-if="isSelf" class="md-title">User profile</div>
            <div v-else class="md-title">Legist profile</div>
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
        <md-card-actions v-if="isSelf" md-alignment="space-between">
          <md-button v-if="!isEditable" @click="isEditable = true">edit</md-button>
          <md-button v-if="isEditable" @click="isEditable = false">back</md-button>
          <md-button v-if="isEditable" @click="onClickSave">save</md-button>
        </md-card-actions>
        <md-card-actions v-else>
          <md-button v-if="true" @click="isDialogActive = true">consultation</md-button>
          <md-button v-if="true" @click="$router.push('/chat')">chat</md-button>
        </md-card-actions>
      </md-card>
      <Dialog :active.sync="isDialogActive"></Dialog>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { User } from '@/store/auth/types';
import { Component, PropSync, Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import Dialog from '@/components/Dialog.vue';

@Component({ components: {Dialog} })
export default class Profile extends Vue {
  
  isDialogActive = false;
  
  @Action("getUser") actionGetUser: any;
  @Action("editUser") actionEditUser: any;

  @Getter("user") self!: User;
  
  isEditable = false;

  user: User = new User('');

  get isSelf(): boolean {
    return this.user ? (this.$route.params.name === this.self.name) : false;
  }

  onClickSave() {
    this.actionEditUser();
  }

  async created() {
    const resp = await this.actionGetUser(this.$route.params.name);
    this.user = resp.data;
  }

}
</script>