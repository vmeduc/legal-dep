<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <div class="md-layout">
        <div class="md-layout-item md-size-30">
          <md-card>
            <md-list style="height: 300px;">
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/eva.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist1
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/avatar.png" alt="Avatar">
                  </md-avatar>
                  Specialist2
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/avatar-2.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist3
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/cat.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist4
                </div>
              </md-list-item>
            </md-list>
          </md-card>
        </div>
        <div class="md-layout-item md-size-70">
          <md-card style="height: 300px;">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                some
              </div>
              <div class="md-layout-item md-size-10"></div>
              <div class="md-layout-item md-size-80">
                <md-field md-inline>
                <label>Inline</label>
                <md-input v-model="inline"></md-input>
              </md-field>
              </div>
              <div class="md-layout-item md-size-10"></div>
            </div>
          </md-card>
        </div>
<div class="md-layout-item md-size-30">
          <md-card>
            <md-list style="height: 300px;">
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/eva.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist1
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/avatar.png" alt="Avatar">
                  </md-avatar>
                  Specialist2
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/avatar-2.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist3
                </div>
              </md-list-item>
              <md-list-item @click="some">
                <div>
                  <md-avatar>
                    <img src="../assets/cat.jpg" alt="Avatar">
                  </md-avatar>
                  Specialist4
                </div>
              </md-list-item>
            </md-list>
          </md-card>
        </div>
        <div class="md-layout-item md-size-70">
          <md-card style="height: 300px;">
            <div class="md-layout">
              <div class="md-layout-item md-size-100">
                some
              </div>
              <div class="md-layout-item md-size-10"></div>
              <div class="md-layout-item md-size-80">
                <md-field md-inline>
                <label>Inline</label>
                <md-input v-model="inline"></md-input>
              </md-field>
              </div>
              <div class="md-layout-item md-size-10"></div>
            </div>
          </md-card>
        </div>
      </div>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Chat extends Vue {

}
</script>

<style scoped>

</style>