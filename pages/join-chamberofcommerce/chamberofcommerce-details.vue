<template>
	<view class="page" >
		<view style="height: 100%;width: 100%;">
		<view style="width: 100%;height: 180px;">
			<image src="../../static/test/gs05.jpg"  style="width: 100%;height: 180px;">
			</image>
		</view>
		<view style="background: #FFFFFF;height: 80px;">
			<view class="cfm-details-row">
				<!-- 图片 -->
				<view style="height: 100%;width: 60px;flex-shrink: 0;display: flex;align-items: center;  " >
					<image src="../../static/test/gs01.jpg" mode="widthFix" class="cfm-img" >
					</image>
				</view>
				
				<view style="display: flex;flex-direction: column;width: 100%;margin-left: 10px;">
					<view class="cfm-details-title" >良庆区工商联</view>
					<view class="cfm-details-description">成员106人/建会2018年/南宁</view>
				</view>
								
				<view class="cfm-details-go" >
						<image src="../../static/icos/ewm-h.svg" mode="widthFix" style="width: 28px;margin-left: 4px;"></image>
						<image src="../../static/icos/go-la.svg" mode="widthFix" style="width: 20px;margin-left: 2px;"></image>
				</view>
				
			</view>
		</view>
		<view style="padding: 5px 12px 0px 12px;">
			<view style="font-size: 18px;">商会简介</view>
			<view style="width: 100%;height: 100%;font-size: 14px;margin-top: 3px;color: #999999;">
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
				简介简介简介简介v简介简介简介简介简介简介简介简介简介简介简介简介简介简介
			</view>
		</view>
		</view>
		
		<view class="cfm-bottom-join" >
			<navigator url="join-chamberofcommerce">
			<view class="cfm-details-button">加入</view>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			
			}
		},
		methods: {
			
		}
	}
</script>

<style>
.cfm-details-row{
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 80px;
	padding: 0 2% 0 2%;
	
}
.cfm-details-title{
	font-size: 18px;
	font-weight: bold;
	color: #000000;
}
.cfm-details-description{
	margin-top: 4px;
	font-size: 14px;
	color: #999999;
}

.cfm-details-go{
	height: 100%; 
	width: 60px;
	flex-shrink: 0;
	display: flex;
	align-items: center;
	flex-direction: row;
}
.cfm-bottom-join{
	display: flex;
	align-items: center;
	justify-content: center;
	height: 60px;
	width: 100%; 
	background-color: #eeeeed;
	bottom: 0px;
	position: fixed;
}
.cfm-details-button{
	width: 200px;
	height: 40px;
	background-color: #007AFF;
	line-height: 40px;
	text-align:center;
	color: #FFFFFF;
	border-radius: 30px;
}

</style>
