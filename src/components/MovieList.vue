<template>
	<div class="main-block container">
		<h1>Movie List</h1>
		<ul class="film_list">
			<li v-for="(item, index) in items.results" :key="item.id">
				<div class="film_poster img_size">
					<img :src="imageUrl + item.poster_path" alt=""/>
				</div>
				<div class="about_film">
					<h2>{{ item.title }} ({{ item.release_date | sliceDate }})</h2>
					<div class="desc_item">{{ item.overview }}</div>
					<router-link class="more_btn tc" :to="{ name: 'item', params: { id: index }, query: {id: item.id } }">Read more</router-link>
				</div>
			</li>
		</ul>
	</div>
</template>


<script>
import MovieDetail from '../components/MovieDetail.vue'

export default {
	name: 'MovieList',
	components: {
		MovieDetail,
	},
	data() {
		return {
			items: [],
			baseUrl: 'https://api.themoviedb.org/3',
			apiKey: '1b62ccff88d2cd537027e1d82920197b',
			imageUrl: 'https://image.tmdb.org/t/p/w342',
			//loaded: true
		}
	},
    created: function() {
        this.fetchData();
    },
    methods: {
        fetchData: function() {
            this.$http.get(this.baseUrl + '/discover/movie?api_key=' + this.apiKey + '&sort_by=popularity.desc').then(response => {
                this.items = response.body;
                this.loaded = false;
            });
        }
    },
    filters: {
    	sliceDate(value) {
    		return `${value.slice(0, 4)}`
    	}
    }
}

</script>