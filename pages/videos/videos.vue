<template>
	<view>
		<view class="header">
			<text>社区视频</text>
		</view>
		<video id="myVideo" class="video" :danmu-list="danmuList" enable-danmu danmu-btn controls src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20181126.mp4"></video>
		<view class="uni-list">
			<view class="uni-list-cell">
				<view>
					<view class="uni-label">弹幕内容</view>
				</view>
				<view class="uni-list-cell-db">
					<input v-model="danmuValue" class="uni-input" type="text" placeholder="在此处输入弹幕内容" />
				</view>
			</view>
		</view>
		<view class="uni-btn-v">
			<button @click="sendDanmu" class="page-body-button">发送弹幕</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				danmuList: [{
						text: '第 1s 出现的弹幕',
						color: '#ff0000',
						time: 1
					},
					{
						text: '第 3s 出现的弹幕',
						color: '#ff00ff',
						time: 3
					}
				],
				danmuValue: ''
			};
		},
		onReady: function(res) {
			this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			sendDanmu() {
				this.videoContext.sendDanmu({
					text: this.danmuValue,
					color: this.getRandomColor()
				})
				this.danmuValue = ''
			},
			videoErrorCallback(e) {
				uni.showModal({
					content: e.target.errMsg,
					showCancel: false
				})
			},
			getRandomColor() {
				const rgb = []
				for (let i = 0; i < 3; ++i) {
					let color = Math.floor(Math.random() * 256).toString(16)
					color = color.length == 1 ? '0' + color : color
					rgb.push(color)
				}
				return '#' + rgb.join('')
			}
		}
	}
</script>

<style lang="scss">
	.video {
		width: 700rpx;
		margin: 0 25rpx;
	}

	.uni-list-cell {
		
	}

	.uni-list-cell {
		.uni-label{
			text-align: center;
		}
		display: flex;
		margin: 20rpx 10rpx;
		padding: 20rpx 10rpx;
		border: 1px solid #ccc;
		.uni-list-cell-db{
			margin-left: 30rpx;
			text-align: center;
		}
	}
	.page-body-button{
		padding: 10px 20px;
		width: 700rpx;
		line-height: 60rpx;
		margin-top: 50rpx;
	}
	.header{
		padding: 30px 30px;
		text-align: center;
		text{
			font-size: 30rpx;
			color: #ccc;
			border-bottom: 1px solid #ccc;
		}
	}
</style>
