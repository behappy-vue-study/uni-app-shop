<template>
	<view class="goods">
		<goods-list @itemClick="goGoodsDetail" :goods="goods"></goods-list>
		<text v-if="flag" style="margin: 10rpx 60px;padding: 5rpx;background: #eee;">-----没有再多的商品了-----</text>
	</view>
</template>

<script>
	import goods_list from '../../components/goods-list/goos_list.vue'
	export default {
		data() {
			return {
				goods: [],
				pageIndex: 1,
				flag: false
			};
		},
		components:{
			'goods-list': goods_list
		},
		onLoad() {
			this.getGoods()
		},
		onPullDownRefresh() {
			console.log('下拉刷新')
			this.pageIndex = 1
			this.goods = []
			this.flag = false
			setTimeout(()=>{
				this.getGoods()
				uni.stopPullDownRefresh()
			},1500)
		},
		onReachBottom() {
			if (this.goods.length == this.pageIndex * 10) {
				console.log('触底刷新')
				this.pageIndex++
				this.getGoods()
			}else {
				return this.flag = true
			}
		},
		methods:{
			goGoodsDetail(id){
				uni.navigateTo({
					url:'../goods_item/goods_item?id='+id
				})
			},
			async getGoods() {
				const res = await this.$myRequest({
					url: 'api/getgoods?pageindex='+this.pageIndex,
					method: 'GET'
				})
				this.goods = [...this.goods, ...res.data.message]
			}
		}
	}
</script>

<style lang="scss">

</style>
