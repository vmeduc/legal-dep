<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-50">
      <div class="md-layout md-alignment-bot-center">
        <div class="md-layout-item md-size-30">
          <md-card>
            <md-list>
              <md-list-item>
                <div>
                  <md-avatar>
                    <img src="../assets/default.jpg" alt="Avatar">
                  </md-avatar>
                  legist1
                </div>
              </md-list-item>
              <md-list-item>
                <div>
                  <md-avatar>
                    <img src="../assets/default.jpg" alt="Avatar">
                  </md-avatar>
                  legist2
                </div>
              </md-list-item>
            </md-list>
          </md-card>
        </div>
              
        <div class="md-layout-item md-size-70" style="height: 300px; background: grey;">
          <div class="md-layout md-gutter md-alignment-bottom-center">
            <div class="md-layout-item md-size-100">
              <span>hello</span>
            </div>
            <div class="md-layout-item md-size-100">
              <span>hello</span>
            </div>
          </div>
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