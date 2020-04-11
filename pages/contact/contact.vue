<template>
	<view>
		<image class="img" src="http://www.itcast.cn/2018czydz/images/gywmban.jpg"></image>
		<text class="phone" @click="callPhone">联系我们: 18404311614</text>
		<map class="map" longitude="121.530961" latitude="38.863245" scale="30" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				markers: [{
					longitude: 121.530961,
					latitude: 38.863245,
					iconPath: '../../static/map.jpg',
					width: 30,
					height: 30
				}]
			};
		},
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '18404311614'
				})
			}
		}
	}
</script>

<style lang="scss">
	.img {
		height: 450rpx;
		width: 750rpx;
	}

	.phone {
		padding: 10px 10px;
		border-bottom: 1px solid #eee;
		font-size: 30rpx;
		letter-spacing: 2rpx;
		line-height: 80rpx;
	}

	.map {
		height: 700rpx;
		width: 750rpx;
	}
</style>
