<template>
  <ul class="list-group">
    <VideoListItem
      v-for="video in videos"
      v-bind:key="video.etag"
      v-bind:video="video"
      v-on:videoSelected="onVideoSelect"
    >
    </VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "./VideoListItem";
export default {
  name: "VideoList",
  props: ["videos"],
  components: {
    VideoListItem,
  },
  methods: {
    onVideoSelect(video) {
      this.$emit("videoSelect", video);
    },
  },
};
</script>

<style>
</style>