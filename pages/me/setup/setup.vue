<template>
	<view class="page">
		<view class="me-block-three" style="margin-top: 18px;">

			<view class="me-item-height">
				<view style="width: 100%;display: flex;flex-direction: row;">
	
				<view style="line-height: 50px;font-size: 16px;">修改手机号</view>
				</view>
				<image src="../../../static/svn/go-tow.svg" style="flex-shrink: 0;width: 20px;height: 20px;margin-top: 15px;"></image>
			</view>
			<view style="height: 1upx;width: 100%;background-color:#e6e6e6;"></view>
			
			<view class="me-item-height">
				<view style="width: 100%;display: flex;flex-direction: row;">
				<view style="line-height: 50px;font-size: 16px;">修改密码</view>
				</view>
				<image src="../../../static/svn/go-tow.svg" style="flex-shrink: 0;width: 20px;height: 20px;margin-top: 15px;"></image>
			</view>
			<view style="height: 1upx;width: 100%;background-color:#e6e6e6;"></view>
			
			<view class="me-item-height" style="align-items: center;">
				<view style="width: 100%;display: flex;flex-direction: row;">
				<view style="line-height: 50px;font-size: 16px;">消息提醒</view>
				</view>
				<view style="flex-shrink: 0;80px;justify-content: flex-end;">
					<switch checked="true" color="#1AAD19" @change="clickSwitch" />
				</view>
			</view>
			<view style="height: 1upx;width: 100%;background-color:#e6e6e6;"></view>
			
			<view class="me-item-height" style="align-items: center;">
				<view style="width: 100%;display: flex;flex-direction: row;">
				<view style="line-height: 50px;font-size: 16px;">信息版本</view>
				</view>
				<view style="font-size: 15px;color: #999999; width: 100px;text-align: right;flex-shrink: 0;margin-right: 5px;">V1.0.1</view>
			</view>
		</view>
		
		<view class="me-block-three" style="margin-top: 18px;">
			<view v-for="(item,index) in list" @click="setLogin(index)"> 
			<view class="me-item-height">
				<view style="width: 100%;display: flex;flex-direction: row;">
				
				<view style="line-height: 50px;font-size: 16px;">{{item.title}}</view>
				</view>
				<image src="../../../static/svn/go-tow.svg" style="flex-shrink: 0;width: 20px;height: 20px;margin-top: 15px;"></image>
			</view>
			<view style="height: 1upx;width: 100%;background-color:#e6e6e6;"></view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					{
						title:'切换登录'
					},
					{
						title:'退出账号'
					}
				]
			}
		},
		methods: {
			setLogin:function(index){
				switch (index){
					case 0:
						break;
					case 1:
					uni.navigateTo({
						url:'../../login/login'
					})
						break;
					default:
						break;
				}
			},
			clickSwitch:function(e){
				console.log(e)
			}
			
		}
	}
</script>

<style>
	@import url("../me.css");

</style>
