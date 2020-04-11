<template>
	<view class="content">
		<swiper indicator-dots circular :interval="5000" :autoplay="true" :duration="1500">
			<swiper-item v-for="item in swipers" :key="item.id">
				<image :src="item.img"></image>
			</swiper-item>
		</swiper>
		<!-- 导航区域 -->
		<view class="nav">
			<view class="nav_item" v-for="(item, index) in navs" :key="index" @click="navTo(item.path)">
				<view :class="item.icon"></view>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 推荐商品 -->
		<view class="hot_goods">
			<view class="tit">推荐商品</view>
			<goods-list @itemClick="goGoodsDetail" :goods="goods"></goods-list>
		</view>
	</view>
</template>

<script>
	import goods_list from '../../components/goods-list/goos_list.vue'
	export default {
		data() {
			return {
				swipers: [],
				goods: [],
				navs: [
					{
						icon: 'iconfont icon-ziyuan',
						text: '电子商城',
						path: '/pages/shop/shop'
					},
					{
						icon: 'iconfont icon-guanyuwomen',
						text: '联系我们',
						path: '/pages/contact/contact'
					},
					{
						icon: 'iconfont icon-tupian',
						text: '社区图片',
						path: '/pages/pics/pics'
					},
					{
						icon: 'iconfont icon-shipin',
						text: '社区视频',
						path: '/pages/videos/videos'
					}
				]
			}
		},
		components:{
			'goods-list': goods_list
		},
		onLoad() {
			this.getSwipers()
		},
		methods: {
			// 获取轮播图的数据
			async getSwipers() {
				const res = await this.$myRequest({
					url: 'api/getlunbo',
					method: 'GET'
				})
				const res1 = await this.$myRequest({
					url: 'api/getgoods?pageindex=1',
					method: 'GET'
				})
				this.swipers = res.data.message
				this.goods = res1.data.message
				console.log(this.goods)
			},
			navTo(url) {
				uni.navigateTo({
					url
				})
			},
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../goods_item/goods_item?id='+id
				})
			}
		}
	}
</script>

<style lang="scss">
	.content {
		swiper {
			width: 750rpx;
			height: 380rpx;

			image {
				height: 100%;
				width: 100%;
			}
		}

		.nav {
			display: flex;

			.nav_item {
				width: 25%;
				text-align: center;

				.iconfont {
					width: 120rpx;
					height: 120rpx;
					background-color: $shop-color;
					border-radius: 60rpx;
					line-height: 120rpx;
					margin: 10px auto;
					font-size: 50rpx;
					color: #fff;
				}

				.icon-tupian {
					font-size: 40rpx;
				}
			}

			text {
				font-size: 30rpx;
			}
		}
	}
	.hot_goods {
		background-color: #eee;
		margin: 10px auto;
		// 该元素的内容若超出了给定的宽度和高度属性，那么超出的部分将会被隐藏，不占位
		overflow: hidden;
		.tit {
			color: $shop-color;
			text-align: center;
			background-color: #fff;
			line-height: 50px;
			text-align: center;
			// 每个字符之间的空隙
			letter-spacing: 20px;
			margin: 7rpx auto;
		}
	}
	
	
</style>
