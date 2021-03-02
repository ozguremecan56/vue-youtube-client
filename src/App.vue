<template>
    <div class="container">
        <SearchBar v-on:termChange = "onTermChange"></SearchBar>
        <VideoList v-bind:videos="videos"></VideoList>
    </div>
</template>
<script>
import SearchBar from './components/SearchBar';
import axios from 'axios';
import VideoList from './components/VideoList'
const API_KEY = 'AIzaSyBogdJNBjo8YlrFKabUQ945kXJD4Z-d7tk';

export default{
    name:'App',
    components:{
        SearchBar,
        VideoList
    },
    data(){
        return {
            videos: [],

        };
    },
    methods:{
       async onTermChange(searchTerm){
            console.log(searchTerm)
            const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
                params:{
                    key: API_KEY,
                    type: 'video',
                    part: 'snippet',
                    q: searchTerm
                }
            })

            this.videos = response.data.items;
            
        }

    }

}

</script>
