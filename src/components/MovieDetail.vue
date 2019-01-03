<template>
	<div class="container">
		<div class="info_item" v-if="item">
			<div><span>Title:</span> {{ item.title }}</div>
		</div>
		<router-link to="/" class="back_btn">Back to main page</router-link>
	</div>
</template>


<script>	

export default {
	name: 'MovieDetail',
	data() {
		return {
			items: [],
			item: null
		}
	},
	created() {
		var itemID = this.$route.params['id']

		this.item = this.items[itemID]
	},
}

</script>