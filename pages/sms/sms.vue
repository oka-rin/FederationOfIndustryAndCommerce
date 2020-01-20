<template>
	<view class="page">
		<view class="sms-block">
			<view  v-for="(smsItem,index) in smsList" :key="index">
				<view style="height: 80upx;text-align: center;line-height: 80upx;font-size: 14px;">{{smsItem.inputdate}}</view>
				<view class="sms-item">
					<view>26未收信人：</view>
					<view class="flex-row" style="width: 100%;">
						<view class="flex-row" style="width: 100%;flex-wrap: wrap;">
							<view class="person-tx" v-for="(person,personIdenx) in smsItem.sendperson" :key="personIdenx">
								<view style="margin-right: 20upx;s">{{person.person}}</view>
							</view>

						</view>
						<image src="../../static/svn/go-tow.svg" style="width: 20px;height: 20px;"></image>
					</view>

					<view class="sms-fg"></view>

					<view style="color: #000000;font-size: 16px;">{{smsItem.content}}</view>
					<view style="display: flex;flex-direction: row;justify-content: flex-end;">
						<view class="sms-btn">再发一条</view>
					</view>


				</view>
			</view>
			<view class="sms-bottom">
				<view class="sms-bottom-btn">新群群发</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				smsList: [{
						inputdate: '2019/09/01 14:00',
						sendperson: [{
								person: '小黄'
							},
							{
								person: '小兰'
							},
							{
								person: '小兵'
							},
							{
								person: '小率'
							},
							{
								person: '小加'
							},
							{
								person: '小都'
							},
							{
								person: '小到'
							},
							{
								person: '小都'
							},
							{
								person: '小到'
							}
						],
						content: '2019年五一放假通知，放假时间为5月1日至5月4日。4月28日（星期日）、5月5日（星期日）上班。'
					},
					{
						inputdate: '2019/12/22 19:30',
						sendperson: [{
								person: '小零'
							},
							{
								person: '小都'
							},
							{
								person: '小到'
							}
						],
						content: '2019年五一放假通知，放假时间为5月1日至5月4日。4月28日（星期日）、5月5日（星期日）上班。'
					}
				]
			}
		},
		methods: {

		}
	}
</script>

<style>
	.sms-block {
		padding: 0 3%;
		width: 94%;
	}

	.sms-item {
		background-color: #FFFFFF;
		border-radius: 8px;
		padding: 3%;
		width: 94%;
		font-size: 14px;
		color: #555555;
	}

	.person-tx {
		margin-right: 5upx;
		/* 控制只显示两行 */
	}

	.sms-fg {
		width: 100%;
		height: 1upx;
		background-color: #EEEEED;
		margin-top: 20px;
		margin-bottom: 15px;
	}

	.sms-btn {
		border-radius: 20px;
		padding: 10upx 20upx;
		background-color: #EEEEED;
		justify-content: space-between;
	}
	
	.sms-bottom{
		position:fixed;
		bottom: 0;
		width: 100%;
		flex-direction: row;
		display:flex;
		align-items: center;
		justify-content: center;
		height: 60px;
	}
	
	.sms-bottom-btn{
		color: #FFFFFF;
		background-color: #007AFF;
		border-radius: 20px;
		height: 34px;
		line-height: 34px;
		font-size: 18px;
		padding: 8upx 80px;
	}
</style>
