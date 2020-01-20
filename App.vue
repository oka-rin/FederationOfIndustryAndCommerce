<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		onLaunch: function() {
			uni.getStorage({
				key: 'login_key',
				success: (res) => {
					this.login(res.data);
					// uni.request({
					// 	url: 'https://test-yi012.weilian.cn/crm/businessCenter/loginNew',
					// 	method: 'GET',
					// 	header: {
					// 		"Token":res.data.token
					// 	},
					// 	data: {
					// 		sessionId: res.data.sessionId
					// 	},
					// 	success: function(ress) {
					// 		console.log("登录成功"+ress.data.data[0]);
					// 		this.login(res.data);
					// 	}
					// });
					
				},
				fail() {
					
				}
			})
		},
		methods: {
			...mapMutations(['login'])
		}
	}
</script>

<style>
	/*每个页面公共css */
	.page {
		width: 750upx;
		height: 100%;
		background-color: #eeeeed;
		position: absolute
	}
	/* 控制文字一样显示 */
	.a-link {
		display: inline-block;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.flex-row {
		display: flex;
		flex-direction: row;
		align-items: center;
	}
</style>
