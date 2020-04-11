<template>
	<view>
		<view class="top">
			<view class="title">
				{{detail.title}}
			</view>
			<text>发布时间 :{{detail.add_time | formatDate}}</text>
			<text>浏览 :{{detail.click}}</text>
		</view>
		<rich-text :nodes="detail.content"></rich-text>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id: 0,
				detail: {}
			};
		},
		methods: {
			async getDetail() {
				const res = await this.$myRequest({
					url: 'api/getnew/' + this.id
				})
				this.detail = res.data.message[0]
			}
		},
		onLoad(option) {
			this.id = option.id
			this.getDetail()
		}
	}
</script>

<style lang="scss">
	.top {
		// 弹性布局
		display: flex;
		// 让弹性盒元素在必要的时候换行
		flex-wrap: wrap;
		// 在弹性盒对象的元素中的各项周围留有空白（两边对齐，中间）
		justify-content: space-between;
		border: 1px solid $shop-color;
		margin-bottom: 5px;
		.title {
			display: flex;
			text-align: center;
			margin-bottom: 10px;
			font-size: 40rpx;
			font-style: italic;
			letter-spacing: 1px;
		}

		text {
			font-size: 25rpx;
		}
	}
	rich-text{
		font-size: 30rpx;
	}
</style>
