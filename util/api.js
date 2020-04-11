// 全局注册请求方法
const BASE_URL = 'http://121.199.26.217:8082/'
export const myRequest = (option) => {
	return new Promise((resole, reject) => {
		uni.request({
			url: BASE_URL + option.url,
			data: option.data ? option.data : {},
			method: option.method ? option.method : 'GET',
			success: (res) => {
				if (res.data.status !== 0) {
					return uni.showToast({
						title: '获取接口信息失败',
						icon: 'none'
					})
				}
				uni.showToast({
					title: '获取接口信息成功',
					icon: 'success'
				})
				resole(res)
			},
			fail: (res) => {
				return uni.showToast({
					title: '请求接口失败',
					icon: 'none'
				})
				reject(res)
			}
		})
	})
}
