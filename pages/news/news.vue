<template>
	<view class="content">
		<news-list @itemClick="goDetail" :newsList="newsList"></news-list>
	</view>
</template>

<script>
	import newsList from '../../components/news_list/news_list.vue'
	export default {
		data() {
			return {
				newsList: []
			};
		},
		components:{
			'news-list': newsList
		},
		onLoad() {
			this.getNewsData()
		},
		methods: {
			async getNewsData() {
				const res = await this.$myRequest({
					url: 'api/getnewslist'
				})
				this.newsList = res.data.message
				console.log(this.newsList)
			}
		}
	}
</script>

<style lang="scss">
	
</style>
