<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="5000" :duration="1000">
			<swiper-item v-for="(item, index) in swipers" :key="index">
				<image :src="item.src" mode=""></image>
			</swiper-item>
		</swiper>
		<view class="box1">
			<view class="price">
				<text>${{goodsDesc.sell_price}}</text>
				<text>${{goodsDesc.market_price}}</text>
			</view>
			<view class="title">
				<text>{{goodsDesc.title}}</text>
			</view>
		</view>
		<view class="box2">
			<view>
				<text>货号：{{goodsDesc.goods_no}}</text>
			</view>
			<view>
				<text>库存：{{goodsDesc.stock_quantity}}</text>
			</view>
		</view>
		<view class="box3">
			<text>详情介绍</text>
			<rich-text class="rich" :nodes="dataDesc.content"></rich-text>
		</view>
		<view class="goods-nav">
			<uni-goods-nav :fill="true" :options="options" :button-group="buttonGroup" @click="onClick" @buttonClick="buttonClick"></uni-goods-nav>
		</view>
	</view>
</template>

<script>
	import uniGoodsNav from '@/components/uni-goods-nav/uni-goods-nav.vue'
	export default {
		data() {
			return {
				swipers: [],
				dataDesc: {},
				goodsDesc: {},
				id: 0,
				options: [{
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/kefu.png',
					text: '客服'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/dianpu.png',
					text: '店铺'
				}, {
					icon: 'https://img-cdn-qiniu.dcloud.net.cn/uniapp/uni-ui/goodsnav/carts.png',
					text: '购物车',
					info: '停用'
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			};
		},
		methods: {
			async getData() {
				const res = await this.$myRequest({
					url: 'api/getthumimages/' + this.id
				})
				this.swipers = res.data.message
			},
			async getDataDesc() {
				const res = await this.$myRequest({
					url: 'api/goods/getdesc/' + this.id
				})
				this.dataDesc = res.data.message[0]
			},
			async getGoodsDesc() {
				const res = await this.$myRequest({
					url: 'api/goods/getinfo/' + this.id
				})
				this.goodsDesc = res.data.message[0]
			},
			onClick(e) {
				uni.showToast({
					title: `购物功能暂时停用`,
					icon: 'none'
				})
			},
			buttonClick(e) {
				uni.showToast({
					title: `购物功能暂时停用`,
					icon: 'none'
				})
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getData()
			this.getDataDesc()
			this.getGoodsDesc()
		},
		components: {
			uniGoodsNav
		}
	}
</script>

<style lang="scss">
	.swiper {
		height: 700rpx;

		image {
			height: 100%;
			width: 100%;
		}
	}

	.box1 {
		border-bottom: 2px solid #ccc;

		.price {
			color: $shop-color;
			font-size: 35rpx;
			margin: 20rpx 10rpx;

			text:nth-child(2) {
				margin-left: 20rpx;
				font-size: 20rpx;
				color: #ccc;
				text-decoration: line-through;
			}
		}

		.title {
			font-size: 36rpx;
			line-height: 70rpx;
			padding: 0 10rpx;
		}
	}

	.box2 {
		border-bottom: 2px solid #ccc;

		text {
			line-height: 60rpx;
			font-size: 36rpx;
			padding: 0 10rpx;
		}
	}

	.box3 {
		padding-bottom: 50px;
		text {
			padding: 0 10rpx;
			font-size: 36rpx;
			line-height: 80rpx;
		}

		.rich {
			padding: 0 10rpx;
			font-size: 28rpx;
			line-height: 50rpx;
		}
	}
	.goods-nav{
		position: fixed;
		bottom: 0;
		width: 100%;
	}
</style>
