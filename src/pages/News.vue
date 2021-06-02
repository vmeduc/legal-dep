<template>
  <div class="md-layout">
    <div class="md-layout-item"></div>
    <div class="md-layout-item md-size-40">
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
      <NewsItem></NewsItem>
    </div>
    <div class="md-layout-item"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NewsItem from '@/components/NewsItem.vue';

@Component({ components: {NewsItem} })
export default class News extends Vue {

}
</script>