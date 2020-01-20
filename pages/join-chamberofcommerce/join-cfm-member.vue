<template>
	<view class="page">
		<view style="width:94%;padding:3% 3% 0 3%;">
			<view style="position:relative;" class="carousel">
				<!-- 整体背景图 -->
				<image src="../../static/test/gs05.jpg" class="carousel" style="border-radius: 10px;"></image>
				<view class="lunbo-column" style="border-radius: 10px;">
					<text style="height: 100%"></text>
					　　　　<view class="cfm-row">
						<view style="height: 100%;width: 60px;flex-shrink: 0;display: flex;align-items: center;  ">
							<image src="../../static/test/gs01.jpg" mode="widthFix" class="cfm-img">
							</image>
						</view>

						<view style="display: flex;flex-direction: column;width: 100%;">
							<view class="cfm-title">良庆区商会</view>
							<view class="cfm-description">成员106人/建会2018年/南宁</view>
						</view>

						<view style="height: 100%; width: 60px;flex-shrink: 0;display: flex;align-items: flex-end;">
							<navigator url="chamberofcommerce-details">
								<view class="cfm-button-enterprise">更换商会</view>
							</navigator>
						</view>

					</view>
				</view>
			</view>
			<view style="height: 40px;line-height: 40px;width: 100%;font-size: 18px;">身份验证</view>
		</view>

		<view class="member-block">
			<view class="member-row">
				<view class="cfm-enterprise-tx">真实姓名</view>
				<view class="cfm-enterprise-input" >{{truename}}</view>
				<view class="member-button">企业会员</view>
			</view>
			<view class="cfm-enterprise-fg" />
			<view class="member-row">
				<view class="cfm-enterprise-tx">手机号</view>
				<view class="cfm-enterprise-input">{{phone}}</view>
			</view>
		</view>

		<view style="width: 94%;padding: 3%;height: 90px;margin-top: 12px;background-color: #FFFFFF;">
			<textarea type="text" placeholder="备注/个人简介" auto-height style="font-size: 15px;color: #999999;" />
		</view>
		<view style="width: 97%;background-color: #eeeeed;height: 40px;line-height: 40px;color: #999999;font-size: 16px;padding-left: 3%;">
			为了更快通过审核，请说明你的身份
		</view>
		
		<view class="cfm-bottom-join">
			<view class="cfm-details-button">完成</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				truename:'刘嘉宁',
				phone:'15707774300'
			}
		},
		methods: {

		}
	}
</script>

<style>
	@import url("cfm.css");

	.cfm-button-enterprise {
		background-color: #007AFF;
		border-radius: 20px;
		width: 65px;
		height: 25px;
		color: #FFFFFF;
		font-size: 12px;
		text-align: center;
		margin-bottom: 13px;
		line-height: 25px;
	}

	.member-block {
		width: 94%;
		background-color: #FFFFFF;
		padding: 0px 3%;
	}

	.member-row{
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 60px;
	}
	/* input选择后的颜色 */
	.cfm-enterprise-input {
		font-size: 15px;
		line-height: 50px;
		height: 50px;
		color: #000000;
		font-weight: bold;
		margin-left: 8px;
	}
	

	
	.cfm-enterprise-tx {
		font-size: 15px;
		color: #707070;
	}
	.member-button{
		padding: 0px 6px;
		line-height: 20px;
		font-size: 12px;
		color: #007AFF;
		border-radius: 10px;
		border-width: 1px;
		border-style: solid;
		border-color:#007AFF;
		margin-left: 5px;
	}
	
	.cfm-bottom-join {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 60px;
		width: 100%;
		margin-top: 10px;
		bottom: 0px;
		position: fixed;
	}
	
	.cfm-details-button {
		width: 250px;
		height: 45px;
		background-color: #007AFF;
		line-height: 45px;
		text-align: center;
		color: #FFFFFF;
		border-radius: 30px;
	}
	
	.cfm-enterprise-fg {
		width: 100%;
		height: 1upx;
		background-color: #E6E6E6;
	}
</style>
