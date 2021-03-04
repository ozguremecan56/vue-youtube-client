<template>
  <div v-if="video">
    <div class="embed-responsive embed-responsive-16by9">
      <iframe class="embed-responsive-item" v-bind:src="videoUrl" />
    </div>
    <div class="details">
      <h4>{{ video.snippet.title }}</h4>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: ["video"],
  computed: {
    videoUrl() {
      const videoId = this.video.id.videoId;
      return "https://www.youtube.com/embed/" + videoId;
    },
  },
};

//in the template, vue interprets video's "null" value as false so v-if deletes the div from html
</script>

<style scoped>
.details {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>