<template>
	<view class="page">
		<view class="register-ico">
			<image src="../../static/test/gs03.jpg" mode="widthFix" style="width: 80px;border-radius:50%"></image>
		</view>

		<view style="margin-top: 50px;width: 80%;padding: 0px 10%;">


			<form @submit="formSubmit()">
				<view>
					<view style="text-align: center;font-size: 14px;color: #FF0000;margin-bottom: 5px;">{{prompt}}</view>
					<input type="number" placeholder="请输入手机号" v-model="phone" style="height: 60px;" />
					<view class="registerfg"></view>
					<view style="display: flex;flex-direction: row;">
						<input type="number" placeholder="请输入验证码" v-model="verification" style="height: 60px; width: 100%;" />
						<view class="verification" @click="getMsg()">{{msg}}</view>
					</view>
					<view class="registerfg"></view>
					<input type="text" placeholder="请输入登录密码" v-model="password" password style="height: 60px;" />
					<view class="registerfg"></view>
					<input type="text" placeholder="请再次输入登录密码" v-model="netpassword" password style="height: 60px;" />
					<view class="registerfg"></view>
				</view>
				<view style="margin-top: 40px;">
					<button type="primary" form-type="submit">注册</button>
				</view>

			</form>

		</view>

	</view>
</template>

<script>
	import common from '../../common/url.js';
	var _that, serverUrl,timer,textData;
	export default {
		data() {
			return {
				prompt: '',
				phone: '',
				verification: '',
				password: '',
				netpassword: '',
				sendMsgDisabled: false,
				rTime: 60,
				msg: '发送验证码',
				sessionId: '',
				UseReg: {
					username: '老王',
					name: '老王',
					pwd: '',
					pwdcheck: '',
					telephone: '',
					verifyCode: '',
					sessionId: '',
				}
			}
		},
		onLoad: function() {
			_that = this;
			serverUrl = common.serverUrl;

		},
		methods: {
			formSubmit: function(e) {
				if (this.phone.trim() == null || this.phone.trim() == '') {
					this.prompt = '手机不能为空'
				} else if (this.phone.length != 11) {
					this.prompt = '手机的长度需要为11位'
				} else if (this.verification.trim() == null || this.verification.trim() == '') {
					this.prompt = '验证码不能为空'
				} else if (this.password.trim() == null || this.password.trim() == '') {
					this.prompt = '密码不能为空'
				} else if (this.netpassword.trim() != this.password.trim()) {
					this.prompt = '两次密码不一样'
				} else {
					// loading交互
					uni.showLoading({
					    title: '正在注册'
					});
					this.prompt = '注册成功';
					console.log(UseReg);
					uni.request({
						url: serverUrl + 'logonRest/checkVerificationCodeAndRegister',
						method: 'POST',
						data: {
							username: "老王",
							name: "老王",
							pwd: this.password,
							pwdcheck: this.netpassword,
							telephone: this.phone,
							verifyCode: this.verification,
							sessionId: this.sessionId
						},
						success: function(res) {
							console.log(res)
							uni.hideLoading();
							uni.redirectTo({
								url: '../login/login'
							});
						},
						fail: () => {
							uni.hideLoading();
						}
					})
				}
			},
			getMsg: function() {
				// 判断只有当sendMsgDisabled=false才能发送，点击后为true,需要等待60秒才能重新获取验证码
				if (_that.sendMsgDisabled == false) {
					_that.sendMsgDisabled = true;

					if (this.phone.trim() == null || this.phone.trim() == '') {
						this.prompt = '手机不能为空';
						_that.sendMsgDisabled = false;
					} else if (this.phone.length != 11) {
						this.prompt = '手机的长度需要为11位';
						_that.sendMsgDisabled = false;
					} else {
						// 倒计时
							timer = setInterval(function() {
							_that.msg = _that.rTime + ' S';
							if (--_that.rTime <= 0) {
								_that.msg = '发送验证码';
								_that.sendMsgDisabled = false;
								clearInterval(timer);
							}
						}, 1000);
						
						uni.request({
							url: serverUrl + 'logonRest/getUserRegistrationcode?phone=' + _that.phone,
							dataType: 'json',
							success: function(res) {
								console.log(res);
								textData = JSON.parse(res.data.data[0]);
								if(textData.data==null||textData.data==''){
									clearInterval(timer);
									_that.prompt = '手机号码已注册';
									_that.msg='发送验证码';
									_that.rTime=60;
									_that.sendMsgDisabled = false;
								}else{
									console.log(textData);
									_that.sessionId = textData.data.id;
									console.log(_that.sessionId);	
								}
							},
							fail: function() {
								_that.prompt = '手机号不存在';
							}
						});
						
					}

				}
			}

		}
	}
</script>

<style>
	@import url("register.css");
</style>
