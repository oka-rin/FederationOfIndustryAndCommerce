<template>
	<view class="page">
		<view class="login-ico">
			<image src="../../static/test/gs03.jpg" mode="widthFix" style="width: 80px;border-radius:50%"></image>
		</view>

		<view style="margin-top: 70px;width: 80%;padding: 0px 10%;">
			<form @submit="formSubmit()">
				<view>
					<view style="text-align: center;font-size: 14px;color: #FF0000;margin-bottom: 5px;">{{prompt}}</view>
					<input type="number" v-model="phone" placeholder="请输入手机号" style="height: 60px;" />
					<view class="login-fg"></view>
					<input type="text" v-model="password" password placeholder="请输入登录密码" style="height: 60px;" />
					<view class="login-fg"></view>
				</view>

				<view style="margin-top: 30px;">
					<button type="primary" form-type="submit">登录</button>
				</view>
			</form>

			<view style="flex-direction: row;display: flex;justify-content: space-between;margin-top: 15px;">
				<navigator url="../registered/register">
					<view style="font-size: 16px;color: #3399FF;">注册新账号</view>
				</navigator>
				<view style="font-size: 16px;color: #3F536E;">忘记密码?</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	var _this, serverUrl, serverUrlEas;
	import common from '../../common/url.js';
	import crypto from 'crypto';
	export default {
		data() {
			return {
				prompt: '',
				phone: '',
				password: '',
				compatibleParam: '',
				systemCode: 'XITONGKUANGJIA', //系统编码
				systemKey: '23222618775654506551539765740421', //系统密钥
				resourceDirectoryCode: 'GXWSGSL', //应用资源编码
				terminalType: 'mobile', //支持的终端类型：pad、mobile、pc
				systemType: 'android', //系统类型
				enterpriseCode: 'GUANGXIGONGSHANGLIAN', //企业编码
			}
		},
		onLoad: function() {
			_this = this;
			serverUrl = common.serverUrl;
			serverUrlEas = common.serverUrlEas;
			// console.log(serverUrl);
			// try {
			// 	const value = uni.getStorageSync('storage_key');
			// 	if (value) {
			// 		console.log(value);
			// 	}
			// } catch (e) {
			// 	// error
			// }
		},
		methods: {
			formSubmit: function(e) {
				if (this.phone.trim() == null || this.phone.trim() == '') {
					this.prompt = '手机不能为空'
				} else if (this.phone.length != 11) {
					this.prompt = '手机的长度需要为11位'
				} else if (this.password.trim() == null || this.password.trim() == '') {
					this.prompt = '密码不能为空'
				} else {
					uni.showLoading({
						title: '登录中'
					});
					// this.prompt = '登录成功';
					var pw_m5 = this.password;
					this.setSha(pw_m5);
					this.setMd5(pw_m5);
					uni.request({
						url: 'https://test-yi012.weilian.cn/uic/client/login/loginByAccountAndEnterpriseCode',
						method: 'POST',
						data: {
							account: this.phone,
							systemCode: this.systemCode,
							systemKey: this.systemKey,
							password: this.password,
							compatibleParam: this.password,
							resourceDirectoryCode: this.resourceDirectoryCode,
							terminalType: this.terminalType,
							systemType: this.systemType,
							enterpriseCode: this.enterpriseCode
						},
						success: function(res) {
							console.log(res);
							// 本地缓存，获取全局变量
							const data = res.data.data;
							const prompt = res.data;
							if (data == null || data == "") {
								console.log(prompt.message)
								_this.prompt = prompt.message;
								uni.hideLoading();
							} else {
								var sid = data['sessionId'];
								uni.request({
									url: 'https://test-yi012.weilian.cn/crm/businessCenter/loginNew',
									method: 'GET',
									data: {
										sessionId: sid
									},
									success: function(res) {
										console.log(res.data.data[0]);
										_this.login(data);
										uni.switchTab({
											url: '../index/index'
										});
										uni.hideLoading();
									}
								});
							
							}
						},
						fail: function() {
							uni.hideLoading();
						}
					});
				}
			},

			// sha256加密
			setSha(e) {
				let sha256 = require("common/js-sha256").sha256 //这里用的是require方法，所以没用import
				var pas_sha = e;
				// 循环加密一千次
				for (var i = 0; i < 1000; i++) {
					pas_sha = sha256(pas_sha);
				}
				this.password = pas_sha;
				//要加密的密码
				console.log(this.password) //这就是你加密之后的密码
			},
			// md5加密
			setMd5(e) {
				var md5 = crypto.createHash("md5")
				md5.update(e) //this.pw2这是你要加密的密码
				this.compatibleParam = md5.digest('hex') //this.pw这就是你加密完的密码，这个往后台传就行了
				console.log(this.compatibleParam)
			},
			 ...mapMutations(['login'])

		}
	}
</script>

<style>
	@import url("login.css");
</style>
