<template>
  <div class="container">
    <SearchBar v-on:termChange="onTermChange"></SearchBar>
    <VideoDetail v-bind:video="selectedVideo" />
    <VideoList
      v-bind:videos="videos"
      v-on:videoSelect="onVideoSelect"
    ></VideoList>
  </div>
</template>
<script>
import SearchBar from "./components/SearchBar";
import axios from "axios";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
const API_KEY = "AIzaSyDsC12dNIPFiEGNPUUFYyK1HNUH9RFU-CY";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data() {
    return {
      videos: [],
      selectedVideo: null,
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      console.log(searchTerm);
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm,
          },
        }
      );
      this.videos = response.data.items;
    },
    onVideoSelect(video) {
      this.selectedVideo = video;
    },
  },
};
</script>
