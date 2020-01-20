<template>
	<view class="page">
		<view class="me-block">
			<view class="me-row">
				<view class="me-avatar-ico">
					<image v-if="isLogin" src="../../static/test/lunbo01.jpg" style="width: 120upx;height: 120upx;border-radius: 50%;"></image>
					<navigator url="../login/login"><image v-if="isLogin==false" src="../../static/me/img_tou.svg" mode="widthFix" style="width: 100upx;"></image></navigator>
				</view>
				<view v-if="isLogin" style="display: flex;flex-direction: column;margin-left: 20px;width: 100%;">
					<view class="me-name">张明轩</view>
			
					<view class="me-name-details">
						<view style="width: 100%;">盛世电子科技有限公司</view>
						<view style="display: flex;flex-direction: row;width: 50px;">
							<image src="../../static/svn/member.svg" mode="widthFix" class="me-ico"></image>
							<image src="../../static/icos/go-03.svg" mode="widthFix" style="margin-left: 10px;" class="me-ico"></image>
						</view>
					</view>
				</view>
				<navigator url="../login/login" v-if="isLogin==false" style="color: #FFFFFF;font-size: 26px;margin-left: 20px;margin-top: 10px;">未登录</navigator>
			</view>

			<view class="me-block-tow">
				<navigator url="me-enterprise/me-enterprise" class="me-item-column">
					<view class="me-block-three-item" style="background-color:#fd8e20;">
						<image src="../../static/me/ziliao.svg" mode="widthFix" style="width: 29px;">
						</image>
					</view>
					<view class="me-item-tx">我的资料</view>
				</navigator>

				<view style="width: 1upx;background-color: #e6e6e6;height: 70px;"></view>

				<navigator url="../join-chamberofcommerce/more-chamberofcommerce" class="me-item-column">
					<view class="me-block-three-item" style="background-color: #007AFF;">
						<image src="../../static/me/shanghui.svg" mode="widthFix" style="width: 40px;">
						</image>
					</view>
					<view class="me-item-tx">加入的商会</view>
				</navigator>

				<view style="width: 1upx;background-color: #e6e6e6;height: 70px;"></view>

				<navigator url='application/join-application' class="me-item-column">
					<view class="me-block-three-item" style="background-color: #3CC51F;">
						<image src="../../static/me/shenqing.svg" mode="widthFix" style="width: 25px;"></image>
					</view>

					<view class="me-item-tx">入会申请</view>

				</navigator>

			</view>

			<view class="me-block-three" style="margin-top: 145px;">
				<view v-for="(item,index) in list" @click="clickList(index)">
					<view class="me-item-height">
						<view style="width: 100%;display: flex;flex-direction: row;">
							<view style="display: flex;flex-direction: column;justify-content: center;">
								<image :src="item.imgurl" mode="widthFix" style="width: 18px;margin-right: 13px;margin-left: 5px;">
								</image>
							</view>
							<view style="line-height: 50px;font-size: 16px;">{{item.title}}</view>
						</view>
						<image src="../../static/svn/go-tow.svg" style="flex-shrink: 0;width: 20px;height: 20px;margin-top: 15px;"></image>
					</view>
					<view style="height: 1upx;width: 100%;background-color:#e6e6e6;"></view>
				</view>
			</view>

			<view class="me-block-three" style="margin-top:15px;">
				<view v-for="(item,index) in list02" @click="setUp(index)">
					<view class="me-item-height">
						<view style="width: 100%;display: flex;flex-direction: row;">
							<view style="display: flex;flex-direction: column;justify-content: center;">
								<image :src="item.imgurl" mode="widthFix" style="width: 18px;margin-right: 13px;margin-left: 5px;">
								</image>
							</view>
							<view style="line-height: 50px;font-size: 16px;">{{item.title}}</view>
						</view>
						<image src="../../static/svn/go-tow.svg" style="flex-shrink: 0;width: 20px;height: 20px;margin-top: 15px;"></image>
					</view>
					<view style="height: 1upx;width: 100%;background-color: #e6e6e6;"></view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	var _this;
	export default {
		data() {
			return {
				isLogin:true,
				userInfo:{},//用户信息
				list: [{
						imgurl: '../../static/me/me-ico.png',
						title: '问卷调查'
					},
					{
						imgurl: '../../static/me/me-ico02.png',
						title: '法律服务'
					},
					{
						imgurl: '../../static/me/me-ico03.png',
						title: '诉求申请'
					},
					{
						imgurl: '../../static/me/me-ico04.png',
						title: '我的云盘'
					},
					{
						imgurl: '../../static/me/me-ico05.png',
						title: '知识问题库'
					}
				],
				list02: [{
						imgurl: '../../static/me/me-ico06.png',
						title: '联系信箱'
					},
					{
						imgurl: '../../static/me/me-ico07.png',
						title: '设置'
					}
				]
			}
		},
		onLoad() {

			_this=this;
			// var userInfo=uni.getStorageSync('login_key');
			// if(userInfo!=null&&userInfo!=''&&userInfo!=undefined){
			// 	_this.isLogin=true;
			// 	_this.userInfo=userInfo;
			// }else{
			// 	_this.isLogin=false;
			// 	_this.userInfo={};
			// }
		},
		methods: {
			clickList: function(index) {
				console.log(_this.isLogin);
				if(_this.isLogin==true){
					switch (index) {
						case 0:
							break;
						case 1:
							break;
						case 2:
							uni.navigateTo({
								url:'appeal/appeal'
							})
							break;
						case 3:
							uni.navigateTo({
								url:'../cloud-disk/cloud-disk'
							})
							break;
						case 4:
							uni.navigateTo({
								url:'../q-a/q-a'
							})
							break;
						default:
							black;
					}
				}else{
					console.log(5);
					uni.showModal({
					    title: '用户未登录',
					    content: '是否前往登录',
						confirmText:'登录',
					    success: function (res) {
					        if (res.confirm) {
					            uni.navigateTo({
					            	url:'../login/login'
					            })
					        } else if (res.cancel) {
					            console.log('用户点击取消');
					        }
					    }
					});
				}
			},
			setUp: function(index) {
				switch (index) {
					case 0:
						console.log(index)
						uni.navigateTo({
							url: 'mailbox/mailbox'
						});
						break;
					case 1:
						console.log(index)
						uni.navigateTo({
							url: 'setup/setup'
						});
						break
					default:
						break;
				}
			}
		}
	}
</script>

<style>
	@import url("me.css");
</style>
