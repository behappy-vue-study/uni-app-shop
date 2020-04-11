<template>
	<view class="content">
		<scroll-view class="left" scroll-y>
			<view :class="activeIndex==index?'active':''" @click="getIndex(index,item.id)"  v-for="(item, index) in cates" :key="index">{{item.title}}</view>
		</scroll-view>
		<scroll-view class="right" scroll-y>
			<view class="" v-for="item in images" :key="item.id">
				<image @click="preview(item.img_url)" :src="item.img_url"></image>
				<text>{{item.title}}</text>
			</view>
			<text v-if="images.length == 0">暂无数据</text>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cates: [],
				activeIndex: 0,
				images: []
			};
		},
		onLoad() {
			this.getData()
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
					url: 'api/getimgcategory'
				})
				this.cates = res.data.message
				this.getIndex(this.activeIndex,this.cates[0].id)
			},
			async getIndex(index, id) {
				this.activeIndex = index
				const res = await this.$myRequest({
					url: 'api/getimages/' + id
				})
				this.images = res.data.message
			},
			preview(current){
				const urls = []
				this.images.forEach((item,index)=>{
					urls.push(item.img_url)
				})
				uni.previewImage({
					current,
					urls
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
	}

	.content {
		height: 100%;
		display: flex;

		.left {
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;

			view {
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
		}

		.active {
			background-color: $shop-color;
			color: #fff;
		}
		.right {
			display: flex;
			width: 520rpx;
			height: 100%;
			margin: 10px auto;
			image{
				margin-top: 10px;
				border-radius: 50px;
			}
			text {
				line-height: 50rpx;
				font-size: 25rpx;
				color: $shop-color;
			}
		}
	}
</style>
