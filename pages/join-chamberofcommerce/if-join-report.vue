<template>
	<view class="page">
		<view style="width:94%;padding: 2% 3% 0px 3%;background-color: #eeeeed;">
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

					</view>
				</view>
			</view>
			<view style="height: 40px;line-height: 40px;width: 100%;font-size: 16px;">您是否参加过以下数据的上报？</view>

			<view class="report-block">
				<!-- <checkbox-group @change="checkboxChange">
					<label class="checkbox-list" v-for="item in report_items01" :key="item.value">
						<view>
							<checkbox :value="item.value" :checked="item.checked" />
						</view>
						<view>{{item.name}}</view>
					</label>
				</checkbox-group> -->
				<radio-group @change="radioChange">
					<label class="report-list" v-for="(item, index) in report_items01" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === currentJoin" />
						</view>
						<view class="report-text">{{item.name}}</view>
					</label>
				</radio-group>
			</view>

			<view style="height:40px;line-height: 40px;width: 100%;font-size: 16px;">您是否愿意参与以下数据的上报？</view>

			<view class="report-block">
				<!-- <checkbox-group @change="checkboxChange">
					<label class="checkbox-list" v-for="item in report_items02" :key="item.value">
						<view style="width: 35px;height: 35px;margin-right: 10px;">
							<checkbox :value="item.value" :checked="item.checked" />
						</view>
						<view class="report-text">{{item.name}}</view>
					</label>
				</checkbox-group> -->
				<radio-group @change="radioChange_02">
					<label class="report-list" v-for="(item, index) in report_items02" :key="item.value">
						<view>
							<radio :value="item.value" :checked="index === currentWilling" />
						</view>
						<view class="report-text">{{item.name}}</view>
					</label>
				</radio-group>
			</view>

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
				report_items01: [{
						value: 'A',
						name: '上规模企业数据填报'
					},
					{
						value: 'B',
						name: '企业劳务用工情况上报',
					},
					{
						value: 'C',
						name: '民企经济数据直报'
					},
					{
						value: 'D',
						name: '企业帮扶数据直报'
					},
					{
						value: 'E',
						name: '以上都没有填报'
					}
				],
				report_items02: [{
						value: 'A',
						name: '上规模企业数据填报'
					},
					{
						value: 'B',
						name: '企业劳务用工情况上报',
					},
					{
						value: 'C',
						name: '民企经济数据直报'
					},
					{
						value: 'D',
						name: '企业帮扶数据直报'
					},
					{
						value: 'E',
						name: '以上都没有填报'
					}
				],
				currentJoin: '',
				currentWilling: ''
			}
		},
		methods: {
			// checkboxChange: function(e) {
			// 	var items = this.items,
			// 		values = e.detail.value;
			// 	for (var i = 0; i < items.length; i++) {
			// 		const item = items[i]
			// 		if (values.includes(item.value)) {
			// 			this.$set(item, 'checked', true)
			// 		} else {
			// 			this.$set(item, 'checked', false)
			// 		}
			// 	}
			// }
			radioChange: function(evt) {
				for (let i = 0; i < this.report_items01.length; i++) {
					if (this.report_items01[i].value === evt.target.value) {
						this.currentJoin = i;
						break;
					}
				}
			},
			radioChange_02: function(evt) {
				for (let i = 0; i < this.report_items02.length; i++) {
					if (this.report_items01[i].value === evt.target.value) {
						this.currentWilling = i;
						break;
					}
				}
			}
		}
	}
</script>

<style>
	@import url("cfm.css");

	.report-block {
		width: 94%;
		border-radius: 5px;
		background-color: #FFFFFF;
		margin-top: 3px;
		padding: 5px 3%;
	}

	.report-text {
		height: 20px;
		font-size: 15px;
		color: #333333;
		line-height: 20px;
		margin-top: 2.5px;

	}

	.report-list {
		display: flex;
		flex-direction: row;
		margin-bottom: 5px;
		align-items: center;

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
</style>
