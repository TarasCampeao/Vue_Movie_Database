import VueRouter from 'vue-router'
import MovieDetail from './components/MovieDetail.vue'
import MovieList from './components/MovieList.vue'
import ErrorPage from './components/ErrorPage.vue'


export default new VueRouter ({
	mode: 'history',
	routes: [
		{path: '/', component: MovieList },
		{path: '/detail/:id', name: 'item', component: MovieDetail },
		{path: '*', component: ErrorPage }
	]
})
