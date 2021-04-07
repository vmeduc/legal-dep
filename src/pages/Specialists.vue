<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <div class="md-layout">
        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-card-header>
              <md-avatar>
                <img src="../assets/eva.jpg" alt="Avatar">
              </md-avatar>
              <div class="md-title">Specialist 1</div>
            </md-card-header>

            <md-card-content>
              Some info about specialist 1
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-card-header>
              <md-avatar>
                <img src="../assets/avatar.png" alt="Avatar">
              </md-avatar>
              <div class="md-title">Specialist 2</div>
            </md-card-header>

            <md-card-content>
              Some info about specialist 2
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
        <div class="md-layout-item md-size-50">
          <md-card md-with-hover>
            <md-card-header>
              <md-avatar>
                <img src="../assets/avatar-2.jpg" alt="Avatar">
              </md-avatar>
              <div class="md-title">Specialist 3</div>
            </md-card-header>

            <md-card-content>
              Some info about specialist 3
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
        <div class="md-layout-item md-size-50">
          <md-card md-with-hover @click="openSpecialist = true">
            <md-card-header>
              <md-avatar>
                <img src="../assets/cat.jpg" alt="Avatar">
              </md-avatar>
              <div class="md-title">Specialist 4</div>
            </md-card-header>

            <md-card-content>
              Some info about specialist 4
            </md-card-content>
            <md-card-actions>
              <md-button>Action</md-button>
            </md-card-actions>
          </md-card>
        </div>
      </div>
      <template>
        <div>
          <md-dialog-alert
            :md-active.sync="openSpecialist"
            md-title="Post created!"
            md-content="Your post <strong>Material Design is awesome</strong> has been created." />
        </div>
      </template>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Action } from 'vuex-class';
import { Component, Vue } from 'vue-property-decorator';


@Component
export default class Specialists extends Vue {

  @Action("getLegists") actionGetLegists: any;

  openSpecialist = false;

  created() {
    this.actionGetLegists();
  }
}
</script>