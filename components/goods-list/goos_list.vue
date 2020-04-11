<template>
	<view class="goods">
		<view class="goods_list">
			<view @click="goGoodsDetail(item.id)" class="goods_item" v-for="item in goods" :key="item.id" >
				<image :src="item.img_url"></image>
				<view class="price">
					<text>￥{{item.sell_price}}</text>
					<text>￥{{item.market_price}}</text>
				</view>
				<view class="name">
					{{item.title}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props:['goods'],
		methods:{
			goGoodsDetail(id){
				this.$emit('itemClick',id)
			}
		}
	}
</script>

<style lang="scss">
	.goods_list {
			// 内边距(上下，左右)
			padding: 0 15rpx;
			// 弹性布局
			display: flex;
			// 让弹性盒元素在必要的时候换行
			flex-wrap: wrap;
			// 在弹性盒对象的元素中的各项周围留有空白（两边对齐，中间）
			justify-content: space-between;
			.goods_item {
				background: #fff;
				width: 355rpx;
				margin: 10rpx 0;
				padding: 15rpx;
				// 规定两个并排的带边框的框
				box-sizing: border-box;
				image{
					width: 80%;
					height: 150px;
					// 块级元素
					display: block;
					margin: auto;
				}
				.price{
					color: $shop-color;
					font-size: 36rpx;
					margin: 20rpx 0 5rpx 0;
					// text标签下第二个子标签
					text:nth-child(2){
						color: #ccc;
						font-size: 28rpx;
						margin-left: 17rpx;
						// 穿过文本下的一条线
						text-decoration: line-through;
					}
				}
				
				.name {
					font-size: 28rpx;
					// 属性设置行间的距离（行高）
					line-height: 50rpx;
					padding-bottom: 15rpx;
					padding-top: 10rpx;
				}
			}
		}
		.goods {
			background-color: #eee;
		}
</style>
