<template>
	<view>
		<view class="news" @click="goDetail(item.id)" v-for="item in newsList" :key="item.id">
			<view class="left">
				<image :src="item.img_url"></image>
			</view>
			<view class="right">
				<view class="title">
					{{item.title}}
				</view>
				<text>发布时间 :{{item.add_time | formatDate}}</text>
				<text>浏览 :{{item.click}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			goDetail(id){
				console.log(id)
				uni.navigateTo({
					url:'../news_item/news_item?id='+id
				})
			}
		},
		filters: {
			formatDate(date) {
				const nDate = new Date(date)
				const year = nDate.getFullYear()
				const month = nDate.getMonth().toString().padStart(2, 0)
				const day = nDate.getDay().toString().padStart(2, 0)
				return year + '-' + month + '-' + day
			}
		},
		props: ['newsList']
	}
</script>

<style lang="scss">
	.news {
		display: flex;
		border: 1px solid $shop-color;

		image {
			border-radius: 30px;
			margin-right: 10rpx;
			height: 150rpx;
			width: 150rpx;
		}

		.right {
			// 弹性布局
			display: flex;
			// 让弹性盒元素在必要的时候换行
			flex-wrap: wrap;
			// 在弹性盒对象的元素中的各项周围留有空白（两边对齐，中间）
			justify-content: space-between;

			.title {
				font-size: 30rpx;
				letter-spacing: 1px;
			}

			text {
				font-size: 25rpx;
			}
		}
	}
</style>
